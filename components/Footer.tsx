
import React from 'react';
import { Link } from 'react-router-dom';

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-deep-sage"><path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v5a7 7 0 0 1-7 7Zm0 0V8"></path></svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);


const Footer: React.FC = () => {
    return (
        <footer className="bg-charcoal text-off-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-serif text-off-white mb-4">
                           <LeafIcon />
                           Serene Pathways
                        </Link>
                        <p className="text-gray-400">Your journey to healing and self-discovery starts here. Providing compassionate and professional therapy services.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 font-serif">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-deep-sage transition-colors">About Me</Link></li>
                            <li><Link to="/services" className="hover:text-deep-sage transition-colors">Services</Link></li>
                            <li><Link to="/blog" className="hover:text-deep-sage transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-deep-sage transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 font-serif">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/policies" className="hover:text-deep-sage transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/policies" className="hover:text-deep-sage transition-colors">Terms of Service</Link></li>
                            <li><Link to="/policies" className="hover:text-deep-sage transition-colors">HIPAA Notice</Link></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 font-serif">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3"><MapPinIcon /><a href="#" className="hover:text-deep-sage transition-colors">123 Wellness Lane, Tranquility, CA 90210</a></li>
                            <li className="flex items-center gap-3"><PhoneIcon /><a href="tel:123-456-7890" className="hover:text-deep-sage transition-colors">(123) 456-7890</a></li>
                            <li className="flex items-center gap-3"><MailIcon /><a href="mailto:contact@serenepathways.com" className="hover:text-deep-sage transition-colors">contact@serenepathways.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Serene Pathways Therapy. All Rights Reserved.</p>
                    <p className="text-sm">If you are in a life-threatening situation, do not use this site. Call the National Suicide Prevention Lifeline, a free, 24-hour hotline, at 1-800-273-8255. Your call will be confidential and free.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;