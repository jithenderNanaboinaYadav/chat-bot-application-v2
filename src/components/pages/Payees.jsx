import {
  MdPeople,
  MdAdd,
  MdSearch,
  MdEdit,
  MdDelete,
  MdSend,
} from "react-icons/md";
import Header from "../Layout/Header";

const payees = [
  { id: 1, name: "John Smith", bank: "Chase Bank", account: "****4523", email: "john@email.com", lastPaid: "Feb 14, 2026", avatar: "JS" },
  { id: 2, name: "Sarah Johnson", bank: "Bank of America", account: "****8901", email: "sarah@email.com", lastPaid: "Feb 12, 2026", avatar: "SJ" },
  { id: 3, name: "Mike Wilson", bank: "Wells Fargo", account: "****3345", email: "mike@email.com", lastPaid: "Feb 10, 2026", avatar: "MW" },
  { id: 4, name: "Emily Davis", bank: "Citibank", account: "****7782", email: "emily@email.com", lastPaid: "Feb 8, 2026", avatar: "ED" },
  { id: 5, name: "Robert Brown", bank: "US Bank", account: "****1156", email: "robert@email.com", lastPaid: "Feb 5, 2026", avatar: "RB" },
  { id: 6, name: "Lisa Anderson", bank: "PNC Bank", account: "****9934", email: "lisa@email.com", lastPaid: "Jan 28, 2026", avatar: "LA" },
  { id: 7, name: "David Taylor", bank: "TD Bank", account: "****6678", email: "david@email.com", lastPaid: "Jan 25, 2026", avatar: "DT" },
  { id: 8, name: "Jennifer Martinez", bank: "Capital One", account: "****2210", email: "jen@email.com", lastPaid: "Jan 20, 2026", avatar: "JM" },
];

const avatarColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-rose-500",
];

function Payees() {
  return (
    <div>
      <Header title="Payees" />
      <div className="p-6">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 gap-2 border border-slate-200 w-full sm:w-72">
            <MdSearch className="text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search payees..."
              className="bg-transparent outline-none text-sm text-slate-600 w-full placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <MdAdd size={18} />
            Add Payee
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 text-blue-600 p-2.5 rounded-lg">
                <MdPeople size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Payees</p>
                <p className="text-xl font-bold text-slate-800">{payees.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-lg">
                <MdSend size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Payments This Month</p>
                <p className="text-xl font-bold text-slate-800">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 text-purple-600 p-2.5 rounded-lg">
                <MdPeople size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Recently Added</p>
                <p className="text-xl font-bold text-slate-800">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {payees.map((payee, index) => (
            <div
              key={payee.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${
                    avatarColors[index % avatarColors.length]
                  } text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold`}
                >
                  {payee.avatar}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="font-semibold text-slate-800 truncate">
                    {payee.name}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {payee.email}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Bank</span>
                  <span className="text-slate-700 font-medium">
                    {payee.bank}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Account</span>
                  <span className="text-slate-700 font-medium">
                    {payee.account}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Last Paid</span>
                  <span className="text-slate-700">{payee.lastPaid}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <button className="flex-1 flex items-center justify-center gap-1 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 rounded-lg text-xs font-medium transition-colors">
                  <MdSend size={14} />
                  Pay
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <MdEdit size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                  <MdDelete size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payees;
