import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00334F] via-[#005887] to-[#24C6FF] text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* Luego vendrán Services, About, Contact, etc. */}
    </div>
  );
}

export default App;
