'use client';

import Link from 'next/link';
// ✅ Icons have been updated for the new design
import { Tag, Sparkles, Cog, Feather } from 'lucide-react';

const blogPosts = [
  {
    // ✅ Icon added to replace the image
    icon: <Sparkles size={60} color="#16a34a" />,
    category: "Laundry Tips",
    title: "Keeping your linens fresh and bright",
    excerpt: "Discover the best techniques for washing and storing your linens to maintain their quality and brightness.",
    href: "/blogs/fresh-linens"
  },
  {
    icon: <Cog size={60} color="#1e90ff" />,
    category: "Appliance Care",
    title: "How to properly maintain your washing machine",
    excerpt: "A clean machine means cleaner clothes. Follow these simple steps to ensure your washer runs efficiently.",
    href: "/blogs/appliance-care"
  },
  {
    icon: <Feather size={60} color="#1e90ff" />,
    category: "Fabric Care",
    title: "The expert guide to delicate fabric care",
    excerpt: "From silk to lace, learn the professional secrets to washing delicate items without causing damage.",
    href: "/blogs/delicate-fabrics"
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            width: '50px',
            height: '4px',
            backgroundColor: '#16a34a',
            margin: '0 auto 1rem auto',
            borderRadius: '2px'
          }} />
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e293b', textTransform: 'uppercase' }}>
            News and Articles
          </h2>
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)',
              overflow: 'hidden',
              textAlign: 'left'
            }}>
              {/* ✅ Image component has been replaced with a div containing the icon */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
                backgroundColor: '#f8f9fa',
                borderBottom: '1px solid #e2e8f0'
              }}>
                {post.icon}
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Tag size={16} color="#16a34a" />
                  <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{post.category}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.5rem' }}>
                  <Link href={post.href} passHref><span style={{textDecoration: 'none', color: 'inherit'}}>{post.title}</span></Link>
                </h3>
                <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button style={{
                background: '#fff',
                color: '#1e293b',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                border: '2px solid #e2e8f0',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
            }}
            onMouseOver={e => {
                e.currentTarget.style.borderColor = '#1e293b';
                e.currentTarget.style.color = '#1e293b';
            }}
            onMouseOut={e => {
                e.currentTarget.style.borderColor = '#e2e8f0';
            }}
            >
                Load More
            </button>
        </div>
      </div>
    </section>
  );
}
