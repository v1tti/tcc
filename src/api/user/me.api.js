import { axiosInstance } from "../_base/axios-instance.api";

export async function getMe() {
    const response = await axiosInstance.get("/usuarios/me")

    return response.data;
}
