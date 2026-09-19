
import Layout from './components/Layout/Layout';
import { About } from './pages/About/About';
import { Techstack } from './pages/Techstack/Techstack';
import { Projects } from './pages/Projects/Projects';
import { Education } from './pages/Educations/Education';
import { Work } from './pages/Work/Work';
import { Contact } from './pages/Contact/Contact';

import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';

import Tada from 'react-reveal/Tada';

import { MobileNav } from './components/MobileNav/MobileNav';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />

        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Work />
          <Contact />
        </div>
        <Tada>
          <div className="footer" style={{ paddingBottom: "20px" }}>
            <h4 className="text-center">
              &copy; {new Date().getFullYear()} Lwin Mateo Lopez. All Rights Reserved.
            </h4>
          </div>
        </Tada>
      </div>

      <ScrollToTop
        smooth
        color=""
        style={{ backgroundColor: "black", borderRadius: "80px" }} />

    </>
  );
}

export default App;
