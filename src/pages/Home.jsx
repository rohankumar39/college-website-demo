import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight, ArrowRight, Bell, BookOpen, GraduationCap,
  Users, Award, TrendingUp, Phone, ClipboardList, User,
  FileText, CreditCard, BarChart2, Book, FlaskConical,
  Palette, Monitor, Globe, Activity, Star, CheckCircle
} from "lucide-react";
import { COLLEGE, STATS, NOTICES, COURSES, DEPARTMENTS, QUICK_LINKS, GALLERY_ITEMS } from "../data/siteData";

// Animated Counter Hook
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, delay }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const count = useCounter(value, 2000, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-gold-400 mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm font-medium">{label}</div>
    </div>
  );
}

const iconMap = {
  ClipboardList, User, FileText, CreditCard, BarChart2, Book,
  FlaskConical, Palette, TrendingUp, Monitor, Globe, Activity,
  GraduationCap, BookOpen, Award,
};

function NoticeTypeBadge({ type }) {
  const colors = {
    Admission: "bg-blue-100 text-blue-700",
    Examination: "bg-orange-100 text-orange-700",
    Scholarship: "bg-green-100 text-green-700",
    Events: "bg-purple-100 text-purple-700",
    Result: "bg-red-100 text-red-700",
    General: "bg-gray-100 text-gray-600",
    Finance: "bg-yellow-100 text-yellow-700",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${colors[type] || colors.General}`}>
      {type}
    </span>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden">
        {/* BG pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
          {/* Gold glow orbs */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full opacity-5 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-navy-400 rounded-full opacity-10 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm px-4 py-1.5 rounded-full mb-6">
              <Star size={13} fill="currentColor" /> Admission Open for 2026–27
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {COLLEGE.name}
            </h1>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-5" />
            <p className="text-navy-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              {COLLEGE.tagline}. Quality education with world-class faculty and state-of-the-art infrastructure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/admission" className="btn-primary text-base px-7 py-3.5">
                Apply Now <ArrowRight size={18} />
              </Link>
              <Link to="/courses" className="btn-outline text-base px-7 py-3.5">
                View Courses <ChevronRight size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["UGC Approved", "NAAC Accredited", "Est. 2000"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-sm text-navy-300">
                  <CheckCircle size={14} className="text-gold-400" /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-white font-semibold">Latest Updates</h3>
                  <span className="text-gold-400 text-xs flex items-center gap-1"><Bell size={11} /> Live</span>
                </div>
                {NOTICES.slice(0, 5).map((n) => (
                  <div key={n.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <div>
                      <p className="text-white/90 text-sm leading-snug group-hover:text-gold-300 transition-colors">{n.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <NoticeTypeBadge type={n.type} />
                        {n.isNew && <span className="text-xs text-green-400 font-bold">NEW</span>}
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/notices" className="flex items-center justify-center gap-1 text-gold-400 hover:text-gold-300 text-sm pt-2 transition-colors">
                  View All Notices <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="fill-white">
            <path d="M0,40 C480,80 960,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── NOTICE TICKER ── */}
      <section className="bg-navy-800 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <div className="flex-shrink-0 flex items-center gap-2 bg-gold-500 text-navy-900 px-3 py-1 rounded font-bold text-xs uppercase tracking-widest">
            <Bell size={11} /> Notice
          </div>
          <div className="marquee-container flex-1 overflow-hidden">
            <div className="marquee-track text-sm text-white/80">
              {[...NOTICES, ...NOTICES].map((n, i) => (
                <span key={i} className="mr-10">
                  <span className="text-gold-400 mr-2">●</span>{n.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {QUICK_LINKS.map((ql) => {
              const Icon = iconMap[ql.icon] || BookOpen;
              return (
                <Link
                  key={ql.label}
                  to={ql.href}
                  className={`${ql.color} text-white rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:opacity-90 hover:-translate-y-1 transition-all group shadow-md`}
                >
                  <Icon size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold leading-tight">{ql.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title mb-5">
              Shaping Future Leaders <br />
              <span className="text-gold-500">Since {COLLEGE.established}</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              {COLLEGE.name} is committed to academic excellence, innovation, and holistic student development. 
              Affiliated to {COLLEGE.affiliatedTo} and approved by UGC, we offer a transformative education experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Our state-of-the-art campus, dedicated faculty, and comprehensive curriculum prepare students for 
              successful careers and responsible citizenship in a globalized world.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-7">
              {[
                { label: "Expert Faculty", val: "120+" },
                { label: "Courses Offered", val: "35+" },
                { label: "Campus Area", val: "10 Acres" },
                { label: "Placement Rate", val: "85%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={18} className="text-navy-700" />
                  </div>
                  <div>
                    <div className="font-bold text-navy-900">{item.val}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary">
              Know More <ArrowRight size={16} />
            </Link>
          </div>

          {/* Principal Message Card */}
          <div className="space-y-4">
            <div className="bg-navy-900 text-white rounded-2xl p-7">
              <div className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-3">Principal's Message</div>
              <p className="text-navy-200 leading-relaxed text-sm italic mb-5">
                "Education is not just about acquiring knowledge – it's about building character, developing 
                critical thinking, and preparing students to contribute meaningfully to society. At SIHE, we 
                create an environment where every student can discover their potential."
              </p>
              <div className="flex items-center gap-3 border-t border-navy-700 pt-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center font-bold text-navy-900">AK</div>
                <div>
                  <div className="font-semibold text-white">Dr. Anand Kumar Sharma</div>
                  <div className="text-navy-400 text-xs">Principal, SIHE</div>
                </div>
              </div>
            </div>
            {/* Affiliation Info */}
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-5 flex items-center gap-4">
              <Award size={28} className="text-gold-600 flex-shrink-0" />
              <div>
                <div className="font-semibold text-navy-900 text-sm">Affiliated University</div>
                <div className="text-gray-600 text-sm">{COLLEGE.affiliatedTo}</div>
                <div className="text-gold-600 font-semibold text-xs mt-1">{COLLEGE.approvedBy}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Academic Programs</p>
            <h2 className="section-title">Courses We Offer</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {COURSES.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  activeCategory === i
                    ? "bg-navy-900 text-white shadow-md"
                    : "bg-white text-navy-700 border border-gray-200 hover:border-navy-300"
                }`}
              >
                {COURSES[i].category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURSES[activeCategory].courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-navy-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                    <GraduationCap size={18} className="text-navy-700" />
                  </div>
                  <span className="text-xs bg-gold-50 text-gold-700 border border-gold-200 px-2 py-1 rounded-full font-semibold">{course.duration}</span>
                </div>
                <h3 className="font-semibold text-navy-900 mb-1 group-hover:text-navy-700 transition-colors">{course.name}</h3>
                <p className="text-sm text-gray-500">Intake: {course.seats} seats</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-2">By The Numbers</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {STATS.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Our Schools</p>
            <h2 className="section-title">Academic Departments</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Science", icon: FlaskConical, color: "#1e3a80", desc: "Physics, Chemistry, Mathematics, Biology" },
              { name: "Arts & Humanities", icon: Palette, color: "#d97706", desc: "Hindi, English, History, Political Science" },
              { name: "Commerce", icon: TrendingUp, color: "#059669", desc: "Accounting, Economics, Business Studies" },
              { name: "Computer Science", icon: Monitor, color: "#7c3aed", desc: "BCA, MCA, PGDCA, DCA" },
              { name: "Social Science", icon: Globe, color: "#dc2626", desc: "Sociology, Psychology, Geography" },
              { name: "Physical Education", icon: Activity, color: "#0891b2", desc: "Sports, Yoga, NCC Activities" },
            ].map((dept) => (
              <Link
                key={dept.name}
                to="/departments"
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: dept.color }}
                >
                  <dept.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 group-hover:text-navy-700 transition-colors">{dept.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{dept.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/departments" className="btn-primary">
              View All Departments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NOTICES ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
          {/* Notices */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="section-subtitle">Stay Updated</p>
                <h2 className="section-title text-2xl">Latest Notices</h2>
              </div>
              <Link to="/notices" className="text-navy-700 hover:text-gold-600 text-sm font-semibold flex items-center gap-1 transition-colors">
                View All <ChevronRight size={15} />
              </Link>
            </div>
            <div className="space-y-3">
              {NOTICES.slice(0, 6).map((n) => (
                <div key={n.id} className="bg-white rounded-xl p-4 flex items-start gap-4 border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all group cursor-pointer">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell size={16} className="text-navy-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <NoticeTypeBadge type={n.type} />
                      {n.isNew && <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded font-bold">NEW</span>}
                    </div>
                    <p className="text-navy-800 text-sm font-medium group-hover:text-navy-600 transition-colors leading-snug">{n.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{new Date(n.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-gold-400 flex-shrink-0 transition-colors mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Student Services */}
          <div>
            <p className="section-subtitle">Student Services</p>
            <h2 className="section-title text-2xl mb-5">Quick Access</h2>
            <div className="space-y-3">
              {[
                { label: "Download Syllabus", href: "/student-corner", icon: BookOpen, color: "text-blue-600 bg-blue-50" },
                { label: "Old Question Papers", href: "/student-corner", icon: Book, color: "text-orange-600 bg-orange-50" },
                { label: "Examination Form", href: "/examination", icon: FileText, color: "text-purple-600 bg-purple-50" },
                { label: "Fee Payment Portal", href: "/student-corner", icon: CreditCard, color: "text-green-600 bg-green-50" },
                { label: "Check Results", href: "/examination", icon: BarChart2, color: "text-red-600 bg-red-50" },
                { label: "Scholarship Info", href: "/student-corner", icon: Award, color: "text-gold-600 bg-yellow-50" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-gray-100 hover:border-navy-200 hover:shadow-sm transition-all group"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-sm text-navy-700 font-medium group-hover:text-navy-900 transition-colors">{item.label}</span>
                    <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-gold-400 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Campus Life</p>
            <h2 className="section-title">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_ITEMS.slice(0, 8).map((item) => (
              <Link
                to="/gallery"
                key={item.id}
                className="relative rounded-xl overflow-hidden group aspect-square"
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3 text-center">
                  <div className="text-white/30 text-6xl font-display font-bold leading-none">
                    {item.id}
                  </div>
                </div>
                <div className="absolute inset-0 bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <span className="text-xs text-gold-300 mt-1">{item.category}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-primary">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)"/>
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Join Our Family</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Start Your Academic Journey Today
          </h2>
          <p className="text-navy-200 text-lg mb-8 max-w-xl mx-auto">
            Applications for 2026–27 batch are now open. Limited seats available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission" className="btn-primary text-base px-8 py-4">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <a href={`tel:${COLLEGE.phone}`} className="btn-outline text-base px-8 py-4">
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
