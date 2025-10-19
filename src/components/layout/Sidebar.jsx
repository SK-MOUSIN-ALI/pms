import { NavLink } from "react-router-dom";
import { LayoutDashboard, FolderKanban, ListTodo, Users, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Projects", path: "/projects", icon: <FolderKanban size={20} /> },
    { name: "Tasks", path: "/tasks", icon: <ListTodo size={20} /> },
    { name: "Team", path: "/team", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r shadow-sm">
      <div className="p-4 text-2xl font-bold text-indigo-600 border-b">PMS</div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
                isActive ? "bg-indigo-100 text-indigo-600 font-medium" : ""
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-600">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
