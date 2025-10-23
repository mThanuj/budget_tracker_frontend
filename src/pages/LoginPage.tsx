import { useState } from "react";
import { loginUser } from "../services/auth.service";
import { Response } from "../types/Response";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await loginUser(formData.email, formData.password);

        if (!Response.isSuccess(response)) {
            alert(response.error);
            return;
        }

        alert(response.message);

        localStorage.setItem("token", response.data.token);

        navigate("/dashboard", {});
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-slate-200">
            <form
                className="border w-1/4 flex flex-col space-y-4 bg-white items-center py-6 rounded-lg"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-bold">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="border px-2 py-1 rounded"
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }))
                    }
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border px-2 py-1 rounded"
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
                <button
                    type="submit"
                    className="bg-green-400 px-4 py-2 rounded-xl cursor-pointer hover:bg-green-500 hover:text-white"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
