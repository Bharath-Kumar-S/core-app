import { useFormContext } from "react-hook-form";
import { ProductFormData } from "./ManageProductForm";

export const ProductsDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProductFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Course Information</h1>
      <div className="flex flex-row gap-10 justify-between">
        <label className="text-gray-700 text-sm font-bold max-w-[50%]">
          Course applied for
          <select
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("course", { required: "This field is required" })}
          >
            <option value="" className="text-sm font-bold">
              Select a course
            </option>
            <option value="B.Optom. - Bachelor of Optometry">
              B.Optom. - Bachelor of Optometry
            </option>
            <option value="B.Sc - Physician Assistant">
              B.Sc - Physician Assistant
            </option>
            <option value="M.Sc. Audiology">M.Sc. Audiology</option>
            <option value="BASLP - Bachelor of Audiology & Speech">
              BASLP - Bachelor of Audiology & Speech
            </option>
            <option value="Language and Pathology">
              Language and Pathology
            </option>
            {/* <option value="Toys">Toys</option>
          <option value="Other">Other</option> */}
          </select>
          {errors.course && (
            <span className="text-red-500 text-sm">
              {errors.course.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold max-w-[50%]">
          College Name
          <select
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("college", { required: "This field is required" })}
          >
            <option value="" className="text-sm font-bold">
              Select a college
            </option>
            <option value="School of ALLIED HEALTH SCIENCES salem">
              School of ALLIED HEALTH SCIENCES salem
            </option>
            <option value="School of ALLIED HEALTH SCIENCES Karikal">
              School of ALLIED HEALTH SCIENCES Karikal
            </option>
            <option value="School of ALLIED HEALTH SCIENCES Puducherry">
              School of ALLIED HEALTH SCIENCES Puducherry
            </option>
            <option value="SCHOOL OF REHABILITATION AND BEHAVIOURAL SCIENCES, PUDUCHERRY">
              SCHOOL OF REHABILITATION AND BEHAVIOURAL SCIENCES, PUDUCHERRY
            </option>
          </select>
          {errors.college && (
            <span className="text-red-500 text-sm">
              {errors.college.message}
            </span>
          )}
        </label>
      </div>
      <h1 className="text-3xl font-bold mb-3">General Information</h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name of the Candidate
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          placeholder="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Parent/Guardian
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("parent", { required: "This field is required" })}
          />
          {errors.parent && (
            <span className="text-red-500 text-sm">
              {errors.parent.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Aadhar No
          <input
            type="text"
            placeholder="aadhar"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("aadhar", { required: "This field is required" })}
          />
          {errors.aadhar && (
            <span className="text-red-500 text-sm">
              {errors.aadhar.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Mobile
          <input
            type="number"
            placeholder="mobile"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("mobile", { required: "This field is required" })}
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm">
              {errors.mobile.message}
            </span>
          )}
        </label>
      </div>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Gender
          <select
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("gender", { required: "This field is required" })}
          >
            <option value="" className="text-sm font-bold">
              Select a gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Date of Birth
          <input
            type="date"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("dob", { required: "This field is required" })}
          />
          {errors.dob && (
            <span className="text-red-500 text-sm">{errors.dob.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Nationality
          <input
            type="text"
            placeholder="Specify nationality"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("nationality", { required: "This field is required" })}
          />
          {errors.nationality && (
            <span className="text-red-500 text-sm">
              {errors.nationality.message}
            </span>
          )}
        </label>
      </div>

      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Religion
          <input
            type="text"
            placeholder="Specify religion"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("religion", { required: "This field is required" })}
          />
          {errors.religion && (
            <span className="text-red-500 text-sm">
              {errors.religion.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Community
          <input
            type="text"
            placeholder="Specify community"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("community", { required: "This field is required" })}
          />
          {errors.community && (
            <span className="text-red-500 text-sm">
              {errors.community.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Caste
          <input
            type="text"
            placeholder="Specify caste"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("caste", { required: "This field is required" })}
          />
          {errors.caste && (
            <span className="text-red-500 text-sm">{errors.caste.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Address
        <textarea
          rows={2}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("address", { required: "This field is required" })}
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Enquiry
        <textarea
          rows={5}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("enquiry", { required: "This field is required" })}
        />
        {errors.enquiry && (
          <span className="text-red-500 text-sm">{errors.enquiry.message}</span>
        )}
      </label>
      <h1 className="text-3xl font-bold mb-3">Academic Information</h1>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Qualifying Examination Passed
          <input
            type="text"
            placeholder="Specify Qualifying Examination Passed"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("passedExam", { required: "This field is required" })}
          />
          {errors.passedExam && (
            <span className="text-red-500 text-sm">
              {errors.passedExam.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Month & Year of Passing / Reg No
          <input
            type="text"
            placeholder="Specify MM-YYYY & Reg No"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("passingYear", { required: "This field is required" })}
          />
          {errors.passingYear && (
            <span className="text-red-500 text-sm">
              {errors.passingYear.message}
            </span>
          )}
        </label>
      </div>
      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Name of the School
          <input
            type="number"
            placeholder="School name"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("school", { required: "This field is required" })}
          />
          {errors.school && (
            <span className="text-red-500 text-sm">
              {errors.school.message}
            </span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Name of the Board
          <input
            type="number"
            placeholder="Board name"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("board", { required: "This field is required" })}
          />
          {errors.board && (
            <span className="text-red-500 text-sm">{errors.board.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};
