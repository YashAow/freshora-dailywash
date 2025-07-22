'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const storyPoints = [
  { text: "Eco-Friendly Cleaning" },
  { text: "100% Satisfaction Guarantee" },
  { text: "Fast & High-Quality Service" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '4rem 2rem', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        
        {/* Image Section */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <Image 
            src="https://placehold.co/600x400/e2e8f0/334155?text=Our+Story" 
            alt="Freshora Laundry Service" 
            width={600} 
            height={400} 
            style={{ borderRadius: 12, width: '100%', height: 'auto' }} 
          />
        </div>

        {/* Text Content Section */}
        <div style={{ flex: 1.5, minWidth: 300 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
            Our Story
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Freshora was born from a simple idea: to provide a laundry service that is not only professional and reliable but also cares for the environment. We believe in combining cutting-edge technology with eco-friendly practices to deliver exceptional results for our customers.
          </p>
          <div style={{ marginBottom: '2rem' }}>
            {storyPoints.map((point, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={22} color="#16a34a" />
                <span style={{ fontSize: '1.1rem', color: '#334155' }}>{point.text}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" passHref>
            <button style={{ 
              background: '#1e90ff', 
              color: '#fff', 
              padding: '0.9rem 2.2rem', 
              borderRadius: 8, 
              border: 'none', 
              fontWeight: 'bold', 
              fontSize: '1rem', 
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={e => e.currentTarget.style.background = '#0073e6'}
            onMouseOut={e => e.currentTarget.style.background = '#1e90ff'}
            >
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
