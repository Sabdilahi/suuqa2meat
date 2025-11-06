import { useCart } from '../lib/store';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, update, remove, total } = useCart();
  if (!items.length) return <div>Your cart is empty. <Link to="/catalog" className="text-blue-600">Browse products</Link></div>;
  return (
    <div className="space-y-4">
      {items.map(i => (
        <div key={i.id} className="flex items-center justify-between border rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img src={i.image} alt="" className="w-20 h-20 object-cover rounded-md" />
            <div>
              <div className="font-medium">{i.name}</div>
              <div className="text-sm text-gray-600">${i.price.toFixed(2)}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input type="number" min="1" value={i.qty} onChange={(e)=>update(i.id, Number(e.target.value)||1)}
              className="w-16 border rounded px-2 py-1" />
            <button className="text-red-600" onClick={()=>remove(i.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="flex justify-end items-center gap-4">
        <div className="text-lg font-semibold">Total: ${total().toFixed(2)}</div>
        <Link to="/checkout" className="px-5 py-3 rounded-lg bg-blue-600 text-white">Checkout</Link>
      </div>
    </div>
  );
}
