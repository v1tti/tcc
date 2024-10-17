import { axiosInstance } from "../_base/axios-instance.api";

export async function aceitarAmigo(id) {

  const response = await axiosInstance.put(
    `/usuarios/${id}/amizades`);

  return response.data;
}
