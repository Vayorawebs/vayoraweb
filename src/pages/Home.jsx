import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageSquare, Monitor, LayoutTemplate, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioProjects, companyInfo } from '../data/mock';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, opacity: 1, 
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--vayora-bg-deep)] overflow-x-hidden pt-12 md:pt-16 text-white">
      
      {/* 1. Split-Screen Hero */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 relative z-10"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[var(--vayora-border)] bg-[var(--vayora-bg-secondary)]/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[var(--vayora-accent-sage)]" />
              <span className="text-xs font-semibold text-[var(--vayora-accent-sage)] tracking-wider uppercase">AI Automation Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Automate & Scale <br />
              <span className="text-gradient">With AI.</span>
            </h1>
            
            <p className="text-xl text-[var(--vayora-text-secondary)] max-w-lg leading-relaxed">
              We are an elite AI & Web Development agency. We build 24/7 AI Voice Agents, WhatsApp bots, and stunning premium websites that turn your traffic into booked revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-[var(--vayora-accent-sage)] transition-colors shadow-[0_0_40px_rgba(56,189,248,0.2)] text-center">
                Automate Your Business
              </Link>
              <Link to="/portfolio" className="px-8 py-4 border border-[var(--vayora-border)] bg-transparent text-white font-bold rounded-lg hover:bg-[var(--vayora-bg-secondary)] transition-colors text-center inline-flex items-center justify-center">
                View Architecture <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden border border-[var(--vayora-border-subtle)] shadow-[0_0_80px_rgba(56,189,248,0.1)] group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayora-bg-deep)] to-transparent z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80" 
               alt="AI Abstract"
               className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
             />
          </motion.div>
          
        </div>
      </section>

      {/* 2. Bento Box Services Layout */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ecosystem Architecture</h2>
            <p className="text-[var(--vayora-text-muted)] max-w-2xl mx-auto">Everything you need to dominate your market in one seamless package.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)] md:auto-rows-[250px]"
          >
            {/* Bento 1: Wide - Voice Call Agents */}
            <motion.div variants={itemVariants} className="md:col-span-2 rounded-3xl bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border-subtle)] p-8 relative overflow-hidden group hover:border-[var(--vayora-accent-sage)] transition-colors">
              <Link to="/services#ai-voice-call-agents" className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--vayora-bg-deep)] via-[var(--vayora-bg-deep)]/90 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="w-12 h-12 bg-[var(--vayora-bg-elevated)]/80 backdrop-blur-md border border-[var(--vayora-border-subtle)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <PhoneCall className="w-5 h-5 text-[var(--vayora-accent-sage)]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">AI Voice Call Agents</h3>
                <p className="text-[var(--vayora-text-secondary)] max-w-sm">Capture 100% of your inbound calls. Human-sounding AI that instantly answers and books meetings while you sleep.</p>
              </div>
            </motion.div>

            {/* Bento 2: Tall - Social Messaging AI */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 rounded-3xl bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border-subtle)] p-8 relative overflow-hidden group hover:border-[var(--vayora-accent-sage)] transition-colors">
              <Link to="/services#whatsapp-ai-automations" className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayora-bg-deep)] via-[var(--vayora-bg-deep)]/80 to-transparent opacity-90"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 bg-[var(--vayora-bg-elevated)]/80 backdrop-blur-md border border-[var(--vayora-border-subtle)] rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-5 h-5 text-[var(--vayora-accent-sage)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">WhatsApp & <br />Instagram AI</h3>
                  <p className="text-[var(--vayora-text-secondary)] text-sm mb-6">Deeply integrated chatbots that instantly reply to DMs, capture lead information, and close sales interactively.</p>
                </div>
                <div className="space-y-2 mt-auto">
                   <div className="flex items-center text-xs font-semibold text-[var(--vayora-text-muted)] group-hover:text-white transition-colors bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-[var(--vayora-border-subtle)]">
                     <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] mr-3 shadow-[0_0_10px_rgba(37,211,102,0.8)]"></span> WhatsApp Native
                   </div>
                   <div className="flex items-center text-xs font-semibold text-[var(--vayora-text-muted)] group-hover:text-white transition-colors bg-white/5 p-3 rounded-lg backdrop-blur-sm border border-[var(--vayora-border-subtle)]">
                     <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] mr-3 shadow-[0_0_10px_rgba(238,42,123,0.5)]"></span> Instagram DMs
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Bento 3: Normal - Web Dev (Row 2, Col 1) */}
            <motion.div variants={itemVariants} className="rounded-3xl bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border-subtle)] p-8 relative overflow-hidden group hover:border-[var(--vayora-accent-sage)] transition-colors">
              <Link to="/services#business-website-development" className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayora-bg-deep)] to-transparent opacity-90"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-[var(--vayora-bg-elevated)]/80 backdrop-blur-md border border-[var(--vayora-border-subtle)] rounded-xl flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-[var(--vayora-accent-sage)]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Web Development</h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm">Ultra-fast, beautifully designed platforms meant to capture leads instantly.</p>
                </div>
              </div>
            </motion.div>

            {/* Bento 4: Normal - Brand Aura (Row 2, Col 2) */}
            <motion.div variants={itemVariants} className="rounded-3xl bg-[var(--vayora-bg-secondary)] border border-[var(--vayora-border-subtle)] p-8 relative overflow-hidden group hover:border-[var(--vayora-accent-sage)] transition-colors">
              <Link to="/services#brand-logo-identity-design" className="absolute inset-0 z-20"></Link>
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vayora-bg-deep)] to-transparent opacity-90"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-[var(--vayora-bg-elevated)]/80 backdrop-blur-md border border-[var(--vayora-border-subtle)] rounded-xl flex items-center justify-center">
                  <LayoutTemplate className="w-5 h-5 text-[var(--vayora-accent-sage)]" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Brand Aura</h3>
                  <p className="text-[var(--vayora-text-muted)] text-sm">Premium identity creation, from logo to color psychology strategy.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Showcase Marquee / Latest Work Minimal Grid */}
      <section className="py-24 bg-[var(--vayora-bg-secondary)] border-y border-[var(--vayora-border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <h2 className="text-4xl font-bold">Latest Deployments</h2>
             <Link to="/portfolio" className="text-[var(--vayora-accent-sage)] hover:text-white transition-colors flex items-center font-medium">
               View All <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
           </div>

           <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
           >
             {portfolioProjects.slice(0, 4).map((project) => (
                <motion.div key={project.id} variants={itemVariants} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden mb-4 border border-[var(--vayora-border-subtle)]">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                    <img src={project.image} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-[var(--vayora-text-muted)]">{project.category}</p>
                </motion.div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* 4. Massive Text CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--vayora-accent-sage)] opacity-[0.03] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 px-4"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter mix-blend-plus-lighter text-white">
            READY TO <br /> <span className="text-transparent border-text">DOMINATE?</span>
          </h2>
          <style dangerouslySetInnerHTML={{__html: `
            .border-text {
              -webkit-text-stroke: 2px rgba(255,255,255,0.2);
            }
          `}} />
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.15)]">
            Start Your Project <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;