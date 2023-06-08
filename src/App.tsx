import { useEffect, useState } from 'react';
import './App.css';
import Head from './components/Header/Head.tsx';
import Landing from './components/Main/Landing/Landing.tsx';
import Projects from  './components/Main/Projects/Projects.tsx';
import Skills from './components/Main/Skills/Skills.tsx';
import Contact from './components/Main/Contact/Contact.tsx';
function App() {
  const [showNav, setShowNav] = useState(true);
  let yPos = window.pageYOffset || document.documentElement.scrollTop;
  let shouldShowNav = true;
  const show = () => {
    shouldShowNav = true;
    document.querySelector("header")?.classList.remove("slide-up");
    setShowNav(shouldShowNav);

  }
  const hide = () => {
    if (document.querySelector(".menu-btn-wrapper")?.classList.contains("opened")) {
      setTimeout(hide, 1000);
    }
    else {
      shouldShowNav = false;
      document.querySelector("header")?.classList.add("slide-up");
      setTimeout(() => {
        setShowNav(shouldShowNav);
      }, 600);
    }
  }
  let timer: any;
  const handleScroll = () => {

    show();
    clearTimeout(timer);
    yPos = window.pageYOffset || document.documentElement.scrollTop
    if (yPos > 0) {
      
      document.querySelector("header")?.classList.add("undocked");
      timer = setTimeout(hide, 1000);
    } else if (!document.querySelector(".menu-btn-wrapper")?.classList.contains("opened")){
      document.querySelector("header")?.classList.remove("undocked");
    }
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 130) {
      document.querySelector("header")?.classList.add("undocked");
      show();
    } else {
      if (!document.querySelector(".menu-btn-wrapper")?.classList.contains("opened")) {
        document.querySelector("header")?.classList.remove("undocked");
      }

      if (yPos > 0
        && shouldShowNav == true
      ) {
        hide();
      }
    }

  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      {showNav && <Head />}
      <main>
        <section id='landing'>
          <Landing/>
        </section>
        <section id='projects'>
          <Projects/>
        </section>
        <section id='skills'>
          <Skills/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>

    </>
  );
}

export default App;
