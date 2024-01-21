import React from "react";
import { productTags } from "@/config/product-tags-config";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./ManageProductForm";

export const TagsSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  const tags = watch("tags");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Tags</h2>
      <div className="grid grid-cols-6 gap-2">
        {productTags.map((tag) => (
          <label
            key={tag}
            className={
              tags && tags?.includes(tag) // if the tag is included in the tags array or if the tags array is empty, then return the "cursor-pointer bg-blue-500 text-sm rounded-full px-4 py-2 font-semibold" class
                ? "cursor-pointer bg-blue-500 text-sm rounded-full px-4 py-2 font-semibold text-white"
                : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
            }
          >
            <input
              type="checkbox"
              {...register("tags", {
                validate: (tags) => {
                  if (tags && tags.length > 0) {
                    return true;
                  } else {
                    return "At least one tag is required";
                  }
                },
              })}
              value={tag}
              className="mr-2 hidden"
            />
            <span>{tag}</span>
          </label>
        ))}
      </div>
      {errors.tags && (
        <span className="text-red-500 text-sm font-bold">
          {errors.tags.message}
        </span>
      )}
    </div>
  );
};
