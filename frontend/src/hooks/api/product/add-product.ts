import { useAppContext } from "@/contexts/AppContext";
import { addProduct } from "@/hooks/api/product/fetcher";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddProduct = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: async () => {
      showToast({ message: "Product Created!", type: "SUCCESS" });
      await queryClient.invalidateQueries({ queryKey: ["addProduct"] });
    },
    onError: () => {
      showToast({ message: "Error creating product!", type: "ERROR" });
    },
  });
};
