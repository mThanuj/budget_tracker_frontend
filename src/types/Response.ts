export class Response<T = any> {
    success: boolean;
    error?: string | null;
    message?: string | null;
    data?: T;

    constructor(
        success: boolean,
        error?: string | null,
        message?: string | null,
        data?: T,
    ) {
        this.success = success;
        this.error = error;
        this.message = message;
        this.data = data;
    }

    static success<T>(data: T, message?: string): Response<T> {
        return new Response(true, null, message ?? null, data);
    }

    static failure<T = undefined>(
        error: string,
        message?: string,
    ): Response<T> {
        return new Response(false, error, message ?? null);
    }

    static isSuccess<T>(res: Response<T>): res is ResponseWithData<T> {
        return res.success;
    }
}

type ResponseWithData<T> = Response<T> & { data: T };
