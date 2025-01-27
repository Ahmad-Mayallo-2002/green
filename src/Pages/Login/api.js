export const LoginApi = async (userData) => {
  const url = "http://farisnho.runasp.net/api/Account/Login";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response;
};
