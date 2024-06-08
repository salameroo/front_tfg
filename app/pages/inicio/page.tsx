'use client';
import LandingPage from "@/components/vercel/component/landing-page";
import Landing from "@/components/vercel/component/landing";
import Userguide from "@/components/vercel/component/userguide";
import CarIcon from "@/components/ui/CarIcon";

export default function Pruebas() {
    return (
        <div>
            {/* <LandingPage /> */}
            <Landing />
            <h1 className="bg-gray-400 w-full">Separacion</h1>
            <Userguide />
        </div>
    );
}