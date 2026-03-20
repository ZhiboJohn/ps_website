/*
 * DESIGN: "Structured Intelligence" — Dark navy sidebar with name, photo, nav, contacts
 * Fixed left sidebar (260px), dark bg (#1C2333 equiv), warm text, blue accent on active
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Linkedin, BookOpen, FileText, GraduationCap, Smile, User, ExternalLink, Menu, X } from "lucide-react";
import profilePhoto from "./pictures_info/zhibo_zhang_picture.jpg";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "research", label: "Research", icon: BookOpen },
  { id: "cv", label: "CV", icon: FileText },
  { id: "teaching", label: "Teaching", icon: GraduationCap },
  { id: "hobbies", label: "Hobbies", icon: Smile },
];

interface SidebarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavClick }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setMobileOpen(false);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Profile section */}
      <div className="p-6 pb-4 border-b border-[oklch(0.25_0.03_255)]">
        {/* Profile photo */}
        <div className="relative w-48 h-48 mb-4 mx-auto">
          <img
            src={profilePhoto}
            alt="Zhibo Zhang 张智博"
            className="w-48 h-48 rounded-full object-cover border-2 border-[oklch(0.55_0.12_255)]"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[oklch(0.17_0.03_255)]" title="Available for collaboration" />
        </div>

        {/* Name & title */}
        <div className="text-center">
          <h1 className="font-serif text-lg font-semibold text-[oklch(0.92_0.01_255)] leading-tight">
            Zhibo Zhang 张智博
          </h1>
          <p className="text-xs text-[oklch(0.6_0.02_255)] mt-1 leading-relaxed">
            PhD Candidate in Finance
          </p>
          <p className="text-xs text-[oklch(0.55_0.12_255)] font-medium mt-0.5">
            The University of Melbourne
          </p>
        </div>

        {/* Research tags */}
        <div className="flex flex-wrap gap-1 justify-center mt-3">
          {["Asset Management", "Empirical Asset Pricing", "Fin-tech",].map((tag) => (
            <span key={tag} className="font-mono text-[0.6rem] px-1.5 py-0.5 rounded bg-[oklch(0.38_0.12_255_/_0.2)] text-[oklch(0.7_0.1_255)] border border-[oklch(0.38_0.12_255_/_0.3)]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-0.5">
        <p className="font-mono text-[0.6rem] text-[oklch(0.45_0.02_255)] uppercase tracking-widest px-3 mb-3">
          Navigation
        </p>
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`nav-link w-full text-left ${activeSection === id ? "active" : ""}`}
          >
            <Icon size={15} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Mini decorative chart
      <div className="px-4 py-3 border-t border-[oklch(0.25_0.03_255)]">
        <p className="font-mono text-[0.55rem] text-[oklch(0.35_0.02_255)] uppercase tracking-widest mb-2">Research Activity</p>
        <div className="flex items-end gap-0.5 h-8">
          {[3, 5, 4, 7, 6, 8, 5, 9, 7, 10, 8, 11].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-[oklch(0.55_0.12_255)] opacity-70"
              style={{ height: `${h * 8}%`, animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div> */}

      {/* University Website */}
      <div className="px-4 py-3 border-t border-[oklch(0.25_0.03_255)]">
        <p className="font-mono text-[0.55rem] text-[oklch(0.35_0.02_255)] uppercase tracking-widest mb-2">
          University Website
        </p>
        <a
          href="https://fbe.unimelb.edu.au/our-people/graduate-research/finance/zhibo-zhang"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-[oklch(0.6_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors"
        >
          <ExternalLink size={13} />
          <span>Visit Profile</span>
        </a>
      </div>

      {/* Contact / Social links */}
      <div className="p-4 border-t border-[oklch(0.25_0.03_255)]">
        <p className="font-mono text-[0.6rem] text-[oklch(0.45_0.02_255)] uppercase tracking-widest mb-3">
          Contact
        </p>
        <div className="space-y-2">
          <a
            href="mailto:zhibo.zhang1@unimelb.edu.au"
            className="flex items-center gap-2 text-xs text-[oklch(0.6_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors"
          >
            <Mail size={13} />
            <span>zhibo.zhang1@unimelb.edu.au</span>
          </a>
          {/* <div className="flex items-center gap-3 pt-1">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-[oklch(0.5_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors">
              <Github size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-[oklch(0.5_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-[oklch(0.5_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"
              className="text-[oklch(0.5_0.02_255)] hover:text-[oklch(0.88_0.01_255)] transition-colors">
              <ExternalLink size={16} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-[oklch(0.17_0.03_255)] text-[oklch(0.88_0.01_255)] p-2 rounded-lg shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        className={`
          fixed top-0 left-0 h-full w-[260px] z-40
          bg-[oklch(0.17_0.03_255)]
          border-r border-[oklch(0.25_0.03_255)]
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <SidebarContent />
      </motion.aside>
    </>
  );
}
