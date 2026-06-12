import { MdLock, MdAdd, MdMoreVert, MdTrendingUp } from "react-icons/md";
import Header from "../Layout/Header";

const vaults = [
  {
    id: 1,
    name: "Emergency Fund",
    balance: "$25,000.00",
    target: "$30,000.00",
    progress: 83,
    apy: "4.5%",
    status: "Active",
  },
  {
    id: 2,
    name: "Vacation Savings",
    balance: "$8,200.00",
    target: "$15,000.00",
    progress: 55,
    apy: "3.8%",
    status: "Active",
  },
  {
    id: 3,
    name: "Investment Reserve",
    balance: "$42,000.00",
    target: "$50,000.00",
    progress: 84,
    apy: "5.2%",
    status: "Active",
  },
  {
    id: 4,
    name: "Home Down Payment",
    balance: "$15,500.00",
    target: "$60,000.00",
    progress: 26,
    apy: "4.0%",
    status: "Active",
  },
  {
    id: 5,
    name: "Education Fund",
    balance: "$12,300.00",
    target: "$20,000.00",
    progress: 62,
    apy: "3.5%",
    status: "Locked",
  },
  {
    id: 6,
    name: "Retirement Boost",
    balance: "$35,000.00",
    target: "$100,000.00",
    progress: 35,
    apy: "6.1%",
    status: "Active",
  },
];

function Vaults() {
  return (
    <div>
      <Header title="Vaults" />
      <div className="p-6">
        {/* Summary bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Total Vault Balance</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">
              $138,000.00
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Active Vaults</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">5</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
            <p className="text-sm text-slate-500">Avg. APY</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1 flex items-center gap-2">
              4.5% <MdTrendingUp size={20} />
            </p>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-800">Your Vaults</h3>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
            <MdAdd size={18} />
            Create Vault
          </button>
        </div>

        {/* Vault Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {vaults.map((vault) => (
            <div
              key={vault.id}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2.5 rounded-lg">
                    <MdLock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {vault.name}
                    </h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        vault.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {vault.status}
                    </span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                  <MdMoreVert size={20} />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-slate-800">
                  {vault.balance}
                </p>
                <p className="text-sm text-slate-500">
                  Target: {vault.target}
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Progress</span>
                  <span className="font-medium text-slate-700">
                    {vault.progress}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      vault.progress >= 80
                        ? "bg-emerald-500"
                        : vault.progress >= 50
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    }`}
                    style={{ width: `${vault.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-sm text-slate-500">APY</span>
                <span className="text-sm font-semibold text-emerald-600">
                  {vault.apy}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vaults;
