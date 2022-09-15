import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import BgCircle from "./Pages/BgCircle";
import "./Css/Default.css";
import "./Css/Media.css";

function App() {
  return (
    <>
      <BgCircle />
      <div className="main">
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
