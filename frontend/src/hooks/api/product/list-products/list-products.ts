import { useListProducts as fetcher } from "@/hooks/api/product/list-products/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useListProduct = () => {
  return useQuery({
    queryFn: fetcher,
    queryKey: ["products-get0list"],
  });
};
