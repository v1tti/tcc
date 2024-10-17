import { axiosInstance } from "../_base/axios-instance.api";

export async function criarPost({titulo, imagem, texto}) {
  const response = await axiosInstance.post("/posts", {
    titulo,
    imagem,
    texto,
  });

  return response.data;
}
