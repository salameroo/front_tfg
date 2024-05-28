'use client';
import { useState } from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../../../../context/context';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <aside id="sidebar-multi-level-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className='text-green-500'>
                            <Link href="/pages/site/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2">
                                <HomeIcon />
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/site/posts" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2">
                                <AddAPhotoIcon />
                                <span>Posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/site/messages" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2">
                                <InboxIcon />
                                <span>Mensajes</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/site/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2">
                                <PeopleIcon />
                                <span>Usuarios</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/site/settings" className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2'>
                                <SettingsIcon />
                                <span>Ajustes</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={toggleTheme} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2 w-full">
                                {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                            </button>
                        </li>
                        <li>
                            <Link href="/pages/site/dashboard" className="fixed bottom-0 mb-2 w-90 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2">
                                <AccountCircleIcon />
                                <span>Perfil</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </nav>
    );
};

export function MobileNavbar() {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className="md:hidden bg-gray-50 dark:bg-gray-800 fixed bottom-0 left-0 w-full z-40 h-20">
            <aside id="sidebar-multi-level-sidebar" className="w-full h-full">
                <div className="flex justify-around items-center h-full">
                    <Link href="/pages/site/home" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <HomeIcon />
                    </Link>
                    <Link href="/pages/site/posts" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <AddAPhotoIcon />
                    </Link>
                    <Link href="/pages/site/messages" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <InboxIcon />
                    </Link>
                    <Link href="/pages/site/users" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <PeopleIcon />
                    </Link>
                    <Link href="/pages/site/settings" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <SettingsIcon />
                    </Link>
                    <button onClick={toggleTheme} className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </button>
                    <Link href="/pages/site/logout" passHref className="flex flex-col items-center justify-center text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                        <LogoutIcon />
                    </Link>
                </div>
            </aside>
        </nav>
    );
}
