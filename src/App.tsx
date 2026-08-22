import { useRef, useState, useEffect } from "react";
import { HashRouter, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { gardenImages } from "./data/gardenImages";
import { KnowledgeCarousel } from "./components/KnowledgeCarousel";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CoverageMap } from "./components/CoverageMap";
import { WaterCalculator } from "./components/WaterCalculator";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { Icons } from "./components/Icons";

const colors = {
  ocean: "#0A3D62",
  oceanDeep: "#072641",
  aqua: "#00D2FF",
  aquaSoft: "#55e6fb",
  sand: "#F5F0E8",
  bg: "#0B1120",
  bgAlt: "#0B1120",
  surface: "#0d1828",
  slate: "#23364b",
  green: "#1e8449",
  copper: "#b87333",
};

const HERO_VIDEO = "https://videos.pexels.com/video-files/7109028/7109028-uhd_3840_2160_25fps.mp4";
const WATER_TAP = "https://videos.pexels.com/video-files/29251309/12621376_1920_1080_30fps.mp4";

const services = [
  { id:"plumbing", icon:"Wrench", title:"General Plumbing", desc:"Full residential & commercial systems. Precision joints, pressure balance, forever-fit finishes.", color:"#00D2FF"},
  { id:"bath", icon:"ShowerHead", title:"Bathroom Renovations", desc:"Bathroom remodels, sauna installations, leak free guarantee.", color:"#00D2FF"},
  { id:"leak", icon:"DropletSearch", title:"Leak Detection", desc:"Fast and accurate leak detection. Quick repair, satisfaction guarantee.", color:"#00D2FF"},
  { id:"install", icon:"Building", title:"New Installations", desc:"Coastal-grade copper & PEX. Salt air rated fittings for homes from Hartenbos to Plett.", color:"#00D2FF"},
  { id:"geyser", icon:"Flame", title:"Geyser Repairs", desc:"Burst geyser, we're here for you. Full replacements and repairs.", color:"#00D2FF"},
  { id:"drain", icon:"Wind", title:"Drain Cleaning", desc:"High-pressure jetting. Roots from forest properties cleared - camera verified.", color:"#00D2FF"},
  { id:"filter", icon:"Filter", title:"Water Filtration", desc:"Tank, borehole & municipal. Garden Route water - pure, mineral balanced.", color:"#00D2FF"},
  { id:"emerg", icon:"AlertTriangle", title:"Emergency Callouts", desc:"True 24/7. Average 38min response inside route corridor. Live GPS dispatch.", color:"#00D2FF"},
];

function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Icons.Wrench className={className} />,
    ShowerHead: <Icons.ShowerHead className={className} />,
    DropletSearch: <Icons.DropletSearch className={className} />,
    Building: <Icons.Building className={className} />,
    Flame: <Icons.Flame className={className} />,
    Wind: <Icons.Wind className={className} />,
    Filter: <Icons.Filter className={className} />,
    AlertTriangle: <Icons.AlertTriangle className={className} />,
  };
  return <>{iconMap[name] || null}</>;
}

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset:["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0,1], ["0%", "32%"]);
  const heroOpacity = useTransform(scrollYProgress, [0,0.85], [1,0]);
  const heroScale = useTransform(scrollYProgress, [0,1], [1,1.08]);

  const [activeService, setActiveService] = useState<string | null>(null);
  const [beforeAfter, setBeforeAfter] = useState(55);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[740px] w-full overflow-hidden">
        <motion.div style={{ y:heroY, scale:heroScale }} className="absolute inset-0">
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={gardenImages.knysna}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{
            background: `
              linear-gradient(180deg, rgba(7,14,26,0.37) 0%, rgba(7,14,26,0.14) 34%, rgba(6,18,34,0.64) 78%, rgba(16,19,38,1) 100%),
              radial-gradient(1200px 700px at 78% 18%, rgba(0,210,255,0.10), transparent 60%),
              radial-gradient(900px 560px at 15% 78%, rgba(30,132,73,0.13), transparent 62%)
            `
          }}/>
          <div className="absolute inset-0 opacity-[0.045] water-grid pointer-events-none" />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(1200px 540px at 50% 65%, transparent 32%, rgba(3,8,16,0.36) 100%)"
          }}/>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full mx-auto max-w-[1250px] px-5 sm:px-7 flex flex-col justify-center pt-[260px]">
          <div className="mt-6 sm:mt-8 mt-20 max-w-[980px]">
            <h1 className="display text-[44px] sm:text-[64px] lg:text-[84px] leading-[0.89] font-[800] tracking-[-0.022em] text-white"
                style={{ textShadow:"0 18px 55px rgba(0,0,0,.52)"}}>
              Punctual Plumbers.<br/>
              <span style={{
                background: `linear-gradient(98deg, #bdf7ff 0%, ${colors.aqua} 38%, #4ff0b2 100%)`,
                WebkitBackgroundClip:"text",
                backgroundClip:"text",
                color:"transparent"
              }}>Being Punctual is our business.</span>
            </h1>
          </div>

          <div className="mt-10 grid lg:grid-cols-[minmax(0,1fr)_430px] gap-8 items-end">
            <div>
              <a href="https://wa.me/27832379132?text=Hi%20Punctual%20Plumbers%20-%20Emergency%20at%20" target="_blank" rel="noreferrer"
                 className="inline-flex px-[26px] py-[15px] rounded-[16px] glass text-[14.5px] font-[650] text-white">
                <Icons.MessageCircle className="mr-2" /> WhatsApp 24/7
              </a>
            </div>

            <motion.div
              initial={{ opacity:0, y:30, scale:0.985 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ delay:0.55, duration:0.9, ease:[0.22,1,0.36,1] }}
               className="relative rounded-[16px] overflow-hidden mx-auto mt-16 max-w-[430px] z-[9999]"
              style={{
                background:"linear-gradient(180deg, rgba(13,27,44,0.78), rgba(9,19,32,0.87))",
                border:"1px solid rgba(255,255,255,0.095)",
                boxShadow:"0 32px 80px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.055)"
              }}
            >
              <div className="absolute -right-16 -top-16 w-[180px] h-[180px] rounded-full blur-[70px] opacity-25" style={{ background: colors.aqua }} />
              <div className="p-[22px]">
                <div className="text-[11px] tracking-[0.18em] text-[#94f0ff] font-[700]">JOBS COMPLETED</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                  {[
                    {k:"1,200+", s:"Residential Jobs"},
                    {k:"85+", s:"Commercial Jobs"},
                    {k:"234+", s:"New Builds"},
                    {k:"1,500+", s:"Emergency Call Outs"},
                  ].map(c=>(
                    <div key={c.s} className="rounded-[16px] py-3" style={{ background:"rgba(255,255,255,0.032)", border:"1px solid rgba(255,255,255,0.06)"}}>
                      <div className="display text-[22px] font-[800] text-white">{c.k}</div>
                      <div className="text-[10.8px] text-white/54">{c.s}</div>
                    </div>
                  ))}
                </div>
                 <div className="mt-4 rounded-[16px] overflow-hidden border border-white/[0.08]">
                  <video src={WATER_TAP} autoPlay loop muted playsInline className="w-full h-[108px] object-cover opacity-90" />
                </div>
                <div className="mt-[14px] text-[11.8px] leading-relaxed text-white/76">
                  <span className="text-[#91f3ff] font-[650]">Next available:</span> Today 14:40 – Knysna / Sedgefield loop.
                  <br/>Emergency triage line open now.
                </div>
              </div>
              <div className="h-[3px] w-full"
                style={{
                  background:`linear-gradient(90deg, ${colors.ocean}, ${colors.aqua}, ${colors.green}, ${colors.copper})`,
                  backgroundSize:"200% 100%",
                  animation:"waveShift 8s linear infinite"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none"
          style={{ background:"linear-gradient(180deg, rgba(26,26,46,0) 0%, #1A1A2E 82%)" }} />
      </section>

      {/* Trust ribbon */}
      <section className="relative z-20 mt-32 pb-6">
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
          <div className="rounded-[16px] px-4 sm:px-7 py-[16px] flex flex-wrap items-center justify-center sm:justify-between gap-4 text-[12.3px] sm:text-[13px]"
            style={{ background:"#0B1120", border:"1px solid rgba(255,255,255,0.073)", boxShadow:"0 20px 60px rgba(0,0,0,0.42)" }}>
            {[
              <span key="rating" className="flex items-center gap-1"><Icons.Star className="text-aqua w-4 h-4" /> 4.9/5 Google Rating</span>,
              <span key="award" className="flex items-center gap-1"><Icons.Award className="text-aqua w-4 h-4" /> Garden Route's #1 Rated Plumber</span>,
              <span key="shield" className="flex items-center gap-1"><Icons.Shield className="text-aqua w-4 h-4" /> Fully Licensed & Insured PIRB</span>,
              <span key="local" className="flex items-center gap-1"><Icons.Home className="text-aqua w-4 h-4" /> Proud Local Business – 100% Route Team</span>,
              <span key="guarantee" className="flex items-center gap-1"><Icons.WaterDrop className="text-aqua w-4 h-4" /> 7-Year Install Guarantee</span>,
            ].map(t=> <span key={t.key} className="text-white/72 font-[500] flex items-center gap-1">{t}</span>)}
          </div>
        </div>
      </section>

      {/* Scene 1 – Garden Route deserves better */}
      <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]"
             style={{ backgroundImage:`url(${gardenImages.heads})`, backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed" }} />
        <div className="absolute inset-0"
              style={{ background:`linear-gradient(180deg, ${colors.bg} 0%, rgba(26,26,46,0.92) 16%, rgba(11,32,52,0.58) 50%, rgba(26,26,46,0.97) 100%)`}}/>
        <div className="relative mx-auto max-w-[1250px] px-5 sm:px-7">
          <motion.div
            initial={{ opacity:0, y:32 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-120px" }}
            transition={{ duration:0.78 }}
            className="max-w-[900px]"
          >
            <h2 className="display mt-4 text-[34px] sm:text-[52px] lg:text-[60px] leading-[0.97] font-[800]">
              The Garden Route deserves<br/>plumbing as beautiful as the place.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Scene 2 – Services */}
      <section className="relative py-14 sm:py-20" style={{ background:`linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgAlt} 100%)` }}>
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
            <div>
              <h2 className="display text-[34px] sm:text-[48px] font-[800] mt-3">What we can do for you.</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[14px] sm:gap-[20px]">
            {services.map((s,idx)=>(
              <motion.div
                key={s.id}
                initial={{ opacity:0, y:28 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:"-80px" }}
                transition={{ delay: idx*0.045, duration:0.55 }}
                onMouseEnter={()=>setActiveService(s.id)}
                onMouseLeave={()=>setActiveService(null)}
                className="group relative rounded-[16px] p-[20px] sm:p-[24px] cursor-pointer overflow-hidden"
                style={{
                  background: activeService===s.id
                    ? "linear-gradient(170deg, rgba(23,48,76,0.98), rgba(8,24,44,0.98))"
                    : "linear-gradient(170deg, rgba(255,255,255,0.038), rgba(255,255,255,0.016))",
                  border:"1px solid rgba(255,255,255,0.085)",
                  boxShadow: activeService===s.id ? `0 20px 70px rgba(0,210,255,0.13), inset 0 0 0 1px ${s.color}33` : "none",
                  transform: activeService===s.id ? "translateY(-4px)" : "translateY(0)",
                  transition:"all .34s cubic-bezier(.22,1,.36,1)"
                }}
              >
                <div className="text-[30px]"><ServiceIcon name={s.icon} className="w-8 h-8" /></div>
                <div className="mt-4 display text-[19px] font-[750] tracking-[-0.01em] text-white">{s.title}</div>
                <p className="mt-[10px] text-[13.4px] leading-relaxed text-white/66">{s.desc}</p>
                <div className="absolute -right-8 -bottom-8 w-[110px] h-[110px] rounded-full opacity-[0.07]"
                     style={{ background:`radial-gradient(circle, ${s.color} 0%, transparent 70%)`}}/>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Carousel */}
      <KnowledgeCarousel />

      {/* Before / After */}
      <section className="py-20 sm:py-24" style={{ background: colors.bg }}>
        <div className="mx-auto max-w-[1100px] px-5 sm:px-7">
          <div className="text-center max-w-[750px] mx-auto">
            <h3 className="display text-[32px] sm:text-[44px] font-[800] mt-3">Drag the water line.</h3>
            <p className="text-white/68 mt-3 text-[15.5px]">Knysna lagoon cottage – full copper re-pipe + designer bath. 11 days, zero dust in living areas.</p>
          </div>

           <div className="mt-10 relative rounded-[16px] overflow-hidden border border-white/[0.10] shadow-[0_30px_90px_rgba(0,0,0,0.48)]">
             <div className="relative h-[380px] sm:h-[520px] w-full">
               <img src={gardenImages.bath2} alt="After: Knysna lagoon cottage full copper re-pipe and designer bath renovation by Punctual Plumbers" className="absolute inset-0 h-full w-full object-cover" />
               <div className="absolute inset-0" style={{ clipPath:`inset(0 ${100-beforeAfter}% 0 0)` }}>
                 <img src={gardenImages.bath3} alt="Before: 1998 tile and galvanized pipes in Knysna lagoon cottage before renovation by Punctual Plumbers" className="h-full w-full object-cover saturate-[.65] brightness-[.82]" />
                 <div className="absolute inset-0 bg-[#06243a]/28" />
               </div>
               <div className="absolute top-0 bottom-0" style={{ left:`${beforeAfter}%` }}>
                 <div className="absolute top-0 bottom-0 w-[2.5px] -translate-x-1/2" style={{ background: colors.aqua, boxShadow:`0 0 28px ${colors.aqua}` }} />
                 <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[48px] h-[48px] rounded-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${colors.aqua}, #73f3ff)`, boxShadow:"0 8px 30px rgba(0,210,255,.45)" }}>
                   <span className="text-[#062636] text-[15px] font-[900]">⇆</span>
                 </div>
               </div>
               <input
                 type="range" min={6} max={94} value={beforeAfter}
                 onChange={e=>setBeforeAfter(parseInt(e.target.value))}
                 className="absolute inset-0 opacity-0 cursor-ew-resize"
                 aria-label="Before after slider"
               />
             </div>
             <div className="flex items-center justify-between px-5 py-3 text-[11.5px] font-[700]">
               <span className="text-white/70">BEFORE - 1998 tile / galvanized</span>
               <span className="text-[#04212d] bg-[#00d2ff] px-3 py-1 rounded-full">AFTER - Coastal copper / travertine</span>
             </div>
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.075] text-center text-[12.7px] bg-[#0d1828]">
              {[
                ["11 days", "full strip to handover"],
                ["R 187,400", "fixed – no extras"],
                ["7-year", "workmanship COC"],
              ].map(([a,b])=>(
                <div key={a} className="py-[14px] px-4">
                  <span className="font-[750] text-white mr-1">{a}</span>
                  <span className="text-white/54">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Coverage Map */}
      <CoverageMap />

      {/* Water Calculator */}
      <WaterCalculator />

    </>
  );
}

function AppContent() {
  const { hash } = useLocation();
  const isBlog = hash === "#/blog" || hash === "#/blog/";
  const isBlogPost = hash.startsWith("#/blog/");
  const isPrivacy = hash === "#/privacy-policy";
  const isTerms = hash === "#/terms-of-service";
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Dynamic SEO meta tags
  if (typeof document !== "undefined") {
    if (isBlogPost) {
      document.title = "Garden Route Plumbing Journal | Punctual Plumbers";
    } else if (isBlog) {
      document.title = "Plumbing Journal | Punctual Plumbers";
    } else if (isPrivacy) {
      document.title = "Privacy Policy | Punctual Plumbers";
    } else if (isTerms) {
      document.title = "Terms of Service | Punctual Plumbers";
    } else {
      document.title = "Punctual Plumbers - Being Punctual is our business. Your Paradise Protected.";
    }
  }

  let pageContent;
  if (isBlogPost) {
    const slug = hash.replace("#/blog/", "");
    pageContent = <BlogPostPage slug={slug} />;
  } else if (isBlog) {
    pageContent = <BlogPage />;
  } else if (isPrivacy) {
    pageContent = <PrivacyPolicyPage />;
  } else if (isTerms) {
    pageContent = <TermsOfServicePage />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <div
      style={{
        fontFamily: "'Outfit', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        backgroundColor: colors.bg,
        color: "#f6f6f6",
      }}
      className="min-h-screen antialiased overflow-x-clip"
    >
      <style>{`
        body { font-family: 'Outfit', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        h1,h2,h3,.display { font-family: 'Outfit', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; letter-spacing:-0.018em; }
        ::selection { background:#00d2ff33; color:#fff; }
        * { scrollbar-width: thin; scrollbar-color: #00D2FF33 #0b1b2b;}
        @keyframes pingSlow { 75%,100% { transform: scale(2.6); opacity:0;} }
        @keyframes waveShift { 0% { background-position:0% 50% } 50% { background-position:100% 50% } 100% { background-position:0% 50% } }
        @keyframes floatY { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-10px)} }
        @keyframes drip { 0% { transform: translateY(-6px); opacity:0 } 30% { opacity:1 } 100% { transform: translateY(14px); opacity:0 } }
        @keyframes ripplePulse { 0% { box-shadow:0 0 0 0 #00d2ff55 } 70% { box-shadow:0 0 0 18px #00d2ff00 } 100% { box-shadow:0 0 0 0 #00d2ff00 } }
        @keyframes copperSpin { to { transform: rotate(360deg) } }
        .glass { backdrop-filter: blur(18px) saturate(160%); -webkit-backdrop-filter: blur(18px) saturate(160%); background: rgba(14,27,46,0.58); border:1px solid rgba(255,255,255,0.09); }
        .glass-light { backdrop-filter: blur(16px) saturate(150%); -webkit-backdrop-filter: blur(16px) saturate(150%); background: rgba(245,240,232,0.82); border:1px solid rgba(10,61,98,0.07); }
        .water-grid { background-image: linear-gradient(rgba(0,210,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.05) 1px, transparent 1px); background-size: 42px 42px; }
        .no-scrollbar::-webkit-scrollbar { display:none }
        input[type=range] { accent-color: #00D2FF; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* NAV */}
      <motion.nav
        initial={{ y:-18, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
        className="fixed top-0 z-[60] w-full"
      >
        <div className="mx-auto max-w-[1250px] px-4 sm:px-7 pt-2">
          <div className="glass rounded-2xl px-4 sm:px-6 py-[10px] flex items-center justify-between shadow-[0_12px_60px_rgba(0,0,0,0.38)]">
            <div className="flex items-center gap-3">
              <img src="/plumbers-logo.png" alt="Punctual Plumbers" className="h-[40px] w-auto" />
            </div>
            <div className="hidden xl:flex items-center gap-8 text-[13.5px] text-white/80 font-[500]">
              {["Services","Process","Coverage","Reviews","Blog"].map(l=>(
                <a key={l} href={l==="Blog" ? "#/blog" : `#${l.toLowerCase()}`} className="hover:text-white transition-colors">{l}</a>
              ))}
              <a href="#/privacy-policy" className="hover:text-white transition-colors text-white/60">Legal</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#quote" className="hidden sm:inline-flex text-[12.5px] font-[600] text-white/85 hover:text-white transition">Get Quote</a>
              <a href="tel:+27832379132" className="relative px-[15px] sm:px-[18px] py-[10px] rounded-full text-[12.5px] sm:text-[13px] font-[700] text-[#041a2a] overflow-hidden"
                 style={{ background: `linear-gradient(120deg, ${colors.aqua}, #8ef7ff)` }}>
                <span className="relative z-10 flex items-center gap-1"><Icons.Phone className="w-4 h-4" /> 083 237 9132</span>
                <span className="absolute inset-0 opacity-[0.22]" style={{ background:"linear-gradient(95deg, transparent, #fff, transparent)", animation:"waveShift 4.2s infinite" }} />
              </a>
              <button onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="p-2 rounded-full text-white/80 hover:text-white transition" aria-label="Toggle theme">
                {theme === "dark" ? <Icons.Sun className="w-4 h-4" /> : <Icons.Moon className="w-4 h-4" />}
              </button>
              <button onClick={()=>setMobileMenu(!mobileMenu)} className="xl:hidden ml-1 px-2 py-1 text-white/80 text-[22px]">≡</button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity:0, y:-8 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              className="xl:hidden mx-4 mt-2 glass rounded-2xl px-4 py-4 text-[14px] text-white/85"
            >
              {["Services","Process","Coverage","Reviews","Blog","Legal"].map(l=>(
                <a key={l} href={l==="Blog" ? "#/blog" : l==="Legal" ? "#/privacy-policy" : `#${l.toLowerCase()}`} onClick={()=>setMobileMenu(false)} className="block py-2 border-b border-white/7 last:border-0">{l}</a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {pageContent}

      {/* Footer */}
      <footer className="py-14 border-t border-white/[0.078]" style={{ background:"#0B1120" }}>
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7 grid md:grid-cols-4 gap-10 text-[13.6px] text-white/68">
          <div>
            <div className="flex items-center gap-2">
              <img src="/plumbers-logo.png" alt="Punctual Plumbers" className="h-[32px] w-auto" />
              <div>
                <div className="display font-[800] text-white text-[14px] -mt-[2px]">Punctual Plumbers</div>
                <div className="text-[11px] text-[#8feaff] tracking-wider -mt-[2px]">PARADISE PROTECTED</div>
              </div>
            </div>
            <p className="mt-3 text-white/55 leading-relaxed">
              Coastal-certified copper plumbers. PIRB 3419. Mossel Bay → Storms River since 2009. 24/7 emergency.
            </p>
            <p className="mt-2 text-[11px] text-white/40">
              Website created and managed by <span className="text-aqua">Agentcy.co.za</span><br/>
              AI integrations by <span className="text-aqua">Integr8 AI</span>
            </p>
          </div>
          <div>
            <div className="text-white font-[700] mb-2">Services</div>
            <ul className="space-y-[7px] text-white/60">
              <li>General Plumbing</li>
              <li>Bathroom Renovations</li>
              <li>Leak Detection</li>
              <li>Water Filtration</li>
              <li>Emergency Callouts</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-[700] mb-2">Contact</div>
            <ul className="space-y-[7px] text-white/60">
              <li>Garden Route – 083 237 9132</li>
              <li>Emergency 24/7 – same number</li>
              <li>punctualplumbers@outlook.com</li>
            </ul>
          </div>
          <div>
            <div className="text-white font-[700] mb-2">Legal</div>
            <ul className="space-y-[7px]">
              <li><a href="#/privacy-policy" className="text-aqua hover:underline">Privacy Policy</a></li>
              <li><a href="#/terms-of-service" className="text-aqua hover:underline">Terms of Service</a></li>
            </ul>
            <div className="mt-4 text-white/60 leading-relaxed">
              PIRB 3419<br/>
              IOPSA • SANS 10252
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1250px] px-5 sm:px-7 mt-10 pt-6 border-t border-white/[0.075] text-[11.6px] text-white/42 flex flex-col sm:flex-row justify-between gap-3">
          <div>© 2009–2026 Punctual Plumbers (Pty) Ltd. All rights reserved.</div>
          <div>Designed & developed by Agentcy.co.za | AI by Integr8 AI</div>
        </div>
      </footer>

      {/* FAQ Section for SEO/AEO */}
      <section className="py-20 sm:py-28" style={{ background: colors.bgAlt }}>
        <div className="mx-auto max-w-[900px] px-5 sm:px-7">
          <div className="text-center max-w-[720px] mx-auto">
            <h2 className="text-[34px] sm:text-[48px] font-[800] mt-3 text-white">Frequently asked questions.</h2>
            <p className="text-white/68 mt-3 text-[15.7px]">Quick answers to common Garden Route plumbing questions.</p>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "How quickly can you respond to an emergency in Knysna?",
                a: "Our average emergency response time is 21-31 minutes across the Garden Route corridor. For Knysna, Sedgefield, and Plettenberg Bay, we typically arrive within 30 minutes during business hours and within 60 minutes after hours."
              },
              {
                q: "Do you service areas outside of Knysna and Plett?",
                a: "Yes. We cover the full Garden Route from Mossel Bay to Storms River, including Hartenbos, George, Knysna, Sedgefield, Wilderness, and Plettenberg Bay."
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes. Punctual Plumbers is PIRB registered (3419) and fully insured. We are also IOPSA members and comply with SANS 10252 standards. All work carries a 7-year workmanship guarantee."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept EFT, cash, and card payments. All prices are in South African Rand (ZAR) and include VAT where applicable. Emergency callout payment is due within 7 days of invoice."
              },
              {
                q: "Do you offer free quotes?",
                a: "Yes. We provide free on-site assessments and written quotes for all jobs. Emergency callouts include a no-obligation quote before any work begins. Quotes are valid for 30 days."
              },
              {
                q: "Why is copper better than PVC for coastal homes?",
                a: "Copper lasts 50+ years in salt-air environments. PVC degrades 4x faster due to UV exposure and salt crystallization. For homes within 800m of the sea, we always recommend coastal-grade copper for longevity and corrosion resistance."
              },
              {
                q: "Can you help with load-shedding geyser timers?",
                a: "Yes. We install and program geyser timers as part of our energy efficiency service. A properly configured timer can reduce geyser electricity costs by 30-40% without sacrificing hot water availability."
              },
              {
                q: "What is your 7-year guarantee?",
                a: "Our 7-year workmanship guarantee is the longest on the Garden Route. It covers defects in our workmanship only, not damage from misuse, negligence, or external factors. Manufacturer warranties apply to all materials we supply."
              },
            ].map((item, i) => (
              <div key={i} className="rounded-[16px] p-6 sm:p-8" style={{ background: "linear-gradient(170deg, rgba(23,48,76,0.9), rgba(8,24,44,0.9))", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="text-[18px] sm:text-[20px] font-[700] text-white">{item.q}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/75">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60">Still have questions?</p>
            <p className="mt-2 text-white/40 text-[13px]">Call 083 237 9132 or use the WhatsApp button below.</p>
          </div>
        </div>
      </section>

      {/* FAQ Schema for AEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you respond to an emergency in Knysna?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our average emergency response time is 21-31 minutes across the Garden Route corridor. For Knysna, Sedgefield, and Plettenberg Bay, we typically arrive within 30 minutes during business hours and within 60 minutes after hours."
            }
          },
          {
            "@type": "Question",
            "name": "Are you licensed and insured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Punctual Plumbers is PIRB registered (3419) and fully insured. We are also IOPSA members and comply with SANS 10252 standards. All work carries a 7-year workmanship guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Why is copper better than PVC for coastal homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Copper lasts 50+ years in salt-air environments. PVC degrades 4x faster due to UV exposure and salt crystallization. For homes within 800m of the sea, we always recommend coastal-grade copper."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free quotes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide free on-site assessments and written quotes for all jobs. Emergency callouts include a no-obligation quote before any work begins. Quotes are valid for 30 days."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover the full Garden Route from Mossel Bay to Storms River, including Hartenbos, George, Knysna, Sedgefield, Wilderness, and Plettenberg Bay."
            }
          }
        ]
      }) }} />

      {/* WhatsApp floating button */}
      <div className="fixed bottom-4 left-3 sm:left-5 z-[70]">
        <a
          href="https://wa.me/27832379132?text=Hi%20Punctual%20Plumbers%20-%20I%20need%20help%20with%20"
          target="_blank"
          rel="noopener noreferrer"
          className="h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-[0_18px_50px_rgba(0,0,0,0.43)] transition-all duration-300"
          style={{
            background:"linear-gradient(135deg, #1da851, #0d8a5c)",
            border:"1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Icons.WhatsApp className="h-[26px] w-[26px] fill-white" />
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}