import Image from 'next/image'

const Hero = () => {
    return (
        <div className='w-full  bg-[url(/world-environment.webp)] bg-cover '>
            <div className='bg-primary bg-opacity-80 py-5 md:py-10 px-5 sm:px-10'>
                <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row'>
                    <div className='flex flex-col md:justify-center  text-center lg:text-left' >
                        <p className=' text-2xl sm:text-3xl md:text-4xl uppercase text-white'><b>Ukrainian</b></p>
                        <p className=' text-2xl sm:text-3xl md:text-4xl uppercase text-dark'><b>Environmental</b></p>
                        <p className=' text-2xl sm:text-3xl md:text-4xl uppercase text-secondary'><b>Monitoring</b></p>
                        <div className=' mt-6 text-lg md:text-xl'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad necessitatibus voluptate porro aliquam nostrum natus numquam. Exercitationem vero laudantium suscipit?
                        </div>
                        <div className='flex sm:hidden md:flex mt-5 text-sm leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam harum omnis, sunt quo recusandae vitae dicta consectetur possimus. Ab neque inventore possimus ut ea. Dolore nisi dolor necessitatibus omnis suscipit consequatur eveniet, repudiandae quidem molestiae ullam, rem natus impedit? Quas quam cupiditate laudantium necessitatibus et qui sapiente
                        </div>

                    </div>
                    <div className='hidden sm:flex items-center justify-center'>
                        <Image
                            src='/env.png'
                            alt="trees"
                            width={2200}
                            height={2200}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
