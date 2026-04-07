import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function PageHero({ title, subtitle, breadcrumb = [] }) {
  return (
    <div className="relative bg-navy-900 py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      
      {/* Circle decorations */}
      <div className="absolute -right-20 -top-20 w-72 h-72 bg-navy-700 rounded-full opacity-30" />
      <div className="absolute -left-10 bottom-0 w-40 h-40 bg-gold-500 rounded-full opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">{subtitle}</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">{title}</h1>
        
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 text-sm text-navy-300">
          <Link to="/" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
            <Home size={13} /> Home
          </Link>
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={13} className="text-navy-500" />
              {item.href ? (
                <Link to={item.href} className="hover:text-gold-400 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-gold-400">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
