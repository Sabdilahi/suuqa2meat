// src/pages/Product.jsx
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../lib/api";
import { useCart } from "../lib/store";

export default function Product() {
  const { id } = useParams();
  const add = useCart((s) => s.add);
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  if (isLoading)
    return <div className="container mx-auto px-4 py-10">Loading…</div>;

  if (error)
    return (
      <div className="container mx-auto px-4 py-10">
        <p className="text-red-600">Product not found.</p>
        <Link to="/catalog" className="text-blue-600 underline">
          Back to catalog
        </Link>
      </div>
    );

  return (
    <section className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-2">
      <div>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover"
          />
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-green-700">{product.name}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-semibold">
          ${product.price.toFixed(2)} <span className="text-sm">/ {product.unit}</span>
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => add(product, 1)}
            className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            Add to Cart
          </button>
          <Link
            to="/catalog"
            className="px-5 py-3 rounded-lg border border-gray-300 text-gray-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
