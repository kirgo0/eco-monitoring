'use client';

import { SideBar } from "@/components";

const HomeLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    return (
        <div className="  w-full flex">
            <div className="hidden md:flex"><SideBar /></div>
            <div className=" max-w-[1340px] mx-auto flex flex-auto">{children}</div>
        </div>
    )
}

export default HomeLayout