import { Link } from "react-router-dom";
import { useCart } from "../lib/store";

export default function ProductCard({ product }) {
  const add = useCart((s) => s.add);
  return (
    <div className="rounded-2xl border p-4">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-xl mb-4" />
      <div className="font-medium">{product.name}</div>
      <div className="text-gray-600">${(product.price / 100).toFixed(2)}</div>
      <div className="flex gap-3 mt-3">
        <button className="btn btn-primary" onClick={() => add(product, 1)}>Add</button>
        <Link to={`/product/${product.id}`} className="btn">Details</Link>
      </div>
    </div>
  );
}
