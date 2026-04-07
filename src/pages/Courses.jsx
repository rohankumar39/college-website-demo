import { useState } from "react";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, Users, ArrowRight, BookOpen, Award, Search } from "lucide-react";
import { COURSES } from "../data/siteData";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const allCourses = COURSES.flatMap((cat) =>
    cat.courses.map((c) => ({ ...c, category: cat.category }))
  );

  const categories = ["All", ...COURSES.map((c) => c.category)];

  const filtered = allCourses.filter((c) => {
    const matchCat = activeTab === "All" || c.category === activeTab;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <PageHero
        title="Courses Offered"
        subtitle="Academic Programs"
        breadcrumb={[{ label: "Courses" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-navy-500 text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat
                      ? "bg-navy-900 text-white"
                      : "bg-white text-navy-700 border border-gray-200 hover:border-navy-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-gray-500 mb-5">{filtered.length} course(s) found</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((course, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-navy-300 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                    <GraduationCap size={22} className="text-navy-700" />
                  </div>
                  <span className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2.5 py-1 rounded-full font-semibold">
                    {course.category.includes("UG") ? "UG" : course.category.includes("PG") ? "PG" : "Diploma"}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy-900 text-lg mb-3 group-hover:text-navy-700 transition-colors">
                  {course.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-navy-400" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={13} className="text-navy-400" /> {course.seats} seats
                  </span>
                </div>
                <div className="text-xs text-gray-400 italic mb-4">{course.category}</div>
                <Link
                  to="/admission"
                  className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                >
                  Apply Now <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p>No courses found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-14 bg-navy-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Award size={36} className="mx-auto text-gold-400 mb-4" />
          <h2 className="font-display text-3xl font-bold mb-3">Ready to Join?</h2>
          <p className="text-navy-200 mb-6">Admissions for 2026–27 are now open. Apply before seats fill up.</p>
          <Link to="/admission" className="btn-primary text-base px-8 py-3.5">
            Apply for Admission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
