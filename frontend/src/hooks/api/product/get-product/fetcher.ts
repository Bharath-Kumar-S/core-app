const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const getOneProduct = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: "GET",
    credentials: "include", // include cookies in the request
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody.data;
};
