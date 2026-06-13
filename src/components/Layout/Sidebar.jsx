import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdAccountBalance,
  MdPeople,
  MdSwapHoriz,
  MdLock,
  MdSettings,
  MdLogout,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Dashboard", icon: <MdDashboard size={20} /> },
  { path: "/vaults", label: "Vaults", icon: <MdLock size={20} /> },
  { path: "/exchanges", label: "Exchanges", icon: <MdSwapHoriz size={20} /> },
  { path: "/payees", label: "Payees", icon: <MdPeople size={20} /> },
  {
    path: "/bank-payment",
    label: "Bank Payment",
    icon: <MdAccountBalance size={20} />,
  },
  { path: "/settings", label: "Settings", icon: <MdSettings size={20} /> },
];

function Sidebar() {
  const { user, logout, isAuthenticated } = useAuth0();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 text-white p-2 rounded-lg shadow-lg"
      >
        <MdMenu size={24} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-slate-900 text-white
          flex flex-col transition-all duration-300 ease-in-out
          ${collapsed ? "w-[72px]" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          {!collapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              FinanceHub
            </h1>
          )}
          <button
            onClick={() => {
              setCollapsed(!collapsed);
              setMobileOpen(false);
            }}
            className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors hidden lg:block"
          >
            {collapsed ? <MdMenu size={20} /> : <MdClose size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors lg:hidden"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }
                    ${collapsed ? "justify-center" : ""}`
                  }
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="border-t border-slate-700 p-4">
          {isAuthenticated && user && (
            <div
              className={`flex items-center gap-3 mb-3 ${
                collapsed ? "justify-center" : ""
              }`}
            >
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full ring-2 ring-blue-500"
              />
              {!collapsed && (
                <div className="overflow-hidden">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">
                    {user.email}
                  </p>
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-slate-300 hover:bg-red-600/20 hover:text-red-400 transition-colors ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <MdLogout size={20} />
            {!collapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
