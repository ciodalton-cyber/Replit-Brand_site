import { useState } from "react";
import LogoMark from "../components/LogoMark";
import WeChatModal from "../components/WeChatModal";

const services = [
  {
    index: "01",
    title: "Writing & Directing",
    description:
      "Original screenplays, pilot scripts, and series bibles for TV, streaming, and web. Science fiction, action-adventure, and slice-of-life across live-action and animation formats.",
    tags: ["TV Series", "Web Series", "Feature Film", "Pilot"],
  },
  {
    index: "02",
    title: "Storyboarding",
    description:
      "Feature-quality boards with full staging, acting, and camera language. Built for animation pipelines, live-action pre-vis, and pitch decks that sell the story in the room.",
    tags: ["Feature Animation", "Pre-vis", "Pitch Decks"],
  },
  {
    index: "03",
    title: "Character Design",
    description:
      "Digital character development from concept through final model sheets. Designs built for production — on-model, expression-range tested, and studio-delivery ready.",
    tags: ["TV/Streaming", "Feature", "Kids' Animation", "Sci-Fi/Action"],
  },
  {
    index: "04",
    title: "Story Development",
    description:
      "Series story-room consulting, beat-sheet development, and narrative structure for projects in early creative development. Two decades of studio-system experience applied directly.",
    tags: ["Story Room", "Beat Sheets", "Development"],
  },
];

const credits = [
  "Cars — Pixar",
  "Shrek 2 — DreamWorks",
  "SpongeBob 2: AFOOW — Paramount",
  "DuckTales — Disney",
  "My Little Pony — DHX",
  "Tumble Leaf — Amazon",
  "Hey Toma — Mango TV",
];

export default function Services() {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <>
      <section
        className="page-section"
        id="services"
        style={{
          background: "#111111",
          overflowY: "auto",
          height: "auto",
          minHeight: "100dvh",
        }}
      >
        {/* Top rule — golden ratio anchor */}
        <div style={{ width: "100%", height: "1px", background: "rgba(250,250,248,0.1)" }} />

        {/* Nav bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 40px",
            borderBottom: "1px solid rgba(250,250,248,0.08)",
          }}
        >
          <a href="#intro" style={{ textDecoration: "none" }}>
            <LogoMark size={64} />
          </a>
          <p className="text-caption">Services &amp; Connect</p>
        </div>

        {/* Swiss 12-col grid content */}
        <div style={{ padding: "80px 40px 60px", maxWidth: "1200px", margin: "0 auto" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "60px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(250,250,248,0.3)" }} />
            <p className="text-h3">Services</p>
          </div>

          {/* Services list — 2-col on desktop */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
              gap: "0 80px",
            }}
          >
            {services.map((s) => (
              <div key={s.index} className="service-item">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <p className="text-accent-label" style={{ color: "rgba(250,250,248,0.9)" }}>
                    {s.title}
                  </p>
                  <span className="text-caption" style={{ color: "rgba(250,250,248,0.25)" }}>
                    {s.index}
                  </span>
                </div>
                <p className="text-body" style={{ marginBottom: "16px", fontSize: "0.9375rem" }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-caption"
                      style={{
                        border: "1px solid rgba(250,250,248,0.15)",
                        padding: "3px 8px",
                        color: "rgba(250,250,248,0.35)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(250,250,248,0.1)", margin: "80px 0 60px" }} />

          {/* Connect section */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(250,250,248,0.3)" }} />
            <p className="text-h3">Connect</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "20px",
              marginBottom: "80px",
            }}
          >
            {/* Redbook / Little Red Book */}
            <a
              href="https://www.xiaohongshu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="12" y2="16" />
              </svg>
              Redbook (小红书)
            </a>

            {/* WeChat QR */}
            <button
              className="connect-btn"
              onClick={() => setWechatOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 8.5a4 4 0 1 0 0 7 4 4 0 0 0 0-7Z" />
                <path d="M17.5 7a5 5 0 0 1 0 10" />
                <path d="M19.5 5a8 8 0 0 1 0 14" />
              </svg>
              WeChat — Scan QR
            </button>

            {/* Email */}
            <a
              href="mailto:ciodalton@gmail.com"
              className="connect-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              ciodalton@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(250,250,248,0.08)",
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Logo + rule */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <LogoMark size={80} />
            <div style={{ flex: 1, height: "1px", background: "rgba(250,250,248,0.08)", minWidth: "40px", margin: "0 24px" }} />
            <p className="text-caption" style={{ color: "rgba(250,250,248,0.2)" }}>
              © 2024 Dalton Grant Jr. All rights reserved.
            </p>
          </div>

          {/* Studio credits strip */}
          <div className="credits-strip">
            {credits.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </footer>
      </section>

      {wechatOpen && <WeChatModal onClose={() => setWechatOpen(false)} />}
    </>
  );
}
