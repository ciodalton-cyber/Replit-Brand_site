import { useEffect, useRef } from "react";

interface WeChatModalProps {
  onClose: () => void;
}

export default function WeChatModal({ onClose }: WeChatModalProps) {
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="WeChat QR Code"
    >
      <div
        style={{
          background: "#1a1a1a",
          border: "1px solid rgba(250,250,248,0.15)",
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          maxWidth: "360px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Close — top right */}
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

        {/* Label */}
        <div style={{ textAlign: "center" }}>
          <p className="text-h3" style={{ marginBottom: "4px" }}>WeChat</p>
          <p className="text-caption" style={{ color: "rgba(250,250,248,0.4)" }}>
            Scan to connect
          </p>
        </div>

        {/* QR placeholder — swap with real QR image */}
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid rgba(250,250,248,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            background: "#FAFAF8",
          }}
        >
          {/* Corner registration marks */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                borderColor: "#111",
                borderStyle: "solid",
                borderWidth: pos.includes("top") ? "3px 0 0" : "0 0 3px",
                ...(pos.includes("left")
                  ? { left: 0, borderLeftWidth: "3px", borderRightWidth: 0 }
                  : { right: 0, borderRightWidth: "3px", borderLeftWidth: 0 }),
                ...(pos.includes("top") ? { top: 0 } : { bottom: 0 }),
              }}
            />
          ))}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "#444",
              textAlign: "center",
              lineHeight: "1.8",
              textTransform: "uppercase",
              padding: "16px",
            }}
          >
            Place WeChat
            <br />
            QR code image
            <br />
            here
          </p>
        </div>

        <p className="text-caption" style={{ textAlign: "center", lineHeight: "1.8" }}>
          Dalton Grant Jr.
          <br />
          <span style={{ color: "rgba(250,250,248,0.3)" }}>ciodalton@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
