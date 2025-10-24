
import React from 'react';

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

const About: React.FC = () => {
    return (
        <PageWrapper title="About Me">
            <div className="max-w-4xl mx-auto">
                {/* Personal Story */}
                <section className="mb-16 grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <img src="https://picsum.photos/id/1027/400/400" alt="Dr. Anya Sharma in her office" className="rounded-full shadow-xl w-64 h-64 object-cover" />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">My Journey to Becoming a Therapist</h2>
                        <p className="text-charcoal/80 mb-4 leading-relaxed">
                            My path has always been guided by a profound curiosity about the human experience and a deep-seated desire to help others. I believe that within every person lies the capacity for growth, resilience, and healing. Therapy is the process of gently uncovering that capacity.
                        </p>
                        <p className="text-charcoal/80 leading-relaxed">
                            I see therapy not as "fixing" something that is broken, but as a collaborative journey of exploration. My role is to be your guide and supporter, providing a safe harbor where you can explore your inner world, understand your patterns, and build a more fulfilling life based on your values.
                        </p>
                    </div>
                </section>

                {/* Credentials & Approach */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold font-serif text-charcoal mb-8 text-center">Credentials & Therapeutic Approach</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-sky-blue/20 p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Education & Licenses</h3>
                            <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                                <li>Master of Social Work (MSW) - University of California, Berkeley</li>
                                <li>Licensed Clinical Social Worker (LCSW) - California #12345</li>
                                <li>Certified EMDR Therapist</li>
                                <li>Member of the National Association of Social Workers (NASW)</li>
                            </ul>
                        </div>
                        <div className="bg-pale-peach p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-3">Therapeutic Modalities</h3>
                            <ul className="list-disc list-inside space-y-2 text-charcoal/80">
                                <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
                                <li>Cognitive Behavioral Therapy (CBT)</li>
                                <li>Mindfulness-Based Stress Reduction (MBSR)</li>
                                <li>Attachment-Based Therapy</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Therapy Philosophy */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">My Philosophy</h2>
                    <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                        "Therapy is a partnership, not a prescription." I believe you are the expert on your own life. My approach is centered on creating a warm, authentic, and non-judgmental environment where you feel empowered to explore, grow, and heal at your own pace. We work together to unlock your inherent strengths and build a life that feels authentic and meaningful to you.
                    </p>
                </section>
            </div>
        </PageWrapper>
    );
};

export default About;