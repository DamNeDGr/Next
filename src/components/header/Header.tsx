'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

function Header() {

    const path = usePathname();

    const MenuList = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/posts',
            label: 'Posts',
        }
    ]


    return (
        <div className="flex justify-center items-center " style={{height: '60px'}}>
            <nav className="bg-gray-600/30 px-5 py-3 rounded-2xl">
                <ul className="flex uppercase gap-5">
                    {MenuList.map((menu) => {
                        const active = path === menu.href;
                        return (
                            <li key={menu.href}>
                                <Link
                                    style={{color: active ? 'blue' : ''}}
                                    className="text-xl hover:text-blue-400 hover:bg-gray-600  hover:p-2 hover:rounded-3xl duration-300"
                                    href={menu.href}
                                >
                                    {menu.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}

export default Header;