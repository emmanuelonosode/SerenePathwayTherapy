
import React from 'react';
import { blogPosts } from '../constants';

const PageWrapper: React.FC<{ title: string, subtitle: string, children: React.ReactNode }> = ({ title, subtitle, children }) => (
    <div className="bg-deep-sage/10">
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-charcoal mb-2">{title}</h1>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="bg-off-white">
            <div className="container mx-auto px-6 py-20">
                {children}
            </div>
        </div>
    </div>
);

const BlogPostCard: React.FC<{ post: typeof blogPosts[0] }> = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <p className="text-sm text-deep-sage font-semibold mb-2">{post.category} • {post.date}</p>
            <h3 className="text-xl font-bold font-serif text-charcoal mb-3 group-hover:text-deep-sage transition-colors">{post.title}</h3>
            <p className="text-charcoal/80 leading-relaxed mb-4">{post.excerpt}</p>
            <a href="#" className="font-semibold text-burnt-sienna hover:underline">Read More →</a>
        </div>
    </div>
);


const Blog: React.FC = () => {
    return (
        <PageWrapper title="Resources & Insights" subtitle="A collection of articles and tools to support your mental health journey outside of our sessions.">
            {/* Blog Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {blogPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Downloadable Resources */}
            <section className="bg-sky-blue/20 p-8 md:p-12 rounded-2xl text-center">
                <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">Free Downloadable Resources</h2>
                <p className="text-charcoal/80 max-w-2xl mx-auto mb-8">
                    These guides are designed to provide you with practical, actionable tools you can use right away.
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-off-white p-6 rounded-xl shadow-md flex flex-col items-center">
                         <h3 className="text-lg font-semibold mb-3">10 Grounding Techniques</h3>
                         <p className="text-sm text-charcoal/70 mb-4 flex-grow">A PDF guide to help you manage moments of intense anxiety or panic.</p>
                         <a href="#" className="bg-deep-sage text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Download PDF</a>
                    </div>
                    <div className="bg-off-white p-6 rounded-xl shadow-md flex flex-col items-center">
                         <h3 className="text-lg font-semibold mb-3">Journaling Prompts</h3>
                         <p className="text-sm text-charcoal/70 mb-4 flex-grow">30 days of prompts to foster self-discovery and reflection.</p>
                         <a href="#" className="bg-deep-sage text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Download PDF</a>
                    </div>
                     <div className="bg-off-white p-6 rounded-xl shadow-md flex flex-col items-center">
                         <h3 className="text-lg font-semibold mb-3">Relationship Guide</h3>
                         <p className="text-sm text-charcoal/70 mb-4 flex-grow">A worksheet for improving communication with your partner.</p>
                         <a href="#" className="bg-deep-sage text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">Download PDF</a>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default Blog;