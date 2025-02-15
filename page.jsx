"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [open, setOpen] = useState(false);

  const membershipTiers = [
    { name: "Founder's Circle", level: "F/1.4", fee: "$1,000,000/year", minSpend: "$500,000", members: 10, perks: "Private jet access, concierge AI wealth management, ultra-exclusive investment opportunities." },
    { name: "Executive", level: "F/2.0", fee: "$500,000/year", minSpend: "$300,000", members: 20, perks: "Bespoke portfolio management, luxury travel benefits, premium networking events." },
    { name: "Influencer", level: "F/2.8", fee: "$250,000/year", minSpend: "$150,000", members: 40, perks: "VIP event invitations, brand partnerships, digital asset consulting." },
    { name: "Connoisseur", level: "F/4.0", fee: "$100,000/year", minSpend: "$75,000", members: 60, perks: "Fine art advisory, exclusive real estate investment deals, tailored travel experiences." },
    { name: "Insider", level: "F/5.6", fee: "$50,000/year", minSpend: "$50,000", members: 80, perks: "AI-driven networking insights, select luxury perks, high-end market intelligence." },
    { name: "Observer", level: "F/8.0", fee: "$10,000/year", minSpend: "$100,000", members: 100, perks: "Entry-level access to curated content, virtual networking events, introductory investment tools." },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1 className="text-5xl font-bold text-emerald-500 mb-4">Apertures AI</motion.h1>
      <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto">
        The Future of AI-Powered Wealth. Exclusive Memberships, Elite Investments, and Intelligent Financial Strategies.
      </motion.p>
      <motion.h2 className="text-xl text-emerald-400 mt-4">"See More, Know More, Do More."</motion.h2>
      <motion.button className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg" onClick={() => setOpen(true)}>
        Request Invitation
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {membershipTiers.map((tier, index) => (
          <motion.div key={index} className="bg-gray-900 p-6 rounded-lg border border-emerald-500 shadow-lg cursor-pointer">
            <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
            <p className="text-gray-400">{tier.level}</p>
            <p className="text-emerald-400 text-lg font-bold mt-2">Membership Fee: {tier.fee}</p>
            <p className="text-gray-400 mt-1">Minimum Spend: {tier.minSpend}</p>
            <p className="text-gray-400 mt-1">Members: {tier.members}</p>
            <p className="text-gray-300 mt-2">{tier.perks}</p>
          </motion.div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg border border-emerald-500 text-white">
            <h2 className="text-2xl font-bold text-emerald-500">Request Your Exclusive Invitation</h2>
            <p className="text-gray-300 mb-4">Enter your email to apply for early access to Apertures AI.</p>
            <input type="email" placeholder="Enter your email" className="p-3 rounded bg-gray-800 border border-gray-600 text-white w-full" required />
            <button className="mt-4 bg-emerald-500 text-white px-6 py-3 rounded-lg w-full" onClick={() => setOpen(false)}>
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}