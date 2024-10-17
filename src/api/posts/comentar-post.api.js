import { axiosInstance } from "../_base/axios-instance.api";

export async function comentarPost(id, comentarioTexto, comentarioImagem) {
    console.log(id)
  const response = await axiosInstance.put(
    `/posts/${id}/adicionarComentario`,
    {
      comentarioTexto,
      comentarioImagem,
    },
    {}
  );

  return response.data;
}
