"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main>
      {/* Navbar Minimal */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '2rem', zIndex: 50, display: 'flex', justifyContent: 'space-between', mixBlendMode: 'difference' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.15em', fontWeight: 600 }}>DHARMA</div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <a href="#">Shop</a>
          <a href="#editorial">Editorial</a>
          <a href="#">Cart(0)</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg">
          <Image 
            src="/images/hero.png" 
            alt="Fashion Editorial" 
            fill 
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="display-title fade-in">
            WEAR YOUR <br/>
            <span className="gold-text">DHARMA</span>
          </h1>
          <p className="serif-text fade-in delay-1" style={{ marginBottom: '3rem' }}>
            Rooted in tradition. Tailored for the modern avant-garde.
          </p>
          <div className="fade-in delay-2">
            <a href="#shop" className="btn-primary">Shop Collection</a>
          </div>
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section id="shop" className="featured-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">The Icons</h2>
          
          <div className="grid-layout">
            <div className="grid-item animate-on-scroll">
              <Image src="/images/grid1.png" alt="Black fabric gold embroidery" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div className="grid-item-overlay">
                <h3>Aurum Weave</h3>
                <p>Intricate gold details on midnight fabric.</p>
              </div>
            </div>
            
            <div className="grid-item animate-on-scroll delay-1">
              <Image src="/images/grid2.png" alt="Male model fashion portrait" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div className="grid-item-overlay">
                <h3>Noir Silhouette</h3>
                <p>Minimalist structure for the modern era.</p>
              </div>
            </div>
            
            <div className="grid-item animate-on-scroll delay-2">
              <Image src="/images/grid3.png" alt="Gold accessories" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div className="grid-item-overlay">
                <h3>Sacred Accents</h3>
                <p>Heavy gold jewelry for bold statements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section id="editorial" className="story-section">
        <div className="container" style={{ display: 'inherit', gridTemplateColumns: 'inherit', alignItems: 'inherit', gap: 'inherit' }}>
          <div className="story-image animate-on-scroll">
            <Image src="/images/story.png" alt="Cinematic fashion walk" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          
          <div className="story-content">
            <span className="story-subtitle animate-on-scroll">Chapter I</span>
            <h2 className="animate-on-scroll delay-1">
              Elegance is an <br/><span className="gold-text">Attitude</span>.
            </h2>
            <p className="animate-on-scroll delay-2">
              Our designs speak the language of absolute minimalism combined with the richness of high-fashion culture. 
              We don't just create clothes; we curate a profound identity. It's an exploration of deep blacks and radiant golds, 
              forming a silhouette that demands attention without needing to shout.
            </p>
            <div className="animate-on-scroll delay-2">
              <a href="#" className="btn-primary" style={{ padding: '1rem 2rem' }}>Discover the Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo animate-on-scroll">DHARMA VESH</div>
          
          <ul className="footer-links animate-on-scroll delay-1">
            <li><a href="#">Collections</a></li>
            <li><a href="#">Editorial</a></li>
            <li><a href="#">About House</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Client Services</a></li>
          </ul>
          
          <p className="footer-copy animate-on-scroll delay-2">
            &copy; {new Date().getFullYear()} Dharma Vesh. All rights reserved. <br/> Design crafted for aesthetic excellence.
          </p>
        </div>
      </footer>
    </main>
  );
}
