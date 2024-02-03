import { getOneProduct } from "@/hooks/api/product/get-product/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useGetProduct = (id: string) => {
  return useQuery({
    queryFn: () => getOneProduct(id),
    queryKey: ["product", id],
  });
};
