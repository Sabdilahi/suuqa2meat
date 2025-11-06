// src/lib/api.js
const PRODUCTS = [
  {
    id: "goat-whole",
    name: "Goat - Whole",
    price: 18900, // cents
    image: "/assets/products/goat.jpg",
    description: "Fresh whole goat. Slaughter service available.",
  },
  {
    id: "sheep-whole",
    name: "Sheep - Whole",
    price: 21900,
    image: "/assets/products/sheep.jpg",
    description: "Tender whole sheep for occasions or family meals.",
  },
  {
    id: "cow-quarter",
    name: "Cow Quarter",
    price: 34900,
    image: "/assets/products/cow-quarter.jpg",
    description: "Beef quarter, cut to order.",
  },
];

// Simulate net latency
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

export async function listProducts() {
  await delay(150);
  return PRODUCTS;
}

export async function getProduct(id) {
  await delay(120);
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) throw new Error("Product not found");
  return p;
}

// TEMP: "place order" just echoes back an order number and stores it in localStorage.
// We'll replace this with Supabase soon.
export async function placeOrder(payload) {
  await delay(250);
  const orderId = "ORD-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  const existing = JSON.parse(localStorage.getItem("orders") || "[]");
  existing.push({ id: orderId, ...payload, createdAt: new Date().toISOString() });
  localStorage.setItem("orders", JSON.stringify(existing));
  return { id: orderId };
}

export async function listOrders() {
  await delay(120);
  return JSON.parse(localStorage.getItem("orders") || "[]");
}
