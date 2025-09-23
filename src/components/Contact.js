// src/components/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_xl3m6dx";
const TEMPLATE_ID = "template_hv7wwdi";
const PUBLIC_KEY = "wq7tVDjC7FzbIJlEW"; // public, safe to expose

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "Sending..." });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({ state: "sent", msg: "Email sent! ✅" });
      formRef.current.reset();
    } catch (err) {
      setStatus({
        state: "error",
        msg: `Failed to send. ${err?.text || "Please try again."}`,
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <form ref={formRef} onSubmit={onSubmit} className="max-w-lg mx-auto space-y-4">
        {/* IMPORTANT: 'name' attributes must match your EmailJS template variables */}
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          id="email"
          name="reply_to"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded"
          required
        ></textarea>

        {/* Honeypot (simple bot protection) */}
        <input type="text" name="_honeypot" className="hidden" tabIndex="-1" autoComplete="off" />

        <button
          type="submit"
          disabled={status.state === "loading"}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:opacity-60"
        >
          {status.state === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status.state !== "idle" && (
          <p role="status" className="text-sm text-slate-600">
            {status.msg}
          </p>
        )}
      </form>
    </section>
  );
}
