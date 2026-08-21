import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "./Icons";

const carouselFacts = [
  { icon: <Icons.WaterDrop />, fact: "Copper pipes last 50+ years in coastal homes. PVC degrades 4x faster in salt air.", tag: "MATERIALS" },
  { icon: <Icons.DropletSearch />, fact: "A dripping tap wastes 11,000+ litres per year — enough to fill a Knysna pool.", tag: "WASTE" },
  { icon: <Icons.DropletSearch />, fact: "Thermal leak detection finds 94% of slab leaks within 15 minutes — no demolition needed.", tag: "TECH" },
  { icon: <Icons.Wind />, fact: "70% of Plett homes have undetected forest root intrusions in drainage. Camera inspect.", tag: "ROOTS" },
  { icon: <Icons.Shield />, fact: "Our 7-year workmanship guarantee is the longest on the Garden Route. We stand by it.", tag: "GUARANTEE" },
];

export function KnowledgeCarousel() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % carouselFacts.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = carouselFacts[idx];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #0B1120 0%, #0F1729 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(0,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        pointerEvents: "none"
      }} />
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="max-w-[720px] text-center">
          <h2 className="text-[34px] sm:text-[48px] font-[800] mt-3 text-white">Water wisdom from the Route.</h2>
        </div>

        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[640px]"
            >
              <div className="rounded-[24px] p-[24px] sm:p-[28px] border"
                style={{
                  background: "linear-gradient(170deg, rgba(23,48,76,0.98), rgba(8,24,44,0.98))",
                  borderColor: "rgba(0,210,255,0.25)",
                  boxShadow: "0 20px 70px rgba(0,210,255,0.13)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-aqua" style={{ fontSize: "32px" }}>
                    {current.icon}
                  </div>
                  <div className="text-[10px] tracking-widest font-[700] px-2 py-1 rounded-full"
                    style={{ background: `rgba(0,210,255,0.12)`, color: "#00D2FF", border: "1px solid rgba(0,210,255,0.2)" }}>
                    {current.tag}
                  </div>
                </div>
                <p className="mt-[18px] text-[16px] sm:text-[18px] leading-relaxed font-[600] text-white/92">
                  {current.fact}
                </p>
                <div className="mt-5 text-[11.6px] text-white/44 flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#00D2FF]" />
                  GARDEN ROUTE PLUMBING CO.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Minimal indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {carouselFacts.map((_, i) => (
              <div
                key={i}
                className="h-[7px] rounded-full transition-all"
                style={{
                  width: i === idx ? 32 : 7,
                  background: i === idx ? "#00D2FF" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}