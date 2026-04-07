import { useState } from "react";
import PageHero from "../components/PageHero";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_ITEMS } from "../data/siteData";

const CATEGORIES = ["All", "Campus", "Events", "Sports", "Seminars"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  return (
    <div>
      <PageHero
        title="Photo Gallery"
        subtitle="Campus Life"
        breadcrumb={[{ label: "Gallery" }]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-navy-900 text-white"
                    : "bg-white text-navy-700 border border-gray-200 hover:border-navy-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="relative rounded-xl overflow-hidden group aspect-square cursor-pointer"
                style={{ backgroundColor: item.color }}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-bold text-white/20 text-8xl leading-none select-none">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white gap-2 p-3 text-center">
                  <ZoomIn size={22} />
                  <p className="font-semibold text-sm">{item.title}</p>
                  <span className="text-gold-300 text-xs">{item.category}</span>
                </div>
                {/* Bottom label (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={22} />
          </button>
          <div
            className="w-full max-w-2xl aspect-square rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: lightbox.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center text-white p-8">
              <div className="font-display font-bold text-white/20 text-9xl leading-none mb-4 select-none">
                {lightbox.id < 10 ? `0${lightbox.id}` : lightbox.id}
              </div>
              <h3 className="font-display font-bold text-2xl">{lightbox.title}</h3>
              <p className="text-white/70 mt-1">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
