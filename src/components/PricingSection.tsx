export default function PricingSection() {
  return (
    <section id="pricing" style={{ padding: '4rem 0', background: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e293b' }}>Pricing</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ width: 220, background: '#f5f7fa', padding: '2rem', borderRadius: 12, border: '2px solid #1e90ff', marginBottom: 24 }}>
          <h3 style={{ color: '#2563eb' }}>Basic</h3>
          <p>Washing & Ironing</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1e293b' }}>$10 / load</p>
        </div>
        <div style={{ width: 220, background: '#f5f7fa', padding: '2rem', borderRadius: 12, marginBottom: 24 }}>
          <h3 style={{ color: '#2563eb' }}>Premium</h3>
          <p>Washing, Ironing & Dry Cleaning</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#1e293b' }}>$20 / load</p>
        </div>
      </div>
    </section>
  );
} 