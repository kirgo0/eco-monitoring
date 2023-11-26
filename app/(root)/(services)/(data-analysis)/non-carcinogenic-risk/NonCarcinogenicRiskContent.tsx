'use client';
import { useState } from 'react'
import Image from 'next/image'
import { Exo } from 'next/font/google'
import { CustomDropdown, FactorBlock } from '@/components';

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})

const NonCarcinogenicRiskContent = () => {
    const [diseases, setDiseases] = useState<string[]>(['Respiratory organs', 'CNS', 'Kidneys', 'Cardio'])
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedPassport, setSelectedPassport] = useState('');
    const [selectedSubstance, setSelectedSubstance] = useState('');
    const [selectedRFCSubstance, setSelectedRFCSubstance] = useState('');


    return (
        <div className=" w-full flex flex-col gap-6 py-12 px-10">
            <div className=' grid grid-rows-[repeat(auto-fill,minmax(210px,auto_1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
                <div className=' flex flex-col gap-8 bg-white border border-[#d3d3d3] rounded-[20px] p-6 row-span-2 sm:col-span-2 order-1'>
                    <div className=' flex items-center justify-center sm:justify-between'>
                        <Image
                            src='/settings-icon.png'
                            alt='Setting'
                            width={50}
                            height={50}
                            className='hidden sm:block'
                        />
                        <div className=' relative top-[0.2rem] font-bold text-3xl md:text-4xl tracking-wider text-center sm:text-baseline'>
                            DEFAULT VALUES
                        </div>
                    </div>
                    <div className=' flex flex-col flex-auto gap-4 lg:gap-0  justify-between items-center sm:px-5'>

                        <div className=' flex flex-col sm:flex-row items-center w-full justify-between '>
                            <p className=' max-w-[83px] sm:text-base md:text-sm'>
                                Company
                            </p>
                            <CustomDropdown
                                items={[]}
                                selected={selectedCompany}
                                setSelected={setSelectedCompany}
                            />
                        </div>
                        <div className=' flex flex-col sm:flex-row items-center w-full justify-between '>
                            <p className=' max-w-[83px] sm:text-base md:text-sm'>
                                Passport
                            </p>
                            <CustomDropdown
                                items={[]}
                                selected={selectedPassport}
                                setSelected={setSelectedPassport}
                            />
                        </div>
                        <div className=' flex flex-col sm:flex-row items-center w-full justify-between '>
                            <p className=' max-w-[83px] sm:text-base md:text-sm'>
                                Substance
                            </p>
                            <CustomDropdown
                                items={[]}
                                selected={selectedSubstance}
                                setSelected={setSelectedSubstance}
                            />
                        </div>
                        <div className=' flex flex-col sm:flex-row items-center w-full justify-between '>
                            <p className=' max-w-[83px] sm:text-base md:text-sm'>
                                RfC Substance
                            </p>
                            <CustomDropdown
                                items={[]}
                                selected={selectedRFCSubstance}
                                setSelected={setSelectedRFCSubstance}
                            />
                        </div>

                    </div>
                </div>

                <div className=' order-2'>
                    <FactorBlock
                        pathToIcon='/factor-icons/chemistry.png'
                        altText='chemistry'
                        tagName='C'
                        desc='Concentration of the substance in the ambient air'
                        quantity='mg/m³'
                    />
                </div>

                <div className=' flex flex-col flex-auto gap-5 bg-white border border-[#d3d3d3] rounded-[20px] p-6 row-span-2 order-5 xl:order-3  md:col-span-2 xl:col-span-1'>
                    <div className=' flex items-center justify-between'>
                        <Image
                            src='/calculator-icon.png'
                            alt='Setting'
                            width={43}
                            height={43}
                            quality={100}
                        />
                        <div className=' relative top-[0.2rem] font-bold text-3xl md:text-4xl tracking-wider border border-[#d3d3d3] bg-primary rounded-[10px] px-3 pb-[0.1rem] pt-[0.3rem]'>HQ</div>
                    </div>
                    <p className=' text-sm'>Characterization of the risk of non-carcinogenic effects</p>
                    <p className={`text-xl font-light ${exo.className}`}>0.11</p>
                    <p className=' text-sm'>Critical organs/systems</p>
                    <div className={` ${exo.className} text-red-400 text-lg flex flex-col gap-4 leading-5 max-h-[100px] overflow-y-auto`}>
                        {diseases.map((disease, index) => (
                            <div key={index}>
                                {disease}
                            </div>
                        ))}
                    </div>
                    <div className=' flex flex-auto items-end'>
                        <button className={` border-[2px] border-black px-4 py-2 text-xl rounded-[10px] w-full ${exo.className}`}>
                            CALCULATE
                        </button>
                    </div>
                </div>

                <div className=' flex flex-col gap-7 bg-white border border-[#d3d3d3] rounded-[20px] p-6 row-span-2 order-4'>
                    <div className=' flex items-center justify-between'>
                        <Image
                            src='/factor-icons/bronchus.png'
                            alt='Setting'
                            width={43}
                            height={43}
                            quality={100}
                        />
                        <div className=' relative top-[0.2rem] font-bold text-3xl md:text-4xl tracking-wider border border-[#d3d3d3] bg-primary rounded-[10px] px-3 pb-[0.1rem] pt-[0.3rem]'>OG</div>
                    </div>
                    <div className=' flex justify-center relative'>
                        <Image
                            src='/factor-icons/body/empty.png'
                            alt='body'
                            width={167}
                            height={336}
                            priority
                        />
                        <div className={` absolute -top-2.5 ${diseases.includes('CNS') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/CNS.png'
                                alt='CNS'
                                width={167}
                                height={336}
                            />
                        </div>
                        <div className={` absolute -top-2.5 ${diseases.includes('Respiratory organs') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/respiratory.png'
                                alt='Respiratory'
                                width={167}
                                height={336}
                            />
                        </div>
                        <div className={` absolute -top-2.5 ${diseases.includes('Kidneys') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/kidneys.png'
                                alt='Kidneys'
                                width={167}
                                height={336}
                            />
                        </div>
                        <div className={` absolute -top-2.5 ${diseases.includes('Liver') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/liver.png'
                                alt='Liver'
                                width={167}
                                height={336}
                            />
                        </div>
                        <div className={` absolute -top-2.5 ${diseases.includes('Reproduct') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/reproduct.png'
                                alt='Reproduct'
                                width={167}
                                height={336}
                            />
                        </div>
                        <div className={` absolute -top-2.5 ${diseases.includes('Cardio') ? 'block' : 'hidden'}`}>
                            <Image
                                src='/factor-icons/body/cardio.png'
                                alt='Cardio'
                                width={167}
                                height={336}
                            />
                        </div>
                    </div>
                </div>

                <div className=' order-3 xl:order-5'>
                    <FactorBlock
                        pathToIcon='/factor-icons/hourglass (1).png'
                        altText='Time'
                        tagName='RfC'
                        desc='Daily exposure to a chemical over a lifetime'
                        quantity='mg/m³'
                    />
                </div>

            </div>
        </div>
    )
}

export default NonCarcinogenicRiskContent