import React from 'react';

const PageWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-surface">
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-text-primary">{title}</h1>
        </div>
        <div className="bg-white">
            <div className="container mx-auto px-6 py-20">
                {children}
            </div>
        </div>
    </div>
);

const ServiceCard: React.FC<{ title: string, description: string, children: React.ReactNode }> = ({title, description, children}) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 border border-light-gray">
        <h3 className="text-2xl font-bold font-serif text-text-primary mb-3">{title}</h3>
        <p className="text-text-primary/80 mb-6 leading-relaxed">{description}</p>
        <div className="prose max-w-none text-text-primary/80">
            {children}
        </div>
    </div>
);


const Services: React.FC = () => {
    return (
        <PageWrapper title="Services & Investment">
            <div className="max-w-4xl mx-auto">
                <ServiceCard title="Individual Therapy" description="For adults and adolescents seeking to navigate life's challenges, improve self-awareness, and foster personal growth in a supportive one-on-one setting.">
                    <p>Common issues we can address include:</p>
                    <ul>
                        <li>Anxiety, worry, and panic attacks</li>
                        <li>Depression and low mood</li>
                        <li>Trauma and PTSD</li>
                        <li>Grief and loss</li>
                        <li>Life transitions (career changes, relocation, etc.)</li>
                        <li>Relationship difficulties and self-esteem issues</li>
                    </ul>
                    <p>Your first session will be an intake assessment where we explore your history and goals for therapy. Subsequent sessions are 50 minutes long.</p>
                </ServiceCard>

                <ServiceCard title="Couples & Family Therapy" description="For partners and families looking to improve communication, resolve conflicts, and build stronger, more resilient relationships.">
                     <p>We can work on:</p>
                    <ul>
                        <li>Improving communication and conflict resolution skills</li>
                        <li>Navigating major life events as a unit</li>
                        <li>Rebuilding trust and intimacy</li>
                        <li>Addressing parenting challenges</li>
                        <li>Healing from past hurts</li>
                    </ul>
                    <p>Sessions are tailored to the unique dynamics of your relationship or family system and are typically 50-75 minutes long.</p>
                </ServiceCard>

                <ServiceCard title="Specialized EMDR Therapy" description="Eye Movement Desensitization and Reprocessing (EMDR) is a powerful, evidence-based therapy for treating trauma, PTSD, anxiety, and other distressing life experiences.">
                     <p>EMDR can be particularly effective for individuals who:</p>
                    <ul>
                        <li>Have experienced a single-incident trauma (e.g., accident, assault).</li>
                        <li>Suffer from complex or developmental trauma.</li>
                        <li>Feel 'stuck' in patterns of negative beliefs about themselves.</li>
                        <li>Struggle with phobias, panic disorders, or performance anxiety.</li>
                    </ul>
                    <p>EMDR sessions are typically 60-90 minutes long to allow adequate time for processing.</p>
                </ServiceCard>
                
                {/* Investment Section */}
                <section className="bg-surface p-8 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold font-serif text-text-primary mb-4">Investment in Your Well-Being</h2>
                    <p className="text-text-primary/80 max-w-2xl mx-auto mb-8">
                        I am committed to making therapy accessible and providing transparent information about fees. Your investment is a commitment to your long-term health and happiness.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Session Rates</h3>
                            <p className="text-4xl font-bold text-primary mb-2">$150</p>
                            <p className="text-text-primary/70">per 50-minute session</p>
                            <p className="text-sm mt-4">Extended sessions (EMDR, Couples) are prorated.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Insurance & Payment</h3>
                            <p className="text-text-primary/70 mb-2">I am an out-of-network provider. I can provide a superbill for you to seek reimbursement from your PPO plan.</p>
                            <p className="text-text-primary/70">Payment is due at time of service via Credit/Debit or HSA/FSA cards.</p>
                        </div>
                    </div>
                     <p className="mt-8 text-sm text-text-primary/70">Under the No Surprises Act, you have the right to receive a "Good Faith Estimate" explaining how much your medical care will cost. For questions or more information, please don't hesitate to ask.</p>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Services;