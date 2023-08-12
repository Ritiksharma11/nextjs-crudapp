'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "FAQ",
            href: "/about/faq",
        },
        {
            label: "Posts",
            href: "/posts",
        },
        {
            label:"Crud",
            href:"/crud",
        }
    ]
    return (
        <div>
            <ul className="flex gap-10 justify-center items-center border-y-2 border-black mb-4 py-2 ">
                {
                    navItems.map((item, index) => (
                        <li key={index} >
                            <Link href={item.href} className={pathname === `${item.href}` ? 'text-blue-500 font-semibold ' : ''} >{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    )
}

export default Navbar