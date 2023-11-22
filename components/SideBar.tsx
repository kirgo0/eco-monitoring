import Link from 'next/link'
import { RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from 'next/navigation'
import Image from 'next/image'


const SideBar = () => {
    const pathname = usePathname();
    const inactiveLinkStyles = ' flex justify-between items-center';
    const activeLinkStyles = ' ' + ' ' + inactiveLinkStyles;


    return (
        <div className='  flex flex-col bg-white h-screen py-8 pl-7 pr-5 w-[275px]'>

            <div className=' flex gap-3 items-center justify-center mb-12 text-2xl '>
                <Image
                    src='/header-icons/data-analysis-header.png'
                    alt='Data analysis'
                    width={30}
                    height={30}
                />
                <div>Data analysis</div>
            </div>
            <div className=' flex flex-col gap-8 text-lg'>
                <Link href={'/carcinogenic-risk'} className={pathname === '/carcinogenic-risk' ? activeLinkStyles : inactiveLinkStyles}>
                    <div className='border-b-2 border-[#4e7a54]'>Carcinogenic</div>
                    <RiArrowDownSLine size={27} className={' -rotate-90 text-[#4e7a54] rounded-full bg-primary'} />
                </Link>
                <Link href={'/non-carcinogenic-risk'} className={pathname === '/non-carcinogenic-risk' ? activeLinkStyles : inactiveLinkStyles}>
                    <div>Non-carcinogenic</div>
                    <RiArrowDownSLine size={27} className={' -rotate-90'} />
                </Link>
                <Link href={'/total-non-carcinogenic-risk'} className={pathname === '/total-non-carcinogenic-risk' ? activeLinkStyles : inactiveLinkStyles}>
                    <div>Total non-carcinogenic</div>
                    <RiArrowDownSLine size={27} className={' -rotate-90'} />
                </Link>
            </div>

        </div>
    )
}

export default SideBar