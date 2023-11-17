

const Services = () => {
    const blockStyles = "flex flex-auto flex-col items-center basis-1/4 min-w-[280px] max-w-[320px] h-[70%] bg-primary bg-opacity-80 rounded-2xl py-2 px-3 shadow-[3px_4px_24px_-10px_rgba(66,68,90,1)]"

    return (
        <div className=" w-full">
            <p className=" text-center uppercase text-dark text-2xl mt-5 font-semibold">Our Services and Capabilities</p>

            <div className="max-w-[1240px] mx-auto  py-8 px-8  ">
                <div className="flex items-center justify-center flex-wrap gap-12 h-full">

                    <div className={blockStyles}>
                        <p>Data analysis and reports preparat</p>
                        <div className=" h-52">aboa</div>
                    </div>
                    <div className={blockStyles}>
                        <p>Environmental passports review</p>
                        <div className=" h-52">aboa</div>
                    </div>
                    <div className={blockStyles}>
                        <p>Latest environmental news</p>
                        <div className=" h-52">aboa</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services