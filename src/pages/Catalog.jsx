import { useQuery } from "@tanstack/react-query";
import { listProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: listProducts });

  if (isLoading) return <div className="container mx-auto p-6">Loading…</div>;
  if (error) return <div className="container mx-auto p-6 text-red-600">Failed to load.</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Catalog</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
