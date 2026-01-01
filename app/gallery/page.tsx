"use client";

import Link from "next/link";
import { ArrowLeft, ZoomIn, Hash } from "lucide-react";

// --- Gallery Data (60+ Items) ---
const GALLERY_ITEMS = [
  // 2022
  { label: "Hindusthan scouts and guides launching 2022", year: "2022", image: "https://i.ibb.co/xK2FmXj4/hsga-launching-2022-2.png" },
  { label: "Hindusthan scouts and guides launching 2022", year: "2022", image: "https://i.ibb.co/8DmpW66y/hsga-launching-2022-1.png" },
  { label: "Awareness program in schools about HSGA 2022", year: "2022", image: "https://i.ibb.co/Kp0X9XWm/awareness-schools-2022-2.png" },
  { label: "Awareness program in schools about hsga 2022", year: "2022", image: "https://i.ibb.co/Z6d2MgkK/awareness-schools-2022-1.png" },
  { label: "International yoga day celebrations 2022", year: "2022", image: "https://i.ibb.co/60vrbnZm/yoga-day-2022-2.jpg" },
  { label: "International yoga day celebrations 2022", year: "2022", image: "https://i.ibb.co/sdrcPwH3/yoga-day-2022-1.jpg" },
  { label: "Independence Day 2022", year: "2022", image: "https://i.ibb.co/QvQR4C8M/independence-day-2022.jpg" },
  { label: "Stationery items donation drive 2022", year: "2022", image: "https://i.ibb.co/7dp71C8r/stationery-drive-2022-2.jpg" },
  { label: "Stationery items donation drive 2022", year: "2022", image: "https://i.ibb.co/C5NF3br4/stationery-drive-2022-1.jpg" },
  { label: "Blanket Donation 2022", year: "2022", image: "https://i.ibb.co/Nd98Zhmf/blanket-donation-2022-2.png" },
  { label: "Blanket donation 2022", year: "2022", image: "https://i.ibb.co/pv4qyRWG/blanket-donation-2022-1.png" },
  { label: "Traffic awareness program 2022", year: "2022", image: "https://i.ibb.co/Kpjmt8JS/traffic-awareness-2022-2.png" },
  { label: "Traffic awareness program 2022", year: "2022", image: "https://i.ibb.co/9kk89Wkg/traffic-awareness-2022-1.png" },
 

  // 2023
  { label: "Chess day 2023", year: "2023", image: "https://i.ibb.co/9mBGmnTJ/chess-day-2023.jpg" },
  { label: "Independence day 2023", year: "2023", image: "https://i.ibb.co/tTGrQCkt/independence-day-2023-1.jpg" },
  { label: "Independence day 2023", year: "2023", image: "https://i.ibb.co/9H2RpzHB/independence-day-2023-2.jpg" },
  { label: "Cpr awareness program 2023", year: "2023", image: "https://i.ibb.co/Q7WW7C8q/cpr-awareness-2023.png" },
  { label: "Stationary Donating Program 2023", year: "2023", image: "https://i.ibb.co/20J6MDw9/stationery-drive-2023-1.jpg" },
  { label: "Stationary donating program 2023", year: "2023", image: "https://i.ibb.co/BV16g8Dd/stationery-drive-2023-2.jpg" },

  // 2024
  { label: "World scouts day 2024", year: "2024", image: "https://i.ibb.co/tM3FsLGt/scouts-day-2024-1.jpg" },
  { label: "World scouts day 2024", year: "2024", image: "https://i.ibb.co/RpP3d1tc/scouts-day-2024-2.jpg" },
  { label: "World environmental health day 2024", year: "2024", image: "https://i.ibb.co/bgXZSmHP/environmental-health-day-2024-1.jpg" },
  { label: "World environmental health day 2024", year: "2024", image: "https://i.ibb.co/xqHk6qjk/environmental-health-day-2024-2.jpg" },
  { label: "Ganesh immersion 2024", year: "2024", image: "https://i.ibb.co/0RV9Mgnn/ganesh-immersion-2024-1.jpg" },
  { label: "Ganesh immersion 2024", year: "2024", image: "https://i.ibb.co/bMbbF7jX/ganesh-immersion-2024-2.jpg" },
  { label: "Hsga orientation 2024", year: "2024", image: "https://i.ibb.co/MkRBX4cp/hsga-orientation-2024-2.jpg" },
  { label: "Hsga orientation 2024", year: "2024", image: "https://i.ibb.co/MD95gGY6/hsga-orientation-2024-1.jpg" },
 

  // 2025
  { label: "Republic day 2025", year: "2025", image: "https://i.ibb.co/bgyRm132/republic-day-2025-1.jpg" },
  { label: "Republic day 2025", year: "2025", image: "https://i.ibb.co/JRXYHwzt/republic-day-2025-2.jpg" },
  { label: "Swachh Bharath 2025", year: "2025", image: "https://i.ibb.co/3mPdkkSf/swachh-bharath-2025-1.jpg" },
  { label: "Swachh bharath 2025", year: "2025", image: "https://i.ibb.co/9Hn8xdM4/swachh-bharath-2025-2.jpg" },
  { label: "World scout day 2025", year: "2025", image: "https://i.ibb.co/0VzKZCy9/world-scouts-day-2025-1.jpg" },
  { label: "World scout day 2025", year: "2025", image: "https://i.ibb.co/hF6Dk9jj/world-scouts-day-2025-2.jpg" },
  { label: "World scout day 2025", year: "2025", image: "https://i.ibb.co/1GygDrwg/world-scouts-day-2025-3.jpg" },
  { label: "Independence day 2025", year: "2025", image: "https://i.ibb.co/qFn1vsxT/independence-day-2025-1.jpg" },
  { label: "Independence day 2025", year: "2025", image: "https://i.ibb.co/Gvmj2qS5/independence-day-2025-2.jpg" },
  { label: "Eco- friendly ganesh 2025", year: "2025", image: "https://i.ibb.co/gMkYQM7S/eco-friendly-ganesh-2025-1.jpg" },
  { label: "Eco- friendly ganesh 2025", year: "2025", image: "https://i.ibb.co/9H7KC3FZ/eco-friendly-ganesh-2025-2.jpg" },
  { label: "Ganesh immersion 2025", year: "2025", image: "https://i.ibb.co/PvXsT6Gn/ganesh-immersion-2025-1.jpg" },
  { label: "Ganesh immersion 2025", year: "2025", image: "https://i.ibb.co/hJ9YyXhD/ganesh-immersion-2025-2.jpg" },
  { label: "Ganesh immersion 2025", year: "2025", image: "https://i.ibb.co/hRKQ5tdx/ganesh-immersion-2025-3.jpg" },
];


export default function GalleryPage() {
  const years = ["2025", "2024", "2023", "2022"];

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      {/* --- Navigation --- */}
      <nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">Back to Home</span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Gallery Archive • HSGA CMRIT
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* --- Header --- */}
        <header className="mb-24 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 uppercase">
            Our <span className="text-sky-500">Gallery</span>
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm md:text-base font-medium">
            Moments that capture our scouting journey and community spirit.
          </p>
        </header>

        {/* --- Loop through Years --- */}
        {years.map((year) => (
          <section key={year} className="mb-32">
            {/* Year Divider */}
            <div className="text-center mb-20 relative">
              <h2 className="text-2xl font-black text-zinc-800 relative z-10 bg-white inline-block px-10 tracking-[0.3em]">
                {year}
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-100 -z-0"></div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 items-start px-2">
              {GALLERY_ITEMS.filter((item) => item.year === year).map((item, idx) => (
                <div key={idx} className="relative group w-full">
                  {/* The Stacked Paper Layers */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky-100 bg-white transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-sky-100 bg-white shadow-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                  {/* Main Card */}
                  <div className="relative bg-white border border-sky-400 p-3 shadow-lg flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative w-full border border-zinc-50 bg-zinc-50 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400?text=HSGA+Moment"; }}
                      />
                      <div className="absolute inset-0 bg-sky-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn size={24} className="text-sky-600" />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="mt-4 pt-4 border-t border-zinc-50 px-1">
                      <h3 className="text-[11px] font-bold text-zinc-700 uppercase tracking-widest leading-relaxed">
                        {item.label}
                      </h3>
                      <div className="mt-2 text-[9px] font-mono text-zinc-300 flex items-center gap-1">
                        <Hash size={10} /> {year}-{(idx + 1).toString().padStart(3, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* --- Footer Status --- */}
        <div className="mt-20 text-center py-10 border-t border-zinc-50">
          <p className="text-[10px] text-zinc-300 uppercase tracking-[0.5em] font-bold">
            End of Visual Archive
          </p>
        </div>
      </div>

      <footer className="text-center text-[10px] text-zinc-300 font-medium uppercase tracking-[0.3em] pb-10">
        &copy; 2025 HSG CMRIT • All Rights Reserved
      </footer>
    </div>
  );
}