import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";

export function WaterCalculator() {
  const [people, setPeople] = useState(3);
  const [showersPerWeek, setShowersPerWeek] = useState(14);
  const [hasGarden, setHasGarden] = useState(true);

  const calcSavings = useMemo(() => {
    const LITRES_PER_PERSON_PER_DAY = 210;
    const LITRES_PER_SHOWER = 90;
    const GARDEN_LITRES_PER_WEEK = 650;
    const SAVINGS_RATE = 0.37;
    const WEEKS_PER_MONTH = 4.33;
    const RAND_PER_KL = 84;
    const CO2_PER_LITRE = 0.018;

    const dailyLitres = people * LITRES_PER_PERSON_PER_DAY;
    const showerLitresPerWeek = showersPerWeek * LITRES_PER_SHOWER;
    const gardenLitresPerWeek = hasGarden ? GARDEN_LITRES_PER_WEEK : 0;

    const weeklyLitres = dailyLitres * 7 + showerLitresPerWeek + gardenLitresPerWeek;
    const savedWeekly = Math.round(weeklyLitres * SAVINGS_RATE);
    const savedMonthly = Math.round(savedWeekly * WEEKS_PER_MONTH);
    const randMonthly = Math.round((savedMonthly / 1000) * RAND_PER_KL);
    const co2Monthly = Math.round(savedMonthly * CO2_PER_LITRE);

    return {
      litresPerMonth: savedMonthly,
      randPerMonth: randMonthly,
      co2PerMonth: co2Monthly,
    };
  }, [people, showersPerWeek, hasGarden]);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Calculate Your Garden Route Water Savings",
    "description": "Use our water savings calculator to estimate how much water and money you could save with efficient fixtures, leak repair, and smart irrigation.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter number of people",
        "text": "Set the number of people in your home to estimate daily water usage."
      },
      {
        "@type": "HowToStep",
        "name": "Enter weekly showers",
        "text": "Set the number of showers per week for the household."
      },
      {
        "@type": "HowToStep",
        "name": "Select garden irrigation",
        "text": "Check if you have a garden or irrigation system to include outdoor water usage."
      },
      {
        "@type": "HowToStep",
        "name": "View savings estimate",
        "text": "See your estimated monthly water savings in litres, Rand, and CO₂ avoided."
      }
    ]
  };

  return (
    <section id="calculator" className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, var(--bg-alt) 0%, var(--bg-section) 100%)" }}>
      <div className="noise-overlay" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
        <div className="text-center max-w-[820px] mx-auto">
          <h3 className="text-[32px] sm:text-[44px] font-[800] mt-3 text-white">Water Savings Calculator</h3>
          <p className="text-white/68 mt-3 text-[15.7px]">See how much Garden Route water and money you could save.</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="rounded-[24px] border border-white/[0.095] p-[22px] sm:p-[28px] w-full max-w-[560px]"
            style={{ background: "linear-gradient(170deg, rgba(23,48,76,0.95), rgba(8,24,44,0.95))" }}>
            <div className="flex items-center gap-2 text-[#7ef3ff] font-[700] text-[11px] tracking-widest">
              <Icons.Calculator />
              WATER SAVINGS CALCULATOR
            </div>

            <div className="mt-5 grid gap-4">
              <label className="text-[13px] text-white/80">
                People in home:
                <span className="font-[700] text-white ml-2">{people}</span>
                <input type="range" min={1} max={8} value={people} onChange={e => setPeople(+e.target.value)} className="w-full mt-1" />
              </label>
              <label className="text-[13px] text-white/80">
                Showers per week (household):
                <span className="font-[700] text-white ml-2">{showersPerWeek}</span>
                <input type="range" min={0} max={35} value={showersPerWeek} onChange={e => setShowersPerWeek(+e.target.value)} className="w-full mt-1" />
              </label>
              <label className="flex items-center gap-3 text-[13.8px] text-white/82">
                <input type="checkbox" checked={hasGarden} onChange={e => setHasGarden(e.target.checked)} className="w-4 h-4 accent-aqua" />
                Garden / irrigation system
              </label>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">{calcSavings.litresPerMonth.toLocaleString()}</div>
                <div className="text-[11px] text-white/55">litres / month saved</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">R {calcSavings.randPerMonth.toLocaleString()}</div>
                <div className="text-[11px] text-white/55">Rand / month</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="rounded-[16px] py-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-[22px] font-[800] text-[#8fffff]">{calcSavings.co2PerMonth} kg</div>
                <div className="text-[11px] text-white/55">CO₂ avoided / month</div>
              </motion.div>
            </div>

            <p className="mt-4 text-[11px] text-white/40 text-center">
              Based on SA municipal averages: 210L/person/day, 90L/shower, R84/kL. Savings assume 37% reduction via efficient fixtures, leak repair & smart irrigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}