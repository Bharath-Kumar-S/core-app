import { ManageProductForm } from "@/forms/ManageProductForm/ManageProductForm";
import { useAddProduct } from "@/hooks/api/product/add-product";
import React from "react";

export const AddProduct = () => {
  const { isPending, mutate } = useAddProduct();
  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  return <ManageProductForm onSubmit={onSubmit} isLoading={isPending} />;
};
