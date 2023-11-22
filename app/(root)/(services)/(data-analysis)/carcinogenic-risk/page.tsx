'use client';
import React, { useState } from 'react'
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
    const someElements = ['Hello man', 'Another one', 'Substance Gao', 'Leon wypal mne', 'aboba']

    return (
        <div className={`w-full flex flex-col gap-6 py-12 px-10`}>
            <div className='  bp3:h-[900px] bp2:h-[670px] bp1:h-[440px] overflow-hidden'>
                <div className=' grid grid-rows-[repeat(10,minmax(210px,1fr))] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
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
                </div>
            </div>
            <div className=' border-red-400 border-4 bg-white h-[400px] p-10'>
                <CustomDropdown
                    items={someElements}
                />
                aaaaaa
            </div>
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
        <div className=' bg-white flex flex-col gap-3 px-6 py-5 rounded-[20px] border border-[#d3d3d3]'>

            <div className=' flex justify-between items-center'>
                <Image
                    src={pathToIcon}
                    alt={altText}
                    width={55}
                    height={55}
                />
                <div className=' font-bold text-4xl'>{tagName}</div>
            </div>

            <div className=' text-[0.83rem]'>{desc}</div>
            <div className={`flex flex-auto  gap-1 items-end ${exo.className}`}>
                <span className=' block overflow-hidden'>
                    <input
                        className=' text-xl font-light bg-transparent outline-none'
                        type="text"
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

    return (
        <div className=' flex flex-col w-[220px] relative'>
            <div
                className=' flex items-center justify-between  border border-[#d3d3d3] pl-3 pr-2 py-2 rounded-[8px]'
                onClick={() => setOpen(!open)}
            >
                <div className={` text-lg relative top-[0.1rem] ${!selected && 'text-[#7f7f7f]'}`}>
                    {selected ?
                        selected.length > 25 ? selected.substring(0, 15) + '...' : selected
                        : 'Select substance'}
                </div>
                <RiArrowDownSLine size={25} className={` ${open && 'rotate-180'}`} />
            </div>
            <ul className={` bg-white w-[220px] border border-[#d3d3d3] max-h-[243px] overflow-y-auto ${!open ? 'hidden' : 'absolute top-[52px]'}`}>
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
