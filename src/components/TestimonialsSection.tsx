"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Fast and reliable service! My clothes have never looked better.",
    author: "Yash Kamal"
  },
  {
    text: "Affordable prices and great customer support. Highly recommend!",
    author: "Mike D."
  },
  {
    text: "Excellent pickup and delivery. The best laundry experience I've had!",
    author: "Priya S."
  },
  {
    text: "Quick turnaround and eco-friendly cleaning. Will use again!",
    author: "John L."
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ padding: '4rem 0', background: '#f5f7fa', textAlign: 'center', position: 'relative' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e293b' }}>What Our Customers Say</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 220, position: 'relative' }}>
        <button onClick={prev} aria-label="Previous" style={{ background: '#fff', border: 'none', borderRadius: '50%', width: 44, height: 44, boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, cursor: 'pointer', position: 'absolute', left: 0, zIndex: 2 }}>
          <ChevronLeft size={28} color="#1e293b" />
        </button>
        <div style={{ width: 340, background: '#fff', padding: '2.2rem 1.5rem', borderRadius: 16, boxShadow: '0 4px 24px #1e293b11', margin: '0 2.5rem', minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'box-shadow 0.2s' }}>
          <p style={{ color: '#334155', fontSize: 18, fontStyle: 'italic', marginBottom: 18 }}><strong>"{t.text}"</strong></p>
          <div style={{ fontWeight: 'bold', color: '#2563eb', fontSize: 16 }}>- {t.author}</div>
        </div>
        <button onClick={next} aria-label="Next" style={{ background: '#fff', border: 'none', borderRadius: '50%', width: 44, height: 44, boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, cursor: 'pointer', position: 'absolute', right: 0, zIndex: 2 }}>
          <ChevronRight size={28} color="#1e293b" />
        </button>
      </div>
      {/* Slide indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 24 }}>
        {testimonials.map((_, i) => (
          <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: i === current ? '#16a34a' : '#fff', border: '2px solid #16a34a', display: 'inline-block', transition: 'background 0.2s' }} />
        ))}
      </div>
    </section>
  );
} 