import { axiosInstance } from "../_base/axios-instance.api";

export async function solicitarAmigo(id) {

  const response = await axiosInstance.post(
    `/usuarios/${id}/amizades`);

  return response.data;
}
