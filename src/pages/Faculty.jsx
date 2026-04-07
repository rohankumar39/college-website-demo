import { useState } from "react";
import PageHero from "../components/PageHero";
import { Search, Mail, Phone, Award } from "lucide-react";
import { FACULTY } from "../data/siteData";

const DEPTS = ["All", "Administration", "Science", "Arts", "Commerce", "Computer", "Social Science"];

export default function Faculty() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = FACULTY.filter((f) => {
    const matchDept = dept === "All" || f.dept === dept;
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  const initials = (name) => name.split(" ").filter((_, i) => i < 2).map((w) => w[0]).join("");

  const avatarColors = [
    "bg-navy-800", "bg-gold-500 text-navy-900", "bg-green-700",
    "bg-purple-700", "bg-red-700", "bg-teal-700", "bg-orange-600", "bg-indigo-700"
  ];

  return (
    <div>
      <PageHero
        title="Our Faculty"
        subtitle="Expert Educators"
        breadcrumb={[{ label: "Faculty" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative max-w-sm w-full">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {DEPTS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDept(d)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                    dept === d ? "bg-navy-900 text-white border-navy-900" : "bg-white text-navy-700 border-gray-200 hover:border-navy-300"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-5">{filtered.length} faculty member(s)</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((f, i) => (
              <div key={f.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group text-center">
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold font-display ${avatarColors[i % avatarColors.length]}`}>
                  {initials(f.name)}
                </div>
                <h3 className="font-semibold text-navy-900 text-base leading-tight mb-0.5">{f.name}</h3>
                <p className="text-gold-600 text-xs font-semibold mb-0.5">{f.designation}</p>
                <p className="text-gray-400 text-xs mb-3">{f.dept}</p>
                <div className="flex items-center justify-center gap-3 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Award size={11} className="text-navy-400" /> {f.qual}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex items-center justify-center gap-1 text-xs text-gray-400">
                  <Phone size={10} /> Exp: {f.exp}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>No faculty found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
