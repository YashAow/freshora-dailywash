'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaGift, FaAngleDown } from "react-icons/fa";

const RequestQuoteModal = dynamic(() => import("./RequestQuoteModal"), { ssr: false });

const serviceMenuItems = [
    { title: "Wash & Fold", href: "/services/wash-fold" },
    { title: "Dry Cleaning", href: "/services/dry-cleaning" },
    { title: "Wash & Iron", href: "/services/wash-iron" },
    { title: "Ironing Services", href: "/services/ironing" },
];

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <header style={{ padding: '1rem 0', borderTop: '2px solid #e53954', borderBottom: '2px solid #e53954', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
        
        {/* ✅ Updated Logo Section */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* Using your new SVG logo. Adjusted size for better UI. */}
          <Image src="/F.png" alt="Freshora Logo" width={140} height={40} />
        </Link>

        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            
            <li 
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Services 
                {hasMounted && isServicesOpen && <FaAngleDown />}
              </Link>
              
              {hasMounted && isServicesOpen && (
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  left: '-20px',
                  background: 'transparent',
                  paddingTop: '1rem',
                  zIndex: 10,
                }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    padding: '0.5rem 0',
                    minWidth: '200px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {serviceMenuItems.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href} passHref>
                             <span 
                               style={{ display: 'block', padding: '0.75rem 1.5rem', color: '#334155', cursor: 'pointer', textDecoration: 'none', transition: 'background-color 0.2s' }}
                               onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                               onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                             >
                              {item.title}
                             </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li><Link href="/pricing" style={{ color: '#f59e0b', fontWeight: 'bold' }}>Pricing</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            
            <li>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  background: '#e53954',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 4,
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <FaGift />
                Limited Time Offers
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <RequestQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
