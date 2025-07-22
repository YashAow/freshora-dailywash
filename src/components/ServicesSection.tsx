'use client';

import { Shirt, Wind, Sparkles, Check, ShoppingBag, Truck } from 'lucide-react';
import Link from 'next/link';

const servicesList = [
  {
    icon: <Shirt size={40} className="text-blue-600" />,
    title: "Wash & Fold",
    description: "Perfect for everyday laundry. We wash, dry, and fold your clothes with care.",
  },
  {
    icon: <Wind size={40} className="text-blue-600" />,
    title: "Dry Cleaning",
    description: "Expert care for your delicate garments, ensuring they look their best.",
  },
  {
    icon: <Sparkles size={40} className="text-blue-600" />,
    title: "Wash & Iron",
    description: "Get your clothes washed and perfectly ironed for a crisp, professional look.",
  },
  {
    icon: <ShoppingBag size={40} className="text-blue-600" />,
    title: "Commercial Laundry",
    description: "Reliable and efficient laundry solutions for businesses of all sizes.",
  },
  {
    icon: <Check size={40} className="text-blue-600" />,
    title: "Ironing Services",
    description: "Save time with our professional ironing service for a wrinkle-free finish.",
  },
  {
    icon: <Truck size={40} className="text-blue-600" />,
    title: "Pickup & Delivery",
    description: "Convenient door-to-door service to make your laundry day hassle-free.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '4rem 2rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
          Our Services
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
          We offer a wide range of laundry services to meet your needs, delivered with the highest quality and care.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {servicesList.map((service, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'left',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}
            >
              <div style={{ marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '80px' }}>
                {service.description}
              </p>
              <Link href="/services" passHref>
                <span style={{ color: '#2563eb', fontWeight: '600', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
