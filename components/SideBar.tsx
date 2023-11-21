import Link from 'next/link'
import React from 'react'

const SideBar = () => {


    return (
        <div className=' flex flex-col bg-white h-[100vh] py-8 pl-7 pr-12'>

            <div className=' text-center pb-12 text-2xl'>
                Data analysis
            </div>
            <div className=' flex flex-col gap-8 text-lg'>
                <Link href={'/carcinogenic-risk'}>
                    Carcinogenic risk
                </Link>
                <Link href={'/carcinogenic-risk'}>
                    Non-carcinogenic risk
                </Link>
                <Link href={'/carcinogenic-risk'}>
                    Total non-carcinogenic risk
                </Link>
            </div>

        </div>
    )
}

export default SideBar