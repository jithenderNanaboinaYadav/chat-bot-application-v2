import { MdNotifications, MdSearch } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

function Header({ title }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4 pl-12 lg:pl-0">
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 gap-2">
          <MdSearch className="text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-slate-600 w-48 placeholder:text-slate-400"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <MdNotifications size={22} className="text-slate-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User avatar */}
        {isAuthenticated && user && (
          <div className="flex items-center gap-2">
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
