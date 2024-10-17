import { axiosInstance } from "../_base/axios-instance.api";

export async function privarPost(id, publico) {

  const response = await axiosInstance.put(
    `/posts/${id}`,
    {
      publico,
    },
    {}
  );

  return response.data;
}
