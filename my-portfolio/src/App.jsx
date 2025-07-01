import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Homes from './sections/Homes';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 dark:text-gray-200">
        <Header />
        <main>
          <Homes />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;