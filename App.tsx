
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Policies from './pages/Policies';
import FAQ from './pages/FAQ';
import Chatbot from './components/Chatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="bg-off-white text-charcoal font-sans min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;