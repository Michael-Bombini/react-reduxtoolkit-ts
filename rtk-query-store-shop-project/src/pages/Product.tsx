import { Navigate, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../api/apliSlice";
import { useAppDispatch } from "../redux/store";
import { addProduct } from "../redux/slices/cartSlice";
import { openModal } from "../redux/slices/modalSlice";

export default function Product() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { id } = params;

  const { data, isLoading } = useGetProductsQuery();
  const products = data?.products;
  const product = products?.find((product) => product.id === Number(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {JSON.stringify(product)}
      <button
        className="bg-blue-700 rounded-md text-white px-2 py-1 block my-6"
        onClick={() => {
          dispatch(
            addProduct({
              title: product?.title,
              price: product?.price,
              thumbnail: product?.thumbnail,
            })
          );
          dispatch(openModal({ message: "Product added to cart" }));
        }}
      >
        Add Product
      </button>
    </div>
  );
}
