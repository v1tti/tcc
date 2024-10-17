import { axiosInstance } from "../_base/axios-instance.api";

export async function register({
  nome,
  email,
  dataNascimento,
  sexo,
  peso,
  senha,
  atividadeFisica,
  altura,
}) {
  const response = await axiosInstance.post(
    "/usuarios",
    {
      nome,
      email,
      dataNascimento,
      sexo,
      peso,
      senha,
      atividadeFisica,
      altura,
    },
    {}
  );
  return response.data;
}
