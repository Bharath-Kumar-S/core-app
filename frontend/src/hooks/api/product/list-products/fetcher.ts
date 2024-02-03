import { useCallback } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const useListProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/api/products`, {
    method: "GET",
    // credentials: "include", // include cookies in the request
  });
  return useCallback(async () => {
    const responseBody = await response.json();
    console.log(responseBody);
    // if (!response.ok) {
    //   throw new Error(responseBody.message);
    // }
    return responseBody.data;
  }, [response]);
};
