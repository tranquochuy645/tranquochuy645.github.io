import { useEffect, useState } from 'react';
import './App.css';
import Head from './components/Header/Head.tsx';
import Landing from './components/Main/Landing/Landing.tsx';
import Projects from  './components/Main/Projects/Projects.tsx';
import Skills from './components/Main/Skills/Skills.tsx';
import Contact from './components/Main/Contact/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
function App() {
  const [showNav, setShowNav] = useState(true);
  let yPos = window.pageYOffset || document.documentElement.scrollTop;
  let shouldShowNav = true;
  const show = () => {
    shouldShowNav = true;
    document.getElementById("nav-wrapper")?.classList.remove("slide-up");
    setShowNav(shouldShowNav);

  }
  const hide = () => {
    if (document.getElementById("menu-btn-wrapper")?.classList.contains("opened")) {
      setTimeout(hide, 1000);
    }
    else {
      shouldShowNav = false;
      document.getElementById("nav-wrapper")?.classList.add("slide-up");
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
      
      document.getElementById("nav-wrapper")?.classList.add("undocked");
      timer = setTimeout(hide, 1000);
    } else if (!document.getElementById("menu-btn-wrapper")?.classList.contains("opened")){
      document.getElementById("nav-wrapper")?.classList.remove("undocked");
    }
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 130) {
      document.getElementById("nav-wrapper")?.classList.add("undocked");
      show();
    } else {
      if (!document.getElementById("menu-btn-wrapper")?.classList.contains("opened")) {
        document.getElementById("nav-wrapper")?.classList.remove("undocked");
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
      <main className='font-evil'>
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
      <Footer/>
    </> 
  );
}

export default App;
