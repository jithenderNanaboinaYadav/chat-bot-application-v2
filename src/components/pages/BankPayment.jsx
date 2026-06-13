import {
  MdSend,
  MdSchedule,
  MdCheckCircle,
  MdPending,
  MdCancel,
} from "react-icons/md";
import Header from "../Layout/Header";

const paymentHistory = [
  { id: 1, recipient: "John Smith", bank: "Chase Bank", amount: "$2,500.00", reference: "INV-2026-001", date: "Feb 15, 2026", status: "Completed" },
  { id: 2, recipient: "Acme Corp", bank: "Bank of America", amount: "$15,000.00", reference: "PO-4521", date: "Feb 14, 2026", status: "Completed" },
  { id: 3, recipient: "Sarah Johnson", bank: "Wells Fargo", amount: "$850.00", reference: "RENT-FEB", date: "Feb 14, 2026", status: "Pending" },
  { id: 4, recipient: "AWS Services", bank: "JP Morgan", amount: "$3,200.00", reference: "AWS-FEB-2026", date: "Feb 13, 2026", status: "Processing" },
  { id: 5, recipient: "Emily Davis", bank: "Citibank", amount: "$1,200.00", reference: "SAL-FEB", date: "Feb 12, 2026", status: "Completed" },
  { id: 6, recipient: "Office Supplies Co", bank: "PNC Bank", amount: "$475.00", reference: "OS-8834", date: "Feb 10, 2026", status: "Failed" },
];

const scheduledPayments = [
  { id: 1, recipient: "Landlord LLC", amount: "$2,800.00", frequency: "Monthly", nextDate: "Mar 1, 2026" },
  { id: 2, recipient: "Insurance Co", amount: "$450.00", frequency: "Monthly", nextDate: "Mar 5, 2026" },
  { id: 3, recipient: "Internet Provider", amount: "$89.99", frequency: "Monthly", nextDate: "Mar 10, 2026" },
];

function StatusIcon({ status }) {
  switch (status) {
    case "Completed":
      return <MdCheckCircle className="text-emerald-500" size={18} />;
    case "Pending":
      return <MdPending className="text-amber-500" size={18} />;
    case "Processing":
      return <MdSchedule className="text-blue-500" size={18} />;
    case "Failed":
      return <MdCancel className="text-red-500" size={18} />;
    default:
      return null;
  }
}

function BankPayment() {
  return (
    <div>
      <Header title="Bank Payment" />
      <div className="p-6">
        {/* Payment Form */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6">
            New Bank Payment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Recipient Name
              </label>
              <input
                type="text"
                placeholder="Enter recipient name"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Bank Name
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                <option>Select bank</option>
                <option>Chase Bank</option>
                <option>Bank of America</option>
                <option>Wells Fargo</option>
                <option>Citibank</option>
                <option>JP Morgan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Account Number
              </label>
              <input
                type="text"
                placeholder="Enter account number"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Routing Number
              </label>
              <input
                type="text"
                placeholder="Enter routing number"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  $
                </span>
                <input
                  type="text"
                  placeholder="0.00"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Reference / Note
              </label>
              <input
                type="text"
                placeholder="Payment reference"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm">
              <MdSend size={18} />
              Send Payment
            </button>
            <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium transition-colors">
              <MdSchedule size={18} />
              Schedule
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Payment History */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">
                Payment History
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-slate-500 border-b border-slate-100">
                    <th className="px-6 py-3 font-medium">Recipient</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Reference</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {payment.recipient}
                          </p>
                          <p className="text-xs text-slate-400">
                            {payment.bank}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                        {payment.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {payment.reference}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {payment.date}
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1.5">
                          <StatusIcon status={payment.status} />
                          <span
                            className={`text-xs font-medium ${
                              payment.status === "Completed"
                                ? "text-emerald-700"
                                : payment.status === "Pending"
                                ? "text-amber-700"
                                : payment.status === "Processing"
                                ? "text-blue-700"
                                : "text-red-600"
                            }`}
                          >
                            {payment.status}
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Scheduled Payments */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">
                Scheduled Payments
              </h3>
            </div>
            <div className="p-4 space-y-4">
              {scheduledPayments.map((sp) => (
                <div
                  key={sp.id}
                  className="bg-slate-50 rounded-lg p-4 border border-slate-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-slate-800">
                      {sp.recipient}
                    </h4>
                    <span className="text-sm font-bold text-blue-600">
                      {sp.amount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MdSchedule size={14} />
                      {sp.frequency}
                    </span>
                    <span>Next: {sp.nextDate}</span>
                  </div>
                </div>
              ))}
              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 py-2.5 rounded-lg text-sm font-medium transition-colors">
                View All Scheduled
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankPayment;
