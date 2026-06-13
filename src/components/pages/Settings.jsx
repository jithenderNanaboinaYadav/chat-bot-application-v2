import { MdSave } from "react-icons/md";
import Header from "../Layout/Header";

function Settings() {
  return (
    <div>
      <Header title="Settings" />
      <div className="p-6 max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">
            Account Settings
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Display Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Default Currency
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">
            Notifications
          </h3>
          <div className="space-y-4">
            {[
              "Payment confirmations",
              "Exchange rate alerts",
              "Vault milestone reached",
              "Security alerts",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center justify-between py-2"
              >
                <span className="text-sm text-slate-700">{item}</span>
                <div className="relative">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-10 h-6 bg-slate-200 peer-checked:bg-blue-600 rounded-full transition-colors cursor-pointer after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-transform peer-checked:after:translate-x-4 after:shadow-sm" />
                </div>
              </label>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm">
          <MdSave size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
