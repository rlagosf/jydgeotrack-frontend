import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00334F] via-[#005887] to-[#24C6FF] text-white font-toxigenesis relative">

      {/* NAVBAR */}
      <Navbar />

      {/* Contenido principal */}
      <div className="pt-20"> 
        {/* pt-20 para que el contenido NO quede debajo del navbar fijo */}
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          JD GEOTRACK
        </h1>
      </div>

    </div>
  );
}

export default App;
