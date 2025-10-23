import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const path = window.location.pathname;
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (path !== "/login" && !token) {
            navigate("/login");
        } else if (path === "/login" && token) {
            navigate("/dashboard");
        }
    }, [navigate, path, token]);

    return <>{children}</>;
};

export default ProtectedRoute;
