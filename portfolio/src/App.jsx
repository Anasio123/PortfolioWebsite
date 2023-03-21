import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { AboutMe } from "./components/aboutme/AboutMe";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
