import { FormProvider, useForm } from "react-hook-form";
import { ProductsDetails } from "./ProductsDetails";
import { TagsSection } from "./TagsSection";
import { ImagesSection } from "./ImagesSection";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

export type ProductFormData = {
  nationality: string;
  name: string;
  course: string;
  college: string;
  email: string;
  aadhar: string;
  parent: string;
  mobile: string;
  gender: string;
  address: string;
  passedExam: string;
  school: string;
  board: string;
  passingYear: string;
  enquiry: string;
  religion: string;
  caste: string;
  community: string;
  dob: string;
  imageFiles: FileList;
  percentage: string;
  marks: string[];
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
    formData.append("nationality", formDataJson.nationality);
    formData.append("name", formDataJson.name);
    formData.append("aadhar", formDataJson.aadhar);
    formData.append("address", formDataJson.address);
    formData.append("board", formDataJson.board);
    formData.append("caste", formDataJson.caste);
    formData.append("college", formDataJson.college);
    formData.append("course", formDataJson.course);
    formData.append("community", formDataJson.community);
    formData.append("dob", formDataJson.dob);
    formData.append("email", formDataJson.email);
    formData.append("gender", formDataJson.gender);
    formData.append("mobile", formDataJson.mobile);
    formData.append("parent", formDataJson.parent);
    formData.append("passed_exam", formDataJson.passedExam);
    formData.append("passing_year", formDataJson.passingYear);
    formData.append("religion", formDataJson.religion);
    formData.append("school", formDataJson.school);
    formData.append("enquiry", formDataJson.enquiry);
    // formData.append("signature", signatureRef.current?.getTrimmedCanvas().toDataURL());
    // formDataJson?.marks.forEach((tag, i) => {
    //   formData.append(`marks[${i}]`, tag);
    // });
    Array.from(formDataJson.imageFiles).forEach((file) => {
      formData.append("imageFiles", file);
    });
    formData.append("percentage", formDataJson.percentage);
    console.log(formData);
    onAdd(formData);
    formMethods.reset();
  });

  // Create a reference to the SignatureCanvas component
  const signatureRef = useRef<SignatureCanvas>(null);

  // Clear the signature pad
  const clearSignature = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Ensure signatureRef.current is not undefined before accessing its properties
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
    event.preventDefault();
  };

  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <ProductsDetails />
        <TagsSection />
        <ImagesSection />
        <h2 className="text-2xl font-bold mb-3">Signature</h2>
        <div className="flex justify-between flex-1">
          <SignatureCanvas
            penColor="black"
            ref={signatureRef}
            backgroundColor="gray"
            canvasProps={{ width: 600, height: 400, className: "sigCanvas" }}
          />
        </div>
        <button
          className="bg-red-500 text-white font-bold hover:bg-red-700 text-lg w-2/5"
          type="button"
          onClick={clearSignature}
        >
          Clear Signature
        </button>
        <span className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-black px-4 py-1 text-white font-bold hover:bg-blue-950 text-lg disabled:bg-slate-400"
          >
            {isLoading ? "Submit..." : "Submit"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};
