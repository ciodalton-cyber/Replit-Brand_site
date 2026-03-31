import { useEffect, useRef } from "react";

  interface RedNoteModalProps {
    onClose: () => void;
  }

  export default function RedNoteModal({ onClose }: RedNoteModalProps) {
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKey);
        document.body.style.overflow = "";
      };
    }, [onClose]);

    return (
      <div
        ref={backdropRef}
        className="modal-backdrop"
        onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label="RedNote QR Code"
      >
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid rgba(250,250,248,0.15)",
            padding: "48px 40px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            maxWidth: "380px",
            width: "100%",
            position: "relative",
            borderRadius: "4px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "none",
              border: "none",
              color: "rgba(250,250,248,0.4)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            aria-label="Close"
          >
            ✕ Close
          </button>

          <div style={{ textAlign: "center" }}>
            <p className="text-h3" style={{ marginBottom: "4px" }}>小红书 RedNote</p>
            <p className="text-caption" style={{ color: "rgba(250,250,248,0.4)" }}>
              叼哥画画 · ID: 6147347010
            </p>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}rednote-qr.png`}
            alt="RedNote QR Code — 叼哥画画"
            style={{ width: "260px", borderRadius: "8px" }}
          />

          <a
            href="https://www.xiaohongshu.com/user/profile/6147347010"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-btn"
            style={{ width: "100%", justifyContent: "center", textDecoration: "none" }}
          >
            Open Profile on RedNote →
          </a>

          <p className="text-caption" style={{ color: "rgba(250,250,248,0.3)", textAlign: "center" }}>
            Scan QR · Find me on RedNote
          </p>
        </div>
      </div>
    );
  }
  