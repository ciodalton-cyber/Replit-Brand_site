export default function LogoMark({ size = 120 }: { size?: number }) {
  const scale = size / 200;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className="logo-mark"
      aria-label="Dalton Grant logo mark"
    >
      <rect width="200" height="200" fill="#111111" />
      <line x1="0" y1="124" x2="200" y2="124" stroke="#FAFAF8" strokeWidth="1" />
      {/* D */}
      <line x1="40" y1="20" x2="40" y2="114" stroke="#FAFAF8" strokeWidth="7" strokeLinecap="square" />
      <path d="M 40 20 Q 96 20 96 67 Q 96 114 40 114" fill="none" stroke="#FAFAF8" strokeWidth="7" strokeLinecap="square" />
      {/* G */}
      <path d="M 158 28 A 48 43 0 1 0 158 108" fill="none" stroke="#FAFAF8" strokeWidth="7" strokeLinecap="square" />
      <line x1="158" y1="108" x2="158" y2="88" stroke="#FAFAF8" strokeWidth="7" strokeLinecap="square" />
      <line x1="136" y1="88" x2="158" y2="88" stroke="#FAFAF8" strokeWidth="7" strokeLinecap="square" />
      {/* Name */}
      <text
        x="20" y="145"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="10"
        fontWeight="300"
        letterSpacing="6"
        fill="#FAFAF8"
      >
        DALTON GRANT
      </text>
      <text
        x="20" y="160"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="7"
        fontWeight="300"
        letterSpacing="3"
        fill="#888888"
      >
        WRITER DIRECTOR · FILM &amp; TV/WEB SERIES
      </text>
    </svg>
  );
}
