import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
// Import other section components as needed
// import About from '../components/home/About';
// import Projects from '../components/home/Projects';
// import Skills from '../components/home/Skills';
// import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Experience />
      {/* Include other sections as you build them */}
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
