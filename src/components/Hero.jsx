import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const videoRef = useRef(null);
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">AI automation for dental clinics</h1>
            <ul className="mt-4 space-y-2 text-base">
              <li>• 2X ROI guarantee</li>
              <li>• Full front desk automation and follow-up management</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://cal.com/velodent-ogbkfv/20min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-black bg-black text-white px-6 py-3 font-semibold hover:opacity-90"
              >
                Book Now
              </a>
              <a href="#booking" className="inline-flex items-center rounded-full border border-black px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors">
                See Availability
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full aspect-video rounded-2xl border border-black/10 shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-white overflow-hidden">
              <iframe
                ref={videoRef}
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nw478YoO3og?si=0Pcoc1145T6JDndl"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
