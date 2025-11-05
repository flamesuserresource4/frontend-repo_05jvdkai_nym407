import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur-md bg-white/70 shadow-sm'
    : 'bg-white/60 backdrop-blur-sm';

  const linkBase = 'px-3 py-2 text-sm font-medium hover:opacity-80 transition-opacity';

  return (
    <header className={`sticky top-0 z-50 border-b border-black/10 ${navClasses}`}> 
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#home" className="font-semibold tracking-tight text-xl">Velodent</a>
        <nav className="hidden md:flex items-center gap-1 text-black">
          <a className={linkBase} href="#home">Home</a>
          <a className={linkBase} href="#about">About</a>
          <a className={linkBase} href="#services">Services</a>
          <a className={linkBase} href="#dashboard">Dashboard</a>
          <a className={linkBase} href="#case-studies">Case Studies</a>
          <a className={linkBase} href="#testimonials">Testimonials</a>
          <a className={linkBase} href="#faq">FAQ</a>
          <a className={linkBase} href="#contact">Contact</a>
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center rounded-full border border-black bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            Book Now
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 border border-black rounded-md">
        <span className="block w-5 h-[2px] bg-black mb-1" />
        <span className="block w-5 h-[2px] bg-black mb-1" />
        <span className="block w-5 h-[2px] bg-black" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-14 bg-white border-b border-black/10 shadow-sm">
          <div className="px-4 py-3 grid gap-2">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Services', '#services'],
              ['Dashboard', '#dashboard'],
              ['Case Studies', '#case-studies'],
              ['Testimonials', '#testimonials'],
              ['FAQ', '#faq'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="py-2 border-b last:border-b-0 border-black/10">
                {label}
              </a>
            ))}
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-black bg-black text-white px-4 py-2 text-sm font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
