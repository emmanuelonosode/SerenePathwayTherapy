import React from "react";
import { Link } from "react-router-dom";
import { services, testimonials, blogPosts, homeFaqs } from "../constants";
import Accordion from "../components/Accordion";
import { useScrollAnimation } from "../components/useScrollAnimation";

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);
const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const WindIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>
);
const StarIcon = React.forwardRef<
  SVGSVGElement,
  { filled: boolean; className?: string }
>(({ filled, className = "" }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`text-gold ${className}`}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
));

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "user":
      return <UserIcon />;
    case "users":
      return <UsersIcon />;
    case "shield":
      return <ShieldIcon />;
    case "wind":
      return <WindIcon />;
    default:
      return null;
  }
};

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const [introRef, isIntroVisible] = useScrollAnimation<HTMLElement>();
  const [servicesRef, areServicesVisible] = useScrollAnimation<HTMLElement>();
  const [testimonialsRef, areTestimonialsVisible] =
    useScrollAnimation<HTMLElement>();
  const [resourcesRef, areResourcesVisible] = useScrollAnimation<HTMLElement>();
  const [faqRef, isFaqVisible] = useScrollAnimation<HTMLElement>();
  const [ctaRef, isCtaVisible] = useScrollAnimation<HTMLElement>();

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-deep-sage/10 min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 transform scale-110 transition-transform duration-500 ease-out hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
            transform: `scale(1.1)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70"></div>
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
          <div className="animate-fadeDown">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-charcoal leading-tight mb-4 drop-shadow-sm">
              You Don't Have to Face This Alone.
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-3xl mx-auto mb-8 drop-shadow-sm">
              Embark on a journey of healing and self-discovery in a safe,
              compassionate, and non-judgmental space.
            </p>
          </div>
          <div className="flex max-md:flex-col max-w-lg mx-auto justify-center items-center gap-4 animate-fadeUp">
            <Link
              to="/contact"
              className="w-full bg-burnt-sienna text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg text-lg hover:shadow-2xl hover:-translate-y-1 animate-float"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/about"
              className="w-full bg-transparent border-2 border-deep-sage text-deep-sage px-8 py-3 rounded-full hover:bg-deep-sage hover:text-white transition-all duration-300 text-lg hover:shadow-lg hover:-translate-y-1 animate-float"
            >
              Learn My Approach
            </Link>
          </div>
          <div className="mt-12 flex justify-center gap-6 text-sm text-charcoal/70 animate-fadeUp">
            <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-deep-sage">✓</span> Licensed Therapist
            </span>
            <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-deep-sage">✓</span> Accepting New Clients
            </span>
            <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-deep-sage">✓</span> Telehealth Available
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section
        ref={introRef}
        className={`py-20 bg-off-white transition-all duration-700 ease-out ${
          isIntroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80"
              alt="Dr. Anya Sharma"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover aspect-[4/5]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">
              Healing Starts with Connection
            </h2>
            <p className="text-charcoal/80 mb-4 leading-relaxed">
              Hello, I'm Dr. Anya Sharma. I believe that therapy is a
              collaborative partnership built on trust, empathy, and
              understanding. My journey into this field began with a deep desire
              to help others navigate life's complexities and find their inner
              strength.
            </p>
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              My approach is warm, integrative, and tailored to your unique
              needs. Together, we'll create a space where you can feel seen,
              heard, and empowered to create meaningful, lasting change in your
              life.
            </p>
            <Link
              to="/about"
              className="text-burnt-sienna font-semibold hover:underline"
            >
              More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        ref={servicesRef}
        className={`py-20 bg-pale-peach transition-all duration-700 ease-out ${
          areServicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif text-charcoal mb-2">
            How I Can Help
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-12">
            I specialize in a range of areas to support your mental and
            emotional well-being.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-off-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-deep-sage/5 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
                <div className="relative z-10">
                  <div className="text-deep-sage mb-4 w-12 h-12 mx-auto flex items-center justify-center bg-deep-sage/10 rounded-full group-hover:scale-110 group-hover:bg-deep-sage/20 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-deep-sage transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 group-hover:text-charcoal/80 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-12 inline-block bg-burnt-sienna text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Explore All Services
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className={`py-20 bg-off-white transition-all duration-700 ease-out ${
          areTestimonialsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif text-charcoal mb-12">
            What My Clients Say
          </h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-sky-blue/20 p-8 md:p-12 rounded-2xl shadow-inner overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-in-out ${
                    index === currentTestimonial
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  }`}
                >
                  {index === currentTestimonial && (
                    <>
                      <div className="flex justify-center mb-4">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <StarIcon key={i} filled={i < testimonial.rating} />
                          ))}
                      </div>
                      <p className="text-xl italic text-charcoal/90 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-charcoal">
                        - {testimonial.name}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-off-white p-3 rounded-full shadow-md hover:bg-light-gray transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-off-white p-3 rounded-full shadow-md hover:bg-light-gray transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section
        ref={resourcesRef}
        className={`py-20 bg-pale-peach transition-all duration-700 ease-out ${
          areResourcesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif text-charcoal mb-2">
            Insights & Support
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-12">
            Explore articles and resources to support your journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                to="/blog"
                key={post.id}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-deep-sage font-semibold mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-xl font-bold font-serif text-charcoal mb-3 group-hover:text-deep-sage transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-4 text-sm">
                    {post.excerpt.substring(0, 100)}...
                  </p>
                  <span className="font-semibold text-burnt-sienna group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-12 inline-block bg-burnt-sienna text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md"
          >
            View All Resources
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`py-20 bg-off-white transition-all duration-700 ease-out ${
          isFaqVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-charcoal mb-12">
              Your Questions Answered
            </h2>
          </div>
          <Accordion items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        ref={ctaRef}
        className={`py-20 bg-deep-sage/20 transition-all duration-700 ease-out ${
          isCtaVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-serif text-charcoal mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto mb-8">
            Your journey towards healing and a more fulfilling life can begin
            today. A free, no-obligation consultation is a great way to see if
            we're a good fit.
          </p>
          <Link
            to="/contact"
            className="bg-burnt-sienna text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg text-lg"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
