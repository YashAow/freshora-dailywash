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
    <section
      style={{
        position: 'relative',
        minHeight: 540,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        overflow: 'hidden',
        borderBottom: '4px solid var(--primary)',
      }}
    >
      {/* Background image */}
      <Image
        src={slide.image}
        alt="Laundry Hero"
        fill
        style={{
          objectFit: 'cover',
          zIndex: 1,
          filter: 'brightness(0.55) blur(1.5px)', // subtle blur for focus
        }}
      />
      {/* Overlay gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(90deg, #1e293bcc 40%, #0000 100%)',
        }}
      />
      {/* Overlay content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: 1400, // Increased width
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '0 3rem',
          minHeight: 540,
          gap: 48,
        }}
      >
        {/* Main text content */}
        <div
          style={{
            maxWidth: 600,
            textAlign: 'left',
            color: '#fff',
            textShadow: '0 2px 8px #000a',
            marginTop: 40,
          }}
        >
          <h1
            style={{
              fontSize: '3.2rem',
              fontWeight: 'bold',
              marginBottom: '1.2rem',
              color: '#fff',
            }}
          >
            {slide.headline}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: '#f3f3f3',
            }}
          >
            {slide.subheadline}
          </p>
          <div style={{ display: 'flex', gap: 18 }}>
            <a
              href="#services"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#16a34a',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: 8,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px #16a34a33',
                border: 'none',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#15803d')}
              onMouseOut={e => (e.currentTarget.style.background = '#16a34a')}
            >
              <span style={{ marginRight: 8, fontSize: 20 }}>
                {/* SVG icon here */}
              </span>
              LEARN MORE
            </a>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '1rem 2rem',
                borderRadius: 8,
                border: '2px solid #fff',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: '0 2px 8px #fff2',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.color = '#1e293b';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#fff';
              }}
            >
              REQUEST A QUOTE!
            </button>
          </div>
        </div>
        {/* Enquiry form (already improved, just ensure minWidth: 350 or 400) */}
        <div
          style={{
            position: 'relative',
            background: 'rgba(255,255,255,0.95)',
            borderRadius: 16,
            boxShadow: '0 4px 24px #0002',
            padding: '2rem 1.5rem',
            minWidth: 350,
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 40,
          }}
        >
          <h3 style={{ color: '#2563eb', marginBottom: 16 }}>Quick Enquiry</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              alert('Form submitted!');
            }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <input
              type="tel"
              placeholder="Contact Number"
              required
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <input
              type="text"
              placeholder="Address"
              required
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <select
              required
              defaultValue=""
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                color: '#333',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <option value="" disabled>Select Service</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
              <option value="Washing">Washing</option>
              <option value="Ironing">Ironing</option>
              <option value="All Services">All Services</option>
            </select>
            <textarea
              placeholder="Message"
              rows={3}
              style={{
                padding: '0.5rem',
                borderRadius: 8,
                border: '2px solid #e0e7ef',
                marginBottom: 8,
                width: '100%',
                resize: 'vertical',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => {
                e.currentTarget.style.border = '2px solid #2563eb';
                e.currentTarget.style.boxShadow = '0 0 0 2px #2563eb22';
              }}
              onBlur={e => {
                e.currentTarget.style.border = '2px solid #e0e7ef';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              style={{
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0.75rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: 8,
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
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
      <RequestQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
} 