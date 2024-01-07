import './App.css';
import Head from './components/Header/Head.tsx';
import Landing from './components/Main/Landing/Landing.tsx';
import Projects from './components/Main/Projects/Projects.tsx';
import Skills from './components/Main/Skills/Skills.tsx';
import Contact from './components/Main/Contact/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';


function App() {

  return (
    <>
      <Head />
      <main className='white' >
        <section id='landing'>
          <Landing />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
