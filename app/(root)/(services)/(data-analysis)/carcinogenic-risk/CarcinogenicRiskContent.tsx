'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Exo } from 'next/font/google'
import { CompanyType, PassportType, passportsWithCompaniesType } from '@/types';
import { CustomDropdown, FactorBlock } from '@/components';

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})

interface CarcinogenicRiskContentProps {
    companies: CompanyType[]
    passports: PassportType[]
    companyNames: string[]
    passportsWithCompanies: passportsWithCompaniesType[]
}

const CarcinogenicRiskContent = ({ companies, passports, companyNames, passportsWithCompanies }: CarcinogenicRiskContentProps) => {
    const [possiblePassports, setPossiblePassports] = useState<string[]>([])
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedPassport, setSelectedPassport] = useState('');
    const [selectedSubstance, setSelectedSubstance] = useState('');
    const [selectedBodyWeight, setSelectedBodyWeight] = useState('');
    const [selectedTimeOutside, setSelectedTimeOutside] = useState('');


    useEffect(() => {
        setPossiblePassports(passportsWithCompanies
            .filter((passport) => passport.company_name === selectedCompany)
            .map(passport => (String(passport.year)))
        )
        setSelectedPassport('');


    }, [selectedCompany])
    const abobas = ['Aboba1', 'Aboba2', 'Aboba3']


    return (
        <div className={`w-full flex flex-col gap-6 py-5 sm:py-12 px-4 sm:px-10`}>
            <div className=' grid grid-rows-[repeat(auto-fill,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  gap-5'>
                <FactorBlock
                    pathToIcon='/factor-icons/chemistry.png'
                    altText='chemistry'
                    tagName='Ca'
                    desc='Concentration of the substance in the ambient air'
                    quantity='mg/m³'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/enzyme.png'
                    altText='enzyme'
                    tagName='Ch'
                    desc='Substance concentration in the building air'
                    quantity='mg/m³'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/back-in-time.png'
                    altText='back-in-time'
                    tagName='Tout'
                    desc='Time spent outside the building'
                    quantity='hours/day'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/clock.png'
                    altText='clock'
                    tagName='Tin'
                    desc='Time spent inside the building'
                    quantity='hours/day'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/respiratory.png'
                    altText='respiratory'
                    tagName='Vout'
                    desc='Respiratory rate outside the building'
                    quantity='m³/hour '
                />
                <FactorBlock
                    pathToIcon='/factor-icons/facemask.png'
                    altText='facemask'
                    tagName='Vin'
                    desc='Respiratory rate inside the building'
                    quantity='m³/hour'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/frequency.png'
                    altText='frequency'
                    tagName='Ef'
                    desc='Frequency of exposure'
                    quantity='days/year'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/hourglass.png'
                    altText='hourglass'
                    tagName='Ed'
                    desc='Duration of exposure'
                    quantity='years'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/weight-loss.png'
                    altText='weight-loss'
                    tagName='Bw'
                    desc='Human body weight'
                    quantity='kg'
                />
                <FactorBlock
                    pathToIcon='/factor-icons/period.png'
                    altText='period'
                    tagName='At'
                    desc='Exposure averaging period'
                    quantity='years'
                />
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
                                        items={abobas}
                                        selected={selectedSubstance}
                                        setSelected={setSelectedSubstance}
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row items-center justify-between '>
                                    <p className='ml-2 md:ml-0 self-start md:self-auto  sm:text-base md:text-sm  md:max-w-[83px]'>Body weight</p>
                                    <CustomDropdown
                                        items={abobas}
                                        selected={selectedBodyWeight}
                                        setSelected={setSelectedBodyWeight}
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row items-center justify-between '>
                                    <p className='ml-2 md:ml-0 self-start md:self-auto  sm:text-base md:text-sm md:max-w-[83px] '>Outside the building time </p>
                                    <CustomDropdown
                                        items={abobas}
                                        selected={selectedTimeOutside}
                                        setSelected={setSelectedTimeOutside}
                                    />
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
                                <p className={`text-xl font-light ${exo.className}`}>0.0000000012</p>
                                <div className=' text-[#7f7f7f]'>mg/kg-day</div>
                            </div>
                            <div className=' flex flex-auto items-end'>
                                <button className={` border-[2px] border-black px-4 py-2 text-xl rounded-[10px] ${exo.className}`}>
                                    CALCULATE
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarcinogenicRiskContent
