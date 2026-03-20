/*
 * DESIGN: "Structured Intelligence" — About section
 * Hero with dot-grid bg, name display, bio paragraphs, research interests grid
 */
import { MapPin, Calendar, Award } from "lucide-react";

const RESEARCH_INTERESTS = [
  { label: "Asset Management", desc: "Mutual Funds, ETFs" },
  { label: "Empirical Asset Pricing", desc: "Factor Models, International Asset Pricing" },
  { label: "Fintech", desc: "Applications of Machine Learning in Finance" },  // { label: "NLP in Finance", desc: "Textual analysis of earnings calls and filings" },
  // { label: "Financial Econometrics", desc: "High-dimensional inference and causal identification" },
  // { label: "Market Microstructure", desc: "Liquidity, price discovery, and trading" },
  // { label: "Fintech", desc: "Algorithmic trading and robo-advisory systems" },
];

const NEWS = [
  { date: "Jan 2026", text: 'Presented at AFA 2026 Ph.D. Poster Session' },
  { date: "Dec 2025", text: "Presented at New Zealand Finance Meeting, Queenstown" },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen">
      {/* Hero block with background */}
      <div
        className="relative overflow-hidden rounded-xl mb-10"
        style={{
          background: "linear-gradient(135deg, oklch(0.17 0.03 255) 0%, oklch(0.25 0.05 255) 100%)",
          minHeight: "220px",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663404958076/agEZFdR6E2MtYFuQE7vGmU/hero-bg-L2zCLjNVifWdiUNbWsH9w3.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <p className="font-mono text-[0.65rem] text-[oklch(0.55_0.12_255)] uppercase tracking-widest mb-2">
                Finance PhD Candidate
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Zhibo Zhang
              </h2>
              {/* <p className="text-[oklch(0.75_0.03_255)] text-base leading-relaxed max-w-xl">
                Dalian University of Technology (B.Sc. in Information and Computation Science, 2019)
                The Australian National University (Master in Finance, 2021)
                Ph.D. Candidate in Finance at The University of Melbourne (2022-Present)
              </p> */}

              <div className="flex flex-wrap gap-4 mt-5">
                <div className="flex items-center gap-1.5 text-[oklch(0.65_0.03_255)] text-sm">
                  <MapPin size={13} />
                  <span>Melbourne, VIC, Australia</span>
                </div>
                <div className="flex items-center gap-1.5 text-[oklch(0.65_0.03_255)] text-sm">
                  <Calendar size={13} />
                  <span>4th Year PhD</span>
                </div>
                {/* <div className="flex items-center gap-1.5 text-[oklch(0.65_0.03_255)] text-sm">
                  <Award size={13} />
                  <span>NSF Fellow</span>
                </div> */}
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-8">
              {[
                { value: "2", label: "Working Papers" },
                // { value: "1", label: "Publication" },
                { value: "2", label: "Work in Progress" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-serif text-3xl font-bold text-white">{value}</div>
                  <div className="font-mono text-[0.6rem] text-[oklch(0.55_0.12_255)] uppercase tracking-wide mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="section-heading">About Me</h3>
          <div className="space-y-4 text-[oklch(0.3_0.02_255)] leading-relaxed text-[0.95rem]">
            <p>
              I am a fourth-year PhD Candidate at the Department of Finance, The University of Melbourne.
              I am advised by{" "}
              <a
                href="https://findanexpert.unimelb.edu.au/profile/667468-zhuo-zhong"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[oklch(0.38_0.12_255)]"
              >
                Zhuo Zhong
              </a>{" "}
              (Principal Supervisor) and {" "}
              <a
                href="https://findanexpert.unimelb.edu.au/profile/25878-qi-zeng"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[oklch(0.38_0.12_255)]"
              >
                Qi Zeng.
              </a>{" "}
            </p>
            <p>
              Before pursuing my PhD, I completed a Bachelor of Information and Computation Science at Dalian University of Technology and a Master of Finance with Commendation at the Australian National University.
            </p>
            <p>
              My current research focuses on FinTech, particularly the application of machine learning methods to empirical asset pricing and the factor structure of international equity markets. I am also broadly interested in asset management, especially mutual funds and ETFs.
            </p>
          </div>
        </div>

        {/* News / Updates */}
        <div>
          <h3 className="section-heading">Recent News</h3>
          <div className="space-y-3">
            {NEWS.map(({ date, text }) => (
              <div key={date} className="flex gap-3">
                <span className="font-mono text-[0.65rem] text-[oklch(0.55_0.12_255)] whitespace-nowrap pt-0.5 min-w-[60px]">
                  {date}
                </span>
                <p className="text-[0.85rem] text-[oklch(0.35_0.02_255)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Interests */}
      <div>
        <h3 className="section-heading">Research Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_INTERESTS.map(({ label, desc }) => (
            <div
              key={label}
              className="bg-white border border-[oklch(0.9_0.008_255)] rounded-lg p-4 hover:border-[oklch(0.38_0.12_255_/_0.4)] hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.38_0.12_255)] mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[oklch(0.2_0.02_255)] text-sm">{label}</p>
                  <p className="text-[oklch(0.52_0.015_255)] text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
