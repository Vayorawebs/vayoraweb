import React from 'react';
import { Globe, Palette, Server, Settings, CheckCircle } from 'lucide-react';
import { services } from '../data/mock';
import LeadMagnet from '../components/LeadMagnet';

const Services = () => {
  const serviceDetails = [
    {
      icon: Server,
      title: "AI Voice Call Agents",
      tagline: "Never miss a sale. Turn every inbound call into a booked meeting instantly.",
      description: "Every missed call is a missed opportunity for revenue. Our AI Voice Agents ensure you capture 100% of your leads by answering instantly, sounding completely human, and qualifying prospects 24/7. You can literally book high-ticket meetings and close customers while you sleep, scaling your business effortlessly without the cost of a human sales team.",
      features: [
        "Instantly answer 100% of inbound calls",
        "Human-like, conversational voice AI",
        "Automated lead qualification & booking",
        "Custom knowledge base from your website",
        "Transfers complex calls to human staff",
        "Scale your customer service without extra payroll"
      ],
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80"
    },
    {
      icon: Settings,
      title: "WhatsApp AI Automations",
      tagline: "Convert DMs into dollars on the app your customers already use.",
      description: "Meet your customers exactly where they spend their time—WhatsApp. Our conversational AI instantly replies to inquiries, nurtures curiosity into desire, and directly closes sales right in the chat. By automating rapid, intelligent responses, you'll see a massive spike in conversion rates, recover lost leads, and build fierce customer loyalty on autopilot.",
      features: [
        "Immediate responses to customer queries",
        "Automated order tracking & support",
        "Custom flows to convert leads into sales",
        "24/7 availability for global customers",
        "Seamless human handoff",
        "Re-engagement broadcasts"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    },
    {
      icon: Globe,
      title: "Business Website Development",
      tagline: "Don't just launch a website. Launch a 24/7 digital salesperson.",
      description: "Your website shouldn't just look pretty; it should be an aggressive revenue engine. We craft high-performance, visually magnetic platforms engineered specifically to convert traffic into sales. Using psychological design principles and seamless sales funnels, we ensure every visitor gets hooked, keeping them engaged until they explicitly take action.",
      features: [
        "Custom themes & modern UI/UX",
        "Responsive and mobile-first layouts",
        "Conversion-optimized landing pages",
        "Deep AI Chatbot integration",
        "Advanced SEO architecture",
        "Content Management Systems"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
      icon: Palette,
      title: "Brand Logo & Identity Design",
      tagline: "Command premium prices with a brand identity that oozes authority.",
      description: "Customers buy with their eyes first. A brand that looks premium immediately commands higher prices and instant, unwavering trust. We construct a magnetic, high-status visual identity—from logos to color psychology—that captivates your exact target audience, crushes your competitors, and irresistibly draws high-paying clients to your business.",
      features: [
        "Understanding your unique story",
        "Crafting unique visual concepts",
        "Color, shape, and typography selection",
        "Complete brand identity package",
        "Professional social media kits",
        "Print-ready asset generation"
      ],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--vayora-text-secondary)] max-w-3xl mx-auto">
            Complete digital solutions to transform your business presence
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon === 'Globe' ? Globe : service.icon === 'Palette' ? Palette : service.icon === 'Server' ? Server : Settings;
              return (
                <div key={service.id} className="glass-card p-8 text-center card-glow">
                  <div className="w-16 h-16 bg-[var(--vayora-accent-sage)] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-[var(--vayora-bg-primary)]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className={`grid md:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                    isEven ? '' : 'md:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'md:col-start-2'}>
                    <div className="w-16 h-16 bg-[var(--vayora-accent-sage)] rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="text-[var(--vayora-bg-primary)]" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[var(--vayora-accent-sage)] font-medium mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[var(--vayora-text-secondary)] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold text-lg mb-4">What You Get:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="text-[var(--vayora-accent-sage)] flex-shrink-0 mt-1" size={20} />
                          <span className="text-[var(--vayora-text-secondary)]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={isEven ? '' : 'md:col-start-1 md:row-start-1'}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--vayora-bg-secondary)] to-[var(--vayora-bg-primary)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stop Losing Revenue to Missed Calls
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              Our AI Voice Agents work 24/7. See exactly how much they can save your business.
            </p>
          </div>
          <LeadMagnet />
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-2xl mx-auto">
              From concept to launch, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your business, goals, and target audience" },
              { step: "02", title: "Design", description: "Creating beautiful, functional designs that reflect your brand" },
              { step: "03", title: "Development", description: "Building your website with clean code and modern technology" },
              { step: "04", title: "Launch", description: "Testing, optimization, and successful deployment" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[var(--vayora-accent-sage)] opacity-20 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-[var(--vayora-text-muted)]">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;