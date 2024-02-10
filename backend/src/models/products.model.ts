import mongoose from "mongoose";

export type EnquiryType = {
  _id: string;
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
  imageUrls: string[];
  passed_exam: string;
  school: string;
  board: string;
  passing_year: string;
  enquiry: string;
  religion: string;
  caste: string;
  community: string;
  dob: string;
  percentage: string;
};

const enquiryShema = new mongoose.Schema<EnquiryType>({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  aadhar: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  passed_exam: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  passing_year: {
    type: String,
    required: true,
  },
  enquiry: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  community: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
  // tags: [
  //   {
  //     type: String,
  //   },
  // ],
  imageUrls: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Enquiry = mongoose.model<EnquiryType>("Enquiry", enquiryShema);
