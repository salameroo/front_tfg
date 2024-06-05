import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        // Obtener la preferencia de tema de la cookie al cargar la página
        const savedTheme = Cookies.get('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        Cookies.set('theme', newTheme, { expires: 7 }); // Guardar la preferencia de tema en una cookie por 7 días

        // Actualizar la clase del documento HTML
        document.documentElement.classList.remove(theme === 'dark' ? 'dark' : 'light');
        document.documentElement.classList.add(newTheme);
    };

    return (
        <div>
            <button onClick={toggleTheme} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group space-x-2 w-full">
                {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>
        </div>
    );
};

export default ThemeToggle;
