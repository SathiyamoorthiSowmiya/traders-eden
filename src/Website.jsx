import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle2, Linkedin, Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";
// Color palette
const colors = {
  bg: "#0a0a0a", // near-black
  gold: "#d4af37", // gold accent
  goldSoft: "#f0d98a",
  text: "#eaeaea",
  muted: "#9ca3af",
  card: "#111111",
  border: "#1f2937",
};

// Image assets: replace these with your deployed URLs or /public paths when integrating.
const assets = {
  logo: "/mnt/data/Eden Png_3@33.33x-8.png",
  thiru: "/mnt/data/IMG_3826~2.jpg",
  iniyavan: "/mnt/data/IMG-20250831-WA0009~2.jpg",
};

const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {title && (
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: colors.text }}>
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg" style={{ color: colors.muted }}>
            {subtitle}
          </p>
        )}
      </div>
    )}
    {children}
  </section>
);

const Card = ({ children }: any) => (
  <div className="rounded-2xl p-6 shadow-lg" style={{ background: colors.card, border: `1px solid ${colors.border}` }}>
    {children}
  </div>
);

const Button = ({ children, variant = "solid", href = "#" }: any) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform active:scale-[.98]";
  const solid = {
    backgroundColor: colors.gold,
    color: "#0a0a0a",
  };
  const outline = {
    border: `1px solid ${colors.gold}`,
    color: colors.gold,
  };
  return (
    <a href={href} className={base} style={variant === "solid" ? solid : outline}>
      {children}
    </a>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60" style={{ background: "rgba(10,10,10,.6)", borderBottom: `1px solid ${colors.border}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-xl font-semibold" style={{ color: colors.gold }}>
          <img src={assets.logo} alt="Trader's Eden Logo" className="h-8 w-8 rounded-full object-contain"/>
          <span>Trader’s Eden</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm hover:opacity-80" style={{ color: colors.text }}>{l.label}</a>
          ))}
          <Button href="#contact"><Phone size={16}/> Request Consultation</Button>
        </div>
        <button className="md:hidden" aria-label="Open Menu" onClick={() => setOpen(!open)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke={colors.text} strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: colors.bg }}>
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm py-2" style={{ color: colors.text }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Button href="#contact"><Phone size={16}/> Request Consultation</Button>
        </div>
      )}
    </nav>
  );
};

export default function Website() {
  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "Inter, ui-sans-serif, system-ui" }}>
      <Nav />

      {/* Hero */}
      <header id="home" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          {/* subtle grid */}
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.border} strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <Section id="" title="" subtitle="">
          <div className="py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Your Trusted Partner in <span style={{ color: colors.gold }}>Financial Growth</span>
              </motion.h1>
              <p className="mt-5 text-lg" style={{ color: colors.muted }}>
                Empowering investors with smarter brokerage, innovative fintech, and market knowledge.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact">Get Started <ArrowRight size={16}/></Button>
                <Button href="#contact" variant="outline">Request Consultation</Button>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm">
                <img alt="Angel One" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Angel_One_Logo.png/320px-Angel_One_Logo.png" className="h-8 w-auto"/>
                <span style={{ color: colors.muted }}>Partnered with Angel One</span>
              </div>
            </div>
            <Card>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 style={{ color: colors.gold }} />
                  <div>
                    <h3 className="font-semibold">Transparency • Innovation • Client Success</h3>
                    <p className="text-sm" style={{ color: colors.muted }}>Our pillars for building financial legacies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 style={{ color: colors.gold }} />
                  <div>
                    <h3 className="font-semibold">Education First</h3>
                    <p className="text-sm" style={{ color: colors.muted }}>We make market knowledge accessible to everyone.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 style={{ color: colors.gold }} />
                  <div>
                    <h3 className="font-semibold">Fast, Secure Execution</h3>
                    <p className="text-sm" style={{ color: colors.muted }}>Seamless orders through trusted platforms.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>
      </header>

      {/* About */}
      <Section id="about" title="About Us" subtitle="We don’t just trade — we transform financial journeys.">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="leading-8" style={{ color: colors.muted }}>
              Trader’s Eden Pvt Ltd is a next-generation financial investment company co-founded by <span style={{ color: colors.gold }}>Thiruvarasan Sitrarasu</span> and <span style={{ color: colors.gold }}>Iniyavan Murugan</span>. With
              a foundation in sub-brokerage through Angel One, we are on a mission to simplify investing, spread market knowledge, and create financial legacies. Our vision is to become one of India’s leading Asset Management Companies (AMC) and ultimately a global hedge fund.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Card>
                <h4 className="font-semibold">Mission</h4>
                <p className="mt-2 text-sm" style={{ color: colors.muted }}>To simplify investing and make financial knowledge accessible to everyone.</p>
              </Card>
              <Card>
                <h4 className="font-semibold">Vision</h4>
                <p className="mt-2 text-sm" style={{ color: colors.muted }}>To be recognized as one of India’s top AMCs and, in time, a world‑class hedge fund.</p>
              </Card>
            </div>
          </div>
          <Card>
            <h4 className="font-semibold">Why Choose Us</h4>
            <ul className="mt-3 space-y-2 text-sm" style={{ color: colors.muted }}>
              <li>• Expert Advisory backed by deep market experience</li>
              <li>• Instant, secure order execution</li>
              <li>• Smart alerts & real‑time insights</li>
              <li>• Dedicated relationship managers</li>
              <li>• Education‑first approach</li>
              <li>• Innovation‑driven fintech solutions</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Our Services" subtitle="Clear, outcome‑driven offerings for investors and traders.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Investment Advisory","Portfolio Management","Equity & Derivatives Trading","Research & Analysis"].map((s, i) => (
            <Card key={i}>
              <h3 className="text-lg font-semibold" style={{ color: colors.text }}>{s}</h3>
              <p className="mt-2 text-sm" style={{ color: colors.muted }}>
                {s === "Investment Advisory" && "Personalized guidance to help investors make informed, profitable, and secure decisions."}
                {s === "Portfolio Management" && "Smart wealth strategies tailored to risk profiles and financial goals."}
                {s === "Equity & Derivatives Trading" && "Access to stock and options markets with real‑time tools and insights."}
                {s === "Research & Analysis" && "Data‑driven market research, reports, and strategy insights."}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section id="products" title="Products" subtitle="Powerful solutions today, ambitious platforms for tomorrow.">
        <div className="grid lg:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-semibold">Sub‑Brokerage with Angel One</h3>
            <p className="mt-2 text-sm" style={{ color: colors.muted }}>Seamless onboarding for clients to trade in equities, derivatives, and mutual funds with our advisory support.</p>
            <div className="mt-4"><Button href="#contact">Open Account</Button></div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Trader’s Eden Options Platform <span className="text-xs align-super" style={{ color: colors.gold }}>(Coming Soon)</span></h3>
            <p className="mt-2 text-sm" style={{ color: colors.muted }}>AI‑powered strategies, risk analysis, paper trading, and a community marketplace designed to outperform existing tools.</p>
            <div className="mt-4"><Button href="#contact" variant="outline">Join Waitlist</Button></div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Education Hub</h3>
            <p className="mt-2 text-sm" style={{ color: colors.muted }}>Workshops, courses, and digital content to make financial literacy accessible to everyone.</p>
            <div className="mt-4"><Button href="#contact">Enroll Interest</Button></div>
          </Card>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Our Team" subtitle="Leaders with vision, discipline, and market obsession.">
        <div className="grid sm:grid-cols-2 gap-6">
          {[{
            name: "Thiruvarasan Sitrarasu",
            role: "Managing Director & Co‑Founder",
            photo: assets.thiru,
            bio: "Financial strategist; began trading at 17. On a mission to democratize market knowledge and build a world‑class investment house.",
          }, {
            name: "Iniyavan Murugan",
            role: "Managing Director & Co‑Founder",
            photo: assets.iniyavan,
            bio: "Entrepreneur & finance professional driving growth, operations, and long‑term AMC vision.",
          }].map((m) => (
            <Card key={m.name}>
              <div className="flex items-center gap-4">
                <img src={m.photo} alt={m.name} className="h-16 w-16 rounded-full object-cover border" style={{ borderColor: colors.gold }} />
                <div>
                  <h4 className="font-semibold">{m.name}</h4>
                  <p className="text-sm" style={{ color: colors.muted }}>{m.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm" style={{ color: colors.muted }}>{m.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Testimonials" subtitle="What our clients say about us.">
        <div className="grid md:grid-cols-3 gap-6">
          {["Trader’s Eden gave me the confidence to start my investment journey. Their support and transparency stand out.",
            "As a trader, I found their research extremely valuable. They are true partners in financial growth.",
            "Professional, trustworthy, and future‑driven. They’re building something extraordinary."]
          .map((t, i) => (
            <Card key={i}>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} style={{ color: colors.gold }} />)}
              </div>
              <p className="mt-3 text-sm" style={{ color: colors.muted }}>{t}</p>
              <p className="mt-3 text-xs" style={{ color: colors.muted }}>— Client</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact Us" subtitle="Let’s grow your wealth, together.">
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <div className="flex items-center gap-3"><MapPin size={18} style={{ color: colors.gold }} /><span className="text-sm" style={{ color: colors.muted }}>Your Office Address</span></div>
            <div className="mt-3 flex items-center gap-3"><Mail size={18} style={{ color: colors.gold }} /><a href="mailto:info@traderseden.com" className="text-sm hover:underline">info@traderseden.com</a></div>
            <div className="mt-3 flex items-center gap-3"><Phone size={18} style={{ color: colors.gold }} /><a href="tel:+91XXXXXXXXXX" className="text-sm hover:underline">+91‑XXXXXXXXXX</a></div>
            <div className="mt-5 flex items-center gap-4">
              <a aria-label="LinkedIn" href="/home"><Linkedin/></a>
              <a aria-label="Instagram" href="https://www.instagram.com"><Instagram/></a>
              <a aria-label="YouTube" href="https://www.youtube.com"><Youtube/></a>
            </div>
          </Card>
          <div className="lg:col-span-2">
            <Card>
              <form className="grid sm:grid-cols-2 gap-4">
                <input className="rounded-xl px-4 py-3 bg-transparent border" style={{ borderColor: colors.border }} placeholder="Full Name"/>
                <input className="rounded-xl px-4 py-3 bg-transparent border" style={{ borderColor: colors.border }} placeholder="Email" type="email"/>
                <input className="rounded-xl px-4 py-3 bg-transparent border" style={{ borderColor: colors.border }} placeholder="Phone"/>
                <input className="rounded-xl px-4 py-3 bg-transparent border" style={{ borderColor: colors.border }} placeholder="Subject"/>
                <textarea className="sm:col-span-2 rounded-xl px-4 py-3 bg-transparent border min-h-[140px]" style={{ borderColor: colors.border }} placeholder="Your message"/>
                <div className="sm:col-span-2"><Button href="#">Send Message</Button></div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-10" style={{ borderTop: `1px solid ${colors.border}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold" style={{ color: colors.gold }}>
            <img src={assets.logo} alt="Trader's Eden Logo" className="h-8 w-8 rounded-full object-contain"/>
            <span>Trader’s Eden Pvt Ltd</span>
          </div>
            <p className="mt-2 text-sm" style={{ color: colors.muted }}>© {new Date().getFullYear()} Trader’s Eden Pvt Ltd. All rights reserved.</p>
          </div>
          <div className="flex gap-6 justify-start md:justify-center text-sm">
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#products" className="hover:opacity-80">Products</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>
          <div className="text-xs md:text-right" style={{ color: colors.muted }}>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> · <a href="/terms" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
