/*
 * DESIGN: "Structured Intelligence" — CV section
 * Timeline layout, clean typography, downloadable CV button
 */
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const EDUCATION = [
  {
    degree: "PhD in Finance",
    institution: "The University of Melbourne",
    period: "2022 – Present",
    details: [
      "Supervisors: Zhuo Zhong (Principal Supervisor), Qi Zeng",
      "Fields: Asset Management, Empirical Asset Pricing, and Machine Learning",
    ],
  },
  {
    degree: "Master of Finance, with Commendation",
    institution: "The Australian National University",
    period: "2020 – 2021",
    details: [],
  },
  {
    degree: "Bachelor of Information and Computation Science",
    institution: "Dalian University of Technology",
    period: "2015 – 2019",
    details: [],
  },
];

const EXPERIENCE = [
  {
    role: "Research Assistant",
    org: "The University of Melbourne",
    period: "2022 – Present",
    details: [
      // "Assisted Prof. Andrew Lo on research in adaptive markets hypothesis",
      // "Processed and analyzed large-scale financial datasets (CRSP, Compustat)",
      // "Co-authored working paper on machine learning in portfolio optimization",
    ],
  },
  {
    role: "Research Assistant",
    org: "The Australian National University",
    period: "2021",
    details: [
      // "Assisted Prof. Andrew Lo on research in adaptive markets hypothesis",
      // "Processed and analyzed large-scale financial datasets (CRSP, Compustat)",
      // "Co-authored working paper on machine learning in portfolio optimization",
    ],
  },
];

const AWARDS = [
  {
    year: "2026",
    award: "AFA Travel Grant",
    detail: "American Finance Association Annual Meeting",
  },
  {
    year: "2025",
    award: "Best PhD Paper Award",
    detail: "New Zealand Finance Meeting",
  },
  {
    year: "2025",
    award: "FBE Graduate Research Enhancement Grant",
    detail: "The University of Melbourne",
  },
  {
    year: "2025",
    award: "Department Funds – Professional Development",
    detail: "The University of Melbourne",
  },
  {
    year: "2023",
    award: "Eric J. Ingram Prize in Microeconomics",
    detail: "The University of Melbourne",
  },
  {
    year: "2022",
    award: "FBE Doctoral Program Scholarship",
    detail: "The University of Melbourne",
  },
  {
    year: "2018",
    award: "Mitsubishi Chemical Scholarship (Second Prize)",
    detail: "Dalian University of Technology",
  },
];

const SKILLS = [
  { category: "Languages", items: ["Python", "R", "Stata", "LaTeX"] },
  { category: "ML / DL", items: ["PyTorch", "Scikit-learn", "OpenAI API"] },
  // { category: "Data", items: ["CRSP", "Compustat", "Refinitiv", "SEC EDGAR"] },
  // { category: "Tools", items: ["LaTeX", "Jupyter"] },
];

type EducationItem = { degree: string; institution: string; period: string; details: string[] };
type ExperienceItem = { role: string; org: string; period: string; details: string[] };
type TimelineItem = EducationItem | ExperienceItem;

function isEducation(item: TimelineItem): item is EducationItem {
  return 'degree' in item;
}

function TimelineBlock({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-0">
      {items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          <div className="bg-white border border-[oklch(0.9_0.008_255)] rounded-lg p-4 hover:border-[oklch(0.38_0.12_255_/_0.3)] hover:shadow-sm transition-all duration-200">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-serif text-[1rem] font-semibold text-[oklch(0.2_0.02_255)]">
                  {isEducation(item) ? item.degree : item.role}
                </h4>
                <p className="text-[0.85rem] text-[oklch(0.38_0.12_255)] font-medium">
                  {isEducation(item) ? item.institution : item.org}
                </p>
              </div>
              <span className="font-mono text-[0.7rem] text-[oklch(0.52_0.015_255)] whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <ul className="space-y-1">
              {item.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-[0.82rem] text-[oklch(0.4_0.02_255)]">
                  <span className="text-[oklch(0.38_0.12_255)] mt-1.5 flex-shrink-0">·</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CVSection() {
  return (
    <section id="cv" className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-[0.65rem] text-[oklch(0.38_0.12_255)] uppercase tracking-widest mb-1">
            Curriculum Vitae
          </p>
          <h2 className="font-serif text-3xl font-bold text-[oklch(0.2_0.02_255)]">Academic CV</h2>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-[oklch(0.38_0.12_255)] text-[oklch(0.38_0.12_255)] hover:bg-[oklch(0.38_0.12_255)] hover:text-white transition-colors"
          onClick={() => window.open("#", "_blank")}
        >
          <Download size={15} />
          Download PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Education + Experience */}
        <div className="lg:col-span-2 space-y-8">
          {/* Education */}
          <div>
            <h3 className="section-heading">Education</h3>
            <TimelineBlock items={EDUCATION as TimelineItem[]} />
          </div>

          {/* Experience */}
          <div>
            <h3 className="section-heading">Experience</h3>
            <TimelineBlock items={EXPERIENCE as TimelineItem[]} />
          </div>
        </div>

        {/* Right: Awards + Skills */}
        <div className="space-y-8">
          {/* Awards */}
          <div>
            <h3 className="section-heading">Awards & Honors</h3>
            <div className="space-y-3">
              {AWARDS.map(({ year, award, detail }) => (
                <div key={year + award} className="flex gap-3">
                  <span className="font-mono text-[0.65rem] text-[oklch(0.52_0.015_255)] whitespace-nowrap pt-0.5 min-w-[36px]">
                    {year}
                  </span>
                  <div>
                    <p className="text-[0.85rem] font-medium text-[oklch(0.2_0.02_255)] leading-snug">{award}</p>
                    <p className="text-[0.75rem] text-[oklch(0.52_0.015_255)]">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="section-heading">Technical Skills</h3>
            <div className="space-y-4">
              {SKILLS.map(({ category, items }) => (
                <div key={category}>
                  <p className="font-mono text-[0.65rem] text-[oklch(0.52_0.015_255)] uppercase tracking-widest mb-2">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} className="tag-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
