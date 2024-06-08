
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/vercel/ui/card"
import { JSX, SVGProps } from "react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CarIcon className="h-6 w-6" />
          <span className="sr-only">Cargram</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Explore
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Groups
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Upload
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[70vh] bg-[url(/hero-image.jpg)] bg-cover bg-center flex items-center justify-center">
          <div className="px-4 md:px-6 text-center space-y-4 bg-black/50 p-8 rounded-lg">
            <h1 className="text-3xl sm:text-5xl font-bold text-white">Bienvenido a Cargram</h1>
            <p className="text-lg text-gray-600">
              Comparte tu pasion por los coches y conecta con otros entusiastas del motor.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#f39c12] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#e67e22] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f39c12] disabled:pointer-events-none disabled:opacity-50"
                href="/pages/register"
              >
                Registrarte
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#f39c12] bg-transparent px-8 text-sm font-medium text-[#f39c12] shadow-sm transition-colors hover:bg-[#f39c12] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f39c12] disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                href="/pages/login"
              >
                Iniciar sesion
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ultimas entradas:</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the latest car photos shared by our community.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <img
                  alt="Car Photo"
                  className="w-full h-auto rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col">

            <main className="flex-1">
              <section className="w-full pt-12 md:pt-24 lg:pt-32">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                          Connect with Car Enthusiasts
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                          Discover, share, and discuss your passion for cars on the ultimate social network for automotive
                          enthusiasts.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Link
                          className="inline-flex h-10 items-center justify-center rounded-md bg-[#e74c3c] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#c0392b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c0392b] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#f39c12] dark:text-gray-900 dark:hover:bg-[#f1c40f] dark:focus-visible:ring-[#f1c40f]"
                          href="#"
                        >
                          Sign Up
                        </Link>
                        <Link
                          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#e74c3c] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#c0392b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c0392b] disabled:pointer-events-none disabled:opacity-50 dark:border-[#f39c12] dark:bg-gray-950 dark:hover:bg-[#f1c40f] dark:hover:text-gray-50 dark:focus-visible:ring-[#f1c40f] dark:border-gray-800"
                          href="#"
                        >
                          Download App
                        </Link>
                      </div>
                    </div>
                    <img
                      alt="Luxury Sports Car"
                      className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full"
                      height="450"
                      src="/placeholder.svg"
                      width="650"
                    />
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-[#e74c3c] px-3 py-1 text-sm text-gray-50 dark:bg-[#f39c12] dark:text-gray-900">
                        Key Features
                      </div>
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover, Connect, and Explore</h2>
                      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        CarConnect is the ultimate social network for car enthusiasts. Explore a vast database of car
                        information, connect with like-minded individuals, and share your passion for automotive culture.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Connect with Enthusiasts</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Build a network of car enthusiasts, share your latest projects, and engage in discussions about all
                        things automotive.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Explore Car Database</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Access a comprehensive database of car models, specifications, and historical information to fuel your
                        automotive knowledge.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Share Photos and Videos</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showcase your car collection, custom builds, and automotive adventures by sharing high-quality photos
                        and videos with the community.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Participate in Discussions</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Engage in lively discussions about the latest automotive trends, industry news, and technical topics
                        with fellow car enthusiasts.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Discover Events and Meetups</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Stay up-to-date with the latest car-related events, meetups, and gatherings in your local area and
                        beyond.
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-lg font-bold">Personalized Recommendations</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Receive tailored recommendations for cars, parts, accessories, and content based on your interests and
                        interactions within the CarConnect community.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Automotive Revolution</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      CarConnect is the premier social network for car enthusiasts, offering a seamless platform to connect,
                      share, and explore your passion for all things automotive.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#e74c3c] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#c0392b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c0392b] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#f39c12] dark:text-gray-900 dark:hover:bg-[#f1c40f] dark:focus-visible:ring-[#f1c40f]"
                      href="#"
                    >
                      Sign Up
                    </Link>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#e74c3c] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#c0392b] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c0392b] disabled:pointer-events-none disabled:opacity-50 dark:border-[#f39c12] dark:bg-gray-950 dark:hover:bg-[#f1c40f] dark:hover:text-gray-50 dark:focus-visible:ring-[#f1c40f] dark:border-gray-800"
                      href="#"
                    >
                      Download App
                    </Link>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Posts</h2>
                      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Check out the latest posts from the CarConnect community.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3" />
                </div>
              </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
              <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CarConnect. All rights reserved.</p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Privacy Policy
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Contact Us
                </Link>
              </nav>
            </footer>
          </div>
        </section>
      </main>

    </div>
  )
}

function CarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
