import { token } from "../../constants";

export const AddCommentAPI = async (formData) => {
  const url = "http://farisnho.runasp.net/api/forum/AddComment";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  return response;
};
