import { useListProduct } from "@/hooks/api/product/list-products/list-products";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const AllProducts = () => {
  const { data, isLoading, error } = useListProduct();
  console.log(data);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1>My Products</h1>
        <Link
          to="/add-products"
          className="flex bg-gray-600 text-white text-xl font-bold p-2 hover:bg-gray-500"
        >
          Add Product
        </Link>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((product: any) => (
          <div key={product.id} className="flex flex-col gap-2">
            <div style={{ height: "200px", width: "300px" }}>
              <img
                className="hover:scale-105"
                src={product.imageUrls[0]}
                alt={product.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
