import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { FileText, Download, ExternalLink, AlertCircle, CheckCircle, Calendar } from "lucide-react";

const exams = [
  { name: "B.A. Sem IV", date: "15 May 2026", status: "Upcoming", formDeadline: "30 April 2026" },
  { name: "B.Sc. Sem IV", date: "17 May 2026", status: "Upcoming", formDeadline: "30 April 2026" },
  { name: "B.Com. Sem IV", date: "19 May 2026", status: "Upcoming", formDeadline: "30 April 2026" },
  { name: "BCA Sem IV", date: "20 May 2026", status: "Upcoming", formDeadline: "30 April 2026" },
  { name: "M.A. Sem II", date: "22 May 2026", status: "Upcoming", formDeadline: "30 April 2026" },
  { name: "B.A. Sem II (Back)", date: "Completed", status: "Completed", formDeadline: "N/A" },
];

const results = [
  { name: "B.Sc. Sem IV – December 2025", date: "20 March 2026", link: "#" },
  { name: "B.A. Sem II – December 2025", date: "18 March 2026", link: "#" },
  { name: "B.Com. Sem II – December 2025", date: "15 March 2026", link: "#" },
  { name: "MCA Sem II – December 2025", date: "12 March 2026", link: "#" },
];

export default function Examination() {
  return (
    <div>
      <PageHero
        title="Examination"
        subtitle="Exam Schedule & Results"
        breadcrumb={[{ label: "Examination" }]}
      />

      {/* Alert */}
      <div className="bg-orange-50 border-b border-orange-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 text-orange-800 text-sm">
          <AlertCircle size={16} className="flex-shrink-0 text-orange-500" />
          <strong>Important:</strong> Exam Form Submission deadline extended to 30 April 2026. Submit before the last date to avoid late fees.
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

          {/* Left — Schedule & Forms */}
          <div className="lg:col-span-2 space-y-8">

            {/* Exam Schedule */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-navy-900 px-6 py-4 flex items-center justify-between">
                <h2 className="font-display font-bold text-white text-lg">Upcoming Examinations</h2>
                <Calendar size={18} className="text-gold-400" />
              </div>
              <div className="divide-y divide-gray-100">
                {exams.map((exam, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                      exam.status === "Upcoming" ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    <div className="flex-1">
                      <p className="font-medium text-navy-800 text-sm">{exam.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {exam.status === "Completed" ? "Result declared" : `Exam: ${exam.date} | Form: ${exam.formDeadline}`}
                      </p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      exam.status === "Upcoming"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}>
                      {exam.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam Forms */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-navy-800 px-6 py-4">
                <h2 className="font-display font-bold text-white text-lg">Examination Forms</h2>
              </div>
              <div className="p-6 space-y-3">
                {["Regular Exam Form 2026", "Ex-Student Exam Form 2026", "Back/Improvement Form 2026"].map((form) => (
                  <div key={form} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-navy-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-navy-500" />
                      <span className="text-sm font-medium text-navy-800">{form}</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" className="flex items-center gap-1 text-xs bg-navy-900 text-white px-3 py-1.5 rounded-lg hover:bg-navy-800 transition-colors">
                        <Download size={11} /> Download
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs bg-gold-500 text-navy-900 px-3 py-1.5 rounded-lg hover:bg-gold-600 transition-colors font-semibold">
                        Fill Online
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admit Card */}
            <div className="bg-gold-50 border border-gold-200 rounded-2xl p-6">
              <h3 className="font-semibold text-navy-900 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-gold-600" /> Admit Card / Hall Ticket
              </h3>
              <p className="text-gray-600 text-sm mb-4">Admit cards will be available 10 days before the examination. Students must carry a valid admit card to the exam hall.</p>
              <a href="#" className="btn-primary text-sm py-2.5">
                Download Admit Card <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Results */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="bg-green-700 px-6 py-4">
                <h3 className="font-display font-bold text-white text-base">Latest Results</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {results.map((r, i) => (
                  <div key={i} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                    <p className="text-sm font-medium text-navy-800 leading-snug">{r.name}</p>
                    <p className="text-xs text-gray-400 mt-1 mb-2">{r.date}</p>
                    <a href={r.link} className="flex items-center gap-1 text-xs text-navy-600 hover:text-gold-600 font-semibold transition-colors">
                      View Result <ExternalLink size={11} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
              <div className="space-y-2">
                {[
                  "DDU University Website",
                  "University Result Portal",
                  "Grievance / Complaint",
                  "Contact Exam Cell",
                ].map((link) => (
                  <a key={link} href="#" className="flex items-center justify-between p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-navy-200 hover:text-white transition-all group">
                    {link}
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-sm text-red-800">
              <p className="font-semibold mb-1 flex items-center gap-1.5">
                <AlertCircle size={14} /> Important Notice
              </p>
              <p>Use of unfair means during examination will lead to immediate disqualification and disciplinary action.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
