import React from 'react';
import { Target, Users, Award, Heart } from 'lucide-react';
import { companyInfo, whyChooseUs } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "We believe every business has an aura — a unique identity waiting to be felt, seen, and remembered. Our mission is to elevate that aura into the online world through thoughtful design, cutting-edge technology, and brands that speak without saying a word."
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "At Vayora, we don't just create websites. We build trust. We design identity. We craft presence. From the first conversation to the final pixel, we make sure your business looks confident, capable, and ready to grow."
    },
    {
      icon: Award,
      title: "Our Promise",
      description: "Your vision + our creativity = a digital presence that works 24/7 for your success. We're committed to delivering excellence in every project, ensuring your business stands out in the digital landscape."
    },
    {
      icon: Users,
      title: "Our Approach",
      description: "We take a client-first approach, understanding your unique needs and goals. Every project is tailored to reflect your brand's personality and connect with your target audience effectively."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">VAYORA_WEB</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--vayora-text-secondary)] max-w-3xl mx-auto">
            {companyInfo.tagline}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Transforming Ideas Into Digital Experiences
              </h2>
              <div className="space-y-4 text-[var(--vayora-text-secondary)] leading-relaxed">
                <p>
                  <strong className="text-white">VAYORA_WEB</strong> is a modern website design studio built to transform your ideas into powerful digital experiences. We believe every business has an aura — a unique identity waiting to be felt, seen, and remembered.
                </p>
                <p>
                  Our mission is to elevate that aura into the online world through thoughtful design, cutting-edge technology, and brands that speak without saying a word. We don't just build websites; we create digital homes that reflect your brand's essence.
                </p>
                <p>
                  From the first conversation to the final pixel, we make sure your business looks confident, capable, and ready to grow. Your success is our success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="glass-card p-8 card-glow">
                  <div className="w-16 h-16 bg-[var(--vayora-accent-sage)] rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="text-[var(--vayora-bg-primary)]" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[var(--vayora-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Your Business Needs Us
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              We help your business grow with professional digital solutions
            </p>
          </div>

          <div className="space-y-6">
            {whyChooseUs.map((reason) => (
              <div key={reason.id} className="glass-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-start">
                  <span className="text-[var(--vayora-accent-sage)] mr-3">✓</span>
                  {reason.title}
                </h3>
                <p className="text-[var(--vayora-text-secondary)] leading-relaxed ml-8">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
                alt="Professional team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-white mb-6">
                A Team Dedicated To Your Success
              </h2>
              <div className="space-y-4 text-[var(--vayora-text-secondary)] leading-relaxed">
                <p>
                  Our team consists of passionate designers, developers, and digital strategists who are committed to bringing your vision to life. We stay updated with the latest trends and technologies to deliver cutting-edge solutions.
                </p>
                <p>
                  Every project we take on is an opportunity to create something extraordinary. We work closely with our clients, treating their business as if it were our own, ensuring every detail is perfect.
                </p>
                <p>
                  With years of experience across diverse industries, we understand what it takes to create websites that not only look beautiful but also drive real business results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;