/*
 * DESIGN: "Structured Intelligence" — Hobbies / Photography section
 * Two-column photo gallery with local images
 */
import {
  Camera,
  MapPin,
} from "lucide-react";

import photo1 from "../pictures_info/pic_galaxy.jpg";
// import photo2 from "../pictures_info/pic_aurora.jpg";
// import photo3 from "../pictures_info/pic_mountain.jpg";
// import photo4 from "../pictures_info/pic_overview.jpg";
// import photo5 from "../pictures_info/pic_wave_on_rock.jpg";
import photo6 from "../pictures_info/pic_raptor.jpg";
import photo7 from "../pictures_info/pic_bayview.jpg";
import photo8 from "../pictures_info/pic_desert_tree.jpg";

const PHOTOS = [
  { src: photo1, title: "The Milky Way", location: "Mornington Peninsula" },
  // { src: photo2, title: "Photo 2", location: "Location" },
  // { src: photo3, title: "Photo 3", location: "Location" },
  // { src: photo4, title: "Photo 4", location: "Location" },
  // { src: photo5, title: "Photo 5", location: "Location" },
  { src: photo6, title: "A Composed Hunter", location: "Taronga Zoo Sydney" },
  { src: photo7, title: "Dusk Before Dark", location: "Great Ocean Road" },
  { src: photo8, title: "Sprout In Desert", location: "Big Drift" },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="min-h-screen">
      {/* Hero */}
      <div
        className="relative rounded-xl overflow-hidden mb-10 p-8"
        style={{ minHeight: "200px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663404958076/agEZFdR6E2MtYFuQE7vGmU/hobbies-bg-2JL3FHPoC6c8ANXCCz5ojg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 bg-[oklch(0.98_0.01_80_/_0.6)]" />

        <div className="relative z-10">
          <p className="font-mono text-[0.65rem] text-[oklch(0.5_0.05_60)] uppercase tracking-widest mb-1">
            Beyond Research
          </p>
          <h2 className="font-serif text-3xl font-bold text-[oklch(0.2_0.03_60)] mb-2">
            Photography
          </h2>
          <p className="text-[oklch(0.35_0.03_60)] text-sm max-w-xl leading-relaxed">
            Outside of research, I enjoy photography, especially landscape and
            travel photography. I am drawn to light, geometry, and quiet moments
            that invite a second look.
          </p>
        </div>
      </div>

      {/* Intro card */}
      <div className="bg-white border border-[oklch(0.9_0.008_255)] rounded-xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <div className="bg-rose-50 p-2.5 rounded-lg flex-shrink-0">
            <Camera size={20} className="text-rose-600" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[oklch(0.2_0.02_255)] mb-2">
              Photography
            </h3>
            <p className="text-[0.9rem] text-[oklch(0.4_0.02_255)] leading-relaxed">
              I enjoy capturing landscapes, city scenes, and small visual details
              during travel. Below is a selection of photographs I have taken.
            </p>
          </div>
        </div>
      </div>

      {/* 2-column gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PHOTOS.map((photo, idx) => (
          <div
            key={idx}
            className="bg-white border border-[oklch(0.9_0.008_255)] rounded-xl overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <div className="aspect-[4/3] overflow-hidden bg-[oklch(0.96_0.004_255)]">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            <div className="p-4">
              <h4 className="font-serif text-[1rem] font-semibold text-[oklch(0.2_0.02_255)]">
                {photo.title}
              </h4>

              <div className="flex items-center gap-1.5 mt-1 text-[0.8rem] text-[oklch(0.52_0.015_255)]">
                <MapPin size={13} />
                <span>{photo.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 p-5 bg-[oklch(0.38_0.12_255_/_0.05)] border border-[oklch(0.38_0.12_255_/_0.15)] rounded-xl">
        <p className="text-[0.85rem] text-[oklch(0.35_0.02_255)] leading-relaxed text-center italic font-serif">
          Photography gives me a different way to notice patterns, framing, and
          perspective — qualities that I also value in research.
        </p>
      </div>
    </section>
  );
}