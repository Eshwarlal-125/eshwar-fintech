import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, ChevronDown, Check,
  CreditCard, Globe2, ShieldCheck, Zap, BarChart3, Layers3,
  CircleDollarSign, MoveUpRight, Sparkles, Play
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden"
      whileInView="show" viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}>
      {children}
    </motion.div>
  );
}

function Dashboard() {
  const bars = [34, 49, 41, 64, 52, 72, 58, 84, 67, 94, 75, 100];
  return (
    <motion.div className="dashboard-wrap"
      initial={{ opacity: 0, y: 45, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: .35, ease: "easeOut" }}>
      <div className="dashboard-glow" />
      <div className="dashboard">
        <div className="dash-top">
          <div className="dash-brand"><span className="mini-mark">e.</span><b>Overview</b></div>
          <div className="dash-top-right"><span className="live-dot" /> Live data <div className="avatar">E</div></div>
        </div>
        <div className="dash-body">
          <aside className="dash-side">
            <span className="side-active"><BarChart3 size={15}/> Overview</span>
            <span><CreditCard size={15}/> Payments</span>
            <span><Globe2 size={15}/> Customers</span>
            <span><Layers3 size={15}/> Products</span>
            <span><ShieldCheck size={15}/> Security</span>
            <div className="side-bottom">ESHWAR PLATFORM<br/><small>Workspace · Personal</small></div>
          </aside>
          <div className="dash-main">
            <div className="dash-heading"><div><small>MONDAY, NOVEMBER 06, 2026</small><h3>Good afternoon, Eshwar <span>✦</span></h3><p>Here's what's happening with your business.</p></div><button className="period">Last 30 days <ChevronDown size={13}/></button></div>
            <div className="metric-grid">
              <div className="metric"><small>Total volume</small><strong>$248,560.00</strong><em>↗ 12.8% <span>vs last month</span></em></div>
              <div className="metric"><small>Successful payments</small><strong>8,942</strong><em>↗ 8.2% <span>vs last month</span></em></div>
              <div className="metric"><small>New customers</small><strong>1,204</strong><em>↗ 18.4% <span>vs last month</span></em></div>
            </div>
            <div className="chart-card">
              <div className="chart-head"><div><b>Revenue overview</b><small>Track your business performance</small></div><strong>$82,490 <span>+16.4%</span></strong></div>
              <div className="chart">
                {bars.map((h, i) => <div className="bar-col" key={i}><motion.div className={`bar ${i === 9 ? "bar-hot" : ""}`} initial={{height:0}} whileInView={{height:`${h}%`}} viewport={{once:true}} transition={{duration:.65,delay:i*.045}} /></div>)}
              </div>
              <div className="chart-labels"><span>OCT 01</span><span>OCT 08</span><span>OCT 15</span><span>OCT 22</span><span>OCT 30</span></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const features = [
  { icon: CircleDollarSign, title: "Payments, without limits", text: "Accept payments across the globe with a flexible, reliable payment experience built for growth." },
  { icon: Zap, title: "Move at your speed", text: "Launch faster with powerful tools, clear APIs and workflows that simply make sense." },
  { icon: ShieldCheck, title: "Security by design", text: "Keep every transaction protected with thoughtful safeguards at every step." },
  { icon: BarChart3, title: "Clarity in every number", text: "Turn complex financial data into clear insights that help you make confident decisions." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ width: progress }} />
      <div className="site-shell">
        <nav className="nav">
          <a href="#" className="wordmark">ESHWAR<span>.</span></a>
          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#developers" onClick={() => setMenuOpen(false)}>Developers</a>
            <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
            <div className="mobile-actions"><a href="#contact">Sign in</a><a className="nav-cta" href="#contact">Get started <ArrowUpRight size={15}/></a></div>
          </div>
          <div className="nav-actions"><a className="signin" href="#contact">Sign in</a><a className="nav-cta" href="#contact">Get started <ArrowUpRight size={15}/></a></div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </nav>

        <main>
          <section className="hero">
            <div className="hero-wash" />
            <div className="hero-grid" />
            <div className="hero-content">
              <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.1}}>
                <span className="eyebrow-icon"><Sparkles size={13}/></span> FINANCIAL INFRASTRUCTURE, REIMAGINED
              </motion.div>
              <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.18}}>
                Move money.<br/><span className="gradient-text">Move forward.</span>
              </motion.h1>
              <motion.p className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.32}}>
                Powerful financial tools for businesses with big ideas. Accept payments, manage your money, and build what's next — all in one place.
              </motion.p>
              <motion.div className="hero-actions" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.48}}>
                <a href="#contact" className="primary-btn">Start building <ArrowUpRight size={17}/></a>
                <a href="#platform" className="text-btn"><span className="play-icon"><Play size={12} fill="currentColor"/></span> Explore the platform</a>
              </motion.div>
              <motion.div className="hero-note" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.75}}>
                <span className="tiny-check"><Check size={11}/></span> No complicated setup <i/> Built for ambitious teams
              </motion.div>
            </div>
            <div className="hero-visual"><Dashboard /></div>
            <div className="hero-bottom"><span>BUILT FOR WHAT'S NEXT</span><span className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></span></div>
          </section>

          <section className="trusted">
            <p>THE INFRASTRUCTURE BEHIND YOUR NEXT BIG IDEA</p>
            <div className="logo-row"><b>northstar<span>✳</span></b><b className="logo-serif">morrow</b><b className="logo-wide">vertex.</b><b className="logo-circle">◉ orbit</b><b className="logo-bold">forma</b></div>
          </section>

          <section className="platform section-pad" id="platform">
            <Reveal className="section-intro">
              <span className="section-kicker">THE ESHWAR PLATFORM</span>
              <h2>Everything you need.<br/><span className="muted-heading">Nothing in your way.</span></h2>
              <p>One connected platform to power payments, simplify operations, and give your business room to grow.</p>
            </Reveal>
            <Reveal className="platform-card" delay={.1}>
              <div className="platform-copy"><span className="number-tag">01 / PAYMENTS</span><h3>Payments that<br/>just <span className="gradient-text">flow.</span></h3><p>From the first transaction to your millionth, give every customer a smooth way to pay. Designed to work beautifully across devices and borders.</p><a href="#solutions" className="inline-link">Discover payments <ArrowUpRight size={16}/></a></div>
              <div className="payment-art">
                <div className="orb orb-one"/><div className="orb orb-two"/>
                <motion.div className="payment-card" animate={{y:[0,-12,0],rotate:[-7,-4,-7]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}}>
                  <div className="card-top"><span className="card-chip">e.</span><span>ESHWAR</span></div>
                  <div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 4829</div>
                  <div className="card-bottom"><span>YOUR NAME</span><span>VISA <i>●</i></span></div>
                </motion.div>
                <motion.div className="payment-pill" animate={{y:[0,8,0],x:[0,5,0]}} transition={{duration:5,repeat:Infinity}}><span className="pill-check"><Check size={15}/></span><div><b>Payment successful</b><small>Just now · $248.00</small></div></motion.div>
                <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✦</div>
              </div>
            </Reveal>
            <div className="feature-grid" id="solutions">
              {features.map((f, i) => <Reveal className="feature-card" key={f.title} delay={i*.07}><div className="feature-icon"><f.icon size={21}/></div><h3>{f.title}</h3><p>{f.text}</p><a href="#contact" aria-label={`Learn about ${f.title}`}><ArrowUpRight size={17}/></a></Reveal>)}
            </div>
          </section>

          <section className="statement" id="developers">
            <div className="statement-glow"/>
            <Reveal className="statement-inner">
              <span className="section-kicker light-kicker">BUILT TO BUILD</span>
              <h2>Your ambition<br/>deserves <span>better tools.</span></h2>
              <p>Thoughtful technology should feel effortless. We bring powerful capabilities together in an experience that's clear, intuitive, and ready for whatever comes next.</p>
              <a href="#contact" className="light-btn">Meet your new toolkit <ArrowUpRight size={17}/></a>
            </Reveal>
            <div className="floating-symbol symbol-one">✳</div><div className="floating-symbol symbol-two">✦</div><div className="floating-symbol symbol-three">◌</div>
          </section>

          <section className="numbers section-pad" id="company">
            <Reveal className="numbers-heading"><span className="section-kicker">MADE FOR MOMENTUM</span><h2>Big picture thinking.<br/><span className="muted-heading">Beautifully clear details.</span></h2></Reveal>
            <div className="number-grid">
              <Reveal><strong>99.9<span>%</span></strong><p>Platform reliability</p></Reveal>
              <Reveal delay={.1}><strong>150<span>+</span></strong><p>Markets to reach</p></Reveal>
              <Reveal delay={.2}><strong>24<span>/7</span></strong><p>Built to keep moving</p></Reveal>
            </div>
            <p className="disclaimer">Illustrative platform goals, not verified operating statistics.</p>
          </section>

          <section className="cta-section" id="contact">
            <Reveal className="cta-card">
              <div className="cta-orb"/>
              <span className="section-kicker light-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
              <h2>Ready to move<br/><span>what matters?</span></h2>
              <p>Bring your big idea. We'll bring the tools to help you move it forward.</p>
              <a href="mailto:hello@example.com" className="light-btn">Let's get started <ArrowUpRight size={17}/></a>
              <small>Concept website · Contact email is a placeholder</small>
            </Reveal>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-top"><div><a href="#" className="wordmark footer-wordmark">ESHWAR<span>.</span></a><p>Financial infrastructure for<br/>the next generation of business.</p></div><div className="footer-links"><div><b>PLATFORM</b><a href="#platform">Payments</a><a href="#solutions">Solutions</a><a href="#developers">Developers</a></div><div><b>COMPANY</b><a href="#company">About</a><a href="#contact">Contact</a><a href="#contact">Careers</a></div><div><b>RESOURCES</b><a href="#developers">Documentation</a><a href="#contact">Support</a><a href="#contact">Get started</a></div></div></div>
          <div className="footer-bottom"><span>© 2026 ESHWAR. A personal design concept.</span><span>Designed with intention <span className="footer-heart">✳</span></span></div>
        </footer>
      </div>
    </>
  );
}

export default App;