
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import Cookies from 'js-cookie'; // Importamos js-cookie
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import SendIcon from '@mui/icons-material/Send';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Link from "next/link"


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


export default function Component() {

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


    const handleFormSubmit = async (data: TLoginForm) => {
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
                    window.location.href = `${process.env.NEXT}/pages/site/settings`;
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
            window.location.href = `${process.env.NEXT}/pages/site/settings`;
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
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Bienvenido a <Link href={"/"}>CarGram</Link></h1>
                    <p className="text-gray-500 dark:text-gray-400">Inicia sesión para continuar</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo electronico
                        </label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <EmailIcon className="mr-2 text-gray-400" />
                            <input
                                className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id="email"
                                type="email"
                                placeholder="Tu correo electronico"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <LockIcon className="mr-2 text-gray-400" />
                            <input
                                className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                id="password"
                                type="password"
                                placeholder="Contraseña segura"
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
                    <button
                        className="w-full bg-black text-white hover:bg-gray-900 py-2 px-4 rounded"
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? "Signing In..." : <><SendIcon className="mr-2" />Iniciar Sesión</>}
                    </button>
                    <div className="flex items-center justify-between">
                        <Link
                            href="#"
                            className="text-sm font-medium text-gray-500 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            prefetch={false}
                        >
                            Contraseña olvidada?
                        </Link>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    Aún sin cuenta?{" "}
                    <Link
                        href="/pages/register"
                        className="font-medium text-gray-900 underline hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                        prefetch={true}
                    >
                        Registrarse
                    </Link>
                </div>
            </div>
        </form>
    )
}
