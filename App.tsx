import React, { lazy, Suspense } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './src/components/ThemeProvider';
import { useTheme } from './src/components/useTheme';

const Home = lazy(() => import('./src/pages/Home.tsx'));
const About = lazy(() => import('./src/pages/About.tsx'));
const Treatments = lazy(() => import('./src/pages/Treatments.tsx'));
const Testimonials = lazy(() => import('./src/pages/Testimonials.tsx'));
const Contact = lazy(() => import('./src/pages/Contact.tsx'));
const NotFound = lazy(() => import('./src/pages/NotFound.tsx'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Theme appearance="inherit" radius="large" scaling="100%">
        <Router>
          <main className="min-h-screen font-inter">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white text-emerald-600 font-serif text-lg">Loading Dr. Shraddha Wanje Clinic...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <ThemedToastContainer />
          </main>
        </Router>
      </Theme>
    </ThemeProvider>
  );
};

const ThemedToastContainer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme={theme}
    />
  );
};

export default App;