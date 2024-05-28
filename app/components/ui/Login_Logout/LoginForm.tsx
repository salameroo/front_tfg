import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import Cookies from 'js-cookie'; // Importamos js-cookie
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Link from "next/link";

type TLoginForm = {
    email: string;
    password: string;
};

const schema: ZodType<TLoginForm> = z.object({
    email: z.string().email({
        message: "Must be a valid email",
    }),
    password: z.string(),
});

export function Form() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TLoginForm>({
        resolver: zodResolver(schema),
    });

    const getCsrfToken = async () => {
        const response = await fetch(`${process.env.LARAVEL}/sanctum/csrf-cookie`, {
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch CSRF token');
        }
    };

    const handleFormSubmit = async (data: TLoginForm) => {
        await getCsrfToken();
        let token = Cookies.get('auth_token');

        if (!token) {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.LARAVEL}/api/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    credentials: 'include',
                });

                const res = await response.json();
                if (response.ok) {
                    Cookies.set('auth_token', res.auth_token, { expires: 7, path: '' });
                    window.location.href = `${process.env.NEXT}/pages/site/dashboard`;
                } else {
                    setErrorMessage("Error: " + (res.message || 'Failed to login.'));
                }
                setLoading(false);
                reset();
            } catch (e) {
                setErrorMessage("An error occurred while processing your request.");
                setLoading(false);
            }
        } else {
            window.location.href = `${process.env.NEXT}/pages/site/dashboard`;
        }
    };

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage("");
            }, 7000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [errorMessage]);

    return (
        <div className="font-sans antialiased bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex justify-center items-center relative">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <EmailIcon className="mr-2 text-gray-400" />
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="Your email address"
                                    {...register("email")}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <LockIcon className="mr-2 text-gray-400" />
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="password"
                                    type="password"
                                    placeholder="Your secure password"
                                    {...register("password")}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>
                        {errorMessage && (
                            <div className="text-red-500 text-xs mt-1">{errorMessage}</div>
                        )}
                        <div className="flex items-center justify-between mt-8">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-full"
                                disabled={loading}
                                type="submit"
                            >
                                {loading ? "Signing In..." : <><SendIcon className="mr-2" />Sign In</>}
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-gray-700">¿No tienes cuenta?</p>
                        <Link
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-full mt-2"
                            href="/pages/register"
                        >
                            <PersonAddIcon className="mr-2" /> Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
