import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700">
        Fresh Livestock & Meat — Delivered Fast
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 mb-8">
        Order camel, cow, goat, or sheep online for celebrations, donations, or daily meals.
        Choose live or prepared meat, add slaughter service, and we’ll deliver to your doorstep.
      </p>

      <div className="flex gap-4">
        <Link
          to="/catalog"
          className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Shop Now
        </Link>

        <Link
          to="/donate"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition"
        >
          Donate an Animal
        </Link>
      </div>

      <div className="mt-12">
        <img
          src="/goat.png"
          alt="Livestock delivery"
          className="w-64 md:w-80 mx-auto"
        />
      </div>
    </section>
  );
}
