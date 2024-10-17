import { axiosInstance } from "../_base/axios-instance.api";

export async function getAmizadesSolicitadas() {
    const response = await axiosInstance.get("/usuarios/amizades/solicitadas")

    return response.data;
}
