import React from 'react';

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

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);


const Policies: React.FC = () => {
    const policies = [
        { title: "Notice of Privacy Practices (NPP)", description: "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully." },
        { title: "Informed Consent for Treatment", description: "This document outlines the risks, benefits, and alternatives to therapy, as well as your rights as a client." },
        { title: "Financial Agreement", description: "Details my session fees, payment policies, insurance billing procedures, and cancellation policy." },
        { title: "Telehealth Consent", description: "Information regarding the use of technology for remote sessions, including risks and emergency protocols." },
        { title: "Records Release Authorization", description: "A form to authorize the release of your protected health information to other providers or entities." },
    ];

    return (
        <PageWrapper title="Policies & Forms" subtitle="Below you will find important documents regarding your rights, my practice policies, and the therapeutic process.">
            <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                    {policies.map((policy, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-light-gray flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-text-primary mb-1">{policy.title}</h2>
                                <p className="text-text-primary/80">{policy.description}</p>
                            </div>
                            <a href="#" className="flex-shrink-0 bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-sm flex items-center gap-2">
                                <DownloadIcon />
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>
                 <div className="mt-12 text-center text-text-primary/70 bg-accent/20 p-6 rounded-2xl">
                    <p>These documents are provided in PDF format. You will have an opportunity to review and sign them electronically through the secure client portal before our first session.</p>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Policies;