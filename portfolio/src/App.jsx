import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      {/* Scroll restoration helper */}
      <ScrollToTop />
      
      {/* Animation handler for page transitions */}
      <AnimatePresence mode='wait'>
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Project Details Page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
          
          {/* 404 Page - Optional */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
                <a 
                  href="/" 
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
                >
                  Return Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;