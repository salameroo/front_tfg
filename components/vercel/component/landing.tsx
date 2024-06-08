import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Modal from "@/components/ui/modal"; // Asegúrate de que la ruta sea correcta
import { SVGProps } from "react";

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <CarIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Cargram</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={"/pages/login"}>
            Explorar
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={"/pages/news"}>
            Noticias
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pages/normativa">
            Normativa
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pages/manual">
            Manual de uso
          </Link>
        </nav>
        <div className="flex gap-2">
          <Button variant="outline">
            <Link href="/pages/login">Iniciar Sesión</Link>
          </Button>
          <Button>
            <Link href="/pages/register">Regístrate</Link>
          </Button>
        </div>
      </header>
      <main className="">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              alt="Coche de lujo"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089934470.jpg"
              width="550"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                El Mundo de la Pasión Automovilística
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Cargram es la red social definitiva para los entusiastas de los coches. Comparte tus rutas favoritas, mantente actualizado con noticias, descubre cosas únicas y mucho más...
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto">Únete Ahora</Button>
                <Button className="w-full min-[400px]:w-auto" variant="outline">
                  <Link href="/pages/manual">Aprende Más</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Características Principales</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cargram ofrece una variedad de características para mejorar tu experiencia como usuario de nuestra red social.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Sigue a Personas Interesantes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sigue a otros entusiastas de los coches que compartan tus intereses y mantente al día con sus publicaciones.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Unica en su especie</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  En CarGram podrás acceder a contenido exclusivo con socios que solo trabajan con nosotros.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Filtra Publicaciones en un Mapa</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Utiliza nuestro filtro de mapa para descubrir publicaciones de coches en tu área o en cualquier parte del mundo.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Comparte Tus Paseos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sube fotos de tus coches favoritos y personaliza tu perfil para mostrar tu pasión automovilística.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Conecta con Otros</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Chatea con otros entusiastas de los coches, únete a grupos y participa en discusiones para compartir tus conocimientos y experiencias.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mantente Informado</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Accede a las últimas noticias automovilísticas, reseñas y actualizaciones de la industria para estar al tanto de las novedades.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Únete a la Comunidad de Cargram
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Conecta con otros entusiastas de los coches y comparte tu pasión por todo lo relacionado con el mundo automovilístico.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Introduce tu correo electrónico" type="email" />
                <Button type="submit">Regístrate</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Al registrarte, aceptas nuestros
                <Link className="ml-1 underline underline-offset-2" href="/pages/normativa">
                  Términos de Servicio
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explora las Últimas Tendencias</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Mantente al día con las últimas noticias automovilísticas, reseñas y perspectivas de la industria.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Nuevos Lanzamientos de Coches</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Descubre los últimos y mejores modelos de coches que llegan al mercado.
                </p>
                <Link className="text-sm font-medium text-blue-500 hover:underline" href={"/pages/news"}>
                  Leer Más
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Perspectivas de la Industria</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mantente informado sobre las últimas tendencias y desarrollos en la industria automovilística.
                </p>
                <Link className="text-sm font-medium text-blue-500 hover:underline" href={"/pages/news"}>
                  Leer Más
                </Link>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reseñas de Expertos</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lee reseñas y análisis detallados de nuestro equipo de expertos automovilísticos.
                </p>
                <Link className="text-sm font-medium text-blue-500 hover:underline" href={"/pages/news"}>
                  Leer Más
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Cargram. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href={"/pages/normativa/terms"}>
            Términos de Servicio
          </Link>
          <button className="text-xs hover:underline underline-offset-4" onClick={openModal}>
            Contacto
          </button>
        </nav>
      </footer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-lg font-bold mb-4">Contacto</h2>
        <p> contactar al correo:</p>
        <p className="text-blue-500">agsalamerobetancurt@iesmordefuentes.com</p>
      </Modal>
    </div>
  );
}

interface CarIconProps extends SVGProps<SVGSVGElement> { }

function CarIcon(props: CarIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

export { CarIcon };
