'use client';
import { Navbar } from '@/components'
import { useState } from 'react'

const HomeLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <div>
            <Navbar
                menu={menu}
                handleMenu={handleMenu} />
            <div className={!menu ? "flex flex-col" : "hidden"}>{children}</div>
        </div>
    )
}

export default HomeLayout