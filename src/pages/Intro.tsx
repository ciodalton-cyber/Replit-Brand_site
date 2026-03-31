import { useEffect, useRef } from "react";

export default function Intro() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300);
  }, []);

  return (
    <section
      className="page-section golden-rule"
      id="intro"
      style={{ background: "#0a0a0a" }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={`${import.meta.env.BASE_URL}intro-reel.mp4`} type="video/mp4" />
      </video>

      {/* Overlay gradient — bottom 40% darkens so text sits clean */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0) 30%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.95) 100%)",
          zIndex: 3,
        }}
      />

      {/* Top-left: caption label */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          zIndex: 10,
        }}
      >
        <p className="text-caption">Dalton Grant Jr. — Portfolio 2024</p>
      </div>

      {/* Top-right: horizontal rule tag */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ width: "40px", height: "1px", background: "rgba(250,250,248,0.3)" }} />
        <p className="text-caption">20+ Years in Animation</p>
      </div>

      {/* Main headline — centered, film title card feel */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          bottom: "20%",
          left: 0,
          right: 0,
          padding: "0 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Hairline above headline */}
        <div style={{ width: "1px", height: "60px", background: "rgba(250,250,248,0.3)" }} />

        <h1
          ref={headlineRef}
          className="text-display"
          style={{
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          Story
          <br />
          <span style={{ fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.02em" }}>
            in motion.
          </span>
        </h1>

        {/* Horizontal rule — Logo 3 language */}
        <div style={{ width: "100%", maxWidth: "900px", height: "1px", background: "rgba(250,250,248,0.2)", margin: "8px 0" }} />

        {/* Sub-caption */}
        <p className="text-caption" style={{ textAlign: "center", letterSpacing: "0.12em" }}>
          Writer · Director · Character Designer
          &nbsp;&nbsp;—&nbsp;&nbsp;
          Pixar · DreamWorks · Disney · Paramount · Amazon
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll to services"
        onKeyDown={(e) => e.key === "Enter" && document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
      >
        <p className="text-caption" style={{ letterSpacing: "0.14em" }}>Enter</p>
        <div className="scroll-indicator" style={{ width: "1px", height: "40px", background: "rgba(250,250,248,0.4)" }} />
      </div>
    </section>
  );
}
