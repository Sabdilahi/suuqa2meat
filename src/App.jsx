export default function App() {
  return (
    <main className="min-h-full grid place-items-center p-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Tailwind + Vite + React</h1>
        <p className="text-slate-600">
          If this box is styled, Tailwind is working 🎉
        </p>
        <div className="rounded-xl border p-6 shadow-sm">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
            Hello Tailwind
          </button>
        </div>
      </div>
    </main>
  )
}
