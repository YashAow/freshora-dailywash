import { useState } from "react";

export default function RequestQuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,41,59,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: 32, maxWidth: 400, width: '100%', boxShadow: '0 4px 24px #0002', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#1e293b' }}>&times;</button>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: 16, color: '#1e293b' }}>Request a Quote</h2>
        {submitted ? (
          <div style={{ color: '#16a34a', fontWeight: 'bold', textAlign: 'center', padding: '2rem 0' }}>
            Thank you! We have received your request.<br />We will contact you soon.
          </div>
        ) : (
          <form action="https://formspree.io/f/mwkgrqzv" method="POST" onSubmit={() => setSubmitted(true)} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input name="name" type="text" placeholder="Your Name" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
            <input name="email" type="email" placeholder="Your Email" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
            <input name="phone" type="tel" placeholder="Your Phone" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }} />
            <select name="service" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc' }}>
              <option value="">Select Service</option>
              <option value="Washing">Washing</option>
              <option value="Dry Cleaning">Dry Cleaning</option>
              <option value="Ironing">Ironing</option>
              <option value="Other">Other</option>
            </select>
            <textarea name="message" placeholder="Your Message" required style={{ padding: 10, borderRadius: 6, border: '1px solid #ccc', minHeight: 80 }} />
            <button type="submit" style={{ background: '#1e90ff', color: '#fff', padding: 12, borderRadius: 8, border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: 8 }}>Send Request</button>
          </form>
        )}
      </div>
    </div>
  );
} 