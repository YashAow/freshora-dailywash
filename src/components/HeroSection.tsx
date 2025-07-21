'use client';

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RequestQuoteModal = dynamic(() => import("./RequestQuoteModal"), { ssr: false });

const slides = [
  {
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    headline: "Dirty Wash Cleaning & Laundry Services.",
    subheadline: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    badge: true,
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    headline: "Fast, Affordable, and Convenient.",
    subheadline: "We pick up, clean, and deliver your laundry with care. Book your first order and get 20% cashback!",
    badge: true,
  },
];

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  const nextSlide = () => setCurrent((c) => (c + 1) % slides.length);
  const prevSlide = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section style={{
      position: 'relative',
      minHeight: 480,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      overflow: 'hidden',
      borderBottom: '4px solid var(--primary)',
    }}>
      {/* Background image */}
      <Image src={slide.image} alt="Laundry Hero" fill style={{ objectFit: 'cover', zIndex: 1, filter: 'brightness(0.55)' }} />
      {/* Overlay gradient */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(90deg, #1e293bcc 40%, #0000 100%)' }} />
      {/* Overlay content */}
      <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 2rem', minHeight: 480 }}>
        <div style={{ maxWidth: 540, textAlign: 'left', color: '#fff', textShadow: '0 2px 8px #000a' }}>
         {/* <Image src="/window.svg" alt="DirtyWash Logo" width={90} height={90} style={{ marginBottom: 24, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 12px #1e90ff22' }} /> */} 
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.2rem', color: '#fff' }}>{slide.headline}</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f3f3f3' }}>{slide.subheadline}</p>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="#services" style={{ display: 'flex', alignItems: 'center', background: '#16a34a', color: '#fff', padding: '1rem 2rem', borderRadius: 8, fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 2px 8px #16a34a33', border: 'none', transition: 'background 0.2s', cursor: 'pointer' }}
              onMouseOver={e => e.currentTarget.style.background = '#15803d'}
              onMouseOut={e => e.currentTarget.style.background = '#16a34a'}
            >
              <span style={{ marginRight: 8, fontSize: 20 }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></span> LEARN MORE
            </a>
            <button onClick={() => setModalOpen(true)} style={{ background: 'transparent', color: '#fff', padding: '1rem 2rem', borderRadius: 8, border: '2px solid #fff', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: 'background 0.2s, color 0.2s', boxShadow: '0 2px 8px #fff2' }}
              onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1e293b'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}
            >REQUEST A QUOTE!</button>
          </div>
        </div>
        {/* Cashback badge/balloon */}
        {slide.badge && (
          <div style={{ position: 'absolute', right: 80, top: 60, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: '#ffe066', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', padding: '2rem 1.5rem 2.5rem 1.5rem', boxShadow: '0 4px 24px #0002', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <span style={{ fontSize: 40, marginBottom: 8 }}>🛍️</span>
              <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: 28, lineHeight: 1 }}>20%</div>
              <div style={{ color: '#1e293b', fontWeight: 'bold', fontSize: 16, marginBottom: 2 }}>Cashback</div>
              <div style={{ color: '#1e293b', fontWeight: 500, fontSize: 15 }}>1st Order</div>
              {/* Balloon tail */}
              <div style={{ position: 'absolute', bottom: -30, left: '50%', transform: 'translateX(-50%)', width: 4, height: 30, background: 'linear-gradient(180deg, #ffe066 60%, #16a34a 100%)', borderRadius: 2 }} />
            </div>
          </div>
        )}
        {/* Slider arrows with Lucide icons */}
        <button onClick={prevSlide} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: '#fff', border: 'none', borderRadius: '50%', width: 60, height: 60, boxShadow: '0 2px 8px #0002', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer', opacity: 0.85 }} aria-label="Previous Slide">
          <ChevronLeft size={32} color="#1e293b" />
        </button>
        <button onClick={nextSlide} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 5, background: '#fff', border: 'none', borderRadius: '50%', width: 60, height: 60, boxShadow: '0 2px 8px #0002', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer', opacity: 0.85 }} aria-label="Next Slide">
          <ChevronRight size={32} color="#1e293b" />
        </button>
        {/* Slide indicators */}
        <div style={{ position: 'absolute', left: '50%', bottom: 32, transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 6 }}>
          {slides.map((_, i) => (
            <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: i === current ? '#16a34a' : '#fff', border: '2px solid #16a34a', display: 'inline-block', transition: 'background 0.2s' }} />
          ))}
        </div>
      </div>
      <RequestQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
} 