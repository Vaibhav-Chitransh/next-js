declare global {
    type apiResponse<T> = {
        data: T,
        error?: string,
    }
}

export{}