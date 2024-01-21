import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./ManageProductForm";

export const ProductsDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Product</h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Brand
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("brand", { required: "This field is required" })}
        />
        {errors.brand && (
          <span className="text-red-500 text-sm">{errors.brand.message}</span>
        )}
      </label>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Price
          <input
            type="number"
            placeholder="0"
            min={1}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("price", { required: "This field is required" })}
          />
          {errors.price && (
            <span className="text-red-500 text-sm">{errors.price.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Quantity
          <input
            type="number"
            placeholder="0"
            min={1}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("quantity", { required: "This field is required" })}
          />
          {errors.quantity && (
            <span className="text-red-500 text-sm">
              {errors.quantity.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Origin
          <input
            type="text"
            placeholder="Specify origin"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("origin", { required: "This field is required" })}
          />
          {errors.origin && (
            <span className="text-red-500 text-sm">
              {errors.origin.message}
            </span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={5}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Category
        <select
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("category", { required: "This field is required" })}
        >
          <option value="" className="text-sm font-bold">
            Select a category
          </option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Sport">Sport</option>
          <option value="Toys">Toys</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && (
          <span className="text-red-500 text-sm">
            {errors.category.message}
          </span>
        )}
      </label>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Colour
          <input
            defaultValue="#000000"
            type="color"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("colour")}
          />
          {errors.colour && (
            <span className="text-red-500 text-sm">
              {errors.colour.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Material
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("material")}
          />
          {errors.material && (
            <span className="text-red-500 text-sm">
              {errors.material.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Size
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("size")}
          />
          {errors.size && (
            <span className="text-red-500 text-sm">{errors.size.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Weight
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("weight")}
          />
          {errors.weight && (
            <span className="text-red-500 text-sm">
              {errors.weight.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};
