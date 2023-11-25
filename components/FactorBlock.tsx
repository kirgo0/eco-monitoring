import Image from 'next/image'
import { Exo } from 'next/font/google'

const exo = Exo({
    subsets: ['latin'],
    variable: '--font-exo',
    display: 'swap'
})

interface FactorBlockProps {
    pathToIcon: string
    altText: string
    tagName: string
    desc: string
    quantity: string
}

const FactorBlock = ({ pathToIcon, altText, tagName, desc, quantity }: FactorBlockProps) => {
    return (
        <div className=' min-h-[210px] bg-white flex flex-col gap-4 p-6 rounded-[20px] border border-[#d3d3d3]'>

            <div className=' flex justify-between items-center'>
                <Image
                    src={pathToIcon}
                    alt={altText}
                    width={55}
                    height={55}
                    quality={100}
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

export default FactorBlock;