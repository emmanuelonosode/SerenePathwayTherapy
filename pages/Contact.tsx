
import React from 'react';
import Accordion from '../components/Accordion';
import { contactFaqs } from '../constants';

const PageWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-deep-sage/10">
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-charcoal">{title}</h1>
        </div>
        <div className="bg-off-white">
            <div className="container mx-auto px-6 py-20">
                {children}
            </div>
        </div>
    </div>
);

const Contact: React.FC = () => {
    return (
        <PageWrapper title="Let's Connect">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold font-serif text-charcoal mb-2">Schedule a Free 15-Min Consultation</h2>
                    <p className="text-charcoal/80 mb-6">Fill out the form below and I'll respond within 24 business hours to schedule your free consultation call.</p>
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-charcoal">First Name</label>
                                <input type="text" id="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-charcoal">Last Name</label>
                                <input type="text" id="lastName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage" />
                            </div>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal">Phone Number</label>
                            <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage" />
                        </div>
                         <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-charcoal">Reason for Seeking Therapy</label>
                            <select id="reason" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage">
                                <option>Select one...</option>
                                <option>Anxiety / Stress</option>
                                <option>Depression</option>
                                <option>Relationship Issues</option>
                                <option>Trauma</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message (Optional)</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-deep-sage focus:ring-deep-sage"></textarea>
                        </div>
                        <div className="!mt-6">
                            <div className="flex items-start">
                                <input id="hipaa" name="hipaa" type="checkbox" className="h-4 w-4 text-deep-sage border-gray-300 rounded focus:ring-deep-sage" />
                                <div className="ml-3 text-sm">
                                    <label htmlFor="hipaa" className="text-charcoal/80">I understand this is a non-secure contact form. For confidential messages, I will use the secure client portal after my first appointment.</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-burnt-sienna text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                            Send Request
                        </button>
                    </form>
                </div>

                {/* Contact Info & Location */}
                <div className="space-y-12">
                     <div>
                        <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Out</h3>
                        <div className="space-y-4 text-charcoal/80">
                           <p><strong>Secure Email:</strong> <a href="mailto:contact@serenepathways.com" className="text-deep-sage hover:underline">contact@serenepathways.com</a></p>
                           <p><strong>Phone:</strong> <a href="tel:123-456-7890" className="text-deep-sage hover:underline">(123) 456-7890</a></p>
                           <p className="text-sm">Please note that email and text are not considered HIPAA-compliant for sharing Protected Health Information (PHI). Please reserve sensitive details for our secure client portal or phone calls.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                        <p className="text-charcoal/80 mb-4">123 Wellness Lane, Tranquility, CA 90210</p>
                        <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://picsum.photos/800/450?grayscale&blur=2" className="w-full h-full object-cover" alt="Map to office location"/>
                        </div>
                         <p className="mt-4 text-charcoal/80">My office is wheelchair accessible with free parking available. Virtual sessions are also available for all California residents.</p>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <div className="mt-20">
                <h2 className="text-3xl font-bold font-serif text-charcoal mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion items={contactFaqs} />
            </div>
        </PageWrapper>
    );
};

export default Contact;