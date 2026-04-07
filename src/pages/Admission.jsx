import { useState } from "react";
import PageHero from "../components/PageHero";
import { CheckCircle, ArrowRight, Download, Phone, Mail, AlertCircle } from "lucide-react";
import { COURSES, COLLEGE } from "../data/siteData";

const steps = [
  { num: "01", title: "Choose Course", desc: "Select your desired course and check eligibility criteria" },
  { num: "02", title: "Fill Application", desc: "Complete the online application form with required details" },
  { num: "03", title: "Submit Documents", desc: "Upload or submit required documents at the college office" },
  { num: "04", title: "Pay Fees", desc: "Pay the admission fee online or at the college counter" },
  { num: "05", title: "Get Confirmation", desc: "Receive admission confirmation and student ID" },
];

export default function Admission() {
  const [form, setForm] = useState({
    name: "", father: "", dob: "", gender: "", mobile: "", email: "", address: "", course: "", board: "", percent: "", category: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const allCourses = COURSES.flatMap((cat) => cat.courses.map((c) => c.name));

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div>
      <PageHero
        title="Admission 2026–27"
        subtitle="Apply Now"
        breadcrumb={[{ label: "Admission" }]}
      />

      {/* Highlights */}
      <section className="py-12 bg-gold-50 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {[
              "Admission Open for UG, PG & Diploma courses",
              "Last Date: 31 July 2026",
              "Merit-based + Entrance-based admissions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-navy-800">
                <CheckCircle size={15} className="text-gold-600 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="section-title text-2xl mb-6">Online Application Form</h2>

            {submitted ? (
              <div className="text-center py-16 bg-green-50 rounded-2xl border border-green-200">
                <CheckCircle size={52} className="mx-auto text-green-500 mb-4" />
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600 mb-2">Thank you, <strong>{form.name}</strong>!</p>
                <p className="text-gray-500 text-sm">Our admissions team will contact you on <strong>{form.mobile}</strong> within 2–3 working days.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:"",father:"",dob:"",gender:"",mobile:"",email:"",address:"",course:"",board:"",percent:"",category:"" }); }} className="mt-6 text-navy-700 underline text-sm">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Father's Name *</label>
                    <input name="father" value={form.father} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="Father's name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Date of Birth *</label>
                    <input name="dob" type="date" value={form.dob} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Gender *</label>
                    <select name="gender" value={form.gender} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Mobile Number *</label>
                    <input name="mobile" type="tel" value={form.mobile} onChange={handleChange} required pattern="[0-9]{10}" className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="10-digit mobile number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="your@email.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-1">Address *</label>
                    <textarea name="address" value={form.address} onChange={handleChange} required rows={2} className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 resize-none" placeholder="Full address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Course Applied For *</label>
                    <select name="course" value={form.course} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                      <option value="">Select course</option>
                      {allCourses.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Category *</label>
                    <select name="category" value={form.category} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500">
                      <option value="">Select category</option>
                      {["General", "OBC", "SC", "ST", "EWS"].map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Previous Board / University *</label>
                    <input name="board" value={form.board} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="e.g., UP Board, CBSE" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Percentage / CGPA *</label>
                    <input name="percent" value={form.percent} onChange={handleChange} required className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500" placeholder="e.g., 75% or 8.5 CGPA" />
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                  <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                  <span>Documents required: 10th & 12th marksheets, Character Certificate, Migration Certificate, Aadhar Card, 2 Passport-size photos.</span>
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 text-base">
                  {loading ? "Submitting..." : <>Submit Application <ArrowRight size={18} /></>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-navy-50 rounded-xl p-6">
              <h3 className="font-display font-bold text-navy-900 text-lg mb-4">Important Dates</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Admission Start", val: "1 June 2026" },
                  { label: "Last Date (UG)", val: "31 July 2026" },
                  { label: "Last Date (PG)", val: "20 July 2026" },
                  { label: "Merit List", val: "5 August 2026" },
                  { label: "Fee Submission", val: "15 August 2026" },
                  { label: "Classes Begin", val: "1 September 2026" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-navy-100 pb-2">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold text-navy-900 text-xs">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-navy-900 mb-3 text-sm uppercase tracking-wide">Documents Required</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {["10th Marksheet", "12th / Graduation Marksheet", "Transfer Certificate", "Character Certificate", "Migration Certificate", "Aadhar Card (Photocopy)", "2 Passport-size Photos", "Category Certificate (if applicable)"].map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-900 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <div className="space-y-2.5 text-sm">
                <a href={`tel:${COLLEGE.phone}`} className="flex items-center gap-2 text-navy-200 hover:text-gold-400 transition-colors">
                  <Phone size={14} /> {COLLEGE.phone}
                </a>
                <a href={`mailto:${COLLEGE.admissionEmail}`} className="flex items-center gap-2 text-navy-200 hover:text-gold-400 transition-colors">
                  <Mail size={14} /> {COLLEGE.admissionEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="section-subtitle">How To Apply</p>
            <h2 className="section-title">Admission Process</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all text-center relative">
                <div className="w-10 h-10 bg-navy-900 text-gold-400 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3">
                  {step.num}
                </div>
                <h4 className="font-semibold text-navy-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-navy-300">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
