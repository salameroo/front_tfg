import { Inter } from "next/font/google";
// import "../../globals.css";
// import { Navbar, MobileNavbar } from "../components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CarGram",
    description: "Angel's final project",
    favicon: "./favicon.ico",
};
interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <div className="">
            {children}
        </div>
    );
}
// https://open.spotify.com/user/iveu1x8u5xhwe2xz3iid1y5az?si=824823253f9449f0


