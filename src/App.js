import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      <header className="text-center p-6 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Code Own World</h1>
        <p>Remote Software Studio | Build Fast, Build Right</p>
      </header>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <footer className="text-center p-4 bg-gray-200 text-sm">
        © 2025 Code Own World. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
