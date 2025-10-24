
import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-deep-sage transition-transform duration-300"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-deep-sage transition-transform duration-300 rotate-180"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);


const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-light-gray">
            <button
                className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none focus-visible:ring focus-visible:ring-deep-sage focus-visible:ring-opacity-75"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-charcoal">{title}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <div className="py-4 px-2 text-charcoal/80 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

interface AccordionProps {
    items: {
        title: string;
        content: string;
    }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <div className="w-full max-w-3xl mx-auto">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    <p>{item.content}</p>
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;