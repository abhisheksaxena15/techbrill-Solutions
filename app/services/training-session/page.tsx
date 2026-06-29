// "use client";

// import { useState } from "react";
// // ── Types ────────────────────────────────────────────────────────────────────

// interface Track {
//   icon: string;
//   title: string;
//   description: string;
//   tags: string[];
// }

// interface Mentor {
//   initials: string;
//   name: string;
//   role: string;
//   bio: string;
//   skills: string[];
// }

// interface Project {
//   emoji: string;
//   bgGradient: string;
//   stack: string;
//   category: string;
//   title: string;
//   description: string;
//   pills: string[];
// }

// interface Testimonial {
//   initials: string;
//   quote: string;
//   name: string;
//   role: string;
// }

// interface FaqItem {
//   question: string;
//   answer: string;
// }

// // ── Data ─────────────────────────────────────────────────────────────────────

// const tracks: Track[] = [
//   {
//     icon: "🌐",
//     title: "Full-Stack Web",
//     description:
//       "Build and deploy web apps for SME clients — handling everything from DB design to pixel-perfect UI and CI/CD pipelines.",
//     tags: ["React", "Node.js", "PostgreSQL", "AWS"],
//   },
//   {
//     icon: "📱",
//     title: "Mobile Development",
//     description:
//       "Ship cross-platform apps to the Play Store and App Store. Real users, real crash reports, real feature requests.",
//     tags: ["React Native", "Flutter", "Firebase"],
//   },
//   {
//     icon: "🤖",
//     title: "AI & Automation",
//     description:
//       "Integrate LLMs, build intelligent pipelines, and automate real business workflows — not toy demos.",
//     tags: ["Python", "TensorFlow", "LangChain", "FastAPI"],
//   },
//   {
//     icon: "🔍",
//     title: "QA & Test Engineering",
//     description:
//       "Own the quality of production code. Write test suites, catch regressions, and build automated QA frameworks.",
//     tags: ["Selenium", "Cypress", "Jest", "Postman"],
//   },
//   {
//     icon: "📊",
//     title: "Digital Growth",
//     description:
//       "Run SEO campaigns, manage ad spend, analyze conversion funnels for real clients with real budgets.",
//     tags: ["SEO", "Google Ads", "Analytics", "Meta Ads"],
//   },
//   {
//     icon: "🎨",
//     title: "UI/UX Design",
//     description:
//       "Design interfaces that get shipped — user research, wireframes, prototypes, and design system contributions.",
//     tags: ["Figma", "Prototyping", "User Research"],
//   },
// ];

// const mentors: Mentor[] = [
//   {
//     initials: "RK",
//     name: "Rahul Kumar",
//     role: "Lead Full-Stack Engineer",
//     bio: "8 years building SaaS platforms for fintech clients. Ex-Infosys. Obsessed with clean architecture and code review culture.",
//     skills: ["React", "Node.js", "System Design"],
//   },
//   {
//     initials: "PS",
//     name: "Priya Sharma",
//     role: "AI/ML Specialist",
//     bio: "Built ML pipelines for healthcare and e-commerce. Published researcher. Turns abstract AI into shipped product features.",
//     skills: ["Python", "TensorFlow", "LLMs"],
//   },
//   {
//     initials: "AM",
//     name: "Amit Mehta",
//     role: "Mobile & DevOps Lead",
//     bio: "10+ apps in production across iOS and Android. Set up Techbrill&apos;s entire CI/CD infrastructure from scratch.",
//     skills: ["Flutter", "Docker", "Kubernetes"],
//   },
// ];

// const projects: Project[] = [
//   {
//     emoji: "🛒",
//     bgGradient: "linear-gradient(135deg,#1a1a2e,#16213e)",
//     stack: "Full-Stack / React + Node",
//     category: "E-Commerce",
//     title: "Multi-Vendor Marketplace",
//     description:
//       "A mentee-built platform for a Delhi-based retailer co-op. Handles 500+ daily orders with a custom inventory sync and vendor dashboard.",
//     pills: ["Next.js", "Node", "PostgreSQL", "Stripe"],
//   },
//   {
//     emoji: "🏥",
//     bgGradient: "linear-gradient(135deg,#0d1b2a,#1b4332)",
//     stack: "Mobile / React Native",
//     category: "Healthcare",
//     title: "Patient Appointment App",
//     description:
//       "Built and shipped to App Store in 10 weeks. Used by a chain of 6 clinics in UP. Includes OTP login, slot booking, and teleconsult video calls.",
//     pills: ["React Native", "Firebase", "Twilio"],
//   },
//   {
//     emoji: "📊",
//     bgGradient: "linear-gradient(135deg,#0f172a,#312e81)",
//     stack: "AI / Python + FastAPI",
//     category: "AI & Analytics",
//     title: "Sales Intelligence Dashboard",
//     description:
//       "Pulls CRM data, runs ML forecasting models, and delivers weekly automated insights — replacing a manual analyst workflow entirely.",
//     pills: ["Python", "FastAPI", "LangChain", "Recharts"],
//   },
//   {
//     emoji: "🏘️",
//     bgGradient: "linear-gradient(135deg,#1c0a00,#3d1f00)",
//     stack: "Web / React + AWS",
//     category: "Real Estate",
//     title: "Property Listing Platform",
//     description:
//       "A searchable property portal for an NCR real estate group. Advanced filter engine, map integration, and virtual tour embeds. 3,000+ monthly visitors.",
//     pills: ["React", "AWS S3", "MongoDB", "Google Maps"],
//   },
// ];

// const testimonials: Testimonial[] = [
//   {
//     initials: "SA",
//     quote:
//       "I'd been applying for 8 months with zero callbacks. Three weeks into this and I was pushing commits to a live codebase. Got my first offer a month after graduating.",
//     name: "Sneha Agarwal",
//     role: "Now: Frontend Dev @ a Gurgaon startup",
//   },
//   {
//     initials: "VT",
//     quote:
//       "The 1:1 sessions with Rahul were worth the entire thing. Not generic advice — actual PR reviews, architecture discussions, the stuff you can't get from YouTube.",
//     name: "Vikram Tiwari",
//     role: "Now: Full-Stack Dev @ Remote SaaS company",
//   },
//   {
//     initials: "NM",
//     quote:
//       "I switched from teaching to tech at 30. This program gave me the real-world exposure I couldn't get anywhere else — and a portfolio I'm proud to show off.",
//     name: "Nisha Malhotra",
//     role: "Now: Junior ML Engineer @ EdTech firm",
//   },
// ];

// const faqs: FaqItem[] = [
//   {
//     question: "Is this a paid programme or do I earn?",
//     answer:
//       "The programme has a nominal participation fee that covers mentorship, access to tooling, and project resources. Top performers in each cohort are considered for paid contract roles within Techbrill or with our partner clients.",
//   },
//   {
//     question: "I'm a complete beginner. Can I still apply?",
//     answer:
//       "We don't require professional experience, but you should have some foundational knowledge — completed a basic programming course, built a small project, something to show curiosity. The interview will help us figure out the best track for you.",
//   },
//   {
//     question: "How many hours per week does this take?",
//     answer:
//       "Plan for 25–35 hours per week. This is a serious commitment, not a side hustle. It's designed to be as close to a real job as possible — standups, deadlines, and all.",
//   },
//   {
//     question: "Is this remote or in-person?",
//     answer:
//       "Primarily remote, with optional in-person sessions at our Greater Noida office. All standups and mentor 1:1s are video calls. If you're local, we encourage dropping by occasionally.",
//   },
//   {
//     question: "Will I get a certificate?",
//     answer:
//       "You'll receive a verified completion certificate, but more importantly, you'll have real GitHub commits, shipped product links, and a direct referral from your mentor — which carry far more weight with hiring teams.",
//   },
// ];

// // ── Sub-components ────────────────────────────────────────────────────────────

// function FaqAccordion({ question, answer }: FaqItem) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       style={{
//         border: `1px solid ${open ? "#f97316" : "#e5e7eb"}`,
//         borderRadius: 10,
//         marginBottom: 12,
//         overflow: "hidden",
//         transition: "border-color 0.2s",
//       }}
//     >
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: "100%",
//           padding: "20px 24px",
//           fontSize: 15,
//           fontWeight: 600,
//           color: "#1a1a1a",
//           cursor: "pointer",
//           background: "none",
//           border: "none",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           gap: 12,
//           textAlign: "left",
//         }}
//       >
//         {question}
//         <span style={{ fontSize: 22, color: "#2563EB", fontWeight: 400, flexShrink: 0 }}>
//           {open ? "−" : "+"}
//         </span>
//       </button>
//       {open && (
//         <div
//           style={{
//             padding: "0 24px 20px",
//             fontSize: 14,
//             color: "#6b7280",
//             lineHeight: 1.75,
//           }}
//         >
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// }

// // ── Main Component ────────────────────────────────────────────────────────────

// export default function MentorshipPage() {
//   return (
//     <div style={{ fontFamily: "'Inter', sans-serif", color: "#1a1a1a", background: "#fff", overflowX: "hidden" }}>

//       {/* Google Font */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         body { overflow-x: hidden; }
//         a { text-decoration: none; }

//         .track-card { transition: box-shadow 0.25s, transform 0.2s; }
//         .track-card:hover { box-shadow: 0 10px 40px rgba(0,0,0,0.08); transform: translateY(-4px); }

//         .project-card { transition: box-shadow 0.25s, transform 0.2s; }
//         .project-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }

//         .mentor-card { transition: border-color 0.25s, background 0.25s; }
//         .mentor-card:hover { border-color: #f97316 !important; background: rgba(249,115,22,0.05) !important; }

//         .testi-card { transition: box-shadow 0.25s; }
//         .testi-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }

//         .btn-primary:hover { background: #ea580c !important; transform: translateY(-1px); }
//         .btn-outline:hover { border-color: #f97316 !important; background: rgba(249,115,22,0.08) !important; }
//         .nav-cta:hover { background: #ea580c !important; }
//         .footer-link:hover { color: #f97316 !important; }

//         @media (max-width: 960px) {
//           .hero-inner { grid-template-columns: 1fr !important; }
//           .about-grid { grid-template-columns: 1fr !important; }
//           .tracks-grid { grid-template-columns: repeat(2,1fr) !important; }
//           .mentor-grid { grid-template-columns: repeat(2,1fr) !important; }
//           .testimonials-grid { grid-template-columns: repeat(2,1fr) !important; }
//           .projects-grid { grid-template-columns: 1fr !important; }
//           .steps-grid { grid-template-columns: repeat(2,1fr) !important; gap: 32px !important; }
//           .steps-line { display: none !important; }
//           .footer-grid { grid-template-columns: 1fr 1fr !important; }
//         }
//         @media (max-width: 640px) {
//           .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
//           .tracks-grid, .mentor-grid, .testimonials-grid { grid-template-columns: 1fr !important; }
//           .nav-links-wrap { display: none !important; }
//           .footer-grid { grid-template-columns: 1fr !important; }
//         }
//       `}</style>

//       {/* ── TOP BAR ── */}


//       {/* ── NAV ── */}


//       {/* ── HERO ── */}
//       <section style={{ background: "#0f0f0f", padding: "100px 5% 80px", position: "relative", overflow: "hidden" }}>
//         <div style={{
//           position: "absolute", top: -120, right: -120, width: 480, height: 480,
//           borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }} />
//         <div className="hero-inner" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
//           <div>
//             <div style={{
//               display: "inline-flex", alignItems: "center", gap: 8,
//               background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)",
//               color: "#f97316", fontSize: 12, fontWeight: 600, letterSpacing: 0.8,
//               textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 24,
//             }}>
//               🚀 Limited Spots — 2025 Cohort Open
//             </div>
//             <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, letterSpacing: -1, marginBottom: 22 }}>
//               Build Real Things.<br />With <span style={{ color: "#f97316" }}>Real Mentors.</span><br />For Real Clients.
//             </h1>
//             <p style={{ fontSize: 17, color: "#9ca3af", lineHeight: 1.75, marginBottom: 36 }}>
//               Skip the tutorials. Skip the cookie-cutter bootcamps. Embed with our team, work alongside senior engineers, and ship production-grade software for actual businesses — from day one.
//             </p>
//             <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
//               <a href="#apply" className="btn-primary" style={{ background: "#f97316", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, transition: "background 0.2s, transform 0.15s" }}>
//                 Claim Your Spot →
//               </a>
//               <a href="#how" className="btn-outline" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, transition: "border-color 0.2s, background 0.2s" }}>
//                 See How It Works
//               </a>
//             </div>
//           </div>
//           <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
//             {[
//               { num: "94%", lbl: "Got hired within 3 months" },
//               { num: "40+", lbl: "Live projects built" },
//               { num: "1:4", lbl: "Mentor-to-mentee ratio" },
//               { num: "12 wk", lbl: "Full-stack immersion" },
//             ].map(({ num, lbl }) => (
//               <div key={lbl} style={{ background: "rgba(255,255,255,0.04)", padding: "28px 24px", textAlign: "center" }}>
//                 <div style={{ fontSize: 38, fontWeight: 800, color: "#f97316", lineHeight: 1, marginBottom: 6 }}>{num}</div>
//                 <div style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>{lbl}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── WHO IT'S FOR ── */}
//       <section style={{ padding: "90px 5%" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
//             <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
//                 alt="Team collaborating"
//                 style={{ width: "100%", height: 420, objectFit: "cover", display: "block", borderRadius: 16 }}
//               />
//               <div style={{
//                 position: "absolute", bottom: 24, left: 24, background: "#fff",
//                 borderRadius: 12, padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
//                 display: "flex", alignItems: "center", gap: 14,
//               }}>
//                 <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏆</div>
//                 <div>
//                   <strong style={{ display: "block", fontSize: 15, fontWeight: 700, color: "#0f0f0f" }}>Not a classroom</strong>
//                   <span style={{ fontSize: 12, color: "#6b7280" }}>A real dev environment</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>Who this is for</div>
//               <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
//                 You don't need more courses.<br />You need a real team.
//               </h2>
//               <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.75, marginBottom: 28 }}>
//                 Our mentorship model is built around one idea: the fastest way to become a great developer is to work on real problems, get real feedback, and ship things people actually use.
//               </p>
//               <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
//                 {[
//                   "Fresh graduates who've done every course but never shipped",
//                   "Self-taught developers wanting industry exposure & structure",
//                   "Career changers who need a portfolio that stands out",
//                   "Junior devs stuck in tutorial hell, ready to level up fast",
//                 ].map((item) => (
//                   <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#1a1a1a", lineHeight: 1.6 }}>
//                     <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff7ed", color: "#f97316", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <a href="#apply" className="btn-primary" style={{ background: "#f97316", color: "#fff", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, display: "inline-block" }}>
//                 Start Your Journey
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TRACKS ── */}
//       <section style={{ padding: "90px 5%", background: "#f9fafb" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>What you'll work on</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
//             Choose your track.<br />Ship something real.
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
//             Each track puts you on an active client project — not a mock exercise. You'll commit code, attend standups, and present to stakeholders.
//           </p>
//           <div className="tracks-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {tracks.map((t) => (
//               <div key={t.title} className="track-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
//                 <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "#f97316", transform: "scaleX(0)", transition: "transform 0.3s", transformOrigin: "left" }} className="track-underline" />
//                 <div style={{ width: 52, height: 52, borderRadius: 12, background: "#fff7ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>{t.icon}</div>
//                 <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f0f0f", marginBottom: 10 }}>{t.title}</h3>
//                 <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, marginBottom: 18 }}>{t.description}</p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                   {t.tags.map((tag) => (
//                     <span key={tag} style={{ background: "#fff7ed", color: "#ea580c", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── HOW IT WORKS ── */}
//       <section id="how" style={{ padding: "90px 5%" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>How it works</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16, textAlign: "center" }}>
//             From application to your first commit
//           </h2>
//           <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 600, lineHeight: 1.75, marginBottom: 64, textAlign: "center", margin: "0 auto 64px" }}>
//             No lengthy onboarding. No fake projects. You're contributing to live codebases within the first week.
//           </p>
//           <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", position: "relative" }}>
//             <div className="steps-line" style={{ position: "absolute", top: 38, left: "calc(12.5% + 24px)", right: "calc(12.5% + 24px)", borderTop: "2px dashed #e5e7eb", zIndex: 0 }} />
//             {[
//               { n: "01", title: "Apply & Interview", desc: "Short application + a 30-min call. We're vetting mindset and drive, not just a résumé." },
//               { n: "02", title: "Get Matched", desc: "We pair you with a mentor and a track based on your goals and active projects in our pipeline." },
//               { n: "03", title: "Embed & Build", desc: "Join standups, pick up tickets, push code. Weekly 1:1s with your mentor to unblock and accelerate." },
//               { n: "04", title: "Ship & Graduate", desc: "Present your work, get a verified portfolio, and a direct referral path into the industry." },
//             ].map(({ n, title, desc }) => (
//               <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}>
//                 <div style={{ width: 76, height: 76, borderRadius: "50%", background: "#fff", border: "2px solid #f97316", color: "#f97316", fontSize: 22, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, position: "relative", zIndex: 2 }}>{n}</div>
//                 <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#0f0f0f" }}>{title}</h3>
//                 <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── MENTORS ── */}
//       <section style={{ padding: "90px 5%", background: "#0f0f0f" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>Your guides</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
//             People who've built it, not just taught it.
//           </h2>
//           <p style={{ fontSize: 16, color: "#9ca3af", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
//             Every mentor is an active practitioner at Techbrill — working on client projects daily. Their feedback is grounded in what's happening in production right now.
//           </p>
//           <div className="mentor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {mentors.map((m) => (
//               <div key={m.name} className="mentor-card" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 28 }}>
//                 <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 16 }}>{m.initials}</div>
//                 <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{m.name}</h3>
//                 <div style={{ fontSize: 13, color: "#f97316", fontWeight: 600, marginBottom: 12 }}>{m.role}</div>
//                 <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.65, marginBottom: 16 }}>{m.bio}</p>
//                 <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                   {m.skills.map((s) => (
//                     <span key={s} style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{s}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── PROJECTS ── */}
//       <section style={{ padding: "90px 5%", background: "#f9fafb" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>What mentees have shipped</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>Real projects. Real impact.</h2>
//           <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
//             These aren't portfolio exercises. They're live products built by mentees — still running, still serving real users today.
//           </p>
//           <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
//             {projects.map((p) => (
//               <div key={p.title} className="project-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
//                 <div style={{ height: 200, background: p.bgGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative" }}>
//                   {p.emoji}
//                   <span style={{ position: "absolute", bottom: 12, right: 16, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>{p.stack}</span>
//                 </div>
//                 <div style={{ padding: 24 }}>
//                   <div style={{ fontSize: 11, fontWeight: 700, color: "#f97316", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>{p.category}</div>
//                   <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#0f0f0f" }}>{p.title}</h3>
//                   <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
//                   <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
//                     {p.pills.map((pill) => (
//                       <span key={pill} style={{ background: "#f3f4f6", color: "#374151", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 4 }}>{pill}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BAND ── */}
//       <section id="apply" style={{ background: "#f97316", padding: "80px 5%", textAlign: "center" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: -0.5, lineHeight: 1.2 }}>
//             Ready to stop watching and start building?
//           </h2>
//           <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", marginBottom: 36 }}>
//             12 weeks. Real projects. A mentor who picks up your calls. The next cohort starts soon — seats go fast.
//           </p>
//           <a href="#" style={{ background: "#fff", color: "#ea580c", padding: "14px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, display: "inline-block", margin: "0 8px", transition: "transform 0.15s" }}>
//             Apply for the Next Cohort
//           </a>
//           <a href="#" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "#fff", padding: "14px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, display: "inline-block", margin: "0 8px" }}>
//             Talk to a Mentor First
//           </a>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section style={{ padding: "90px 5%" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>What they're saying</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>From the mentees themselves</h2>
//           <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
//             No curated quotes from a marketing team. These are from people who went through the program.
//           </p>
//           <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//             {testimonials.map((t) => (
//               <div key={t.name} className="testi-card" style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 28 }}>
//                 <div style={{ color: "#f59e0b", fontSize: 16, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
//                 <blockquote style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20, borderLeft: "3px solid #f97316", paddingLeft: 14 }}>
//                   "{t.quote}"
//                 </blockquote>
//                 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                   <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#fff7ed", color: "#ea580c", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.initials}</div>
//                   <div>
//                     <div style={{ fontSize: 14, fontWeight: 700, color: "#0f0f0f" }}>{t.name}</div>
//                     <div style={{ fontSize: 12, color: "#6b7280" }}>{t.role}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section style={{ padding: "90px 5%", background: "#f9fafb" }}>
//         <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//           <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "#f97316", marginBottom: 12 }}>Quick answers</div>
//           <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "#0f0f0f", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 48, textAlign: "center" }}>Common questions</h2>
//           <div style={{ maxWidth: 780, margin: "0 auto" }}>
//             {faqs.map((faq) => (
//               <FaqAccordion key={faq.question} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── FOOTER ── */}
//       <footer style={{ background: "#0f0f0f", padding: "60px 5% 30px", color: "#9ca3af" }}>
//         <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, maxWidth: 1200, margin: "0 auto 48px" }}>
//           <div>
//             <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 14 }}>
//               Tech<span style={{ color: "#f97316" }}>brill</span>
//             </div>
//             <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 340 }}>
//               Techbrill Solutions is an IT services company delivering high-performance digital solutions that drive real business growth through innovation and technical excellence.
//             </p>
//           </div>
//           <div>
//             <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18 }}>Quick Links</h4>
//             <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
//               {["About Us", "Services", "Projects", "Careers", "Contact"].map((l) => (
//                 <li key={l}><a href="#" className="footer-link" style={{ color: "#9ca3af", fontSize: 14, transition: "color 0.2s" }}>{l}</a></li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 18 }}>Mentorship Tracks</h4>
//             <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
//               {["Full-Stack Web", "Mobile Development", "AI & Automation", "QA Engineering", "UI/UX Design"].map((l) => (
//                 <li key={l}><a href="#" className="footer-link" style={{ color: "#9ca3af", fontSize: 14, transition: "color 0.2s" }}>{l}</a></li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 13, flexWrap: "wrap", gap: 12 }}>
//           <span>© 2025 Techbrill Solutions. All rights reserved.</span>
//           <span>GH12/1 ACE Platinum, Sector Zeta-1, Greater Noida, India</span>
//         </div>
//       </footer>

//     </div>
//   );
// }

"use client";

import { useState } from "react";

// ── Global CSS Variables ──────────────────────────────────────────────────────
const globalStyles = `
  :root {
       --color-blue:         #1d4ed8;   /* blue-700 */
    --color-blue-dark:    #1e40af;
    --color-blue-light:   #dbeafe;
    --color-blue-dim:     rgba(29, 78, 216, 0.15);
    --color-blue-dim-border: rgba(29, 78, 216, 0.30);
    --color-blue-dim-hover: rgba(29, 78, 216, 0.08);
    --color-blue-dim-bg:  rgba(29, 78, 216, 0.05);
    --color-blue-chip:    #2563eb;

    --color-dark:            ;
    --color-dark-surface:    rgba(255, 255, 255, 0.04);
    --color-dark-border:     rgba(255, 255, 255, 0.08);
    --color-dark-divider:    rgba(255, 255, 255, 0.08);
    --color-dark-glow:       rgba(249, 115, 22, 0.18);

    --color-white:           #ffffff;
    --color-bg-section:      #f9fafb;
    --color-bg-pill:         #f3f4f6;

    --color-text-primary:    #1a1a1a;
    --color-text-muted:      #6b7280;
    --color-text-light:      #9ca3af;
    --color-text-pill:       #374151;

    --color-border:          #e5e7eb;
    --color-star:            #f59e0b;

    --color-hero-stat-bg:    rgba(255, 255, 255, 0.08);
    --color-hero-stat-border: rgba(255, 255, 255, 0.08);
    --color-hero-cell-bg:    rgba(255, 255, 255, 0.04);
    --color-hero-text-muted: #6b7280;

    --color-mentor-avatar-from: #f97316;
    --color-mentor-avatar-to:   #f59e0b;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { overflow-x: hidden; }
  a { text-decoration: none; }

  .track-card { transition: box-shadow 0.25s, transform 0.2s; }
  .track-card:hover { box-shadow: 0 10px 40px rgba(0,0,0,0.08); transform: translateY(-4px); }
  .track-card:hover .track-underline { transform: scaleX(1) !important; }

  .project-card { transition: box-shadow 0.25s, transform 0.2s; }
  .project-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); }

  .mentor-card { transition: border-color 0.25s, background 0.25s; }
  .mentor-card:hover { border-color: var(--color-blue) !important; background: var(--color-blue-dim-bg) !important; }

  .testi-card { transition: box-shadow 0.25s; }
  .testi-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }

  .btn-primary { transition: background 0.2s, transform 0.15s; }
  .btn-primary:hover { background: var(--color-blue-dark) !important; transform: translateY(-1px); }

  .btn-outline { transition: border-color 0.2s, background 0.2s; }
  .btn-outline:hover { border-color: var(--color-blue) !important; background: var(--color-blue-dim-hover) !important; }

  .nav-cta { transition: background 0.2s; }
  .nav-cta:hover { background: var(--color-blue-dark) !important; }

  .footer-link:hover { color: var(--color-blue) !important; }

  @media (max-width: 960px) {
    .hero-inner           { grid-template-columns: 1fr !important; }
    .about-grid           { grid-template-columns: 1fr !important; }
    .tracks-grid          { grid-template-columns: repeat(2,1fr) !important; }
    .mentor-grid          { grid-template-columns: repeat(2,1fr) !important; }
    .testimonials-grid    { grid-template-columns: repeat(2,1fr) !important; }
    .projects-grid        { grid-template-columns: 1fr !important; }
    .steps-grid           { grid-template-columns: repeat(2,1fr) !important; gap: 32px !important; }
    .steps-line           { display: none !important; }
    .footer-grid          { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 640px) {
    .hero-stats           { grid-template-columns: repeat(2,1fr) !important; }
    .tracks-grid,
    .mentor-grid,
    .testimonials-grid    { grid-template-columns: 1fr !important; }
    .nav-links-wrap       { display: none !important; }
    .footer-grid          { grid-template-columns: 1fr !important; }
  }
`;

// ── Types ─────────────────────────────────────────────────────────────────────

interface Track {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface Mentor {
  initials: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

interface Project {
  emoji: string;
  bgGradient: string;
  stack: string;
  category: string;
  title: string;
  description: string;
  pills: string[];
}

interface Testimonial {
  initials: string;
  quote: string;
  name: string;
  role: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const tracks: Track[] = [
  {
    icon: "🌐",
    title: "Full-Stack Web",
    description:
      "Build and deploy web apps for SME clients — handling everything from DB design to pixel-perfect UI and CI/CD pipelines.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: "📱",
    title: "Mobile Development",
    description:
      "Ship cross-platform apps to the Play Store and App Store. Real users, real crash reports, real feature requests.",
    tags: ["React Native", "Flutter", "Firebase"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Integrate LLMs, build intelligent pipelines, and automate real business workflows — not toy demos.",
    tags: ["Python", "TensorFlow", "LangChain", "FastAPI"],
  },
  {
    icon: "🔍",
    title: "QA & Test Engineering",
    description:
      "Own the quality of production code. Write test suites, catch regressions, and build automated QA frameworks.",
    tags: ["Selenium", "Cypress", "Jest", "Postman"],
  },
  {
    icon: "📊",
    title: "Digital Growth",
    description:
      "Run SEO campaigns, manage ad spend, analyze conversion funnels for real clients with real budgets.",
    tags: ["SEO", "Google Ads", "Analytics", "Meta Ads"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Design interfaces that get shipped — user research, wireframes, prototypes, and design system contributions.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
];

const mentors: Mentor[] = [
  {
    initials: "RK",
    name: "Rahul Kumar",
    role: "Lead Full-Stack Engineer",
    bio: "8 years building SaaS platforms for fintech clients. Ex-Infosys. Obsessed with clean architecture and code review culture.",
    skills: ["React", "Node.js", "System Design"],
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "AI/ML Specialist",
    bio: "Built ML pipelines for healthcare and e-commerce. Published researcher. Turns abstract AI into shipped product features.",
    skills: ["Python", "TensorFlow", "LLMs"],
  },
  {
    initials: "AM",
    name: "Amit Mehta",
    role: "Mobile & DevOps Lead",
    bio: "10+ apps in production across iOS and Android. Set up Techbrill's entire CI/CD infrastructure from scratch.",
    skills: ["Flutter", "Docker", "Kubernetes"],
  },
];

const projects: Project[] = [
  {
    emoji: "🛒",
    bgGradient: "linear-gradient(135deg,#1a1a2e,#16213e)",
    stack: "Full-Stack / React + Node",
    category: "E-Commerce",
    title: "Multi-Vendor Marketplace",
    description:
      "A mentee-built platform for a Delhi-based retailer co-op. Handles 500+ daily orders with a custom inventory sync and vendor dashboard.",
    pills: ["Next.js", "Node", "PostgreSQL", "Stripe"],
  },
  {
    emoji: "🏥",
    bgGradient: "linear-gradient(135deg,#0d1b2a,#1b4332)",
    stack: "Mobile / React Native",
    category: "Healthcare",
    title: "Patient Appointment App",
    description:
      "Built and shipped to App Store in 10 weeks. Used by a chain of 6 clinics in UP. Includes OTP login, slot booking, and teleconsult video calls.",
    pills: ["React Native", "Firebase", "Twilio"],
  },
  {
    emoji: "📊",
    bgGradient: "linear-gradient(135deg,#0f172a,#312e81)",
    stack: "AI / Python + FastAPI",
    category: "AI & Analytics",
    title: "Sales Intelligence Dashboard",
    description:
      "Pulls CRM data, runs ML forecasting models, and delivers weekly automated insights — replacing a manual analyst workflow entirely.",
    pills: ["Python", "FastAPI", "LangChain", "Recharts"],
  },
  {
    emoji: "🏘️",
    bgGradient: "linear-gradient(135deg,#1c0a00,#3d1f00)",
    stack: "Web / React + AWS",
    category: "Real Estate",
    title: "Property Listing Platform",
    description:
      "A searchable property portal for an NCR real estate group. Advanced filter engine, map integration, and virtual tour embeds. 3,000+ monthly visitors.",
    pills: ["React", "AWS S3", "MongoDB", "Google Maps"],
  },
];

const testimonials: Testimonial[] = [
  {
    initials: "SA",
    quote:
      "I'd been applying for 8 months with zero callbacks. Three weeks into this and I was pushing commits to a live codebase. Got my first offer a month after graduating.",
    name: "Sneha Agarwal",
    role: "Now: Frontend Dev @ a Gurgaon startup",
  },
  {
    initials: "VT",
    quote:
      "The 1:1 sessions with Rahul were worth the entire thing. Not generic advice — actual PR reviews, architecture discussions, the stuff you can't get from YouTube.",
    name: "Vikram Tiwari",
    role: "Now: Full-Stack Dev @ Remote SaaS company",
  },
  {
    initials: "NM",
    quote:
      "I switched from teaching to tech at 30. This program gave me the real-world exposure I couldn't get anywhere else — and a portfolio I'm proud to show off.",
    name: "Nisha Malhotra",
    role: "Now: Junior ML Engineer @ EdTech firm",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Is this a paid programme or do I earn?",
    answer:
      "The programme has a nominal participation fee that covers mentorship, access to tooling, and project resources. Top performers in each cohort are considered for paid contract roles within Techbrill or with our partner clients.",
  },
  {
    question: "I'm a complete beginner. Can I still apply?",
    answer:
      "We don't require professional experience, but you should have some foundational knowledge — completed a basic programming course, built a small project, something to show curiosity. The interview will help us figure out the best track for you.",
  },
  {
    question: "How many hours per week does this take?",
    answer:
      "Plan for 25–35 hours per week. This is a serious commitment, not a side hustle. It's designed to be as close to a real job as possible — standups, deadlines, and all.",
  },
  {
    question: "Is this remote or in-person?",
    answer:
      "Primarily remote, with optional in-person sessions at our Greater Noida office. All standups and mentor 1:1s are video calls. If you're local, we encourage dropping by occasionally.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "You'll receive a verified completion certificate, but more importantly, you'll have real GitHub commits, shipped product links, and a direct referral from your mentor — which carry far more weight with hiring teams.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function FaqAccordion({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: `1px solid ${open ? "var(--color-blue)" : "var(--color-border)"}`,
        borderRadius: 10,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "20px 24px",
          fontSize: 15,
          fontWeight: 600,
          color: "var(--color-text-primary)",
          cursor: "pointer",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        {question}
        <span style={{ fontSize: 22, color: "var(--color-blue)", fontWeight: 400, flexShrink: 0 }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: "0 24px 20px",
            fontSize: 14,
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function MentorshipPage() {
  return (
    <div
      className="dark:bg-gray-900"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "var(--color-text-primary)",
        background: "var(--color-white)",
        overflowX: "hidden",
      }}
    >
      <style>{globalStyles}</style>



      {/* ── HERO ── */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 5%",
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "radial-gradient(#dbeafe 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #cbd5e1",
                borderRadius: "999px",
                padding: "10px 18px",
                color: "#2563eb",
                fontSize: "14px",
                fontWeight: 600,
                background: "#ffffff",
                marginBottom: "30px",
              }}
            >
              ✨ Not a course. A working apprenticeship.
            </div>

            <h1
              style={{
                fontSize: "clamp(36px,4vw,58px)",
                lineHeight: "1.1",
                fontWeight: 900,
                color: "#020617",
                marginBottom: "25px",
                letterSpacing: "-2px",
              }}
            >
              Learn by{" "}
              <span style={{ color: "#2563eb" }}>
                shipping
              </span>
              <br />
              real projects with a
              <br />
              senior mentor.
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: "560px",
                marginBottom: "40px",
              }}
            >
              Skip the tutorial loop. Pair 1:1 with engineers who build software
              for a living, work on live client-grade briefs, and walk out with a
              portfolio teams actually take seriously.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}
            >
              <a
                href="#apply"
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "16px 30px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "18px",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.2)",
                }}
              >
                Apply for a seat →
              </a>

              <a
                href="#how"
                style={{
                  background: "#fff",
                  border: "1px solid #d1d5db",
                  color: "#0f172a",
                  padding: "16px 30px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                See how it works
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "25px",
                color: "#475569",
                fontSize: "15px",
              }}
            >
              <span>✓ 1:1 senior mentor</span>
              <span>✓ Live code reviews</span>
              <span>✓ Real project on your GitHub</span>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "24px",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Browser Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ef4444",
                  }}
                />
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#fb923c",
                  }}
                />
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#3b82f6",
                  }}
                />

                <span
                  style={{
                    marginLeft: "10px",
                    color: "#475569",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  mentorship-session.live
                </span>
              </div>

              {/* Gradient Section */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #ec4899 100%)",
                  padding: "28px",
                  color: "#fff",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      opacity: 0.8,
                      marginBottom: "8px",
                    }}
                  >
                    Today&apos;s pairing session
                  </div>

                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    Refactor auth flow → ship to staging
                  </h3>
                </div>

                {/* Code Box */}
                <div
                  style={{
                    background: "rgba(0,0,0,0.18)",
                    borderRadius: "14px",
                    padding: "22px",
                    fontFamily: "monospace",
                    fontSize: "15px",
                    lineHeight: 1.9,
                  }}
                >
                  <div>$ git checkout -b fix/session-refresh</div>
                  <div>mentor: let&apos;s add a retry boundary here →</div>
                  <div>you: got it, writing the test first</div>
                  <div>ci: ✓ 24 tests passed · deploy preview ready</div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                    fontSize: "13px",
                  }}
                >
                  <span
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      padding: "7px 14px",
                      borderRadius: "30px",
                    }}
                  >
                    PR #142
                  </span>

                  <span>
                    Reviewed by Arjun · 2 min ago
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div
              style={{
                position: "absolute",
                left: "-15px",
                bottom: "-15px",
                background: "#fff",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#dbeafe",
                  display: "grid",
                  placeItems: "center",
                  color: "#2563eb",
                  fontSize: "18px",
                }}
              >
                👥
              </div>

              <div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#020617",
                  }}
                >
                  94% finish their project
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  Across the last 6 cohorts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
                alt="Team collaborating"
                style={{ width: "100%", height: 420, objectFit: "cover", display: "block", borderRadius: 16 }}
              />
              <div style={{
                position: "absolute", bottom: 24, left: 24, background: "var(--color-white)",
                borderRadius: 12, padding: "16px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-blue-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏆</div>
                <div>
                  <strong style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--color-dark)" }}>Not a classroom</strong>
                  <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>A real dev environment</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>Who this is for</div>
              <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
                You don&apos;t need more courses.<br />You need a real team.
              </h2>
              <p style={{ fontSize: 16, color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: 28 }}>
                Our mentorship model is built around one idea: the fastest way to become a great developer is to work on real problems, get real feedback, and ship things people actually use.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {[
                  "Fresh graduates who've done every course but never shipped",
                  "Self-taught developers wanting industry exposure & structure",
                  "Career changers who need a portfolio that stands out",
                  "Junior devs stuck in tutorial hell, ready to level up fast",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "var(--color-text-primary)", lineHeight: 1.6 }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--color-blue-light)", color: "var(--color-blue)", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#apply" className="btn-primary" style={{ background: "var(--color-blue)", color: "var(--color-white)", padding: "14px 28px", borderRadius: 6, fontSize: 15, fontWeight: 600, display: "inline-block" }}>
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRACKS ── */}
      <section style={{ padding: "90px 5%", background: "var(--color-bg-section)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>What you&apos;ll work on</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
            Choose your track.<br />Ship something real.
          </h2>
          <p style={{ fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
            Each track puts you on an active client project — not a mock exercise. You&apos;ll commit code, attend standups, and present to stakeholders.
          </p>
          <div className="tracks-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {tracks.map((t) => (
              <div key={t.title} className="track-card" style={{ background: "var(--color-white)", border: `1px solid var(--color-border)`, borderRadius: 14, padding: "32px 28px", position: "relative", overflow: "hidden" }}>
                <div className="track-underline" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "var(--color-blue)", transform: "scaleX(0)", transition: "transform 0.3s", transformOrigin: "left" }} />
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--color-blue-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 20 }}>{t.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--color-dark)", marginBottom: 10 }}>{t.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: 18 }}>{t.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {t.tags.map((tag) => (
                    <span key={tag} style={{ background: "var(--color-blue-light)", color: "var(--color-blue-dark)", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>How it works</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16, textAlign: "center" }}>
            From application to your first commit
          </h2>
          <p style={{ fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.75, textAlign: "center", margin: "0 auto 64px" }}>
            No lengthy onboarding. No fake projects. You&apos;re contributing to live codebases within the first week.
          </p>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", position: "relative" }}>
            <div className="steps-line" style={{ position: "absolute", top: 38, left: "calc(12.5% + 24px)", right: "calc(12.5% + 24px)", borderTop: `2px dashed var(--color-border)`, zIndex: 0 }} />
            {[
              { n: "01", title: "Apply & Interview", desc: "Short application + a 30-min call. We're vetting mindset and drive, not just a résumé." },
              { n: "02", title: "Get Matched", desc: "We pair you with a mentor and a track based on your goals and active projects in our pipeline." },
              { n: "03", title: "Embed & Build", desc: "Join standups, pick up tickets, push code. Weekly 1:1s with your mentor to unblock and accelerate." },
              { n: "04", title: "Ship & Graduate", desc: "Present your work, get a verified portfolio, and a direct referral path into the industry." },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", position: "relative", zIndex: 1 }}>
                <div style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--color-white)", border: `2px solid var(--color-blue)`, color: "var(--color-blue)", fontSize: 22, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, position: "relative", zIndex: 2 }}>{n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "var(--color-dark)" }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORS ── */}
      <section style={{ padding: "90px 5%", background: "var(--color-dark)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>Your guides</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-white)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>
            People who&apos;ve built it, not just taught it.
          </h2>
          <p style={{ fontSize: 16, color: "var(--color-text-light)", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
            Every mentor is an active practitioner at Techbrill — working on client projects daily. Their feedback is grounded in what&apos;s happening in production right now.
          </p>
          <div className="mentor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {mentors.map((m) => (
              <div key={m.name} className="mentor-card" style={{ background: "var(--color-dark-surface)", border: `1px solid var(--color-dark-border)`, borderRadius: 14, padding: 28 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, var(--color-mentor-avatar-from), var(--color-mentor-avatar-to))`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "var(--color-white)", marginBottom: 16 }}>{m.initials}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-white)", marginBottom: 4 }}>{m.name}</h3>
                <div style={{ fontSize: 13, color: "var(--color-blue)", fontWeight: 600, marginBottom: 12 }}>{m.role}</div>
                <p style={{ fontSize: 13, color: "var(--color-text-light)", lineHeight: 1.65, marginBottom: 16 }}>{m.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {m.skills.map((s) => (
                    <span key={s} style={{ background: "var(--color-blue-dim)", color: "var(--color-blue-chip)", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 100 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ padding: "90px 5%", background: "var(--color-bg-section)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>What mentees have shipped</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>Real projects. Real impact.</h2>
          <p style={{ fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
            These aren&apos;t portfolio exercises. They&apos;re live products built by mentees — still running, still serving real users today.
          </p>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {projects.map((p) => (
              <div key={p.title} className="project-card" style={{ background: "var(--color-white)", border: `1px solid var(--color-border)`, borderRadius: 14, overflow: "hidden" }}>
                <div style={{ height: 200, background: p.bgGradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52, position: "relative" }}>
                  {p.emoji}
                  <span style={{ position: "absolute", bottom: 12, right: 16, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>{p.stack}</span>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-blue)", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>{p.category}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: "var(--color-dark)" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.pills.map((pill) => (
                      <span key={pill} style={{ background: "var(--color-bg-pill)", color: "var(--color-text-pill)", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 4 }}>{pill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section id="apply" style={{ background: "var(--color-blue)", padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, color: "var(--color-white)", marginBottom: 16, letterSpacing: -0.5, lineHeight: 1.2 }}>
            Ready to stop watching and start building?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", marginBottom: 36 }}>
            12 weeks. Real projects. A mentor who picks up your calls. The next cohort starts soon — seats go fast.
          </p>
          <a href="#" style={{ background: "var(--color-white)", color: "var(--color-blue-dark)", padding: "14px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, display: "inline-block", margin: "0 8px", transition: "transform 0.15s" }}>
            Apply for the Next Cohort
          </a>
          <a href="#" style={{ border: "2px solid rgba(255,255,255,0.6)", color: "var(--color-white)", padding: "14px 32px", borderRadius: 6, fontSize: 15, fontWeight: 700, display: "inline-block", margin: "0 8px" }}>
            Talk to a Mentor First
          </a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "90px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>What they&apos;re saying</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>From the mentees themselves</h2>
          <p style={{ fontSize: 16, color: "var(--color-text-muted)", maxWidth: 600, lineHeight: 1.75, marginBottom: 56 }}>
            No curated quotes from a marketing team. These are from people who went through the program.
          </p>
          <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {testimonials.map((t) => (
              <div key={t.name} className="testi-card" style={{ background: "var(--color-white)", border: `1px solid var(--color-border)`, borderRadius: 14, padding: 28 }}>
                <div style={{ color: "var(--color-star)", fontSize: 16, marginBottom: 14, letterSpacing: 2 }}>★★★★★</div>
                <blockquote style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.7, fontStyle: "italic", marginBottom: 20, borderLeft: `3px solid var(--color-blue)`, paddingLeft: 14 }}>
                  &quot;{t.quote}&quot;
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-blue-light)", color: "var(--color-blue-dark)", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-dark)" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "90px 5%", background: "var(--color-bg-section)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--color-blue)", marginBottom: 12 }}>Quick answers</div>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, color: "var(--color-dark)", lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 48, textAlign: "center" }}>Common questions</h2>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {faqs.map((faq) => (
              <FaqAccordion key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      

    </div>
  );
}

