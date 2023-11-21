import React from 'react'
import Image from 'next/image'
import { Exo } from 'next/font/google'

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})


const CarcinogenicRiskPage = () => {
    return (
        <div className={`w-full py-12 px-10`}>
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
                <div className=' font-bold text-4xl'>{tagName}</div>
            </div>

            <div className=' text-sm'>{desc}</div>
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
// ³
