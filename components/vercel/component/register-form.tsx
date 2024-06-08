'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

type TRegisterForm = {
  name: string;
  email: string;
  password: string;
  cPassword: string;
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
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(schema),
  });

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
    <div className="font-sans antialiased bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex justify-center items-center relative">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden relative z-10">
        {toast && (
          <div
            className={`flex justify-between py-4 px-8 ${err
              ? "bg-[#fad2e1]  text-[#7c193d]"
              : "bg-[#98f5e1]  text-[#236c5b]"
              }`}
          >
            <p className="font-sans">{message}</p>
            <button className="font-bold">&#10005;</button>
          </div>
        )}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <div className="flex items-center border rounded px-3 py-2">
                <PersonIcon className="mr-2 text-gray-400" />
                <input
                  className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Nombre completo"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Dirección de Email
              </label>
              <div className="flex items-center border rounded px-3 py-2">
                <EmailIcon className="mr-2 text-gray-400" />
                <input
                  className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Tu dirección de email"
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
                Contraseña
              </label>
              <div className="flex items-center border rounded px-3 py-2">
                <LockIcon className="mr-2 text-gray-400" />
                <input
                  className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Tu contraseña segura"
                  {...register("password")}
                />
              </div>
              <p className="text-grey text-xs mt-1">Al menos 8 caracteres</p>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cPassword">
                Confirmar Contraseña
              </label>
              <div className="flex items-center border rounded px-3 py-2">
                <LockIcon className="mr-2 text-gray-400" />
                <input
                  className="appearance-none border-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="cPassword"
                  type="password"
                  placeholder="Confirma tu contraseña"
                  {...register("cPassword")}
                />
              </div>
              {errors.cPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cPassword?.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-full"
                disabled={loading}
              >
                {loading ? "Registrando..." : <><PersonAddIcon className="mr-2" />Registrarse</>}
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-700">¿Ya tienes cuenta?</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center w-full mt-2"
              onClick={() => window.location.href = `${process.env.NEXT}/pages/site/login`}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RegisterForm };
