"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Calendar, Hash, ExternalLink } from "lucide-react";

// --- Documents Data (23 Items) ---
const DOCUMENTS = [
  // 2025
  { title: "World Scouts Day", date: "22nd February 2025", year: "2025", link: "https://drive.google.com/file/d/1eveX1ErBcR4YB2w6J7gUhBvBL4q7Gl-i/view?usp=drive_link" },
  { title: "Swachh Bharath", date: "8th February 2025", year: "2025", link: "https://drive.google.com/file/d/1hU0YiG8bOavZEd89xWNvgZ8rGGiCJ4Ha/view?usp=drive_link" },
  { title: "World Cancer Day", date: "4th February 2025", year: "2025", link: "https://drive.google.com/file/d/1ZU2YqZAtPKaTeJyt7au_YBKdwIedvetg/view?usp=drive_link" },
  { title: "76th Republic Day", date: "26th January 2025", year: "2025", link: "https://drive.google.com/file/d/1-3h3Z9zCvf8nrI8Ov0xJwqBiEBNgUXEP/view?usp=drive_link" },

  // 2024
  { title: "Girls Workshop", date: "9th November 2024", year: "2024", link: "https://drive.google.com/file/d/1XN1RNwXjq654BHKB-dMsiiwkwXYEYuyR/view?usp=drive_link" },
  { title: "HSGA Orientation Day", date: "19th October 2024", year: "2024", link: "https://drive.google.com/file/d/1O3iXpbGwNhdMLhfFfWdfa1N-OZSfEb4W/view?usp=drive_link" },
  { title: "World Environmental Health Day", date: "26th September 2024", year: "2024", link: "https://drive.google.com/file/d/17raEOoDXzcnDedLGtM2oynQgPE2nTvAn/view?usp=drive_link" },
  { title: "Vinayaka Nimajjanam", date: "17th September 2024", year: "2024", link: "https://drive.google.com/file/d/1P69-V43Vq-g67jNKC8sGt_jsyJ5_Tgpc/view?usp=drive_link" },
  { title: "Independence Day", date: "15th August 2024", year: "2024", link: "https://drive.google.com/file/d/17Qo8crtVEXNFNrMmQgH2va0kSwsaTGss/view?usp=sharing" },
  { title: "Scout Day", date: "22nd February 2024", year: "2024", link: "https://drive.google.com/file/d/1a9JmG-Y9X1p-MjC_qQUlfNx_dlUsN2ei/view?usp=drive_link" },
  { title: "75th Republic Day", date: "26th January 2024", year: "2024", link: "https://drive.google.com/file/d/1rqRTjDdSJ1UeQHSTj8J-ibHF7MHwaYR6/view?usp=drive_link" },

  // 2023
  { title: "Awareness Campaign on Legal Rights of Citizens", date: "27th November 2023", year: "2023", link: "https://drive.google.com/file/d/1c6jyCBAQtB0fJedSVCLCN4pT3gGjo4LL/view?usp=drive_link" },
  { title: "Stationery Items Donation Drive", date: "15th November 2023", year: "2023", link: "https://drive.google.com/file/d/10NeOv4lGGewRmQ6FrEzGdwZ_zkSg5eTr/view?usp=drive_link" },
  { title: "CPR Awareness Programme", date: "14th October 2023", year: "2023", link: "https://drive.google.com/file/d/1nmPXMPDUIgNS-uCcLo8N1QKSDNSgDjyR/view?usp=drive_link" },
  { title: "Independence Day Celebrations", date: "15th August 2023", year: "2023", link: "https://drive.google.com/file/d/1TEi-qk4EOfRBRj7AxHcI06gdVFJolYIw/view?usp=drive_link" },
  { title: "Chess Day", date: "20th July 2023", year: "2023", link: "https://drive.google.com/file/d/1FoRuixVFDaKEJ6rh5Nj7UZORjiKbLFal/view?usp=drive_link" },
  { title: "Yoga Day", date: "19th-21st June 2023", year: "2023", link: "https://drive.google.com/file/d/14S51rUR2Tr8tL533MDTxfektKeGQXBh7/view?usp=drive_link" },
  { title: "74th Republic Day", date: "26th January 2023", year: "2023", link: "https://drive.google.com/file/d/1Bg8XrZBJzONQV8YDAsHrAuZGAMa472vd/view?usp=drive_link" },

  // 2022
  { title: "Blanket Donation", date: "14th-15th November 2022", year: "2022", link: "https://drive.google.com/file/d/1gUiwwk0f4ihGG8hDL1A_m0YBeowqYWtC/view?usp=drive_link" },
  { title: "Traffic Awareness Program", date: "14th August 2022", year: "2022", link: "https://drive.google.com/file/d/1VzB43H3w6oAiSYe_PIOWgkX5DfoLYtDZ/view?usp=drive_link" },
  { title: "Awareness Program on Patriotism in Schools", date: "8th August 2022", year: "2022", link: "https://drive.google.com/file/d/1r9GZZvOduYU9Ql-mHkS_t6DjcuPRlYd7/view?usp=drive_link" },
  { title: "International Yoga Day", date: "21st June 2022", year: "2022", link: "https://drive.google.com/file/d/1q9hfM-HsJaWXYwZDMeQmGgkuYdlCiQru/view?usp=drive_link" },
  { title: "Hindusthan Scouts and Guides Launching", date: "25th April 2022", year: "2022", link: "https://drive.google.com/file/d/1YZMSmumpQXXgVy_0U31WW10HENLZHnBS/view?usp=drive_link" },
];

export default function EventsAndDocsPage() {
  const years = ["2025", "2024", "2023", "2022"];

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      
      {/* --- Simple Navigation --- */}
      <nav className="border-b border-zinc-100 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-sky-600 transition-colors">
            <ArrowLeft size={18} />
            <span className="text-sm font-bold">Back to Home</span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Records Archive • HSGA CMRIT
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* --- Normal White Header --- */}
        <header className="mb-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-50 mb-6 text-sky-500">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-4 uppercase">
            Events & <span className="text-sky-500">Documents</span>
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm md:text-base font-medium">
            Stay updated with our upcoming events and download important official documents and reports.
          </p>
        </header>

        {/* --- Loop through Years --- */}
        {years.map((year) => (
          <section key={year} className="mb-32">
            
            {/* Year Divider (NSS Style) */}
            <div className="text-center mb-20 relative">
              <h2 className="text-2xl font-black text-zinc-800 relative z-10 bg-white inline-block px-10 tracking-[0.4em]">
                {year}
              </h2>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-100 -z-0"></div>
            </div>

            {/* Document Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 px-2">
              {DOCUMENTS.filter(doc => doc.year === year).map((doc, idx) => (
                <div key={idx} className="relative group w-full">
                  
                  {/* The Stacked Paper Layers */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky-100 bg-white transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-sky-100 bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                  {/* Main Document Card */}
                  <div className="relative bg-white border border-sky-400 p-6 shadow-lg flex flex-col h-full min-h-[260px]">
                    
                    {/* ID & Icon Row */}
                    <div className="flex items-center justify-between mb-8">
                       <div className="p-2.5 bg-sky-50 rounded-lg text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                          <FileText size={20} />
                       </div>
                       <div className="text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                         <Hash size={10} /> DOC-{year}-{(idx + 1).toString().padStart(2, '0')}
                       </div>
                    </div>

                    {/* Title & Date */}
                    <div className="flex-grow">
                      <h3 className="text-base font-bold text-zinc-800 uppercase tracking-tight leading-tight group-hover:text-sky-600 transition-colors mb-3">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Calendar size={14} className="text-sky-200" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{doc.date}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 pt-5 border-t border-zinc-50">
                      <a 
                        href={doc.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-md active:scale-95"
                      >
                        View PDF <ExternalLink size={12} />
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* --- End of Archive --- */}
        <div className="mt-40 text-center flex flex-col items-center">
            <div className="h-12 w-[1px] bg-sky-100 mb-6"></div>
            <p className="text-zinc-300 text-[10px] uppercase tracking-[0.5em] font-black">
                End of Document Repository
            </p>
        </div>

      </div>

      <footer className="text-center text-[10px] text-zinc-300 font-medium uppercase tracking-[0.3em] pb-12">
        &copy; 2025 HSG CMRIT • Official Records
      </footer>
    </div>
  );
}