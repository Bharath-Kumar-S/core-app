import { useListProductsFetcher } from "@/hooks/api/product/list-products/fetcher";
import { useQuery } from "@tanstack/react-query";

export const useListProduct = () => {
  return useQuery({
    queryFn: useListProductsFetcher,
    queryKey: ["products-get0list"],
  });
};
