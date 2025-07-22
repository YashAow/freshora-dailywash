'use client';

import Link from 'next/link';
import { useState } from 'react';

// Data for the pricing tables based on the images
const gentsPricing = [
  { item: "Shirt/T-shirts", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Trouser", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Kurta", wash: "10.00", dryClean: "12.00", steam: "5.00" },
  { item: "Lungi", wash: "8.00", dryClean: "8.00", steam: "4.00" },
  { item: "Shorts", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Cap/Tie", wash: "5.00", dryClean: "7.00", steam: "3.00" },
  { item: "Jacket Coat", wash: "15.00", dryClean: "20.00", steam: "8.00" },
  { item: "Waist Coat", wash: "10.00", dryClean: "14.00", steam: "5.00" },
  { item: "Suit (2pcs)", wash: "-", dryClean: "35.00", steam: "12.00" },
];

const ladiesPricing = [
  { item: "T-Shirt/Shirts", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Trouser", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Kurta", wash: "10.00", dryClean: "14.00", steam: "7.00" },
  { item: "Scarf/Dupatta", wash: "8.00", dryClean: "8.00", steam: "4.00" },
  { item: "Skirt/Shorts", wash: "8.00", dryClean: "8.00", steam: "3.00" },
  { item: "Full Dress", wash: "10.00", dryClean: "15.00", steam: "8.00" },
  { item: "Salwar Kameez", wash: "12.00", dryClean: "16.00", steam: "8.00" },
  { item: "Saree", wash: "15.00", dryClean: "20.00", steam: "15.00" },
  { item: "Blouse", wash: "8.00", dryClean: "10.00", steam: "4.00" },
];

const householdPricing = [
  { item: "Pillow Cover (Single/Double)", wash: "10.00", dryClean: "12.00", steam: "6.00" },
  { item: "Duvet Cover (Single/Double)", wash: "15.00", dryClean: "14.00", steam: "8.00" },
  { item: "Blanket (Single/Double)", wash: "22.00", dryClean: "30.00", steam: "-" },
  { item: "Bed Sheet (Single/Double)", wash: "20.00", dryClean: "21.00", steam: "-" },
  { item: "Pillow Case", wash: "3.00", dryClean: "4.00", steam: "2.00" },
  { item: "Cushion Cover", wash: "4.00", dryClean: "5.00", steam: "3.00" },
  { item: "Bath Robe", wash: "10.00", dryClean: "12.00", steam: "-" },
];

const expressPricing = [
    { service: "Express Wash & Iron - 2Hrs", unit: "Per KG", price: "60.00" },
    { service: "Express Wash & Iron - 24Hrs", unit: "Per KG", price: "30.00" },
    { service: "Normal Wash & Fold", unit: "Per KG", price: "15.00" },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('gents');

  const pricingData = {
    gents: { data: gentsPricing, description: "From formal wear like suits, shirts, and trousers to casual attires, we provide expert wash and fold, dry cleaning, and ironing services to keep your wardrobe fresh and well-maintained." },
    ladies: { data: ladiesPricing, description: "Your delicate fabrics deserve extra care. We handle everything from always and evening gowns to casual dresses and silk blouses with professional fabric care and dry cleaning, ensuring they look flawless." },
    household: { data: householdPricing, description: "Keep your home fresh with our curtain cleaning, carpet cleaning, and upholstery services. From bedsheets and pillow covers to heavy drapes and rugs, we ensure deep cleaning and freshness for a healthier living space." },
  };

  const currentData = pricingData[activeTab as keyof typeof pricingData];

  const tableHeaderStyle = {
    background: '#e53954',
    color: '#fff',
    padding: '1rem',
    textAlign: 'left' as const,
    fontSize: '0.9rem',
    textTransform: 'uppercase' as const,
  };

  const tableCellStyle = {
    padding: '1rem',
    borderBottom: '1px solid #e2e8f0',
    color: '#475569',
  };

  const numericCellStyle = { ...tableCellStyle, textAlign: 'right' as const };
  const numericHeaderStyle = { ...tableHeaderStyle, textAlign: 'right' as const };


  const TabButton = ({ tabName, label }: { tabName: string, label: string }) => (
    <button 
      onClick={() => setActiveTab(tabName)}
      style={{
        padding: '0.75rem 1.5rem',
        border: 'none',
        borderRadius: '6px',
        background: activeTab === tabName ? '#e53954' : 'transparent',
        color: activeTab === tabName ? '#fff' : '#334155',
        fontWeight: '600',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transition: 'all 0.3s'
      }}>
      {label}
    </button>
  );

  return (
    <section id="pricing" style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1rem' }}>
            Transparent Pricing for the Best Laundry Services
          </h2>
          {/* ✅ FIX: Replaced ' with &apos; to fix the build error */}
          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '800px', margin: '0 auto' }}>
            At MM Laundry, we offer competitive pricing for our expert laundry service, dry cleaning, steam ironing, and household cleaning. Whether it&apos;s everyday wear, delicate fabrics, or bulky household items, we provide top-notch care at affordable rates.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.5rem', maxWidth: 'fit-content', margin: '0 auto' }}>
          <TabButton tabName="gents" label="For Gentleman" />
          <TabButton tabName="ladies" label="For Ladies" />
          <TabButton tabName="household" label="Household Items" />
        </div>
        
        <p style={{ 
          fontSize: '1rem', 
          color: '#475569', 
          textAlign: 'center', 
          maxWidth: '700px', 
          margin: '1.5rem auto 2.5rem auto'
        }}>
            {currentData.description}
        </p>

        {/* Main Pricing Table */}
        <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{...tableHeaderStyle, borderTopLeftRadius: '8px'}}>Items</th>
                <th style={numericHeaderStyle}>Wash Price</th>
                <th style={numericHeaderStyle}>Dry Cleaning</th>
                <th style={{...numericHeaderStyle, borderTopRightRadius: '8px'}}>Steam Pressing</th>
              </tr>
            </thead>
            <tbody>
              {currentData.data.map((item, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff' }}>
                  <td style={{...tableCellStyle, fontWeight: '600', color: '#334155'}}>{item.item}</td>
                  <td style={numericCellStyle}>₹{item.wash}</td>
                  <td style={numericCellStyle}>₹{item.dryClean}</td>
                  <td style={numericCellStyle}>₹{item.steam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Express Wash & Fold / Iron Table */}
        <div style={{ marginTop: '3rem', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{...tableHeaderStyle, borderTopLeftRadius: '8px', width: '60%'}}>Express Wash & Fold / Iron</th>
                        <th style={numericHeaderStyle}>Unit</th>
                        <th style={{...numericHeaderStyle, borderTopRightRadius: '8px'}}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {expressPricing.map((item, index) => (
                         <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff' }}>
                            <td style={{...tableCellStyle, fontWeight: '600', color: '#334155'}}>{item.service}</td>
                            <td style={numericCellStyle}>{item.unit}</td>
                            <td style={numericCellStyle}>₹{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', fontSize: '0.9rem', color: '#475569' }}>
            <h4 style={{fontWeight: '600', marginBottom: '0.5rem'}}>Express Service Conditions:</h4>
            <ul style={{listStyle: 'disc', paddingLeft: '20px', margin: 0}}>
                <li>Minimum 5 KG required.</li>
                <li>Dry cleaning items not included.</li>
                <li>Subject to availability - please confirm in advance.</li>
                <li>Heavily soiled or stained clothes may take longer.</li>
            </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/contact" passHref>
                <button style={{
                    background: '#1e90ff',
                    color: '#fff',
                    padding: '0.9rem 2.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                }}>
                    Request Schedule
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
