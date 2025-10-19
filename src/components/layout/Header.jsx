import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-3 border-b shadow-sm">
      <div className="flex items-center gap-2">
        <button className="lg:hidden p-2 text-gray-600 hover:text-indigo-600">
          <Menu size={22} />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border"
        />
        <span className="text-gray-700 font-medium">Admin</span>
      </div>
    </header>
  );
}
