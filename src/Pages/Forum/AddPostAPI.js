import { token } from "../../constants";

export const AddPostAPI = async (formData) => {
  const url = "http://farisnho.runasp.net/api/forum/AddPost";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  return response;
};
