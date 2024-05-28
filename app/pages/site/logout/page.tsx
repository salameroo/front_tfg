import LogoutButton from "../../../components/ui/Login_Logout/LogoutButton";

const Navbar = () => {
    return (
        <nav className="max-w-md ml-80 text-black container ">
            {/* Otros elementos de la barra de navegación */}
            <LogoutButton />
        </nav>
    );
};

export default Navbar;
