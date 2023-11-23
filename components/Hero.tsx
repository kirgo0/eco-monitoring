import Image from 'next/image'

const Hero = () => {
    return (
        <div className=' w-full  text-dark sm:mb-24'>
            <div className=' max-w-[1000px] mx-auto pt-8 '>
                <div className='flex flex-col items-center'>

                    <div>
                        <Image
                            src="/logo-resized.png"
                            alt="background"
                            width={788}
                            height={402}
                            quality={100}
                        />
                    </div>
                    <div className=' flex flex-col justify-center items-center mt-10 gap-4 px-6'>
                        <p className=' text-center font-bold text-2xl lg:text-3xl'>
                            UKRAINIAN ENVIROMENTAL MONITORING
                        </p>

                        <div className=' max-w-[450px]'>
                            <p className='text-center text-md lg:text-lg'>The best source of information and analytics on the state of the environment in Ukraine</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Hero


{/* <div className='pt-[130px] pb-[60px] px-[20px]  md:pt-[150px] md:pb-[80px] md:px-[290px] bg-[url(/hero_bg.png)] bg-no-repeat bg-cover'>
<Image
    src="/logo.png"
    alt="logo"
    width={135}
    height={135}
/>
</div> */}


{/* <div className='flex items-center justify-center w-[41.0416vw] h-[36.9146vh] bg-[url(/hero_bg.png)] bg-no-repeat bg-cover '>
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={135}
                            height={135}
                        />
                    </div> */}

{/* <div className=' relative'>
    <Image
        src="/hero_bg.png"
        alt="background"
        width={788}
        height={402}
    />
</div>
<div className=' absolute top-[270px]'>
    <Image
        src="/logo.png"
        alt="logo"
        width={145}
        height={145}
    />
</div> */}