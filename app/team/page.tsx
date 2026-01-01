"use client";

import Link from "next/link";
import { ArrowLeft, Hash } from "lucide-react";

// --- Data Configuration ---
const FACULTY = {
  name: "Dr. Putta Praveen Reddy",
  role: "HSGA Coordinator",
  id: "FAC-001",
  image: "https://i.ibb.co/FkNd7BWK/Dr-Putta-Praveen-Reddy.jpg",
};

const BATCH_2024_2025 = [
  { name: "M. Shiva Kumar", role: "Student Coordinator", id: "24-001", image: "https://i.ibb.co/5Xwy876D/M-Shiva-Kumar.jpg" },
  { name: "Pavan Bantu", role: "Student Coordinator", id: "24-002", image: "https://i.ibb.co/chVm6xvq/Pavan-Bantu.jpg" },
  { name: "Abhinav Karthik", role: "Student Coordinator", id: "24-003", image: "https://i.ibb.co/Ng2Kzwgn/Abhinav-Karthik.jpg" },
  { name: "Yogeeshwara Pavan Kumar", role: "Student Coordinator", id: "24-004", image: "https://i.ibb.co/HQq66Cx/Yogeeshwara-Pavan-Kumar.jpg" },
  { name: "Varala Jaya Prakash", role: "Student Coordinator", id: "24-005", image: "https://i.ibb.co/nNd95wrS/Varala-Jaya-Prakash.jpg" },
  { name: "Mallesh", role: "Student Coordinator", id: "24-006", image: "https://i.ibb.co/RpQh6fGS/Mallesh.jpg" },
  { name: "Sri Vardhan", role: "Student Coordinator", id: "24-007", image: "https://i.ibb.co/4wr0ywDk/Sri-Vardhan.jpg" },
  { name: "Sathwika Golanakonda", role: "Student Coordinator", id: "24-008", image: "https://i.ibb.co/9HL42zBX/Sathwika-Golanakonda.jpg" },
  { name: "Sritha Nallamala", role: "Student Coordinator", id: "24-009", image: "https://i.ibb.co/Y7Vtrg07/Sritha-Nallamala.png" },
  { name: "Sai Sree Mallempati", role: "Student Coordinator", id: "24-010", image: "https://i.ibb.co/XfN8H1tf/Sai-Sree-Mallempati.jpg" },
   { name: "Pranavi", role: "Student Coordinator", id: "24-011", image: "https://i.ibb.co/ZRvmBqG5/Pranavi.jpg" },
   { name: "Kalyan", role: "Student Coordinator", id: "24-012", image: "https://i.ibb.co/YFDDdd3K/Kalyan.jpg" }
];




const BATCH_2022_2023 = [
  { name: "Sri Bhavith Bodike", role: "Student Coordinator", id: "22-001", image: "https://i.ibb.co/H6bCjD2/Sri-Bhavith-Bodike.jpg" },
  { name: "V. Uthej Reddy", role: "Student Coordinator", id: "22-002", image: "https://i.ibb.co/vx4mMbzm/V-Uthej-Reddy.jpg" },
  { name: "Thimmishetty Varshini", role: "Student Coordinator", id: "22-003", image: "https://i.ibb.co/CpX5FH8G/Thimmishetty-Varshini.jpg" },
  { name: "Janavi", role: "Student Coordinator", id: "22-004", image: "https://i.ibb.co/tppzpw9t/Janavi.jpg" },
  { name: "K. Sumith", role: "Student Coordinator", id: "22-005", image: "https://i.ibb.co/TDrngSZb/K-Sumith.jpg" },
  { name: "Adepu Ruthvik Chandran", role: "Student Coordinator", id: "22-006", image: "https://i.ibb.co/G4xbDGsN/Adepu-Ruthvik-Chandran.jpg" },
  { name: "Nithin N", role: "Student Coordinator", id: "22-007", image: "https://i.ibb.co/m5h7XWrz/Nithin-N.jpg" },
  { name: "Mrinal Devi", role: "Student Coordinator", id: "22-008", image: "https://i.ibb.co/0pJxTgDh/Mrinal-Devi.jpg" },
  { name: "Mengarthi Udaycharan", role: "Student Coordinator", id: "22-009", image: "https://i.ibb.co/GfHpSR5S/Mengarthi-Udaycharan.jpg" },
  { name: "T. Vishnuvardhan Reddy", role: "Student Coordinator", id: "22-010", image: "https://i.ibb.co/B5nkD3JF/T-Vishnuvardhan-Reddy.jpg" },
  { name: "Voorukonda Shiva Reddy", role: "Student Coordinator", id: "22-011", image: "https://i.ibb.co/Y4Cvs6dh/Voorukonda-Shiva-Reddy.jpg" },
   {name: "Sampath", role: "Student Coordinator", id: "22-012", image: "https://i.ibb.co/PsRhFxcY/Sampath.jpg" }
];


const BATCH_2020_2021 = [
  { name: "Ch. Ravi Kiran", role: "Student Coordinator", id: "20-001", image: "https://i.ibb.co/8n8R5HHL/Ch-Ravi-Kiran.jpg" },
  { name: "B. Sai Siddhartha", role: "Student Coordinator", id: "20-002", image: "https://i.ibb.co/ym08Xty2/B-Sai-Siddhartha.jpg" },
  { name: "Kartan Shiva Shenkar", role: "Student Coordinator", id: "20-003", image: "https://i.ibb.co/G3cs169m/Kartan-Shiva-Shenkar.jpg" },
  { name: "Tarun Koduru", role: "Student Coordinator", id: "20-004", image: "https://i.ibb.co/jkVsFtkG/Tarun-Koduru.jpg" },
];


export default function TeamPage() {
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
            HSGA CMRIT Team
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* --- Section: Faculty --- */}
        <section className="mb-32 flex flex-col items-center">
          <div className="text-center mb-16 relative w-full">
            <h2 className="text-2xl font-bold text-zinc-800 relative z-10 bg-white inline-block px-6 uppercase tracking-widest">
              Faculty Coordinator
            </h2>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-200 -z-0"></div>
          </div>

          <div className="relative w-full max-w-[340px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky-200 rounded-sm bg-white"></div>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-sky-200 rounded-sm bg-white shadow-sm"></div>
            <div className="relative bg-white border border-sky-400 p-6 shadow-xl rounded-sm text-center">
              <div className="aspect-square w-full mb-6 border border-sky-100 p-2 bg-zinc-50">
                <img 
                  src={FACULTY.image} 
                  alt={FACULTY.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400?text=Faculty"; }}
                />
              </div>
              <h2 className="text-xl font-bold text-zinc-800 uppercase tracking-tight">{FACULTY.name}</h2>
              <p className="text-sky-600 text-xs font-bold mt-2 uppercase tracking-widest">{FACULTY.role}</p>
            </div>
          </div>
        </section>

        {/* --- Student Sections --- */}
        <div className="space-y-40">
          <MemberGrid title="Student Coordinators 2024 - 2025" members={BATCH_2024_2025} />
          <MemberGrid title="Student Coordinators 2022 - 2023" members={BATCH_2022_2023} />
          <MemberGrid title="Student Coordinators 2020 - 2021" members={BATCH_2020_2021} />
        </div>

      </div>
    </div>
  );
}

// --- Reusable Grid Component ---

function MemberGrid({ title, members }: { title: string, members: any[] }) {
  return (
    <section>
      {/* Title with the horizontal line crossing through it */}
      <div className="text-center mb-20 relative">
        <h2 className="text-xl font-bold text-zinc-700 relative z-10 bg-white inline-block px-6 uppercase tracking-widest">
          {title}
        </h2>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sky-100 -z-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
        {members.map((member, idx) => (
          <div key={idx} className="relative group max-w-[300px] mx-auto w-full">
            
            {/* The "Stacked" Effect Frames */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 border border-sky-100 rounded-sm bg-white transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-sky-100 rounded-sm bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            
            {/* Main Foreground Card */}
            <div className="relative bg-white border border-sky-400 p-4 shadow-lg rounded-sm text-center h-full flex flex-col items-center">
              
              {/* Image Frame */}
              <div className="w-full border border-sky-50 p-1.5 mb-4 bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/300?text=Student"; }}
                  />
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-auto py-2">
                <h3 className="text-md font-bold text-zinc-800 tracking-tight group-hover:text-sky-600 transition-colors uppercase">
                  {member.name}
                </h3>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-mono text-zinc-400">
                  <Hash size={10} className="text-sky-300" />
                  ID: {member.id}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}