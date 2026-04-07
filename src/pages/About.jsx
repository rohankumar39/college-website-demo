import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Eye, Heart, ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { COLLEGE } from "../data/siteData";

export default function About() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Our Story"
        breadcrumb={[{ label: "About Us" }]}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Who We Are</p>
            <h2 className="section-title mb-5">A Legacy of Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {COLLEGE.name} was established in {COLLEGE.established} with a vision to provide quality higher 
              education to students from all walks of life. Affiliated to {COLLEGE.affiliatedTo}, we have 
              grown from a small institution to one of the most reputed colleges in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the past 25+ years, we have produced thousands of graduates who are making significant 
              contributions across various fields — from science and technology to arts, commerce, and public service.
            </p>
            <div className="space-y-3 mb-7">
              {[
                "UGC Recognized & NAAC Accredited Institution",
                "Affiliated to Deen Dayal Upadhyaya Gorakhpur University",
                "More than 5000 students currently enrolled",
                "Dedicated placement and career guidance cell",
                "State-of-the-art labs and library facilities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/admission" className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Established", val: "2000", icon: Award, color: "bg-navy-800" },
              { label: "Students", val: "5000+", icon: Users, color: "bg-gold-500 text-navy-900" },
              { label: "Faculty", val: "120+", icon: BookOpen, color: "bg-green-600" },
              { label: "Courses", val: "35+", icon: CheckCircle, color: "bg-purple-600" },
            ].map((item) => (
              <div key={item.label} className={`${item.color} rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center aspect-square`}>
                <item.icon size={28} className="mb-3 opacity-80" />
                <div className="text-3xl font-bold font-display">{item.val}</div>
                <div className="text-sm opacity-80 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">Our Foundation</p>
            <h2 className="section-title">Vision, Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                color: "bg-navy-900",
                content: "To become a premier institution of higher learning that fosters intellectual growth, social responsibility, and lifelong learning."
              },
              {
                icon: Target,
                title: "Our Mission",
                color: "bg-gold-500 text-navy-900",
                textColor: "text-navy-700",
                content: "To provide accessible, affordable, quality education through innovative teaching methods and holistic development programs."
              },
              {
                icon: Heart,
                title: "Core Values",
                color: "bg-green-700",
                content: "Integrity, Excellence, Inclusivity, Innovation, Social Responsibility, and Respect for all individuals."
              },
            ].map((item) => (
              <div key={item.title} className={`${item.color} text-white rounded-2xl p-8 text-center`}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-subtitle">Leadership</p>
          <h2 className="section-title mb-10">Principal's Message</h2>
          <div className="bg-navy-50 border border-navy-100 rounded-2xl p-10 relative">
            <div className="text-7xl text-navy-200 font-serif absolute top-6 left-8 leading-none select-none">"</div>
            <p className="text-gray-700 leading-relaxed text-lg italic relative z-10 mb-6">
              Education is not just about acquiring knowledge – it's about building character, developing 
              critical thinking, and preparing students to contribute meaningfully to society. At {COLLEGE.shortName}, 
              we create an environment where every student can discover their potential and pursue their dreams 
              with confidence and purpose.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg italic relative z-10 mb-8">
              We believe in nurturing not just academic excellence, but also leadership, creativity, and 
              compassion. I welcome you to our institution and assure you of our unwavering commitment to 
              your success.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center font-bold text-navy-900 text-xl">AK</div>
              <div className="text-left">
                <div className="font-bold text-navy-900 text-lg">Dr. Anand Kumar Sharma</div>
                <div className="text-gray-500 text-sm">Principal, {COLLEGE.shortName} | Ph.D., M.A.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-2">Facilities</p>
            <h2 className="font-display text-3xl font-bold">Campus Infrastructure</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Library", desc: "50,000+ books, digital resources", icon: "📚" },
              { label: "Computer Labs", desc: "3 fully equipped labs, 150 systems", icon: "💻" },
              { label: "Science Labs", desc: "Physics, Chemistry, Biology labs", icon: "🔬" },
              { label: "Sports Ground", desc: "Cricket, football, athletics", icon: "🏏" },
              { label: "Seminar Hall", desc: "500-seater air-conditioned hall", icon: "🏛️" },
              { label: "Canteen", desc: "Hygienic, affordable food", icon: "🍽️" },
              { label: "Medical Room", desc: "First aid & health services", icon: "🏥" },
              { label: "NCC & NSS", desc: "Active units, social service", icon: "🎖️" },
            ].map((f) => (
              <div key={f.label} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h4 className="font-semibold text-white mb-1">{f.label}</h4>
                <p className="text-navy-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
