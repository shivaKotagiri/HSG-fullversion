"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Menu, X, Mail, Phone,
  LogIn, Footprints, Compass, MountainSnow, ShieldCheck, Crown, 
  HeartPulse, Briefcase, GraduationCap, Ticket, 
  Landmark, Trophy, ChevronLeft, ChevronRight, Instagram,
  AlertTriangle, CheckCircle
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
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  // Emergency contact information from the webpage
  const emergencyPhone1 = "+91 9010635122";
  const emergencyPhone2 = "+91 9951040546"; // Using same number, can be updated if second number is available
  const emergencyEmail = "hindustanscoutsandguides.cmrit@gmail.com";
  const heroImages = [
    "https://i.ibb.co/s9yvNfxg/CMR-INSTITUTE-OF-TECHNOLOGY.png",
    "https://i.ibb.co/Tx8my2xm/Dr-B-Satyanarayana-PRINCIPAL-OF-CMRIT.png",
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
                 <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-blue-600 transition-colors"></span>
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
  {/* 
      CONTAINER LOGIC:
      - aspect-[16/9] on mobile (Standard video shape)
      - md:aspect-[21/9] on tablet (Wider)
      - lg:aspect-[3/1] on desktop (Ultrawide banner)
      This ensures the "box" the image sits in is shaped like your banners.
  */}
  <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] overflow-hidden bg-black">
    
    <div
      className="flex h-full w-full transition-transform duration-500 ease-out"
      style={{ transform: `translateX(-${heroIndex * 100}%)` }}
    >
      {heroImages.map((src, i) => (
        <div key={i} className="relative min-w-full h-full flex items-center justify-center">
          <Image
            src={src}
            alt={`Banner ${i + 1}`}
            fill
            /* 
               IMPORTANT: 'object-contain' guarantees 0% of your image is cut.
               It will fit the entire image inside the box. 
               The 'bg-black' on the parent handles any small gaps.
            */
            className="object-contain"
            sizes="100vw"
            priority={i === 0}
            quality={100}
          />
          
          {/* Subtle gradient overlay - only at the bottom to protect the dots */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
      ))}
    </div>

    {/* Navigation Arrows - Using larger touch targets for mobile responsiveness */}
    <button
      className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-4 rounded-full bg-black/10 text-white backdrop-blur-sm hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
      onClick={() => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length)}
      aria-label="Previous"
    >
      <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
    </button>

    <button
      className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 md:p-4 rounded-full bg-black/10 text-white backdrop-blur-sm hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100"
      onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
      aria-label="Next"
    >
      <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
    </button>

    {/* Pagination Dots - Moved higher for better mobile clearance */}
    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
      {heroImages.map((_, i) => (
        <button
          key={i}
          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
            heroIndex === i 
              ? "w-8 md:w-12 bg-white shadow-lg" 
              : "w-2 md:w-3 bg-white/30 hover:bg-white/60"
          }`}
          onClick={() => setHeroIndex(i)}
          aria-label={`Slide ${i + 1}`}
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
{/* --- Blood Donor Section (Normal Look) --- */}
      <section id="blood-donor" className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Icon in a soft rounded container */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-600 mb-8">
            <HeartPulse size={32} />
          </div>

          {/* Clean, standard typography */}
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Emergency Blood Network
          </h2>
          
          <p className="mt-6 text-zinc-600 text-lg leading-relaxed">
            Join the CMRIT HSG Blood Donor wing. We maintain a real-time database to bridge the gap between donors and those in critical need within our community.
          </p>

          {/* Standard professional buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/blood-donor" 
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-all shadow-lg shadow-red-600/10"
            >
              Register as a Donor
            </Link>
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-red-600 text-red-600 px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-50 transition-all shadow-md"
            >
              <AlertTriangle size={18} />
              Emergency Contact
            </button>
          </div>
        </div>
      </section>
           {/* --- Benefits Section (CLEAN LOOK) --- */}
      <section id="benefits" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em]">Advantages</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter uppercase italic mt-4">Membership Benefits</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: "Govt Jobs", tag: "Quota", desc: "Access reserved seats in Railways and Central sectors.", icon: <Briefcase /> },
              { title: "Education", tag: "Admissions", desc: "Leverage certificates for higher education weightage.", icon: <GraduationCap /> },
              { title: "Travel", tag: "Concession", desc: "Reduced fares for official scouting service travel.", icon: <Ticket /> },
              { title: "Recognition", tag: "Medals", desc: "State and National level honors for top achievers.", icon: <Trophy /> },
              { title: "Leadership", tag: "Exposure", desc: "Connect with national leaders and decision makers.", icon: <Landmark /> },
            ].map((benefit, idx) => (
              <div key={idx} className="group flex flex-col bg-zinc-50 p-8 border border-zinc-100 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:border-blue-500/20">
                <div className="mb-6 flex h-12 w-12 items-center justify-center bg-white text-zinc-400 border border-zinc-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {benefit.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">{benefit.tag}</span>
                <h3 className="text-lg font-black text-zinc-900 mb-3 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500 font-medium">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* --- Footer --- */}
      <footer className="bg-white border-t border-zinc-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16">
            <div className="flex flex-col gap-6 max-w-sm">
              <div className="relative h-20 w-20">
                <Image src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg" alt="HSG Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-zinc-900 uppercase tracking-tight">Hindustan Scouts & Guides Association</h3>
                <p className="text-[10px] font-black text-blue-600 tracking-widest uppercase mt-1"> Rover & Ranger Unit</p>
                <div className="flex gap-4 mt-6">
                  <a href="mailto:hindustanscoutsandguides.cmrit@gmail.com" className="text-zinc-400 hover:text-blue-600 transition-colors"><Mail size={20} /></a>
                  <a href="tel:+919951040546" className="text-zinc-400 hover:text-blue-600 transition-colors"><Phone size={20} /></a>
                  <a href="https://www.instagram.com/hsga_cmrit/?igsh=emc1M2E1b3cwYnR4" target="_blank" className="text-zinc-400 hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Main</p>
            <nav className="flex flex-col gap-2 text-sm text-zinc-500 font-bold uppercase tracking-tighter">
              {NAV_LINKS.slice(0, 4).map(l => <Link key={l.name} href={l.href}>{l.name}</Link>)}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">More</p>
            <nav className="flex flex-col gap-2 text-sm text-zinc-500 font-bold uppercase tracking-tighter">
              {NAV_LINKS.slice(4).map(l => <Link key={l.name} href={l.href}>{l.name}</Link>)}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Access</p>
            <Link href="/login" className="text-sm font-black text-blue-600 uppercase">Portal Login</Link>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-zinc-100 text-center">
        <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Hindustan Scouts & Guides Association, CMRIT Hyderabad. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Emergency Contact Modal */}
      {isEmergencyModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsEmergencyModalOpen(false)}
          />
          
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-red-600 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-white" />
                Emergency Contact
              </h2>
              <button 
                onClick={() => setIsEmergencyModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-zinc-600 text-sm">
                Contact us immediately for emergency blood donation requests. Use the contact information below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="p-2 bg-red-100 text-red-600 rounded-full shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase mb-1">Emergency Phone Number 1</p>
                    <a href={`tel:${emergencyPhone1.replace(/\s/g, '')}`} className="text-zinc-900 font-bold text-base hover:text-red-600 transition-colors">
                      {emergencyPhone1}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="p-2 bg-red-100 text-red-600 rounded-full shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase mb-1">Emergency Phone Number 2</p>
                    <a href={`tel:${emergencyPhone2.replace(/\s/g, '')}`} className="text-zinc-900 font-bold text-base hover:text-red-600 transition-colors">
                      {emergencyPhone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="p-2 bg-red-100 text-red-600 rounded-full shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase mb-1">Emergency Email Address</p>
                    <a href={`mailto:${emergencyEmail}`} className="text-zinc-900 font-bold text-sm hover:text-red-600 transition-colors break-all">
                      {emergencyEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsEmergencyModalOpen(false)}
                  className="w-full rounded-lg bg-red-600 text-white py-2.5 font-semibold text-sm hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
