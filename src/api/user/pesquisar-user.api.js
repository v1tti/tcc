import { axiosInstance } from "../_base/axios-instance.api";

export async function getUserByNomeOuEmail(nomeOuEmail) {
    const response = await axiosInstance.get(`/usuarios/search?text=${nomeOuEmail}`)

    return response.data.content;
}
