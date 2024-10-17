import { axiosInstance } from "../_base/axios-instance.api";

export async function rejeitarAmigo(id) {

  const response = await axiosInstance.put(
    `/usuarios/${id}/amizades/rejeitar`);

  return response.data;
}
