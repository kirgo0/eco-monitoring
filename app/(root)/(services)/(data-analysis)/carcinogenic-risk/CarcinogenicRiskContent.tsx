'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Exo } from 'next/font/google'
import { CarcinogenicDataType, PollutionType, passportsWithCompaniesType } from '@/types';
import { CustomDropdown, ErrorToast, FactorBlock, SuccessfulToast } from '@/components';
import { getCalculatedCarcinogenicRisk } from '@/actions/basic-actions/actions';
import { CarcinogenicFactorsSchema } from '@/schemas';
import { toast } from 'react-hot-toast';
import { ZodIssue } from 'zod';
import { bodyTypesArray, bodyTypesNamesArray } from './bodyTypesData';

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})

interface CarcinogenicRiskContentProps {
    pollutions: PollutionType[]
    companyNames: string[]
    passportsWithCompanies: passportsWithCompaniesType[]
}

const CarcinogenicRiskContent = ({ pollutions, companyNames, passportsWithCompanies
}: CarcinogenicRiskContentProps) => {
    const [calculatedCarcinogenicRisk, setCalculatedCarcinogenicRisk] = useState('')

    const [possiblePassports, setPossiblePassports] = useState<string[]>([])
    const [possibleSubstances, setPossibleSubstances] = useState<string[]>([]);

    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedPassport, setSelectedPassport] = useState('');
    const [selectedSubstance, setSelectedSubstance] = useState('');
    const [selectedBodyType, setSelectedBodyType] = useState('');

    const [carcinogenicData, setCarcinogenicData] = useState<CarcinogenicDataType>({
        ca: '',
        ch: '',
        tout: '',
        tin: '',
        vout: '',
        vin: '',
        ef: '350',
        ed: '30',
        bw: '',
        at: '70'
    })

    //finding passports relating to specific company name
    useEffect(() => {
        setPossiblePassports(passportsWithCompanies
            .filter((passport) => passport.company_name === selectedCompany)
            .map(passport => (String(passport.year)))
        )
        setSelectedPassport('');
        setCarcinogenicData({
            ...carcinogenicData,
            ca: '',
            ch: ''
        })
        setSelectedSubstance('')
        setPossibleSubstances([])
    }, [selectedCompany])

    //finding pollutions relating to specific passport (by year) and company name
    useEffect(() => {
        const selectedPassportId = getSelectedPassportId();

        if (selectedPassportId !== undefined) {
            const filteredPollutionsByPassport = getSubstancesByPassportId(selectedPassportId);
            setPossibleSubstances(filteredPollutionsByPassport.map(poll => (String(poll.factor_Name))))
        }
        setSelectedSubstance('')
    }, [selectedPassport])

    //sets default Ca, Ch values when passport changed, also cleares inputs when substance sets to ''
    useEffect(() => {
        const selectedPassportId = getSelectedPassportId();
        if (selectedPassportId !== undefined) {
            const filteredPollutionsByPassport = getSubstancesByPassportId(selectedPassportId);
            const selectedSubstanceByPassport = filteredPollutionsByPassport.find(poll => poll.factor_Name == selectedSubstance)
            const caValue = selectedSubstanceByPassport?.factor_Ca_value;
            const chValue = selectedSubstanceByPassport?.factor_Ch_value;
            setCarcinogenicData({
                ...carcinogenicData,
                ca: caValue !== undefined ? String(caValue) : '',
                ch: chValue !== undefined ? String(chValue) : ''

            })

        }

    }, [selectedSubstance])

    //sets default values depending on body type
    useEffect(() => {
        const bodyType = bodyTypesArray.find(bt => selectedBodyType == bt.type);
        if (bodyType !== undefined) {
            setCarcinogenicData({
                ...carcinogenicData,
                bw: String(bodyType.bw),
                tin: String(bodyType.tin),
                tout: String(bodyType.tout),
                vout: String(bodyType.vout),
                vin: String(bodyType.vin)
            })
        }
    }, [selectedBodyType])

    const handleCarcinogenicFactorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCarcinogenicData({
            ...carcinogenicData,
            [e.target.name]: e.target.value
        })

    }
    const getSelectedPassportId = () => {
        return passportsWithCompanies.find(p => p.company_name == selectedCompany && p.year == selectedPassport)?.id
    }
    const getSubstancesByPassportId = (id: number) => {
        return pollutions.filter((poll) => poll.passport_id == String(id));
    }
    const handleSchemaIssues = (errors: ZodIssue[]) => {
        let errorMessage = '';
        errors.forEach((err) => {
            errorMessage += err.path[0] + ': ' + err.message + '. '
        })
        toast.custom((t) => <ErrorToast t={t} message={errorMessage} />);
    }
    const clientGetCalculatedCarcinogenicRisk = async () => {
        //client-side validation
        const result = CarcinogenicFactorsSchema.safeParse(carcinogenicData);
        if (!result.success) {
            handleSchemaIssues(result.error.issues)
            return;
        }

        //server response + error handling
        const response = await getCalculatedCarcinogenicRisk(result.data);
        if (response && typeof response === 'object' && 'error' in response) {
            toast.custom((t) => <ErrorToast t={t} message={response.error} />);
        } else {
            console.log(response);
            setCalculatedCarcinogenicRisk(
                convertDoubleToString(response)
                // String(response)
                )
            toast.custom((t) => <SuccessfulToast t={t} message='Carcinogenic risk successfuly calculated' />, { duration: 2500 });
        }

    }

    function convertDoubleToString(num: number): string {
        const exponent = Math.floor(Math.log10(Math.abs(num))); // Знаходимо експоненту
      
        // Функція для конвертації цифр у символи степенів
        function convertToSuperscriptDigit(digit: number): string {
          const superscripts = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
          return digit.toString().split('').map((char) => superscripts[parseInt(char)]).join('');
        }
      
        const coefficient = Math.abs(num) / Math.pow(10, exponent); // Коефіцієнт
        const exponentString = exponent !== 0 ? (exponent < 0 ? `10⁻${convertToSuperscriptDigit(Math.abs(exponent))}` : `10${convertToSuperscriptDigit(exponent)}`) : '';
      
        // Повертаємо рядок з коефіцієнтом та 10 у степені експоненти (з використанням символів степенів)
        return `${coefficient.toFixed(5)} * ${exponentString}`;
    }

    const positiveNumberValidation = (inputData: string) => {
        const numericValue = Number(inputData);
        return !isNaN(numericValue) && numericValue > 0;
    }
    const positiveNumberWithUpperLimitValidation = (upperLimit: number) => {
        return (inputData: string) => {
            const numericValue = Number(inputData);
            return !isNaN(numericValue) && numericValue > 0 && numericValue <= upperLimit;
        };
    };
    const resetAllSelectedFields = () => {
        setCarcinogenicData({
            ca: '',
            ch: '',
            tout: '',
            tin: '',
            vout: '',
            vin: '',
            ef: '350',
            ed: '30',
            bw: '',
            at: '70'
        })
        setSelectedCompany('')
        setSelectedBodyType('')
    }



    const abobas = ['Aboba1', 'Aboba2', 'Aboba3']


    return (
        <div className={`w-full flex flex-col gap-6 py-5 sm:py-12 px-4 sm:px-10`}>
            <form action={clientGetCalculatedCarcinogenicRisk}>
                <div className=' grid grid-rows-[repeat(auto-fill,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-5'>
                    <>
                        <FactorBlock
                            pathToIcon='/factor-icons/chemistry.png'
                            altText='chemistry'
                            tagName='Ca'
                            desc='Concentration of the substance in the ambient air'
                            quantity='mg/m³'
                            name='ca'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.ca}
                            validation={positiveNumberValidation}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/enzyme.png'
                            altText='enzyme'
                            tagName='Ch'
                            desc='Substance concentration in the building air'
                            quantity='mg/m³'
                            name='ch'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.ch}
                            validation={positiveNumberValidation}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/back-in-time.png'
                            altText='back-in-time'
                            tagName='Tout'
                            desc='Time spent outside the building'
                            quantity='hours/day'
                            name='tout'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.tout}
                            validation={positiveNumberWithUpperLimitValidation(24)}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/clock.png'
                            altText='clock'
                            tagName='Tin'
                            desc='Time spent inside the building'
                            quantity='hours/day'
                            name='tin'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.tin}
                            validation={positiveNumberWithUpperLimitValidation(24)}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/respiratory.png'
                            altText='respiratory'
                            tagName='Vout'
                            desc='Respiratory rate outside the building'
                            quantity='m³/hour '
                            name='vout'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.vout}
                            validation={positiveNumberValidation}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/facemask.png'
                            altText='facemask'
                            tagName='Vin'
                            desc='Respiratory rate inside the building'
                            quantity='m³/hour'
                            name='vin'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.vin}
                            validation={positiveNumberValidation}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/frequency.png'
                            altText='frequency'
                            tagName='Ef'
                            desc='Frequency of exposure'
                            quantity='days/year'
                            name='ef'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.ef}
                            validation={positiveNumberWithUpperLimitValidation(365)}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/hourglass.png'
                            altText='hourglass'
                            tagName='Ed'
                            desc='Duration of exposure'
                            quantity='years'
                            name='ed'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.ed}
                            validation={positiveNumberWithUpperLimitValidation(365)}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/weight-loss.png'
                            altText='weight-loss'
                            tagName='Bw'
                            desc='Human body weight'
                            quantity='kg'
                            name='bw'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.bw}
                            validation={positiveNumberWithUpperLimitValidation(300)}
                        />
                        <FactorBlock
                            pathToIcon='/factor-icons/period.png'
                            altText='period'
                            tagName='At'
                            desc='Exposure averaging period'
                            quantity='years'
                            name='at'
                            handleChange={handleCarcinogenicFactorsChange}
                            value={carcinogenicData.at}
                            validation={positiveNumberValidation}
                        />
                    </>
                    <div className=' bg-white border border-[#d3d3d3] rounded-[20px] p-6 col-span-full xl:col-span-3 flex flex-col min-h-[320px]'>
                        <div className=' flex flex-col gap-2 md:gap-8'>
                            <div className=' flex items-center justify-center sm:justify-between'>
                                <Image
                                    src='/settings-icon.png'
                                    alt='Setting'
                                    width={50}
                                    height={50}
                                    quality={100}
                                    className='hidden sm:block'
                                />
                                <div className=' relative top-[0.2rem] font-bold text-3xl md:text-4xl tracking-wider'>
                                    DEFAULT VALUES
                                </div>
                            </div>
                            <div className=' flex flex-col md:flex-row items-center md:items-baseline md:justify-between gap-7 md:gap-4  '>

                                <div className=' flex flex-col gap-7'>

                                    <div className=' flex flex-col md:flex-row items-center md:gap-6'>
                                        <p className=' ml-2 md:ml-0 self-start md:self-auto max-w-[83px] sm:text-base md:text-sm'>Company</p>
                                        <CustomDropdown
                                            items={companyNames}
                                            selected={selectedCompany}
                                            setSelected={setSelectedCompany}
                                        />
                                    </div>

                                    <div className=' flex flex-col md:flex-row items-center md:gap-6'>
                                        <p className=' ml-2 md:ml-0 self-start md:self-auto max-w-[83px] sm:text-base md:text-sm'>Passports</p>
                                        <CustomDropdown
                                            items={possiblePassports}
                                            selected={selectedPassport}
                                            setSelected={setSelectedPassport}
                                        />
                                    </div>

                                </div>

                                <div className=' flex flex-col gap-7 max-w-[307px] flex-1'>
                                    <div className=' flex flex-col md:flex-row items-center justify-between  '>
                                        <p className=' ml-2 md:ml-0 self-start md:self-auto sm:text-base md:text-sm md:max-w-[83px]'>Substance</p>
                                        <CustomDropdown
                                            items={possibleSubstances}
                                            selected={selectedSubstance}
                                            setSelected={setSelectedSubstance}
                                        />
                                    </div>
                                    <div className=' flex flex-col md:flex-row items-center justify-between '>
                                        <p className='ml-2 md:ml-0 self-start md:self-auto  sm:text-base md:text-sm  md:max-w-[83px]'>Body type</p>
                                        <CustomDropdown
                                            items={bodyTypesNamesArray}
                                            selected={selectedBodyType}
                                            setSelected={setSelectedBodyType}
                                        />
                                    </div>
                                    <div className=' flex flex-auto justify-end'>
                                        <button
                                            className={` border-[2px] border-black px-6 py-2 text-xl rounded-[10px] hover:bg-slate-200 ${exo.className}`}
                                            onClick={resetAllSelectedFields}
                                            type='reset'
                                        >
                                            RESET
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className=' bg-white border border-[#d3d3d3] rounded-[20px] p-6 col-span-full xl:col-span-2 flex flex-col min-h-[320px]'>
                        <div className=' flex flex-col gap-5 md:gap-8 flex-auto '>
                            <div className=' flex items-center justify-between'>
                                <Image
                                    src='/calculator-icon.png'
                                    alt='Setting'
                                    width={43}
                                    height={43}
                                    quality={100}
                                />
                                <div className=' relative top-[0.2rem] font-bold text-3xl md:text-4xl tracking-wider border border-[#d3d3d3] bg-primary rounded-[10px] px-3 pb-[0.1rem] pt-[0.3rem]'>LADD</div>
                            </div>
                            <div className=' flex flex-col gap-8 flex-auto'>
                                <p className=' text-sm'>The average daily dose of exposure to a substance for the city' population</p>
                                <div className=' flex gap-2 items-center'>
                                    <p className={`text-xl font-light break-words ${exo.className}`}>{calculatedCarcinogenicRisk}</p>
                                    <div className={` text-[#7f7f7f] ${calculatedCarcinogenicRisk === '' ? 'hidden' : 'block'}`}>mg/kg-day</div>
                                </div>
                                <div className=' flex flex-auto items-end'>
                                    <button
                                        className={` border-[2px] border-black px-4 py-2 text-xl rounded-[10px] hover:bg-slate-200 ${exo.className}`}
                                        type='submit'
                                    >
                                        CALCULATE
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CarcinogenicRiskContent
