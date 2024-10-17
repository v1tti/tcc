import { axiosInstance } from "../_base/axios-instance.api";

export async function editUser({ id, nome, apelido, imagemPerfil }) {
  const response = await axiosInstance.put(
    `/usuarios/${id}`,
    {
      nome,
      apelido,
      imagemPerfil,
    },
    {}
  );
  return response.data;
}
