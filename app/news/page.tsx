"use client";

import Link from "next/link";
import { ArrowLeft, ZoomIn, Hash, Image as ImageIcon } from "lucide-react";

// --- News Clippings Data (13 Items) ---
// PASTE YOUR IBB LINKS IN THE 'image' FIELDS BELOW
const CLIPPINGS = [
  { image: "https://i.ibb.co/trdJ9kg/traffic-awareness-2023.png", date: "Archive 01" },
  { image: "https://i.ibb.co/hRdWCW0p/yoga-day-2023.png", date: "Archive 02" },
  { image: "https://i.ibb.co/5g1Mndzb/hsga-orientation-2023.jpg", date: "Archive 03" },
  { image: "https://i.ibb.co/Mxxc6KfQ/stationery-drive-2023.png", date: "Archive 04" },
  { image: "https://i.ibb.co/903KMcT/blanket-donation-2023.png", date: "Archive 05" },
  { image: "https://i.ibb.co/R47wHM7x/scouts-day-2023.jpg", date: "Archive 06" },
  { image: "https://i.ibb.co/6078P4y9/hsga-orientation-2024.jpg", date: "Archive 07" },
  { image: "https://i.ibb.co/wZFbgR2X/ganesh-nimajjanam-2024.jpg", date: "Archive 08" },
  { image: "https://i.ibb.co/C5qWMXXv/social-services-2023.jpg", date: "Archive 09" },
  { image: "https://i.ibb.co/DfpQL7S5/scouts-day-2025.jpg", date: "Archive 10" },
  { image: "https://i.ibb.co/tT5QBNsT/ganesh-nimajjanam-2025.jpg", date: "Archive 11" },
  { image: "https://i.ibb.co/4ZJNJf4d/world-environmental-health-day-2024.jpg", date: "Archive 12" },
  { image: "https://i.ibb.co/1GYHVxnJ/scouts-day-2024.jpg", date: "Archive 13" },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      
      {/* --- Top Navigation --- */}
      <nav className="border-b border-zinc-100 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">Back to Home</span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Press & Media Archives • HSGA CMRIT
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* --- Header --- */}
        <div className="text-center mb-24 relative">
          <h2 className="text-xl font-bold text-zinc-800 relative z-10 bg-white inline-block px-8 uppercase tracking-[0.4em]">
            News Clippings
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-100 -z-0"></div>
          <p className="text-[10px] text-zinc-400 mt-4 uppercase tracking-widest font-medium">
            A Collection of Published Media Reports
          </p>
        </div>

        {/* --- Flex-Responsive Grid --- */}
        {/* items-start ensures cards don't stretch to match the tallest in the row, keeping them natural */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-12 items-start">
          {CLIPPINGS.map((item, idx) => (
            <div key={idx} className="relative group w-full">
              
              {/* The Stacked Paper Layers */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky-100 bg-white transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-sky-100 bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              
              {/* Main Clipping Card */}
              <div className="relative bg-white border border-sky-400 p-3 shadow-lg flex flex-col transition-all duration-300 group-hover:shadow-sky-100/50">
                
                {/* Image Frame - Natural height based on image */}
                <div className="relative w-full border border-zinc-50 bg-zinc-50 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`News Clipping ${idx + 1}`}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x800?text=Press+Clipping"; }}
                  />
                  
                  {/* Hover Interaction Overlay */}
                  <div className="absolute inset-0 bg-sky-900/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/95 p-3 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                        <ZoomIn size={22} className="text-sky-600" />
                    </div>
                  </div>
                </div>

                {/* Card Footer (Minimal ID only) */}
                <div className="mt-4 flex items-center justify-between px-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2">
                    <ImageIcon size={12} className="text-sky-400" />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">
                      {item.date}
                    </span>
                  </div>
                  <div className="text-[9px] font-mono text-zinc-300 flex items-center">
                    <Hash size={10} className="mr-0.5" />
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- End of Archive Decor --- */}
        <div className="mt-48 text-center flex flex-col items-center">
            <div className="h-10 w-[1px] bg-sky-100 mb-6"></div>
            <p className="text-zinc-300 text-[9px] uppercase tracking-[0.5em] font-bold">
                End of Media Gallery
            </p>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="text-center text-[10px] text-zinc-300 font-medium uppercase tracking-[0.3em] pb-10">
        &copy; 2024 HSG CMRIT • Official Press Record
      </div>
    </div>
  );
}