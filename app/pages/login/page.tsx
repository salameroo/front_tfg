'use client';
import { Form } from "../../components/ui/Login_Logout/LoginForm";
import LoginDos from "@/app/components/ui/Login_Logout/LoginDos";

function Login() {
    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            {/* <Form /> */}
            <LoginDos />
        </div>
    )
}
export default Login;