'use client';

import { SideBar } from "@/components";

const HomeLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <div className="  w-full flex">
            <div className="hidden lg:flex lg:fixed"><SideBar /></div>
            <div className=" w-full lg:ml-[275px]">
                <div className=" max-w-[1340px] mx-auto flex flex-auto">{children}</div>
            </div>
        </div>
    )
}

export default HomeLayout