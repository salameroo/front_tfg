'use client';
import DashboardComponent from "../../../components/ui/Perfil/DashboardComponent";
import UserProfile from "@/app/components/ui/Perfil/userProfile";
import Settings from "@/app/components/ui/Perfil/settings";
import Logout from "@/app/components/ui/Login_Logout/LogoutButton";

const RegisterPage = () => {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <Settings />
            <UserProfile />
            <br />
            <DashboardComponent />
            <Logout />
        </div>
    )
}
export default RegisterPage
