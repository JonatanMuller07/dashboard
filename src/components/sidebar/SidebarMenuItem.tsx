'use client';
import { JSX } from "react";
import Link from "next/link";
import style from './SidebarMenuItem.module.css';
import { usePathname } from "next/navigation";

interface SidebarMenuItemProps {
    path: string,
    icon: JSX.Element,
    title: string,
    subTitle: string
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: SidebarMenuItemProps) => {

    const currentPath = usePathname();

    return (
        <Link href={path}
            className={`
                ${(currentPath === path) && style['active-link']}
                w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150`}
        >
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    )
}