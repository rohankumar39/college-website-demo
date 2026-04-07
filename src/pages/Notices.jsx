import { useState } from "react";
import PageHero from "../components/PageHero";
import { Bell, Download, Search, ChevronRight } from "lucide-react";
import { NOTICES } from "../data/siteData";

const TYPES = ["All", "Admission", "Examination", "Scholarship", "Events", "Result", "General", "Finance"];

const badgeColors = {
  Admission: "bg-blue-100 text-blue-700 border-blue-200",
  Examination: "bg-orange-100 text-orange-700 border-orange-200",
  Scholarship: "bg-green-100 text-green-700 border-green-200",
  Events: "bg-purple-100 text-purple-700 border-purple-200",
  Result: "bg-red-100 text-red-700 border-red-200",
  General: "bg-gray-100 text-gray-600 border-gray-200",
  Finance: "bg-yellow-100 text-yellow-700 border-yellow-200",
};

// Extend notices for fuller page
const ALL_NOTICES = [
  ...NOTICES,
  { id: 9, title: "NSS Camp Registration Open – June 2026", date: "2026-03-08", type: "Events", isNew: false },
  { id: 10, title: "Internal Assessment Schedule – April 2026", date: "2026-03-05", type: "Examination", isNew: false },
  { id: 11, title: "Post Matric Scholarship – OBC/SC/ST Students", date: "2026-02-28", type: "Scholarship", isNew: false },
  { id: 12, title: "College Closed – Holi Holiday (14-15 March)", date: "2026-02-25", type: "General", isNew: false },
  { id: 13, title: "B.A. Sem II Practical Exam Timetable Released", date: "2026-02-20", type: "Examination", isNew: false },
  { id: 14, title: "Cultural Competition – Talent Hunt 2026", date: "2026-02-15", type: "Events", isNew: false },
];

export default function Notices() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");

  const filtered = ALL_NOTICES.filter((n) => {
    const matchType = activeType === "All" || n.type === activeType;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div>
      <PageHero
        title="Notices & News"
        subtitle="Updates"
        breadcrumb={[{ label: "Notices" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          {/* Search */}
          <div className="relative mb-6 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  activeType === type
                    ? "bg-navy-900 text-white border-navy-900"
                    : "bg-white text-navy-700 border-gray-200 hover:border-navy-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-500 mb-4">{filtered.length} notice(s) found</p>

          {/* Notices list */}
          <div className="space-y-3">
            {filtered.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy-100 transition-colors">
                  <Bell size={16} className="text-navy-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${badgeColors[n.type] || badgeColors.General}`}>
                      {n.type}
                    </span>
                    {n.isNew && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">NEW</span>}
                  </div>
                  <p className="text-navy-800 font-medium leading-snug group-hover:text-navy-600 transition-colors">{n.title}</p>
                  <p className="text-xs text-gray-400 mt-1.5">
                    {new Date(n.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button className="flex items-center gap-1 text-xs text-navy-500 hover:text-navy-700 bg-gray-50 hover:bg-navy-50 px-2.5 py-1.5 rounded-lg transition-colors">
                    <Download size={12} /> PDF
                  </button>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-gold-400 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Bell size={40} className="mx-auto mb-3 opacity-30" />
              <p>No notices found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
