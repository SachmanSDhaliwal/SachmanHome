import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MatrixRainingCode from "./components/MatrixRainingEffect";
import WorkExperience from "./components/WorkExperience";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixRainingCode />
      <div className="relative z-10 flex flex-col">
        <NavBar />
        <Hero />
        <Projects />
        <WorkExperience/>
        <ContactForm/>
        
      </div>
    </div>
  );
}
