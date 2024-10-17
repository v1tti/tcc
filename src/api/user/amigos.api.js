import { axiosInstance } from "../_base/axios-instance.api";

export async function getAmizadesAprovadas() {
    const response = await axiosInstance.get("/usuarios/amizades/")

    return response.data;
}
