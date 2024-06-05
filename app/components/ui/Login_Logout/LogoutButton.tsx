'use client';
import Cookies from 'js-cookie';

const Logout = () => {

    const getCsrfToken = async () => {
        const response = await fetch(`${process.env.LARAVEL}/sanctum/csrf-cookie`, {
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch CSRF token');
        }
    };

    const handleLogout = async () => {
        await getCsrfToken();
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
            });
            if (response.ok) {
                Cookies.remove('XSRF-TOKEN');
                Cookies.remove('auth_token');
                Cookies.remove('auth__token');
                Cookies.remove('laravel_session');
                window.location.href = `${process.env.NEXT}/`;
            } else {
                console.error('Failed to logout:', await response.json());
            }
        } catch (error) {
            console.error('An error occurred while logging out:', error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-white"></h1>
            <button
                onClick={handleLogout}
                className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
