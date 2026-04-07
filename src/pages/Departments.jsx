import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { FlaskConical, Palette, TrendingUp, Monitor, Globe, Activity } from "lucide-react";
import { DEPARTMENTS } from "../data/siteData";

const iconMap = { FlaskConical, Palette, TrendingUp, Monitor, Globe, Activity };

export default function Departments() {
  return (
    <div>
      <PageHero
        title="Our Departments"
        subtitle="Academic Schools"
        breadcrumb={[{ label: "Departments" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => {
              const Icon = iconMap[dept.icon] || BookOpen;
              return (
                <div
                  key={dept.name}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  {/* Header band */}
                  <div className="h-2" style={{ backgroundColor: dept.color }} />
                  <div className="p-7">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white"
                      style={{ backgroundColor: dept.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-xl mb-2">{dept.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{dept.desc}</p>
                    <div className="flex items-center gap-2 text-sm mb-5">
                      <Users size={14} className="text-navy-400" />
                      <span className="text-gray-600 text-xs">HOD: <strong>{dept.head}</strong></span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs mb-5">
                      {["Well-equipped Lab", "Expert Faculty", "Regular Seminars"].map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <Link
                      to="/courses"
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: dept.color }}
                    >
                      View Courses <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy-900 text-center text-white">
        <div className="max-w-xl mx-auto px-4">
          <Award size={36} className="mx-auto text-gold-400 mb-4" />
          <h2 className="font-display text-3xl font-bold mb-3">Join Our Academic Community</h2>
          <p className="text-navy-200 mb-6">Explore our diverse programs and find the perfect fit for your career goals.</p>
          <Link to="/admission" className="btn-primary">Apply for Admission <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
