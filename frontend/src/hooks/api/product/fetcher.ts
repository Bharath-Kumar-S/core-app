const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const addProduct = async (formData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/products`, {
    method: "POST",
    credentials: "include", // include cookies in the request
    body: formData,
  });

  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody.data;
};
