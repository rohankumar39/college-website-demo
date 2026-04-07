import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Share2, PlayCircle, Camera, ExternalLink, GraduationCap } from "lucide-react";
import { COLLEGE } from "../data/siteData";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Admission", href: "/admission" },
    { label: "Faculty", href: "/faculty" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Student Services": [
    { label: "Student Corner", href: "/student-corner" },
    { label: "Notices / News", href: "/notices" },
    { label: "Examination", href: "/examination" },
    { label: "Fee Payment", href: "/student-corner" },
    { label: "Download Syllabus", href: "/student-corner" },
    { label: "Old Question Papers", href: "/student-corner" },
  ],
  "Academics": [
    { label: "Departments", href: "/departments" },
    { label: "UG Courses", href: "/courses" },
    { label: "PG Courses", href: "/courses" },
    { label: "Diploma Courses", href: "/courses" },
    { label: "Gallery", href: "/gallery" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <GraduationCap size={24} className="text-navy-900" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">{COLLEGE.shortName}</div>
                <div className="text-navy-300 text-xs">Shivansh Institute of Higher Education</div>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-5">
              Committed to academic excellence, innovation, and holistic student development. Affiliated to {COLLEGE.affiliatedTo}.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-3 text-navy-300">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{COLLEGE.address}</span>
              </div>
              <div className="flex items-center gap-3 text-navy-300">
                <Phone size={14} className="text-gold-400 flex-shrink-0" />
                <span>{COLLEGE.phone} / {COLLEGE.phone2}</span>
              </div>
              <div className="flex items-center gap-3 text-navy-300">
                <Mail size={14} className="text-gold-400 flex-shrink-0" />
                <span>{COLLEGE.email}</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Share2, href: "#", label: "Facebook" },
                { icon: PlayCircle, href: "#", label: "YouTube" },
                { icon: Camera, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-navy-800 hover:bg-gold-500 hover:text-navy-900 text-navy-300 rounded-full flex items-center justify-center transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-navy-300 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden border border-navy-800 h-40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8!2d83.3632!3d26.7606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzM4LjIiTiA4M8KwMjEnNDcuNSJF!5e0!3m2!1sen!2sin!4v1617000000000"
            width="100%"
            height="160"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen=""
            loading="lazy"
            title="College Location"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-navy-400">
          <span>© {new Date().getFullYear()} {COLLEGE.name}. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-gold-400 transition-colors">Terms of Use</Link>
            <span className="flex items-center gap-1">
              <ExternalLink size={10} /> {COLLEGE.website}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
