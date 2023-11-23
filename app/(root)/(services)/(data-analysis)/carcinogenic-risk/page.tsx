'use client';
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Exo } from 'next/font/google'
import { RiArrowDownSLine } from "react-icons/ri";
import { PiMagnifyingGlass } from "react-icons/pi";

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})


const CarcinogenicRiskPage = () => {
    const companies = ['AbobaCredential lshfs fsh ifhs skhfsl jfh', 'Microsoft sucks', 'Abobus', 'Microwave300500', 'Kurwa ', 'Bober123', 'Bibus'];
    const passports = ['2021', '2022', '2015', '2010'];

    return (
        <div className={`w-full flex flex-col gap-6 py-12 px-10`}>
            <div className=' grid grid-rows-[repeat(auto-fill,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
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
                                        items={companies}
                                    />
                                </div>

                                <div className=' flex flex-col md:flex-row items-center md:gap-6'>
                                    <p className=' ml-2 md:ml-0 self-start md:self-auto max-w-[83px] sm:text-base md:text-sm'>Passports</p>
                                    <CustomDropdown
                                        items={passports}
                                    />
                                </div>

                            </div>

                            <div className=' flex flex-col gap-7 max-w-[307px] flex-1'>
                                <div className=' flex flex-col md:flex-row items-center justify-between  '>
                                    <p className=' ml-2 md:ml-0 self-start md:self-auto sm:text-base md:text-sm md:max-w-[83px]'>Substance</p>
                                    <CustomDropdown
                                        items={companies}
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row items-center justify-between '>
                                    <p className='ml-2 md:ml-0 self-start md:self-auto  sm:text-base md:text-sm  md:max-w-[83px]'>Body weight</p>
                                    <CustomDropdown
                                        items={companies}
                                    />
                                </div>
                                <div className=' flex flex-col md:flex-row items-center justify-between '>
                                    <p className='ml-2 md:ml-0 self-start md:self-auto  sm:text-base md:text-sm md:max-w-[83px] '>Outside the building time </p>
                                    <CustomDropdown
                                        items={companies}
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
            {/* <div className=' grid grid-rows-[repeat(auto-fill,350px)] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
                <div className=' bg-white border border-[#d3d3d3] rounded-[20px] p-6 col-span-3 flex flex-col'>
                </div>
                <div className=' bg-white border border-[#d3d3d3] rounded-[20px] p-6 col-span-2 flex flex-col'>
                </div>
            </div> */}
        </div>
    )
}

export default CarcinogenicRiskPage


interface FactorBlockProps {
    pathToIcon: string
    altText: string
    tagName: string
    desc: string
    quantity: string
}

const FactorBlock = ({ pathToIcon, altText, tagName, desc, quantity }: FactorBlockProps) => {
    return (
        <div className=' bg-white flex flex-col gap-4 p-6 rounded-[20px] border border-[#d3d3d3]'>

            <div className=' flex justify-between items-center'>
                <Image
                    src={pathToIcon}
                    alt={altText}
                    width={55}
                    height={55}
                />
                <div className=' font-bold text-4xl tracking-wider'>{tagName}</div>
            </div>

            <div className=' text-sm'>{desc}</div>
            <div className={`flex flex-auto  gap-1 items-end ${exo.className}`}>
                <span className=' block overflow-hidden'>
                    <input
                        className=' text-xl font-light bg-transparent outline-none'
                        type="text"
                        placeholder='- - -'
                    />
                </span>
                <div className=' text-[#7f7f7f]'>{quantity}</div>
            </div>

        </div>
    )
}

interface CustomDropdownProps {
    items: string[]
}

const CustomDropdown = ({ items }: CustomDropdownProps) => {
    const [selected, setSelected] = useState('');
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className=' flex flex-col w-[200px] relative' ref={dropdownRef}>
            <div
                className=' flex items-center justify-between  border border-[#d3d3d3] pl-3 pr-2 py-2 rounded-[8px]'
                onClick={() => setOpen(!open)}
            >
                <div className={` text-lg relative top-[0.1rem] ${!selected && 'text-[#7f7f7f]'}`}>
                    {selected ?
                        selected.length > 25 ? selected.substring(0, 15) + '...' : selected
                        : 'Select item'}
                </div>
                <RiArrowDownSLine size={25} className={` ${open && 'rotate-180'}`} />
            </div>
            <ul className={` bg-white w-[200px] border border-[#d3d3d3] max-h-[243px] overflow-y-auto ${!open ? 'hidden' : 'absolute top-[52px]'} z-10`}>
                <div className='  flex items-center pl-3 pr-3 py-2 text-base text-[#7f7f7f] gap-2 border-b'>
                    <PiMagnifyingGlass size={17} />
                    <input
                        type="text"
                        placeholder='Search'
                        className=' relative top-[0.1rem] outline-none placeholder:text-[#7f7f7f]'
                        onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                        value={inputValue}
                    />
                </div>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`  pl-3 pr-3 py-2 text-base  ${selected.toLowerCase() === item.toLowerCase() ? 'bg-dark bg-opacity-80 text-white' : 'hover:bg-gray-100'} ${item.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                        onClick={() => {
                            if (item.toLocaleLowerCase() !== selected.toLocaleLowerCase()) {
                                setSelected(item)
                                setOpen(!open)
                                setInputValue('')
                            }
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )
}
