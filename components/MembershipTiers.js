import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const membershipTiers = [
  { tier: "Observer", aperture: "F/8.0", price: "$25K", description: "A glimpse into exclusivity with VIP previews.", glow: "dim" },
  { tier: "Insider", aperture: "F/5.6", price: "$50K", description: "Selective yet powerful connections & premium services.", glow: "soft" },
  { tier: "Connoisseur", aperture: "F/4.0", price: "$100K", description: "Refined luxury experiences tailored for tastemakers.", glow: "medium" },
  { tier: "Influencer", aperture: "F/2.8", price: "$250K", description: "Elite event access & collaboration opportunities.", glow: "bright" },
  { tier: "Executive", aperture: "F/2.0", price: "$500K", description: "Private wealth expansion & high-tier networking.", glow: "intense" },
  { tier: "Founder’s Circle", aperture: "F/1.4", price: "$1M", description: "Complete access to ultra-luxury experiences.", glow: "radiant" },
];

export default function MembershipTiers() {
  const [selectedTier, setSelectedTier] = useState(null);

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-3xl font-bold text-emerald-500 mb-6">
        Apertures Membership
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membershipTiers.map((tier, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedTier(tier)}
            className="cursor-pointer"
          >
            <Card className={`border ${tier.glow === "radiant" ? "border-emerald-400" : "border-gray-600"} bg-gray-900 p-6 rounded-2xl shadow-lg text-center`}> 
              <CardContent>
                <h2 className="text-2xl font-semibold text-white">{tier.tier} ({tier.aperture})</h2>
                <p className="text-emerald-300 text-lg mt-2">{tier.price}</p>
                <p className="text-gray-400 mt-4">{tier.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedTier && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8 p-6 w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-emerald-400">{selectedTier.tier} ({selectedTier.aperture})</h2>
          <p className="text-lg text-gray-300 mt-2">{selectedTier.description}</p>
          <Progress value={membershipTiers.indexOf(selectedTier) * 20 + 20} className="mt-4" />
          <Button variant="outline" className="mt-4" onClick={() => window.location.href = "mailto:THEAPERTURES@apertures.ai"}>Request Invitation</Button>
        </motion.div>
      )}
    </div>
  );
}