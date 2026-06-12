import {
  MdSwapHoriz,
  MdTrendingUp,
  MdTrendingDown,
  MdRefresh,
} from "react-icons/md";
import Header from "../Layout/Header";

const exchangeRates = [
  { pair: "USD / EUR", rate: "0.9215", change: "+0.12%", trending: "up" },
  { pair: "USD / GBP", rate: "0.7894", change: "-0.08%", trending: "down" },
  { pair: "USD / JPY", rate: "149.32", change: "+0.45%", trending: "up" },
  { pair: "EUR / GBP", rate: "0.8568", change: "-0.15%", trending: "down" },
  { pair: "BTC / USD", rate: "97,540.00", change: "+2.34%", trending: "up" },
  { pair: "ETH / USD", rate: "3,842.50", change: "+1.87%", trending: "up" },
];

const recentExchanges = [
  { id: 1, from: "USD", to: "EUR", fromAmt: "$5,000.00", toAmt: "€4,607.50", rate: "0.9215", date: "Feb 15, 2026", status: "Completed" },
  { id: 2, from: "USD", to: "BTC", fromAmt: "$10,000.00", toAmt: "0.1025 BTC", rate: "97,540", date: "Feb 14, 2026", status: "Completed" },
  { id: 3, from: "GBP", to: "USD", fromAmt: "£2,000.00", toAmt: "$2,533.56", rate: "1.2668", date: "Feb 13, 2026", status: "Pending" },
  { id: 4, from: "EUR", to: "JPY", fromAmt: "€3,000.00", toAmt: "¥486,078", rate: "162.03", date: "Feb 12, 2026", status: "Completed" },
];

function Exchanges() {
  return (
    <div>
      <Header title="Exchanges" />
      <div className="p-6">
        {/* Exchange Widget */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">
              Currency Exchange
            </h3>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-medium">
              <MdRefresh size={18} />
              Refresh Rates
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto] gap-4 items-end">
            {/* From */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                From
              </label>
              <div className="flex gap-2">
                <select className="bg-slate-100 rounded-lg px-3 py-3 text-sm font-medium text-slate-800 border-0 outline-none">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                </select>
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 bg-slate-100 rounded-lg px-4 py-3 text-sm outline-none text-slate-800 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Swap icon */}
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                <MdSwapHoriz size={20} />
              </button>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                To
              </label>
              <div className="flex gap-2">
                <select className="bg-slate-100 rounded-lg px-3 py-3 text-sm font-medium text-slate-800 border-0 outline-none">
                  <option>EUR</option>
                  <option>USD</option>
                  <option>GBP</option>
                  <option>JPY</option>
                </select>
                <input
                  type="text"
                  placeholder="0.00"
                  className="flex-1 bg-slate-100 rounded-lg px-4 py-3 text-sm outline-none text-slate-800 placeholder:text-slate-400"
                  readOnly
                />
              </div>
            </div>

            {/* Exchange button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Exchange
            </button>
          </div>
        </div>

        {/* Exchange Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {exchangeRates.map((rate) => (
            <div
              key={rate.pair}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{rate.pair}</p>
                  <p className="text-xl font-bold text-slate-800 mt-1">
                    {rate.rate}
                  </p>
                </div>
                <span
                  className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${
                    rate.trending === "up"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {rate.trending === "up" ? (
                    <MdTrendingUp size={16} />
                  ) : (
                    <MdTrendingDown size={16} />
                  )}
                  {rate.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Exchanges Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800">
              Recent Exchanges
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500 border-b border-slate-100">
                  <th className="px-6 py-3 font-medium">From</th>
                  <th className="px-6 py-3 font-medium">To</th>
                  <th className="px-6 py-3 font-medium">Rate</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentExchanges.map((ex) => (
                  <tr
                    key={ex.id}
                    className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm">
                      <span className="font-medium text-slate-800">
                        {ex.fromAmt}
                      </span>
                      <span className="text-slate-400 ml-1">{ex.from}</span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="font-medium text-slate-800">
                        {ex.toAmt}
                      </span>
                      <span className="text-slate-400 ml-1">{ex.to}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {ex.rate}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {ex.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          ex.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {ex.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exchanges;
