import { useLocation } from 'react-router-dom';

export default function Orders() {
  const params = new URLSearchParams(useLocation().search);
  const placed = params.get('placed');
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      {placed ? (
        <div className="rounded-lg border p-4 bg-emerald-50">
          Order <span className="font-mono">{placed}</span> placed successfully ✅
        </div>
      ) : (
        <p>No orders yet. (History will appear once Supabase is connected.)</p>
      )}
    </div>
  );
}
