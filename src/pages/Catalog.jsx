import { useEffect, useState } from "react";
import { listProducts } from "../lib/api";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await listProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="p-6">Loading products…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Catalog</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4">
            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{p.description}</p>

            <div className="mt-3 font-bold text-lg">
              ${p.price.toFixed(2)}
            </div>

            <div className="mt-4 flex gap-2">
              <Link
                to={`/product/${p.slug}`}
                className="px-3 py-1 border rounded"
              >
                Details
              </Link>

              <button className="px-3 py-1 bg-green-600 text-white rounded">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
