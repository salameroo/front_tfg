import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import CarIcon from "../ui/CarIcon";

type TRegisterForm = {
    name: string;
    email: string;
    password: string;
    cPassword: string;
    ip: string;
};

const schema: ZodType<TRegisterForm> = z
    .object({
        name: z.string().min(5, { message: "Nombre es obligatorio" }),
        email: z.string().email({
            message: "Debe ser un email válido",
        }),
        password: z
            .string()
            .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
            .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/, {
                message:
                    "La contraseña debe contener al menos un número y un carácter especial",
            }),
        cPassword: z.string(),
        ip: z.string(),
    })
    .refine((data) => data.password === data.cPassword, {
        message: "Las contraseñas no coinciden",
        path: ["cPassword"],
    });

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(false);
    const [err, setErr] = useState(false);
    const message =
        toast && !err
            ? "Tu registro fue exitoso."
            : "Ocurrió un error al procesar tu solicitud.";

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<TRegisterForm>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        // Obtener la IP del usuario
        const fetchIP = async () => {
            try {
                const response = await fetch('https://api64.ipify.org?format=json');
                const data = await response.json();
                setValue('ip', data.ip);
            } catch (error) {
                console.error("Error al obtener la IP:", error);
            }
        };

        fetchIP();
    }, [setValue]);

    const handleFormSubmit = async (data: TRegisterForm) => {
        try {
            setErr(false);
            setToast(false);
            setLoading(true);
            const response = await fetch(`${process.env.LARAVEL}/api/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.token) {
                // Guardar el token JWT en las cookies
                Cookies.set('auth_token', res.token, { expires: 7 });
                // Redirigir al usuario a la página principal (o a la que desees)
                window.location.href = `${process.env.NEXT}/pages/site/settings`;
            } else {
                setErr(true);
                setToast(true);
            }
            setLoading(false);
            reset();
        } catch (e) {
            setErr(true);
            setToast(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (setToast) {
            const timer = setTimeout(() => {
                setToast(false);
                setErr(false);
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [toast]);

    return (
        <div className="font-sans antialiased h-screen flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                {toast && (
                    <div
                        className={`flex justify-between py-4 px-8 ${err
                            ? "bg-[#fad2e1] text-[#7c193d]"
                            : "bg-[#98f5e1] text-[#236c5b]"
                            }`}
                    >
                        <p className="font-sans">{message}</p>
                        <button className="font-bold" onClick={() => setToast(false)}>&#10005;</button>
                    </div>
                )}
                <div className="mx-auto max-w-md space-y-6 p-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold"><Link href={"/"}>CarGram</Link></h1>
                        <p className="text-gray-500 dark:text-gray-400">Regístrate para unirte a la comunidad de Cargram.</p>
                    </div>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre de usuario</label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="name"
                                    placeholder="Ingresa tu nombre de usuario"
                                    required
                                    {...register("name")}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    required
                                    type="email"
                                    {...register("email")}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    required
                                    type="password"
                                    {...register("password")}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-bold mb-2">Confirmar contraseña</label>
                            <div className="flex items-center border rounded px-3 py-2">
                                <input
                                    className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    id="confirm-password"
                                    placeholder="Confirma tu contraseña"
                                    required
                                    type="password"
                                    {...register("cPassword")}
                                />
                            </div>
                            {errors.cPassword && (
                                <p className="text-red-500 text-xs mt-1">{errors.cPassword?.message}</p>
                            )}
                        </div>
                        <button className="w-full bg-black text-white p-2 rounded-lg" type="submit">
                            {loading ? "Registrando..." : "Registrarse"}
                        </button>
                        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                            ¿Ya tienes una cuenta?
                            <Link className="font-medium underline underline-offset-4" href={"/pages/login"}>
                                Inicia sesión
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
