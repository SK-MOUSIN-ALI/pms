import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Projects", path: "/projects", icon: <FolderKanban size={20} /> },
    { name: "Tasks", path: "/tasks", icon: <ListTodo size={20} /> },
    { name: "Team", path: "/team", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-md ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold text-indigo-600">
            PMS Tool
          </Link>
          <button
            className="lg:hidden text-gray-600 hover:text-indigo-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="mt-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600 ${
                  isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-700"
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto px-6 py-4 border-t border-gray-200">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 shadow-sm sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-gray-700 hover:text-indigo-600"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={22} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <img
                src="https://i.pravatar.cc/32"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700 hidden sm:block">
                Admin User
              </span>
            </div>
          </div>
        </header>

        {/* Main Outlet */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
