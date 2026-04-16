import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import { portfolioProjects } from '../data/mock';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Business', 'Restaurant', 'Salon', 'Healthcare', 'Technology', 'Fitness', 'Entertainment', 'Education', 'Automotive', 'Services', 'Beauty'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--vayora-text-secondary)] max-w-3xl mx-auto">
            Showcasing our best work across diverse industries
          </p>
        </div>
      </section>

      {/* Filter Section (Floating Pill Bottom) */}
      <div className="fixed w-full bottom-6 z-40 flex justify-center px-4 pointer-events-none">
        <section className="pointer-events-auto w-full max-w-3xl bg-[var(--vayora-bg-deep)]/80 backdrop-blur-xl border border-[var(--vayora-border-subtle)] shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-full py-2.5 px-4 md:px-6">
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar w-full mx-auto">
            <Filter className="text-[var(--vayora-accent-sage)] shrink-0 mr-1" size={16} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap shrink-0 border border-transparent ${selectedCategory === category
                    ? 'filter-active bg-[var(--vayora-accent-sage)] text-[var(--vayora-bg-primary)]'
                    : 'bg-[var(--vayora-bg-elevated)] text-[var(--vayora-text-secondary)] hover:bg-[var(--vayora-accent-sage)] hover:text-[var(--vayora-bg-primary)]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--vayora-text-muted)] text-lg">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glass-card overflow-hidden hover-lift group">
                  <div className="relative image-overlay">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-[var(--vayora-accent-sage)] p-4 rounded-full">
                        <ExternalLink className="text-[var(--vayora-bg-primary)]" size={24} />
                      </div>
                    </a>
                  </div>
                  <div className="p-6">
                    <span className="text-[var(--vayora-accent-sage)] text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[var(--vayora-text-muted)] text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-[var(--vayora-bg-elevated)] text-[var(--vayora-text-muted)] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[var(--vayora-accent-sage)] hover:text-[var(--vayora-accent-sage-light)] mt-4 text-sm font-medium"
                    >
                      View Project <ExternalLink className="ml-2" size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--vayora-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number mb-2">50+</div>
              <p className="text-[var(--vayora-text-muted)]">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="stat-number mb-2">12+</div>
              <p className="text-[var(--vayora-text-muted)]">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="stat-number mb-2">40+</div>
              <p className="text-[var(--vayora-text-muted)]">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="stat-number mb-2">100%</div>
              <p className="text-[var(--vayora-text-muted)]">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[var(--vayora-text-secondary)] mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Your vision deserves the best.
            </p>
            <a href="/contact" className="btn-sage inline-block">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;