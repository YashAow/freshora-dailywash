"use client"
import React, { useState } from "react";

const plans = [
  {
    name: "Basic",
    features: ["Washing & Ironing"],
    price: "$10 / load",
    description: "Washing & Ironing",
  },
  {
    name: "Premium",
    features: ["Washing, Ironing & Dry Cleaning"],
    price: "$20 / load",
    description: "Washing, Ironing & Dry Cleaning",
  },
];

export default function PricingSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="pricing" style={{ padding: "4rem 0", background: "#fff", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem", color: "#1e293b" }}>
        Pricing
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setSelected(plan.name)}
            style={{
              width: 220,
              background: selected === plan.name ? "#e0f2fe" : "#f5f7fa",
              padding: "2rem",
              borderRadius: 12,
              border: selected === plan.name ? "2px solid #2563eb" : "2px solid #1e90ff",
              marginBottom: 24,
              cursor: "pointer",
              boxShadow: selected === plan.name ? "0 4px 16px rgba(37,99,235,0.10)" : "none",
              transition: "all 0.2s",
              position: "relative",
            }}
          >
            <h3 style={{ color: "#2563eb" }}>{plan.name}</h3>
            <p>{plan.description}</p>
            <p style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#1e293b" }}>{plan.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelected(plan.name);
              }}
              style={{
                marginTop: 12,
                background: selected === plan.name ? "#2563eb" : "#1e90ff",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "0.5rem 1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              {selected === plan.name ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
      {selected && (
        <div style={{ marginTop: 32, fontSize: "1.2rem", color: "#2563eb" }}>
          <strong>Selected Plan:</strong> {selected}
          {/* Optional: Add a proceed button */}
          { <button
            onClick={() => {
              window.location.hash = "#contact";
              // Optionally, you can use localStorage or context to pass the selected plan
              localStorage.setItem("selectedPlan", selected);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              marginLeft: 16,
              padding: "0.5rem 1.5rem",
              borderRadius: 6,
              background: "#2563eb",
              color: "#fff",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Proceed
          </button> }
        </div>
      )}
    </section>
  );
} 