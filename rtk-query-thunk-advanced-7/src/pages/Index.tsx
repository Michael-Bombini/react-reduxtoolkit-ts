import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../api/apliSlice";
import Banner from "../components/Banner";

export default function Index() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading || isError) {
    return <p>Loading...</p>;
  }

  const products = data?.products;

  return (
    <div>
      <Banner thumbnail={products ? products[0].thumbnail : ""} />
      <main className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.slice(1, products.length).map((product) => (
          <div key={product.id}>
            <img
              src={product.thumbnail}
              alt=""
              className="block mb-4 max-h-64 w-full object-cover rounded-md"
            />
            <h2 className="mb-4 text-2xl underline font-bold">
              {product.title}
            </h2>
            <Link
              to={`/${product.id}`}
              className="bg-blue-700 text-white rounded-md px-3 py-2"
            >
              View Product
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
