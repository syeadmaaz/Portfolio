import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  LandingArea,
  About,
  Education,
  WorkExperience,
  Internship,
  Tech,
  Projects,
  Testimonials,
  Contact,
  Footer,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-LandingArea-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <LandingArea />
        </div>
        <About />
        <Education />
        <WorkExperience />
        <Internship />
        <Tech />
        {/* <Projects /> */}
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
