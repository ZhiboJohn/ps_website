/*
 * DESIGN: "Structured Intelligence" — Research section
 * Paper cards with left-border accent, abstract expandable, tag chips
 */
import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, FileText } from "lucide-react";

interface Paper {
  id: string;
  title: string;
  authors?: string;
  venue?: string;
  year: string;
  status: "published" | "working" | "progress";
  abstract?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
}

const PAPERS: Paper[] = [
  {
    id: "p2",
    title: "Mutual Funds' Preemptive Response to Major Cyber Attacks",
    authors: "Zhibo Zhang",
    year: "2025",
    status: "working",
    abstract:
      "This paper examines U.S. actively managed equity mutual funds' trading behavior around cyberattack announcements. It documents that active funds preemptively trim high-cyber-risk holdings and tilt into low-cyber-risk stocks, particularly among funds that disclose cyber risk in their prospectuses. It shows that firms with stronger data-privacy safeguards exhibit smaller tilts. It further demonstrates that these anticipatory reallocations generate significant subsequent net inflows driven by institutional investors. These findings extend the literature on cyber-risk spillovers, pre-announcement trading, and mutual-fund skill, and highlight active managers' informational advantage in responding to emerging cybersecurity threats.",
    tags: ["Mutual Funds", "Cyber Risk", "Preemptive Trading"],
    links: [
      {
        label: "SSRN",
        href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5386053",
      },
    ],
  },
  {
    id: "p3",
    title: "Global Evidence on Segment-Dependent Latent Factor Structures",
    authors: "Qi Zeng, Zhibo Zhang, Zhuo Zhong",
    year: "2025",
    status: "working",
    abstract:
      "Across 13 international equity markets, we find substantial heterogeneity in the sparsity of the pricing kernel. In some markets, latent factors from large-cap stocks form a sparse structure that prices cross-sectional returns well; in others, this structure breaks down once small-cap stocks are included, and small-cap-specific latent factors only partially restore pricing. These weak-in-large-cap but meaningful small-cap risks help explain mutual fund return differentials in those markets. We also find that nonlinear machine-learning models outperform linear methods in markets where sparsity varies across segments. Overall, segment-dependent factor structures are common and economically important.",
    tags: [
      "International Asset Pricing",
      "Latent Factors",
      "Mutual Funds",
      "Machine Learning",
    ],
  },
  {
    id: "p4",
    title: "Financial Market Signal-to-Noise Ratio",
    year: "2026",
    status: "progress",
  },
  {
    id: "p5",
    title: "International ETFs",
    year: "2026",
    status: "progress",
  },
];

const STATUS_CONFIG = {
  published: {
    label: "Published",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  working: {
    label: "Working Paper",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  progress: {
    label: "In Progress",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
};

function PaperCard({ paper }: { paper: Paper }) {
  const [expanded, setExpanded] = useState(false);
  const status = STATUS_CONFIG[paper.status];

  const hasAbstract = Boolean(paper.abstract);
  const hasTags = Boolean(paper.tags && paper.tags.length > 0);
  const hasLinks = Boolean(paper.links && paper.links.length > 0);

  return (
    <div className="paper-card">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`font-mono text-[0.65rem] px-2 py-0.5 rounded border ${status.color}`}
            >
              {status.label}
            </span>
            <span className="font-mono text-[0.65rem] text-[oklch(0.52_0.015_255)]">
              {paper.year}
            </span>
            {paper.venue && (
              <span className="font-mono text-[0.65rem] text-[oklch(0.38_0.12_255)] font-medium">
                {paper.venue}
              </span>
            )}
          </div>

          <h4 className="font-serif text-[1.05rem] font-semibold text-[oklch(0.2_0.02_255)] leading-snug mb-1">
            {paper.title}
          </h4>

          {paper.authors && (
            <p className="text-[0.82rem] text-[oklch(0.52_0.015_255)]">
              {paper.authors}
            </p>
          )}
        </div>

        <FileText
          size={18}
          className="text-[oklch(0.38_0.12_255)] flex-shrink-0 mt-1 opacity-60"
        />
      </div>

      {hasAbstract && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-[0.8rem] text-[oklch(0.38_0.12_255)] hover:text-[oklch(0.25_0.1_255)] transition-colors mb-2"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{expanded ? "Hide abstract" : "Show abstract"}</span>
          </button>

          {expanded && (
            <p className="text-[0.85rem] text-[oklch(0.35_0.02_255)] leading-relaxed mb-3 pl-3 border-l-2 border-[oklch(0.38_0.12_255_/_0.2)]">
              {paper.abstract}
            </p>
          )}
        </>
      )}

      {(hasTags || hasLinks) && (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
          <div className="flex flex-wrap gap-1.5">
            {paper.tags?.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {paper.links?.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[0.78rem] font-medium text-[oklch(0.38_0.12_255)] hover:text-[oklch(0.25_0.1_255)] transition-colors"
              >
                <ExternalLink size={12} />
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResearchSection() {

  const published = PAPERS.filter((p) => p.status === "published");
  const working = PAPERS.filter((p) => p.status === "working");
  const progress = PAPERS.filter((p) => p.status === "progress");

  return (
    <section id="research" className="min-h-screen">
      {/* Section header with research bg */}
      <div
        className="relative rounded-xl overflow-hidden mb-10 p-8"
        style={{
          background:
            "linear-gradient(to right, oklch(0.97 0.005 255), oklch(0.99 0.002 255))",
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663404958076/agEZFdR6E2MtYFuQE7vGmU/research-bg-5nnA9bh2Ax2eFxgBkmuaXy.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10">
          <p className="font-mono text-[0.65rem] text-[oklch(0.38_0.12_255)] uppercase tracking-widest mb-1">
            Academic Work
          </p>
          <h2 className="font-serif text-3xl font-bold text-[oklch(0.2_0.02_255)] mb-2">
            Research
          </h2>
          <p className="text-[oklch(0.4_0.02_255)] text-sm max-w-2xl leading-relaxed">
            My current research applies machine learning methods to empirical
            asset pricing, with a particular focus on the factor structure of
            international equity markets. I am also broadly interested in asset
            management, particularly mutual funds and ETFs.
          </p>
        </div>
      </div>

      {/* Publications */}
      {published.length > 0 && (
        <div className="mb-10">
          <h3 className="section-heading">Publications</h3>
          <div className="space-y-4">
            {published.map((p) => (
              <PaperCard key={p.id} paper={p} />
            ))}
          </div>
        </div>
      )}

      {/* Working Papers */}
      {working.length > 0 && (
        <div className="mb-10">
          <h3 className="section-heading">Working Papers</h3>
          <div className="space-y-4">
            {working.map((p) => (
              <PaperCard key={p.id} paper={p} />
            ))}
          </div>
        </div>
      )}

      {/* Work in Progress */}
      {progress.length > 0 && (
        <div className="mb-10">
          <h3 className="section-heading">Work in Progress</h3>
          <div className="space-y-4">
            {progress.map((p) => (
              <PaperCard key={p.id} paper={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}