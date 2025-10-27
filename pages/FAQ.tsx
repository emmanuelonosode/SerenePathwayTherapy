import React from 'react';
import Accordion from '../components/Accordion';
import { mainFaqs } from '../constants';

const PageWrapper: React.FC<{ title: string, subtitle: string, children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <div className="bg-surface">
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-text-primary mb-2">{title}</h1>
            <p className="text-lg text-text-primary/80 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20">
                {children}
            </div>
        </div>
    </div>
);

const FAQ: React.FC = () => {
    return (
        <PageWrapper title="Your Questions Answered" subtitle="Find answers to common questions about therapy, logistics, and what to expect on your journey.">
            <div className="max-w-4xl mx-auto space-y-16">
                <section>
                    <h2 className="text-2xl font-bold font-serif text-text-primary mb-6 border-b-2 border-primary/50 pb-2">Getting Started with Therapy</h2>
                    <Accordion items={mainFaqs.preTherapy} />
                </section>
                <section>
                    <h2 className="text-2xl font-bold font-serif text-text-primary mb-6 border-b-2 border-primary/50 pb-2">Practical Questions</h2>
                    <Accordion items={mainFaqs.practical} />
                </section>
                <section>
                    <h2 className="text-2xl font-bold font-serif text-text-primary mb-6 border-b-2 border-primary/50 pb-2">Confidentiality & Privacy</h2>
                    <Accordion items={mainFaqs.confidentiality} />
                </section>
                <section>
                    <h2 className="text-2xl font-bold font-serif text-text-primary mb-6 border-b-2 border-primary/50 pb-2">Session Logistics</h2>
                    <Accordion items={mainFaqs.logistics} />
                </section>
            </div>
        </PageWrapper>
    );
};

export default FAQ;