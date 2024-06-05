'use client';
import Settings from "@/app/components/ui/Perfil/settings";
import Logout from "@/app/components/ui/Login_Logout/LogoutButton";
import ProfileUpdate from "@/app/components/ui/Perfil/updateProfile";
import Ajustes from "@/app/components/ui/settings/settings";

const PageAjustes = () => {
    return (
        <div className="bg-gray-600 min-h-screen flex flex-col m-0 p-0">
            {/* <Settings /> */}
            <Ajustes />
            <br />
            <Logout />
            {/* <ProfileUpdate /> */}
            <br />
        </div>
    )
}
export default PageAjustes
