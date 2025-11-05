import { useState } from 'react';
import { Bot, Calendar, CreditCard, Shield, Phone, BarChart, Quote, ChevronDown, CheckCircle } from 'lucide-react';

export default function ContentSections() {
  return (
    <div className="bg-white">
      <About />
      <Services />
      <Dashboard />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="mb-6">
        {eyebrow && <div className="text-xs uppercase tracking-wider text-black/60">{eyebrow}</div>}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-black/70 mt-2 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-black/10">
      <SectionTitle
        title="Built for modern dental clinics"
        subtitle="Velodent combines an AI receptionist with end‑to‑end automation: bookings, reminders, insurance, payments and follow‑ups."
      />
    </section>
  );
}

function Services() {
  const items = [
    { icon: Bot, title: 'AI Receptionist', desc: 'Answers calls, handles questions and books appointments 24/7.' },
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Books, reschedules and cancels with automated reminders to reduce no‑shows.' },
    { icon: Phone, title: 'Follow‑ups', desc: 'Automated call + SMS reminders 1 day/hour before and every 6 months for cleanings.' },
    { icon: Shield, title: 'Insurance Verification', desc: 'Eligibility checks and benefits verification before the visit.' },
    { icon: CreditCard, title: 'Payments', desc: 'Collects co‑pays, deposits and balances securely.' },
    { icon: BarChart, title: 'Growth & ROI', desc: 'Lead capture from ads with a 2× ROI guarantee.' },
  ];
  return (
    <section id="services" className="border-t border-black/10">
      <SectionTitle title="Services" subtitle="Everything your front desk does — automated and consistent." />
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)] transition-shadow">
            <div className="w-12 h-12 rounded-xl border border-black/10 bg-white flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-black/70 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  return (
    <section id="dashboard" className="border-t border-black/10">
      <SectionTitle title="Dashboard" subtitle="Sign in to view KPIs, call summaries, bookings and collections." />
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-black/10 p-6 bg-white">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              ['Bookings', '142'],
              ['Show Rate', '92%'],
              ['Collected', '$38,420'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-black/10 p-4">
                <div className="text-sm text-black/60">{label}</div>
                <div className="text-2xl font-semibold">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-black/10 p-4">
            <div className="text-sm text-black/60 mb-2">Weekly Appointments</div>
            <div className="flex items-end gap-2 h-40">
              {[24, 28, 20, 31, 36, 30, 40].map((v, i) => (
                <div key={i} className="flex-1 bg-black/10 rounded" style={{ height: `${v * 2}px` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 p-6 bg-white space-y-4">
          <h4 className="font-semibold">Client Sign in</h4>
          <form className="space-y-3">
            <input className="w-full border border-black/10 rounded-lg px-3 py-2" placeholder="Email" type="email" />
            <input className="w-full border border-black/10 rounded-lg px-3 py-2" placeholder="Password" type="password" />
            <button type="button" className="w-full rounded-full border border-black bg-black text-white px-4 py-2 font-semibold">Sign in</button>
          </form>
          <div className="text-xs text-black/60">Portal preview shown on the left with charts and metrics.</div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    { name: 'BrightSmiles Dental', result: '37% more bookings, 2.4× ROI', details: 'Replaced phone triage with AI, automated reminders and insurance verification.' },
    { name: 'Downtown Orthodontics', result: '−41% no‑shows, +22% collections', details: 'Proactive follow‑ups, deposit collection and braces‑tightening scheduling.' },
  ];
  return (
    <section id="case-studies" className="border-t border-black/10">
      <SectionTitle title="Case Studies" subtitle="Real results from real clinics." />
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 grid md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <div key={c.name} className="rounded-2xl border border-black/10 p-6 bg-white">
            <h3 className="font-semibold text-lg">{c.name}</h3>
            <div className="text-sm text-black/60 mt-1">{c.result}</div>
            <p className="text-sm mt-3">{c.details}</p>
            <a href="#contact" className="mt-4 inline-flex items-center text-sm font-semibold underline">Read more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      name: 'Dr. Patel',
      text: 'Velodent answered every missed call, filled empty slots and handled payments without adding staff.',
    },
    {
      name: 'Dr. Nguyen',
      text: 'No‑show rate dropped dramatically. The automated reminders are worth it alone.',
    },
    {
      name: 'Practice Manager, SmileCo',
      text: 'Insurance checks and follow‑ups run on autopilot. Patients love the experience.',
    },
  ];
  return (
    <section id="testimonials" className="border-t border-black/10">
      <SectionTitle title="Testimonials" subtitle="Trusted by modern, growth‑minded practices." />
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-16 grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <div key={i} className="rounded-2xl border border-black/10 bg-white p-6">
            <Quote className="w-6 h-6 mb-3" />
            <p className="text-sm">“{q.text}”</p>
            <div className="mt-4 text-sm font-semibold">{q.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: 'What does the 2× ROI guarantee mean?',
      a: 'If Velodent does not generate at least 2× its cost in measurable value, we make it right — period.',
    },
    {
      q: 'How does the AI receptionist work?',
      a: 'It answers calls, books, reschedules and cancels appointments, sends reminders and handles FAQs.',
    },
    {
      q: 'Can it verify insurance and collect payments?',
      a: 'Yes — it performs eligibility checks, calculates expected co‑pays and securely collects deposits/balances.',
    },
  ];
  return (
    <section id="faq" className="border-t border-black/10">
      <SectionTitle title="FAQ" subtitle="Answers to common questions about AI, automation and implementation." />
      <div className="max-w-3xl mx-auto px-4 pb-12 md:pb-16">
        {items.map((it, i) => (
          <div key={i} className="border-b border-black/10 py-4">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between text-left">
              <span className="font-medium">{it.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && <p className="mt-2 text-black/70 text-sm">{it.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to automate your clinic?</h3>
          <p className="text-black/70 mt-2">Book a quick 20‑minute demo to see Velodent in action.</p>
        </div>
        <a
          href="https://cal.com/velodent-ogbkfv/20min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-black bg-black text-white px-6 py-3 font-semibold hover:opacity-90"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Velodent. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm text-black/70">
          <div className="inline-flex items-center gap-1"><CheckCircle className="w-4 h-4" /> HIPAA‑aware processes</div>
          <a href="#faq" className="underline">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
