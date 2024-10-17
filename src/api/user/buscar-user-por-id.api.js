import { axiosInstance } from "../_base/axios-instance.api";

export async function getUserById(id) {
    const response = await axiosInstance.get(`/usuarios/${id}`)

    return response.data;
}
