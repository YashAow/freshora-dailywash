'use client';

import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const RequestQuoteModal = dynamic(() => import("./RequestQuoteModal"), { ssr: false });

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header style={{ padding: '1rem 0', borderBottom: '1px solid #eee', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
        {/* ✅ Use Link instead of <a> for internal navigation */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src="/logo.png" alt="DirtyWash Logo" width={48} height={48} />
          <span style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#1e293b" }}>Freshora</span>
        </Link>

        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#pricing">Pricing</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            <li>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  background: '#1e90ff',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: 8,
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Request a Quote
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <RequestQuoteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
