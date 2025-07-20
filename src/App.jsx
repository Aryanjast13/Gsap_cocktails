import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


gsap.registerPlugin(ScrollTrigger,SplitText)

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className="min-h-dvh"></div>
     </main>
  );
}

export default App;
