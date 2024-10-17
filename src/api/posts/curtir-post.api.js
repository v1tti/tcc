import { axiosInstance } from "../_base/axios-instance.api";

export async function curtirPost(id, hasLike) {

  const response = await axiosInstance.put(
    `/posts/${id}/curtida`,
    {
      hasLike,
    },
    {}
  );

  return response.data;
}
