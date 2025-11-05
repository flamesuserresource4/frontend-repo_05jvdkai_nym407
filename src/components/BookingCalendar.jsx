import { useEffect } from 'react';

export default function BookingCalendar() {
  useEffect(() => {
    // Inject Cal.com embed script once
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', '20min', { origin: 'https://app.cal.com' });
        window.Cal.ns['20min']('inline', {
          elementOrSelector: '#my-cal-inline-20min',
          config: { layout: 'month_view' },
          calLink: 'velodent-ogbkfv/20min',
        });
        window.Cal.ns['20min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
      }
    };

    return () => {
      try {
        document.head.removeChild(script);
      } catch {}
    };
  }, []);

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a 20‑minute demo</h2>
          <p className="text-black/70 mt-2">See how Velodent automates your front desk and follow-ups.</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-4">
          <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-20min" />
        </div>
      </div>
    </section>
  );
}
