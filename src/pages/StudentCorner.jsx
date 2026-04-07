import { useState } from "react";
import PageHero from "../components/PageHero";
import { Download, ExternalLink, BookOpen, FileText, CreditCard, Book, Award, User, LogIn, Lock } from "lucide-react";

const syllabusData = [
  { course: "B.A. (All Subjects)", year: "2025-26", size: "2.4 MB" },
  { course: "B.Sc. (All Subjects)", year: "2025-26", size: "3.1 MB" },
  { course: "B.Com. (All Subjects)", year: "2025-26", size: "1.8 MB" },
  { course: "BCA", year: "2025-26", size: "2.0 MB" },
  { course: "M.A. (Hindi)", year: "2025-26", size: "1.2 MB" },
  { course: "M.A. (English)", year: "2025-26", size: "1.5 MB" },
  { course: "M.Com.", year: "2025-26", size: "1.4 MB" },
  { course: "MCA", year: "2025-26", size: "2.2 MB" },
];

const oldPapers = [
  { course: "B.A. Sem I", year: "Dec 2025", subjects: "All" },
  { course: "B.Sc. Sem I", year: "Dec 2025", subjects: "All" },
  { course: "B.Com. Sem I", year: "Dec 2025", subjects: "All" },
  { course: "B.A. Sem I", year: "Dec 2024", subjects: "All" },
  { course: "B.Sc. Sem I", year: "Dec 2024", subjects: "All" },
  { course: "BCA Sem I", year: "Dec 2024", subjects: "All" },
];

const downloads = [
  { label: "Migration Certificate Application", icon: FileText },
  { label: "Character Certificate Application", icon: FileText },
  { label: "Scholarship Application Form", icon: Award },
  { label: "TC (Transfer Certificate) Request", icon: FileText },
  { label: "Duplicate Marksheet Application", icon: FileText },
  { label: "Fee Receipt Template", icon: CreditCard },
];

const TABS = ["Syllabus", "Old Papers", "Downloads", "Fee Payment", "Student Login"];

export default function StudentCorner() {
  const [activeTab, setActiveTab] = useState("Syllabus");
  const [loginForm, setLoginForm] = useState({ roll: "", dob: "" });

  return (
    <div>
      <PageHero
        title="Student Corner"
        subtitle="Resources & Services"
        breadcrumb={[{ label: "Student Corner" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">

          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 bg-white rounded-2xl p-2 shadow-sm border border-gray-100 mb-8">
            {TABS.map((tab) => {
              const icons = { Syllabus: BookOpen, "Old Papers": Book, Downloads: Download, "Fee Payment": CreditCard, "Student Login": User };
              const Icon = icons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex-1 justify-center ${
                    activeTab === tab
                      ? "bg-navy-900 text-white shadow"
                      : "text-navy-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={15} /> {tab}
                </button>
              );
            })}
          </div>

          {/* SYLLABUS */}
          {activeTab === "Syllabus" && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-navy-900 px-6 py-4">
                <h2 className="font-display font-bold text-white text-lg">Syllabus 2025–26</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {syllabusData.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen size={16} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-800 text-sm">{s.course}</p>
                      <p className="text-xs text-gray-400">{s.year} • PDF • {s.size}</p>
                    </div>
                    <a href="#" className="flex items-center gap-1.5 text-xs bg-navy-900 text-white px-3 py-2 rounded-lg hover:bg-navy-800 transition-colors">
                      <Download size={12} /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* OLD PAPERS */}
          {activeTab === "Old Papers" && (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-orange-700 px-6 py-4">
                <h2 className="font-display font-bold text-white text-lg">Previous Year Question Papers</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {oldPapers.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Book size={16} className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-800 text-sm">{p.course}</p>
                      <p className="text-xs text-gray-400">Year: {p.year} • Subjects: {p.subjects}</p>
                    </div>
                    <a href="#" className="flex items-center gap-1.5 text-xs bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      <Download size={12} /> Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOWNLOADS */}
          {activeTab === "Downloads" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {downloads.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-navy-200 transition-all flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy-100 transition-colors">
                      <Icon size={20} className="text-navy-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-navy-800 text-sm">{d.label}</p>
                      <p className="text-xs text-gray-400">PDF Format</p>
                    </div>
                    <a href="#" className="flex items-center gap-1 text-xs text-navy-600 hover:text-gold-600 font-semibold transition-colors">
                      <Download size={13} />
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* FEE PAYMENT */}
          {activeTab === "Fee Payment" && (
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CreditCard size={28} className="text-green-600" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-2xl mb-2">Online Fee Payment</h3>
                <p className="text-gray-500 mb-6 text-sm">Pay your tuition fee, exam fee, or any other dues securely through our online portal.</p>
                <div className="space-y-3 text-left bg-gray-50 rounded-xl p-5 mb-6 text-sm">
                  {[
                    "Tuition Fee (Semester/Annual)",
                    "Examination Fee",
                    "Library Fee",
                    "Development Fee",
                    "Other Dues",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="btn-primary w-full justify-center text-base py-3.5"
                >
                  Pay Fee Online <ExternalLink size={16} />
                </a>
                <p className="text-xs text-gray-400 mt-3">Secured by SBI Collect / PayU Gateway</p>
              </div>
            </div>
          )}

          {/* STUDENT LOGIN */}
          {activeTab === "Student Login" && (
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <User size={28} className="text-navy-700" />
                </div>
                <h3 className="font-display font-bold text-navy-900 text-2xl text-center mb-1">Student Login</h3>
                <p className="text-gray-500 text-sm text-center mb-6">Access your profile, results, and more</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Enrollment / Roll Number *</label>
                    <input
                      value={loginForm.roll}
                      onChange={(e) => setLoginForm({ ...loginForm, roll: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="Enter your roll number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Date of Birth *</label>
                    <input
                      type="date"
                      value={loginForm.dob}
                      onChange={(e) => setLoginForm({ ...loginForm, dob: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                    />
                  </div>
                  <button className="btn-primary w-full justify-center py-3">
                    <LogIn size={16} /> Login to Portal
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <a href="#" className="text-xs text-navy-500 hover:text-gold-600 flex items-center justify-center gap-1 transition-colors">
                    <Lock size={11} /> Forgot credentials? Contact office
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
