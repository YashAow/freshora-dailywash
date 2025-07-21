import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 0",
        background: "#f5f7fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        flexWrap: "wrap",
      }}
    >
      {/* Left: Text */}
      <div style={{ maxWidth: 500, textAlign: "left" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#1e293b",
          }}
        >
          About DirtyWash
        </h2>
        <p style={{ fontSize: "1.15rem", color: "#334155", marginBottom: 24 }}>
          DirtyWash is your trusted partner for laundry and dry cleaning. With years of experience, modern equipment, and a commitment to quality, we make laundry day effortless for you.
        </p>
        <ul style={{ color: "#2563eb", fontWeight: 500, fontSize: "1rem", paddingLeft: 20 }}>
          <li>✔️ Free Pickup & Delivery</li>
          <li>✔️ Eco-friendly Cleaning</li>
          <li>✔️ 24h Express Service</li>
        </ul>
      </div>
      {/* Right: Icon or Image */}
      <div style={{ minWidth: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Info size={120} color="#1e90ff" style={{ background: "#fff", borderRadius: "50%", padding: 24, boxShadow: "0 4px 24px #1e90ff22" }} />
      </div>
    </section>
  );
} 