import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Icons } from "../components/Icons";

interface BlogPostPageProps {
  slug?: string;
}

const blogPosts: Record<string, { title: string; tag: string; date: string; readTime: string; content: string }> = {
  "knysna-pipe-freeze-protection": {
    title: "Knysna pipe freeze protection — 7 low-cost checks",
    tag: "WINTER",
    date: "June 2025",
    readTime: "5 min read",
    content: `Winter temperatures in Knysna can drop below 5°C, and uninsulated pipes in roof spaces, garages, and exterior walls are at serious risk of freezing and bursting.

## 1. Insulate exposed pipes
Use foam pipe insulation or lagging on all exposed copper and PVC pipes. Focus on roof spaces, garages, and pipes along exterior walls.

## 2. Seal cracks and gaps
Cold air entering through small cracks can freeze nearby pipes. Use expanding foam or caulk to seal gaps where pipes enter your home.

## 3. Let taps drip during cold snaps
A slow drip from an outside tap keeps water moving, preventing pressure buildup from freezing.

## 4. Open cabinet doors
Allow warm air to circulate around pipes under sinks by opening cabinet doors during extreme cold.

## 5. Disconnect and drain outdoor hoses
Garden hoses can freeze and back up into your home's plumbing. Disconnect them before the first frost.

## 6. Install pipe heating cables
For the most vulnerable pipes, electric heat tape provides reliable freeze protection. Use a thermostat-controlled model for efficiency.

## 7. Know your stopcock
Locate your main water stopcock and ensure it works. In an emergency, you need to shut off water fast to minimize damage.

Need a winter readiness check? Contact Punctual Plumbers for a free pipe insulation assessment.`
  },
  "loadshedding-geyser-timers": {
    title: "Load-shedding geyser timers that actually save",
    tag: "SUMMER",
    date: "January 2025",
    readTime: "6 min read",
    content: `Your geyser is likely your home's biggest electricity consumer — accounting for 40-60% of your monthly bill. During load-shedding, the cycle of cooling and reheating is brutal on both your wallet and your geyser's lifespan.

## The timer strategy that works

Set your geyser timer to heat water during off-peak hours (typically 10pm-6am) and turn it off during the day. A 150L geyser on a timer saves roughly 30-40% on geyser electricity.

## Avoid the "reheat all day" trap

Many households leave geysers on 24/7 "for convenience." But with a 150L tank well-insulated, water stays hot for 12-18 hours. You don't need constant reheating.

## Use a geyser blanket

A properly installed geyser blanket reduces heat loss by up to 40%. Combined with a timer, you're looking at serious savings.

## Temperature setting

Set your geyser to 55-60°C. Higher settings waste energy and increase scaling. Lower settings risk bacterial growth.

Punctual Plumbers installs and programs geyser timers as part of our energy efficiency service. Call us for a free quote.`
  },
  "why-plett-homes-need-copper": {
    title: "Why Plett homes need copper — not PVC — within 800m of sea",
    tag: "COASTAL",
    date: "March 2025",
    readTime: "7 min read",
    content: `If you're building or renovating within 800 metres of the sea in Plett, your pipe choice matters enormously. Salt-laden air is a silent destroyer of plumbing systems.

## PVC fails faster in coastal environments

Salt air accelerates PVC degradation through UV exposure and salt crystallization. Within 5-7 years, coastal PVC becomes brittle, cracks, and leaks. That "cheaper" installation costs far more in the long run.

## Copper's natural advantages

Copper has been the gold standard for coastal construction for over a century. Its natural antimicrobial properties resist bacterial growth, and its corrosion resistance means it can last 50+ years in salt-air environments.

## The Plett reality

We've seen Plett homes with 6-year-old PVC systems already failing. Meanwhile, our copper installations from 2009 are still performing perfectly. The math is clear.

## Code compliance

Many coastal councils now require copper or CPVC for new installations within 800m of high-tide mark. Check with Knysna and Bitou municipal building departments.

For a free materials consultation on your coastal project, contact Punctual Plumbers.`
  },
  "garden-route-water-quality-report": {
    title: "Garden Route water quality report 2025: What's in your tap?",
    tag: "WATER QUALITY",
    date: "April 2025",
    readTime: "8 min read",
    content: `We tested water from 12 Garden Route towns and found some surprises. Here's what you need to know about the water coming out of your tap.

## Municipal water: mostly safe, but...

Mossel Bay and George municipal water generally meets SANS 241 standards, but we found elevated iron levels in 4 towns, causing staining and metallic taste.

## Borehole water: test before you drink

Borehole water across the Route varies wildly. Some is pristine; others have high hardness, iron, manganese, or bacterial contamination. Always test before installing a filtration system.

## Tank water: the hidden risk

Rainwater tanks can accumulate bacteria, bird droppings, and debris. We recommend first-flush diverters and UV sterilisation for potable tank systems.

## Our recommendations

- Install a whole-house sediment filter (all sources)
- Add UV sterilisation for borehole and tank water
- Test annually for E. coli, iron, hardness, and pH
- Consider reverse osmosis for drinking water in high-iron areas

Contact us for a free water quality assessment and custom filtration design.`
  },
  "forest-root-intrusion-drainage": {
    title: "Forest root intrusion: The silent destroyer of Plett drainage",
    tag: "DRAINAGE",
    date: "February 2025",
    readTime: "5 min read",
    content: `70% of Plett properties have some degree of root intrusion in their main drainage lines. The indigenous forests that make Plett beautiful are also quietly destroying your drains.

## How roots find your pipes

Roots are drawn to moisture and nutrients. Even tiny cracks in PVC or older clay pipes release enough water vapour to attract nearby tree roots. Once inside, roots grow rapidly, creating a dense mat that blocks flow.

## Warning signs

- Slow drains that worsen over time
- Gurgling sounds from toilets and sinks
- Sewage odours around drains
- Unexplained wet spots in the garden
- Multiple drains blocking simultaneously

## Camera inspection: the only reliable diagnosis

We use CCTV camera inspection to map every root intrusion, crack, and blockage. This shows exactly what's happening and where — no guesswork.

## Solutions

- **Jetting**: High-pressure water jetting clears roots and restores flow (temporary fix)
- **RootX**: Biodegradable foam that kills roots without harming trees
- **Pipe relining**: Install a new liner inside the old pipe — no excavation needed
- **Excavation and replacement**: The permanent fix for severely damaged pipes

Book a camera inspection today and stop guessing about your drainage.`
  },
  "copper-vs-pex-coastal-homes": {
    title: "Copper vs PEX for coastal homes: The complete comparison",
    tag: "MATERIALS",
    date: "May 2025",
    readTime: "7 min read",
    content: `PEX is cheaper and faster to install. But in salt-air environments like the Garden Route, copper's corrosion resistance and UV stability make it the better long-term investment. Here's the data.

## Cost comparison

- **PEX**: R80-120 per metre installed
- **Copper**: R150-250 per metre installed

Yes, copper costs roughly 2x upfront. But over a 30-year lifecycle, copper often wins on total cost of ownership.

## Lifespan in coastal environments

- **PEX**: 20-25 years (salt air + UV exposure)
- **Copper**: 50-70+ years (coastal-grade)

## UV resistance

PEX degrades under UV exposure. If any part of your installation is above ground or in a roof space with translucent sheeting, PEX is a risk.

## Corrosion resistance

Copper forms a protective patina that actually improves its corrosion resistance over time. PEX has no such defence against salt-air degradation.

## Health and safety

Copper is naturally antimicrobial and doesn't leach chemicals. Some PEX formulations have raised concerns about chemical leaching into drinking water.

## Our recommendation

For coastal Garden Route homes, always specify coastal-grade copper. For inland or fully interior installations, PEX can be appropriate.

Discuss your project with us for a materials assessment tailored to your location.`
  },
};

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0B1120" }}>
        <div className="text-center">
          <h1 className="text-[48px] font-[800] text-white">404</h1>
          <p className="mt-4 text-white/60">Post not found.</p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-aqua font-[600] hover:underline">
            <Icons.ChevronRight />
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#0B1120", color: "#f6f6f6" }}>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0B1120 0%, #0F1729 100%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(0,210,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          pointerEvents: "none"
        }} />
        <div className="relative mx-auto max-w-[900px] px-5 sm:px-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-aqua font-[600] text-[13px] hover:underline mb-6">
              <Icons.ChevronRight />
              Back to Journal
            </Link>
            <div className="flex items-center gap-2 text-aqua font-[800] text-[10px] tracking-widest mb-3">
              <span className="px-2 py-1 rounded-full" style={{ background: "rgba(0,210,255,0.12)", border: "1px solid rgba(0,210,255,0.2)" }}>
                {post.tag}
              </span>
              <span className="text-white/40">•</span>
              <span>{post.date}</span>
              <span className="text-white/40">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] font-[800] leading-[1.1] text-white">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[900px] px-5 sm:px-7">
          <div className="prose prose-invert max-w-none text-[15px] leading-[1.8] text-white/80">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-[22px] font-[800] text-white mt-8 mb-3">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('- **')) {
                return (
                  <ul key={idx} className="mt-3 space-y-1 text-white/75 list-disc list-inside">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^-\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                );
              }
              return <p key={idx} className="mt-4">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 p-6 rounded-[20px]" style={{ background: "rgba(0,210,255,0.03)", border: "1px solid rgba(0,210,255,0.1)" }}>
            <p className="font-[700] text-white mb-2">Need this work done?</p>
            <p className="text-white/70 mb-4">Our team knows every pipe, pressure zone, and council requirement from Mossel Bay to Storms River.</p>
            <a href="https://wa.me/27832379132?text=Hi%20Punctual%20Plumbers%20-%20I%20need%20help%20with%20" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-[26px] py-[15px] rounded-[16px] text-[14.5px] font-[650] text-white transition-all"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Icons.WhatsApp />
              WhatsApp Us 24/7
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}