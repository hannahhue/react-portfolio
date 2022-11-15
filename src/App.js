import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
