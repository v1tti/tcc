import { axiosInstance } from "../_base/axios-instance.api";

export async function getListaPosts() {
    const response = await axiosInstance.get("/posts?sort=id,desc")

    return response.data;
}
