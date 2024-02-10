// import { productTags } from "@/config/product-tags-config";
import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./ManageProductForm";

export const TagsSection = () => {
  const {
    register,
    // watch,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  // const marks = watch("marks");
  const subjects = [
    "Physics",
    "Chemistry",
    "Biology",
    "Botany",
    "Zoology",
    "Maths",
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Academic Marks</h2>
      <div className="grid grid-cols-8 gap-3">
        {subjects.map((subject) => (
          <>
            <label className="text-gray-700 text-sm font-bold flex-1 col-span-2">
              {subject}
            </label>
            <input
              type="text"
              placeholder="Max marks"
              className="border rounded w-full px-2  col-span-2 font-normal"
              {...register("marks", {
                validate: (marks) => {
                  if (marks && marks.length > 0) {
                    return true;
                  } else {
                    return "At least one tag is required";
                  }
                },
              })}
            />
            <input
              type="text"
              placeholder="Min marks for pass"
              className="border rounded w-full px-2  col-span-2 font-normal"
              {...register("marks", {
                validate: (tags) => {
                  if (tags && tags.length > 0) {
                    return true;
                  } else {
                    return "At least one tag is required";
                  }
                },
              })}
            />
            <input
              type="text"
              placeholder="Obtained marks"
              className="border rounded w-full px-2  col-span-2 font-normal"
              {...register("marks", {
                validate: (tags) => {
                  if (tags && tags.length > 0) {
                    return true;
                  } else {
                    return "At least one tag is required";
                  }
                },
              })}
            />
          </>
        ))}
      </div>
      {errors.marks && (
        <span className="text-red-500 text-sm font-bold">
          {errors.marks.message}
        </span>
      )}
      <label className="text-gray-700 text-sm font-bold flex-1">
        Percentage of Marks in PCB/PCBZ
        <input
          type="text"
          placeholder="Percentage of Marks"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("percentage", { required: "This field is required" })}
        />
        {errors.percentage && (
          <span className="text-red-500 text-sm">
            {errors.percentage.message}
          </span>
        )}
      </label>
    </div>
  );
};
