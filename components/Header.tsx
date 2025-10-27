import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a7 7 0 0 1-7 7Zm0 0V8"></path></svg>
);


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/blog', name: 'Resources' },
        { path: '/faq', name: 'FAQ' },
        { path: '/contact', name: 'Contact' },
    ];

    const linkClasses = "px-3 py-2 rounded-md text-text-primary hover:text-primary transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white";
    const activeLinkClasses = "text-primary font-semibold";

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-text-primary">
                    <LeafIcon />
                    Serene Pathways
                </Link>

                <nav className="hidden md:flex items-center space-x-2">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                            {link.name}
                        </NavLink>
                    ))}
                </nav>
                
                <Link to="/contact" className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-white">
                    Book Consultation
                </Link>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text-primary rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white pb-4`}>
                <nav className="flex flex-col items-center space-y-2 px-4">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={({ isActive }) => `block w-full text-center py-2 ${linkClasses} ${isActive ? activeLinkClasses : ''}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 w-3/4 text-center bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-white">
                        Book Consultation
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;