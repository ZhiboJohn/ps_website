/*
 * DESIGN: "Structured Intelligence" — Teaching section
 * Adapted to actual teaching experience
 */
import { BookOpen, MessageSquare, Star } from "lucide-react";

const TEACHING_PHILOSOPHY = [
  "I aim to make finance concepts clear, structured, and practically relevant. In my teaching, I emphasize both economic intuition and technical understanding, so that students can connect formal models with real-world financial applications.",
  "I also value clear communication and step-by-step explanation, particularly in quantitatively intensive subjects. My goal is to help students build confidence in applying finance tools to solve problems independently. In addition to receiving multiple positive student feedbacks from University surveys, I also received anonymous student recommendations on social media.",
];

const RECOMMENDATION_LINK =
  "https://www.reddit.com/r/unimelb/comments/1pfo58j/thank_the_best_lecturers_from_this_sem/";

const TUTORIALS = [
  {
    code: "FNCE30003",
    title: "International Finance",
    term: "2024 Semester 2",
    role: "Tutor",
    rating: "4.8/5",
  },
  {
    code: "FNCE30007",
    title: "Derivative Securities",
    term: "2025 Semester 1 & 2, 2026 Semester 1",
    role: "Tutor",
    rating: "4.6/5",
  },
];

const TEACHING_ASSISTANT = [
  {
    code: "FNCE90087",
    title: "Sustainable Investment",
    term: "2024 Semester 2",
    role: "Teaching Assistant",
  },
  {
    code: "FNCE90016",
    title: "International Financial Management",
    term: "2024 Semester 2",
    role: "Teaching Assistant",
  },
];

const ROLE_COLORS: Record<string, string> = {
  Tutor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Teaching Assistant": "bg-blue-50 text-blue-700 border-blue-200",
};

function TeachingCard({
  code,
  title,
  term,
  role,
  rating,
}: {
  code: string;
  title: string;
  term: string;
  role: string;
  rating?: string;
}) {
  return (
    <div className="paper-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="font-mono text-[0.7rem] text-[oklch(0.38_0.12_255)] font-semibold">
              {code}
            </span>
            <span
              className={`font-mono text-[0.65rem] px-2 py-0.5 rounded border ${ROLE_COLORS[role]}`}
            >
              {role}
            </span>
            <span className="font-mono text-[0.65rem] text-[oklch(0.52_0.015_255)]">
              {term}
            </span>
          </div>

          <h4 className="font-serif text-[1.05rem] font-semibold text-[oklch(0.2_0.02_255)]">
            {title}
          </h4>
        </div>

        {rating && (
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="font-mono text-[0.85rem] font-semibold text-[oklch(0.2_0.02_255)]">
                {rating}
              </span>
            </div>
            <p className="font-mono text-[0.6rem] text-[oklch(0.52_0.015_255)] uppercase tracking-wide">
              Rating
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeachingSection() {
  return (
    <section id="teaching" className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <p className="font-mono text-[0.65rem] text-[oklch(0.38_0.12_255)] uppercase tracking-widest mb-1">
          Academic Teaching
        </p>
        <h2 className="font-serif text-3xl font-bold text-[oklch(0.2_0.02_255)] mb-3">
          Teaching
        </h2>
        <p className="text-[oklch(0.4_0.02_255)] text-sm max-w-2xl leading-relaxed">
          My teaching experience includes tutorials and teaching assistant roles
          in finance subjects at the University of Melbourne.
        </p>
      </div>

      {/* Teaching Philosophy */}
      <div className="bg-white border border-[oklch(0.9_0.008_255)] rounded-xl p-6 mb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[oklch(0.38_0.12_255)] rounded-l-xl" />
        <div className="pl-4">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={16} className="text-[oklch(0.38_0.12_255)]" />
            <h3 className="font-serif text-lg font-semibold text-[oklch(0.2_0.02_255)]">
              Teaching Approach
            </h3>
          </div>

          {TEACHING_PHILOSOPHY.map((paragraph, idx) => (
            <p
              key={idx}
              className={`text-[oklch(0.35_0.02_255)] text-[0.9rem] leading-relaxed ${idx < TEACHING_PHILOSOPHY.length - 1 ? "mb-3" : ""
                }`}
            >
              {paragraph}
              {idx === 1 && (
                <>
                  {" "}
                  <a
                    href={RECOMMENDATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[oklch(0.38_0.12_255)] underline underline-offset-2 hover:opacity-80"
                  >
                    View comment
                  </a>
                </>
              )}
            </p>
          ))}
        </div>
      </div>

      {/* Tutorials */}
      <div className="mb-10">
        <h3 className="section-heading">Tutorials</h3>
        <div className="space-y-4">
          {TUTORIALS.map((course) => (
            <TeachingCard key={`${course.code}-${course.term}`} {...course} />
          ))}
        </div>
      </div>

      {/* Teaching Assistant */}
      <div className="mb-10">
        <h3 className="section-heading">Teaching Assistant</h3>
        <div className="space-y-4">
          {TEACHING_ASSISTANT.map((course) => (
            <TeachingCard key={`${course.code}-${course.term}`} {...course} />
          ))}
        </div>
      </div>

      {/* Materials note */}
      <div className="mt-8 p-4 bg-[oklch(0.97_0.005_255)] rounded-lg border border-[oklch(0.9_0.008_255)]">
        <div className="flex items-start gap-3">
          <BookOpen
            size={16}
            className="text-[oklch(0.38_0.12_255)] mt-0.5 flex-shrink-0"
          />
          <div>
            <p className="text-[0.85rem] font-medium text-[oklch(0.2_0.02_255)] mb-1">
              Teaching Materials
            </p>
            <p className="text-[0.82rem] text-[oklch(0.4_0.02_255)] leading-relaxed">
              Tutorial-related materials are available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}