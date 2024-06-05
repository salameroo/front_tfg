import { Inter } from "next/font/google";
// import "../../../globals.css";
import { Navbar, MobileNavbar } from "../../components/ui/Global/Navbar";
import { ThemeProvider } from '../../../context/context';

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
        <ThemeProvider>
            <div className="">
                <Navbar />
                <MobileNavbar />
                <main className="flex-grow p-0 md:p-12 md:ml-64"> {/* Ajusta el margen izquierdo según el tamaño de tu navbar */}
                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
}