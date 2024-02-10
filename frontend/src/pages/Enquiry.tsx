import { ManageProductForm } from "@/forms/ManageProductForm/ManageProductForm";
import { useAddProduct } from "@/hooks/api/product/add-product/add-product";

export const Enquiry = () => {
  const { isPending, mutate } = useAddProduct();
  const onSubmit = (data: FormData) => {
    console.log(data);
    mutate(data);
  };

  return <ManageProductForm onSubmit={onSubmit} isLoading={isPending} />;
};
