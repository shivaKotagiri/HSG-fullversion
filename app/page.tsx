"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, X, Mail, Phone,
  LogIn, Footprints, Compass, MountainSnow, ShieldCheck, Crown, 
  HeartPulse, Briefcase, GraduationCap, Ticket, 
  Landmark, Trophy, ChevronLeft, ChevronRight,
} from "lucide-react";
import ContactModal from "@/components/ContactModal";

const NAV_LINKS = [
  { name: "History", href: "#history" },
  { name: "About", href: "#about" },
  { name: "Levels", href: "#levels" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const heroImages = [
    "https://i.ibb.co/s9yvNfxg/CMR-INSTITUTE-OF-TECHNOLOGY.png",
    "https://i.ibb.co/mFzQQ6B4/CMR-INSTITUTE-OF-TECHNOLOGY.png",
    "https://i.ibb.co/1DFyvTX/CMR-INSTITUTE-OF-TECHNOLOGY-1.png",
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [historyExpanded, setHistoryExpanded] = useState(false);
  
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100">
      <div className="sticky top-0 z-50 w-full">
        <div className="bg-zinc-900 text-zinc-400 text-xs py-2 px-6 hidden md:block">
          <div className="mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center gap-6">
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Phone size={12} /> +91 9951040546
               </span>
               <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                 <Mail size={12} /> hindustanscoutsandguides.cmrit@gmail.com
               </span>
            </div>
            <div className="flex items-center gap-4">
               {/* Portal Login moved to main navbar */}
            </div>
          </div>
        </div>
        <header className="border-b border-zinc-200 bg-white shadow-sm">
          <div className="mx-auto flex h-20 md:h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 group">
               <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0">
                  <Image 
                    src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg" 
                    alt="HSG Logo" 
                    fill 
                    className="object-contain" 
                 />
               </div>

               <div className="hidden sm:flex flex-col leading-tight ml-2">
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors">CMRIT Chapter</span>
                 <span className="text-sm md:text-lg font-bold text-zinc-900 tracking-tight">Hindustan Scouts & Guides Association</span>
               </div>
            </Link>

            <div className="hidden md:flex items-center gap-4">
               <Link 
                 href="/login" 
                 className="flex items-center gap-2 rounded-none bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors"
               >
                 <LogIn size={16} /> Portal Login
               </Link>

               <button 
                 onClick={() => setIsContactOpen(true)}
                 className="rounded-none bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
               >
                 <Mail size={16} />
                 Contact Us 
               </button>
            </div>

            <button 
              className="xl:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="xl:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg border-b border-zinc-50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>
      </div>
      
      <div className="sticky top-16 md:top-20 z-40 w-full border-y border-zinc-200 bg-zinc-50 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-px bg-linear-to-r from-blue-200 via-zinc-200 to-transparent"></div>
          <nav className="hidden xl:flex items-center gap-1 py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-zinc-700 px-3 py-2 rounded-md hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
{/* hero section */}
      <section className="relative w-full bg-black group">

        <div className="relative w-full h-62.5 sm:h-100 md:h-137.5 lg:h-162.5 overflow-hidden">
          
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${heroIndex * 100}%)` }}
          >
            {heroImages.map((src, i) => (
              <div key={i} className="relative min-w-full h-full">
                <Image
                  src={src}
                  alt={`Banner ${i + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority={i === 0}
                  quality={90}
                />
                {/* Subtle gradient to ensure white navigation arrows are always visible */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Smaller & Subtle on Mobile */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 md:p-3 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
          </button>

          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-3 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                  heroIndex === i 
                    ? "w-4 md:w-8 bg-white" 
                    : "w-1 md:w-1.5 bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setHeroIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="w-full py-20 bg-zinc-50 border-b border-zinc-200 relative">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
               <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  History
               </div>
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                The Origins & Evolution
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              &quot;From the battlefields of 1857 to a global movement.&quot;
            </p>
          </div>
          
          <div className={historyExpanded ? "" : "relative max-h-130 md:max-h-150 overflow-hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 text-zinc-700 text-sm leading-relaxed text-justify">
              <div className="space-y-4 relative">
                 <p>
                   The name <span className="text-blue-600 font-semibold">Scouting</span> seems to have been inspired by the important and romantic role played by military scouts performing reconnaissance in the times of wars. This idea to <span className="text-blue-600 font-semibold">Robert Baden-Powell</span> was derived from his senior officer Captain Sessile during his young age while posted in British ruled India as captain in Scout unit of English Military. Robert has assigned to dig out the source of Heavy Armed force and inestimable Hindustani warriors during First Independent Movement 1857 sway. Both of them used to visit in Indian social sector and therefore came to learn about the life style and discovered that <span className="text-blue-600 font-semibold">Gurukul</span> system of education pattern and learned that students do acquire academic and non-academic ken simultaneous during the learning tenure.
                 </p>
                 <p>
                   <strong className="text-blue-600">Scouting History in the World:</strong> Robert began coined the word <span className="text-blue-600 font-semibold">Scouting</span> under influenced from Indian Culture and Indian ancient system of education. The syllabus and teaching topics covered in this, actually were very much inherited in the culture of Indian Civilisation. Even the saying goes that Beden Powel got this idea by understanding teaching pattern adopted by Hindu <span className="text-blue-600 font-semibold">Gurukul</span>. He was also inspired by childhood teaching activities of Lord Shri Ram Chandra and Shri Laxman as depicted in Ramayana and added a Jungle Visit in syllabus. With the life of Balak Shri Krishana he remained astonished to know that the audacious in adolescent age.
                 </p>
                 <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-zinc-200"></div>
              </div>
              <div className="space-y-4 relative">
                 <p>
                   <strong className="text-blue-600">Origin:</strong> <span className="text-blue-600 font-semibold">Scouting</span> is stated as aim of supporting young people in their physical, mental and spiritual development, that they may play constructive roles in society. During the first half of the 20th century, the movement grew to encompass three major age groups each for boys (Cub Scout, Boy Scout, Rover Scout) and, in 1910, a new organization, Girl Guides, was created for girls (Brownie Guide, Girl Guide and Girl Scout, Ranger Guide).
                 </p>
                 <p>
                   As a military officer, Robert Baden-Powell was stationed in British India and Africa in the 1880s and 1890s. Since his youth, in military scouting and as part of their training—he showed his men how to survive in the wilderness. He noticed that it helped the soldiers to develop independence rather than just blindly follow officers&apos; orders. In 1896, Baden-Powell was assigned to the Matabeleland region in Southern Rhodesia (now Zimbabwe) as Chief of Staff to Gen. Frederick Carrington during the Second Matabele War, and it was here that he first met and began a lifelong friendship with Frederick Russell Burnham, the American born Chief of Scouts for the British.
                 </p>
                 <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-zinc-200"></div>
              </div>
              <div className="space-y-4">
                 <p>
                   The need for the improved training of British military-enlisted scouts, particularly in initiative, self-reliance, and observational skills. Each member received a badge that illustrated a combined compass point and spearhead. The badge&apos;s logo was similar to the fleur-de-lis that scouting later adopted as its international symbol. In the United Kingdom, the public followed Powell&apos;s struggle to hold Mafeking through newspapers, and when the siege was broken, he had become a national hero.
                 </p>
                 <p>
                   <strong className="text-blue-600">Scouting in India:</strong> Although, <span className="text-blue-600 font-semibold">Scouting</span> came in India solitary for European and Anglo Indian boys and girls under the banner of English by the name of Boys Scouts of India in 1909 and same with Girl Guiding in 1913. However, Powel kept closed scouting doors for Indians. There was resentment in Indians for it and 1921, when World Chief Scout Lord Baden Powell came to India, under the Leadership of Pt. Madan Mohan Malviya, a Great Leader of India, Baden Powell was requested to open the doors for Indians but he refused brutally.
                 </p>
              </div>
            </div>
            
            {!historyExpanded && (
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent flex items-end justify-center pb-4">
                <button
                  onClick={() => setHistoryExpanded(true)}
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-6 py-3 text-sm font-bold hover:bg-blue-700 transition-colors"
                >
                  Read Full History
                </button>
              </div>
            )}
          </div>
          
          {historyExpanded && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setHistoryExpanded(false)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                Collapse
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- 4. About HSGA (Redesigned: Content Focused) --- */}
      <section id="about" className="relative py-12 bg-slate-50 overflow-hidden">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="w-full mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                About HSGA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Who We Are
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              Building character, serving society, leading by example.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16 text-zinc-700 text-sm leading-relaxed text-justify">
            <div className="space-y-4 relative">
              <p className="text-lg font-bold text-zinc-900">Mission</p>
              <p>
                The <span className="text-blue-600 font-semibold">Hindustan Scouts and Guides Association</span> at <span className="text-blue-600 font-semibold">CMRIT</span> is a student chapter aligned to a national movement dedicated to holistic youth development. With a focus on service, discipline, and leadership, <span className="text-blue-600 font-semibold">HSGA</span> nurtures responsible citizens who contribute meaningfully to their communities.
              </p>
              <p>
                Our activities combine physical endurance, outdoor skills, teamwork, and social responsibility. Students participate in camps, disaster management training, first aid, and community service initiatives that cultivate confidence, empathy, and resilience.
              </p>
              <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-zinc-200"></div>
            </div>

            <div className="space-y-4 relative">
              <p className="text-lg font-bold text-zinc-900">Vision</p>
              <p>
                <span className="text-blue-600 font-semibold">Mission:</span> To educate young people through a value system based on the <span className="text-blue-600 font-semibold">Scout Promise</span> and <span className="text-blue-600 font-semibold">Law</span>, helping build a better world where individuals are self‑fulfilled and play constructive roles in society.
              </p>
              <p>
                <span className="text-blue-600 font-semibold">Vision:</span> To empower youth across diverse backgrounds through structured programs that develop physical, mental, and moral strength. We collaborate with institutions and associations to broaden access and opportunities for growth.
              </p>
              <div className="hidden lg:block absolute -right-8 top-0 bottom-0 w-px bg-zinc-200"></div>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-bold text-zinc-900">Motto</p>
              <p>
                <span className="text-blue-600 font-semibold">Motto:</span> Serve Man to Reach God. We believe selfless service is a direct path to purpose and dignity. By helping those in need and acting with compassion, students learn that true leadership begins with responsibility and kindness.
              </p>
              <p className="text-lg font-bold text-zinc-900">Values</p>
              <p>
                <span className="text-blue-600 font-semibold">Values:</span> Integrity, courage, perseverance, and community. These principles guide every activity, ensuring that achievements reflect character as much as skills. HSGA strives to create leaders who elevate others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="levels" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="w-full mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Levels
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                The Levels of Leadership
              </h2>
            </div>
            <p className="md:max-w-md text-right text-zinc-500 mt-4 md:mt-0 italic font-serif">
              &quot;From entry to excellence — earn, lead, inspire.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-teal-500/40 via-teal-400/30 to-transparent group-hover:from-teal-500 group-hover:via-teal-400"></div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Footprints size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Praveshika</h3>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-teal-600 uppercase tracking-wide mb-3 px-2 py-0.5 bg-teal-50 rounded">
                Entry Level
              </p>
              <p className="text-zinc-600 leading-relaxed">
                The foundation. Designed to assess core knowledge and essential survival skills for new recruits.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-indigo-500/40 via-indigo-400/30 to-transparent group-hover:from-indigo-500 group-hover:via-indigo-400"></div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Compass size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Komalpad</h3>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-indigo-600 uppercase tracking-wide mb-3 px-2 py-0.5 bg-indigo-50 rounded">
                Basic Skills
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Focuses on developing proficiency in field craft and deepening the understanding of scouting principles.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500/40 via-sky-400/30 to-transparent group-hover:from-sky-500 group-hover:via-sky-400"></div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <MountainSnow size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Dhruvpadh</h3>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-sky-600 uppercase tracking-wide mb-3 px-2 py-0.5 bg-sky-50 rounded">
                Intermediate
              </p>
              <p className="text-zinc-600 leading-relaxed">
                A stage for showcasing advancing proficiency, consistency, and a deeper commitment to the troop.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-500/40 via-amber-400/30 to-transparent group-hover:from-amber-500 group-hover:via-amber-400"></div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Gurupadh</h3>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-amber-600 uppercase tracking-wide mb-3 px-2 py-0.5 bg-amber-50 rounded">
                Advanced Leadership
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Emphasizes mentorship and the ability to guide others. The transition from learner to leader.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-zinc-200 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-purple-500/40 via-purple-400/30 to-transparent group-hover:from-purple-500 group-hover:via-purple-400"></div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Crown size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">Rajyapuraskar</h3>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold text-purple-600 uppercase tracking-wide mb-3 px-2 py-0.5 bg-purple-50 rounded">
                State Level Award
              </p>
              <p className="text-zinc-600 leading-relaxed">
                The pinnacle of the scouting journey. A prestigious state-level award that honors exceptional achievement.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="blood-donor" className="relative py-16 bg-linear-to-br from-red-600 via-red-700 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="none" stroke="currentColor" strokeWidth="2" d="M0,160L48,160L80,64L112,256L144,160L192,160L240,160L272,64L304,256L336,160L1440,160" />
           </svg>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-950/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-end">
            <div className="lg:w-1/2 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/50 text-red-100 text-xs md:text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Emergency Response Network
               </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4 leading-tight">
                Your Blood Can Be Someone&apos;s <span className="text-red-200 border-b-4 border-red-500/50">Second Chance</span>
              </h2>
               
              <p className="text-base md:text-lg text-red-100 mb-8 leading-relaxed font-light">
                The CMRIT HSG Blood Donor wing bridges the gap between donors and those in critical need. We maintain a real-time database of student volunteers ready to respond to emergencies in Hyderabad.
              </p>

              <div className="flex flex-wrap gap-4">
                 <Link 
                    href="/blood-donor" 
                    className="flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-full font-bold tracking-wide shadow-lg shadow-red-900/20 hover:bg-red-50 hover:scale-105 transition-all"
                  >
                    <HeartPulse size={18} />
                    Register as Donor
                  </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="benefits" className="py-20 bg-zinc-50"> {/* Light gray background makes white cards pop */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="mb-14 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        Membership Benefits
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">
        Why Join the HSGA Wing?
      </h2>
      <p className="mt-4 text-zinc-500 max-w-2xl mx-auto font-medium">
        Gain exclusive access to career opportunities, national recognition, and personal development through our established network.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {[
        {
          title: "Government Jobs",
          tag: "Scout Quota",
          desc: "Access reserved opportunities across Railways and Central sectors.",
          icon: <Briefcase className="w-6 h-6" />,
          color: "blue"
        },
        {
          title: "Higher Education",
          tag: "Admissions",
          desc: "Leverage recognition to strengthen applications and placements.",
          icon: <GraduationCap className="w-6 h-6" />,
          color: "indigo"
        },
        {
          title: "Travel Perks",
          tag: "Concessions",
          desc: "Reduced fares for official activities and recognized service.",
          icon: <Ticket className="w-6 h-6" />,
          color: "emerald"
        },
        {
          title: "Medals of Honor",
          tag: "Recognition",
          desc: "Eligibility for high honors from state and national leadership.",
          icon: <Trophy className="w-6 h-6" />,
          color: "amber"
        },
        {
          title: "National Exposure",
          tag: "Leadership",
          desc: "Participate in national programs and connect with decision makers.",
          icon: <Landmark className="w-6 h-6" />,
          color: "purple"
        },
      ].map((benefit, idx) => (
        <div 
          key={idx}
          className="group relative flex flex-col bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/50"
        >
          {/* Subtle Top Accent Line - Appears on Hover */}
          <div className="absolute inset-x-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-t-2xl" />

          {/* Icon Container */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-50 text-zinc-600 border border-zinc-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-200">
            {benefit.icon}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1 block">
              {benefit.tag}
            </span>
            <h3 className="text-lg font-bold text-zinc-900 mb-3 tracking-tight">
              {benefit.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500 font-medium">
              {benefit.desc}
            </p>
          </div>

          {/* Bottom Visual Cue */}
          <div className="mt-8 pt-4 border-t border-zinc-50 flex items-center justify-between">
            <span className="text-[10px] font-bold text-zinc-400 uppercase group-hover:text-blue-600 transition-colors">
              HSGA Exclusive
            </span>
            <div className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
               <ChevronRight size={14} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* --- WHITE THEME COMPACT FOOTER --- */}
      <footer className="bg-white border-t border-zinc-200 pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-10">
            
            {/* Brand Section - Large Logo */}
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="relative h-24 w-24 md:h-28 md:w-28">
                <Image 
                  src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg" 
                  alt="HSG Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 tracking-tight uppercase">
                  Hindustan Scouts & Guides
                </h3>
                <p className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                  CMRIT Chapter • Rover & Ranger Unit
                </p>
                <div className="flex gap-4 mt-3">
                  <a href="mailto:hindustanscoutsandguides.cmrit@gmail.com" className="text-zinc-400 hover:text-blue-600 transition-colors">
                    <Mail size={18} />
                  </a>
                  <a href="tel:+919951040546" className="text-zinc-400 hover:text-blue-600 transition-colors">
                    <Phone size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Links - Tightened spacing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6">
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Main</p>
                <nav className="flex flex-col gap-2 text-sm text-zinc-500 font-medium">
                  {NAV_LINKS.slice(0, 4).map(link => (
                    <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">{link.name}</Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">More</p>
                <nav className="flex flex-col gap-2 text-sm text-zinc-500 font-medium">
                  {NAV_LINKS.slice(4).map(link => (
                    <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">{link.name}</Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Access</p>
                <nav className="flex flex-col gap-2 text-sm">
                  <Link href="/login" className="font-bold text-zinc-900 hover:text-blue-600 transition-colors">Portal Login</Link>
                  <Link href="/register" className="font-bold text-red-600 hover:text-red-700 transition-colors">Join Now</Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Redlix Credit */}
          <div className="pt-6 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-zinc-400 font-medium">
              © {new Date().getFullYear()} HSG Association, CMRIT. All Rights Reserved.
            </p>

            {/* --- REDLIX CREDIT --- */}
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <span>Designed & Developed by</span>
              <span className="font-bold text-zinc-900 px-2 py-0.5 bg-zinc-50 rounded border border-zinc-100">
                Redlix development team
              </span>
            </div>
          </div>

        </div>
      </footer>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}