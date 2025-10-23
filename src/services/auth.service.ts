import { Response } from "../types/Response";
import axiosInstance from "./axios.service";

type LoginPayload = {
    token: string;
};

export const loginUser = async (
    email: string,
    password: string,
): Promise<Response<LoginPayload>> => {
    try {
        const response = await axiosInstance.post("/auth/login", {
            email,
            password,
        });

        if (response.status !== 200) {
            return Response.failure(
                "INVALID_CREDENTIALS",
                "Invalid username or password",
            );
        }

        return Response.success(
            {
                token: response.data.token,
            },
            "Logged in successfully",
        );
    } catch (error) {
        return Response.failure(
            "SOMETHING_WENT_WRONG",
            "Something went wrong in loginUser",
        );
    }
};
