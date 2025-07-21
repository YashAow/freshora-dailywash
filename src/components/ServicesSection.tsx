'use client';

import { Droplets, Shirt, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Droplets size={100} color="#1e90ff" style={{ background: '#eaf4fb', borderRadius: '50%', padding: 12 }} />,
    title: "Washing",
    desc: "High-quality washing for all types of clothes and fabrics. Gentle on your garments, tough on stains.",
    discount: "10% DISCOUNT"
  },
  {
    icon: <Shirt size={100} color="#1e90ff" style={{ background: '#eaf4fb', borderRadius: '50%', padding: 12 }} />,
    title: "Dry Cleaning",
    desc: "Professional dry cleaning for delicate and special garments. Keep your clothes looking new.",
    discount: "10% DISCOUNT"
  },
  {
    icon: <Sparkles size={100  } color="#1e90ff" style={{ background: '#eaf4fb', borderRadius: '50%', padding: 12 }} />,
    title: "Ironing",
    desc: "Expert ironing for a crisp, clean look every time. Perfect finish for every outfit.",
    discount: "10% DISCOUNT"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '4rem 0 3rem 0', background: 'var(--secondary)', textAlign: 'center', borderBottom: '2px solid var(--border)', position: 'relative' }}>
      {/* Colored divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 6, background: 'linear-gradient(90deg, #1e90ff 40%, #16a34a 100%)', borderRadius: 3 }} />
      <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2.5rem', color: 'var(--heading)', position: 'relative', zIndex: 2 }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 2 }}>
        {services.map((s, i) => (
          <div key={i} style={{
            width: 260, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #0001',
            display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 16, overflow: 'hidden'
          }}>
            <div style={{ margin: '2rem 0 1rem 0' }}>{s.icon}</div>
            <div style={{ padding: '0 1rem 1.2rem 1rem', flex: 1, width: '100%', textAlign: 'center' }}>
              <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>{s.title}</h3>
              <p style={{ color: '#666', fontSize: 14, margin: 0 }}>{s.desc}</p>
            </div>
            <div style={{
              width: '100%', background: '#f5f7fa', padding: '0.5rem 1rem', display: 'flex',
              alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #eee'
            }}>
              <span style={{ color: '#1e90ff', fontWeight: 600, fontSize: 13 }}>{s.discount}</span>
              <span style={{ color: '#1e90ff', fontWeight: 600, fontSize: 18 }}>{<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>}</span>
            </div>
          </div>
        ))}
      </div>
      {/* View More button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', background: '#16a34a', color: '#fff', padding: '0.9rem 2.2rem', borderRadius: 8, fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 2px 8px #16a34a33', border: 'none', transition: 'background 0.2s', cursor: 'pointer', textDecoration: 'none', gap: 8 }}
          onMouseOver={e => e.currentTarget.style.background = '#15803d'}
          onMouseOut={e => e.currentTarget.style.background = '#16a34a'}
        >
          <span style={{ fontWeight: 600, fontSize: 16 }}>VIEW MORE</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  );
} 