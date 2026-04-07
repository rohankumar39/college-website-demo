import { useState } from "react";
import PageHero from "../components/PageHero";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { COLLEGE } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <p className="section-subtitle">Reach Us</p>
              <h2 className="section-title text-2xl">We're Here to Help</h2>
            </div>

            {[
              {
                icon: MapPin,
                title: "Address",
                lines: [COLLEGE.address],
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Phone,
                title: "Phone",
                lines: [COLLEGE.phone, COLLEGE.phone2],
                color: "bg-green-50 text-green-600",
              },
              {
                icon: Mail,
                title: "Email",
                lines: [COLLEGE.email, COLLEGE.admissionEmail],
                color: "bg-orange-50 text-orange-600",
              },
              {
                icon: Clock,
                title: "Office Hours",
                lines: ["Mon–Sat: 9:00 AM – 5:00 PM", "Sunday: Closed"],
                color: "bg-purple-50 text-purple-600",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4 hover:shadow-sm transition-all">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 text-sm mb-1">{item.title}</h4>
                  {item.lines.map((l, i) => (
                    <p key={i} className="text-gray-500 text-sm">{l}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="font-display font-bold text-navy-900 text-2xl mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="text-center py-14">
                <CheckCircle size={52} className="mx-auto text-green-500 mb-4" />
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 1–2 working days.</p>
                <button onClick={() => setSubmitted(false)} className="mt-5 text-navy-600 underline text-sm">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Full Name *</label>
                    <input
                      value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      required pattern="[0-9]{10}" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="10-digit number"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-1">Email Address</label>
                    <input
                      type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-1">Subject *</label>
                    <select
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
                    >
                      <option value="">Select a subject</option>
                      {["Admission Enquiry", "Course Information", "Fee Structure", "Examination Query", "Scholarship", "Other"].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-700 mb-1">Message *</label>
                    <textarea
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary py-3.5 px-8">
                  {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8!2d83.3632!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM4LjIiTiA4M8KwMjEnNDcuNSJF!5e0!3m2!1sen!2sin!4v1617000000000"
              width="100%" height="256" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
