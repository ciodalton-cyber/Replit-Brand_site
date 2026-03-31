export default function LogoReel() {
    return (
      <section
        id="logo-reel"
        style={{
          background: "#0a0a0a",
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            display: "block",
            maxHeight: "320px",
            objectFit: "cover",
          }}
        >
          <source
            src={`${import.meta.env.BASE_URL}logo-reel.mp4`}
            type="video/mp4"
          />
        </video>
      </section>
    );
  }
  