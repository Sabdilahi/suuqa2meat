import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { supabase } from "./lib/supabaseClient"; // ⬅️ add this

// TEMP TEST — we will delete this after
(async () => {
  const { data, error } = await supabase.from("products").select("*").limit(1);
  console.log("Supabase test data:", data);
  console.log("Supabase test error:", error);
})();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
