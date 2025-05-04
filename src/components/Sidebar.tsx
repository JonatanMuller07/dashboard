import Image from "next/image";
import { MdCatchingPokemon } from "react-icons/md";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={40} />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={40} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <MdCatchingPokemon size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación estática'
    }
]

export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    <span className="text-blue-500">Jonh</span>
                    <span>dash.</span>
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-15 h-15"
                            src="https://images.unsplash.com/photo-1620336655052-b57986f5a26a"
                            alt="User avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Jonatan Müller
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {menuItems.map(items => (
                    <SidebarMenuItem key={items.path} {...items} />
                ))}
            </div>
        </div>
    )
}