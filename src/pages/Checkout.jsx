import { useState } from 'react';
import { useCart } from '../lib/store';
import { placeOrder } from '../lib/api';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const order = await placeOrder({ items, total: total() });
    clear();
    navigate(`/orders?placed=${order.id}`);
  }

  if (!items.length) return <div>No items to checkout.</div>;

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <input placeholder="Full name" className="w-full border rounded px-3 py-2" required />
      <input placeholder="Address" className="w-full border rounded px-3 py-2" required />
      <input placeholder="City" className="w-full border rounded px-3 py-2" required />
      <button disabled={submitting} className="px-6 py-3 rounded-lg bg-blue-600 text-white disabled:opacity-50">
        {submitting ? 'Placing order…' : 'Place order'}
      </button>
    </form>
  );
}
