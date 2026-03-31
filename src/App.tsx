import Intro from "@/pages/Intro";
  import LogoReel from "@/pages/LogoReel";
  import Services from "@/pages/Services";
  import "./index.css";

  export default function App() {
    return (
      <main
        style={{
          background: "#111111",
          overflowX: "hidden",
        }}
      >
        <Intro />
        <LogoReel />
        <Services />
      </main>
    );
  }
  