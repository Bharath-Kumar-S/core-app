import { FormProvider, useForm } from "react-hook-form";
import { ProductsDetails } from "./ProductsDetails";
import { TagsSection } from "./TagsSection";
import { ImagesSection } from "./ImagesSection";

export type ProductFormData = {
  origin: string;
  name: string;
  price: string;
  description: string;
  discount: number;
  category: string;
  brand: string;
  tags: string[];
  quantity: string;
  imageFiles: FileList;
  colour: string;
  material: string;
  size: string;
  weight: number;
};

type Props = {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
};

export const ManageProductForm = ({ onSubmit: onAdd, isLoading }: Props) => {
  const formMethods = useForm<ProductFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson: ProductFormData) => {
    const formData = new FormData();
    formData.append("origin", formDataJson.origin);
    formData.append("name", formDataJson.name);
    formData.append("price", formDataJson.price);
    formData.append("description", formDataJson.description);
    formData.append("category", formDataJson.category);
    formData.append("brand", formDataJson.brand);
    formDataJson.tags.forEach((tag, i) => {
      formData.append(`tags[${i}]`, tag);
    });
    formData.append("quantity", formDataJson.quantity);
    Array.from(formDataJson.imageFiles).forEach((file) => {
      formData.append("imageFiles", file);
    });
    onAdd(formData);
    formMethods.reset();
  });

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <ProductsDetails />
        <TagsSection />
        <ImagesSection />
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-black px-4 py-1 text-white font-bold hover:bg-blue-950 text-lg disabled:bg-slate-400"
          >
            {isLoading ? "Adding..." : "Add"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};
