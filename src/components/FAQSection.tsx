export default function FAQSection() {
  return (
    <section id="faq" style={{ padding: '4rem 0', background: '#f5f7fa', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e293b' }}>Frequently Asked Questions</h2>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ marginBottom: 24 }}>
          <strong>How do I schedule a pickup?</strong>
          <p>Simply click the "Book a Pickup" button and fill out the contact form. We'll get in touch to confirm your pickup time.</p>
        </div>
        <div style={{ marginBottom: 24 }}>
          <strong>What areas do you serve?</strong>
          <p>We serve all major neighborhoods in the city. Contact us to check if we cover your area.</p>
        </div>
        <div style={{ marginBottom: 24 }}>
          <strong>How do I pay for services?</strong>
          <p>We accept cash, credit/debit cards, and online payments after your laundry is delivered.</p>
        </div>
      </div>
    </section>
  );
} 