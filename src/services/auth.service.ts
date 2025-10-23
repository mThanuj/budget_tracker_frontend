import axios from "axios";
import { Response } from "../types/Response";

type LoginPayload = {
    token: string;
};

export const loginUser = async (
    email: string,
    password: string,
): Promise<Response<LoginPayload>> => {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
                email,
                password,
            },
        );

        if (response.status !== 200) {
            return Response.failure(
                "INVALID_CREDENTIALS",
                "Invalid username or password",
            );
        }

        return Response.success(
            { token: response.data.token },
            "Logged in successfully",
        );
    } catch (error) {
        return Response.failure(
            "SOMETHING_WENT_WRONG",
            "Something went wrong in loginUser",
        );
    }
};
