"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 0",
        background: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1e293b" }}>
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 400,
          width: "100%",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            minHeight: 100,
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#1e90ff",
            color: "#fff",
            padding: "1rem",
            borderRadius: 8,
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.2s",
          }}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {status === "success" && <p style={{ color: "green" }}>Message sent!</p>}
        {status === "error" && <p style={{ color: "red" }}>Error sending message.</p>}
      </form>
    </section>
  );
};

export default ContactSection;