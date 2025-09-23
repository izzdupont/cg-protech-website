import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">IaaS & Cloud Infrastructure</h3>
          <p className="text-slate-600">
            Reliable, secure, and scalable infrastructure tailored to your business needs.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">Server & Cloud Management</h3>
          <p className="text-slate-600">
            Full monitoring, patching, and optimization of your servers and cloud workloads.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg bg-white">
          <h3 className="text-xl font-semibold mb-2">Hosting & Support</h3>
          <p className="text-slate-600">
            High-performance hosting with around the clock support and monitoring.
          </p>
        </div>
      </div>
    </section>
  );
}
