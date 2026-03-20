/*
 * DESIGN: "Structured Intelligence" — Main layout
 * Fixed left sidebar (260px) + scrollable right content area
 * Intersection Observer for active section tracking
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import CVSection from "@/components/sections/CVSection";
import TeachingSection from "@/components/sections/TeachingSection";
import HobbiesSection from "@/components/sections/HobbiesSection";

const SECTIONS = ["about", "research", "cv", "teaching", "hobbies"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingToRef = useRef(false);

  // Intersection Observer to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isScrollingToRef.current) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    isScrollingToRef.current = true;
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.003_80)]">
      {/* Fixed sidebar */}
      <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main content area — offset by sidebar width */}
      <main className="lg:ml-[260px] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-24">
          {SECTIONS.map((id, index) => (
            <motion.div
              key={id}
              ref={(el) => { sectionRefs.current[id] = el; }}
              className="scroll-mt-8"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index === 0 ? 0.1 : 0, ease: "easeOut" }}
            >
              {id === "about" && <AboutSection />}
              {id === "research" && <ResearchSection />}
              {id === "cv" && <CVSection />}
              {id === "teaching" && <TeachingSection />}
              {id === "hobbies" && <HobbiesSection />}
            </motion.div>
          ))}

          {/* Footer */}
          <footer className="border-t border-[oklch(0.9_0.008_255)] pt-8 pb-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-mono text-[0.7rem] text-[oklch(0.52_0.015_255)]">
                © 2026 Zhibo Zhang · The University of Melbourne
              </p>
              <p className="font-mono text-[0.7rem] text-[oklch(0.65_0.015_255)]">
                Last updated: March 2026
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
