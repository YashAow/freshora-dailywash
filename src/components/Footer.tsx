export default function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid #eee', background: '#fafafa', textAlign: 'center', marginTop: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', fontSize: 16 }}>
        &copy; {new Date().getFullYear()} DirtyWash Laundry Service. All rights reserved.
      </div>
    </footer>
  );
} 