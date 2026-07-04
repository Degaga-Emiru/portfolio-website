import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Homes from './sections/Homes';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Blog from './sections/Blog';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// this is the app js that control all things the router and etc 
function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Degaga Emiru | Portfolio</title>
        <meta name="description" content="Full-stack developer specializing in building modern, dynamic, and AI-driven websites. Explore my projects, skills, and blog." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://degaga-tech.vercel.app/" />
        <meta property="og:title" content="Degaga Emiru | Software Developer" />
        <meta property="og:description" content="Full-stack developer specializing in building modern, dynamic, and AI-driven websites. Explore my projects, skills, and blog." />
        <meta property="og:image" content="https://degaga-tech.vercel.app/projects/portfolio.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://degaga-tech.vercel.app/" />
        <meta property="twitter:title" content="Degaga Emiru | Software Developer" />
        <meta property="twitter:description" content="Full-stack developer specializing in building modern, dynamic, and AI-driven websites. Explore my projects, skills, and blog." />
        <meta property="twitter:image" content="https://degaga-tech.vercel.app/projects/portfolio.jpg" />
      </Helmet>

      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main>
          <Homes />
          <About />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Blog />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
// this is by default exported 
export default App;
