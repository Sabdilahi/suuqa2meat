import { Link, NavLink } from "react-router-dom";
import { useCart } from "../lib/store";

export default function Navbar() {
  const count = useCart((s) => s.count);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700">
          Suuqa2Meat
        </Link>

        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? "text-green-700 font-semibold" : "hover:text-green-600"
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              "relative " +
              (isActive
                ? "text-green-700 font-semibold"
                : "hover:text-green-600")
            }
          >
            Cart
            {count > 0 && (
              <span className="ml-1 text-xs bg-green-600 text-white rounded-full px-2 py-0.5">
                {count}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
