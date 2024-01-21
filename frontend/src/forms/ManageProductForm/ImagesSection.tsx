import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./ManageProductForm";

export const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          multiple
          accept="image/*"
          type="file"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;
              if (totalLength === 0) {
                return "At least one image is required";
              }
              if (totalLength > 6) {
                return "Maximum 6 images are allowed";
              }
              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};
