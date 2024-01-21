import mongoose from "mongoose";

export const CategoryEnum = [
  "Electronics",
  "Fashion",
  "Home",
  "Kitchen",
  "Sport",
  "Toys",
  "Other",
];

type variant = {
  color: string;
  size: string;
  material: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    length: number;
  };
};

export type ProductType = {
  _id: string;
  userId: string;
  origin: string;
  name: string;
  price: string;
  description: string;
  discount: number;
  category: string;
  brand: string;
  tags: string[];
  stock: {
    quantity: number;
    reserved: number;
    sold: number;
  };
  imageUrls: string[];
  attributes: variant;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  variants?: variant[];
};

const productShema = new mongoose.Schema<ProductType>({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        return CategoryEnum.includes(value);
      },
      message: "Please provide an array of valid categories.",
    },
  },
  stock: {
    type: {
      quantity: {
        type: Number,
        default: 0,
      },
      reserved: {
        type: Number,
        default: 0,
      },
      sold: {
        type: Number,
        default: 0,
      },
    },
  },
  origin: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: {
        user: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          required: true,
        },
        date: Date,
      },
    },
  ],
  tags: [
    {
      type: String,
    },
  ],

  attributes: [
    {
      type: {
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        material: {
          type: String,
        },
        length: {
          type: Number,
        },
      },
    },
  ],
  variants: [
    {
      type: {
        color: {
          type: String,
        },
        size: {
          type: String,
        },
        material: {
          type: String,
        },
        length: {
          type: Number,
        },
      },
    },
  ],
  discount: {
    type: Number,
  },
  imageUrls: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Product = mongoose.model<ProductType>("Product", productShema);
