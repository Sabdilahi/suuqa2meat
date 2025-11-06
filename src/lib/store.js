import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: [], // {id, name, price, qty, image}
  count: 0,
  total: 0, // cents

  add(item, qty = 1) {
    const items = [...get().items];
    const ix = items.findIndex((i) => i.id === item.id);
    if (ix >= 0) items[ix] = { ...items[ix], qty: items[ix].qty + qty };
    else items.push({ ...item, qty });
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    set({ items, count, total });
  },

  remove(id) {
    const items = get().items.filter((i) => i.id !== id);
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    set({ items, count, total });
  },

  setQty(id, qty) {
    const items = get().items.map((i) => (i.id === id ? { ...i, qty } : i));
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    set({ items, count, total });
  },

  clear() {
    set({ items: [], count: 0, total: 0 });
  },
}));
