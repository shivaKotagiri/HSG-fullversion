"use client";

import Link from "next/link";
import { ArrowLeft, FileText, Folder, Files } from "lucide-react";

export default function DocumentsPage() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden selection:bg-blue-500/30">
      
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 px-6 max-w-2xl mx-auto text-center">
        
        {/* Navigation Back */}
        <div className="absolute top-8 left-6 md:left-12">
           <Link 
             href="/" 
             className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
           >
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all">
               <ArrowLeft size={16} />
             </div>
             <span>Back to Home</span>
           </Link>
        </div>

        {/* Hero Visual */}
        <div className="mx-auto mb-10 relative">
           <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl shadow-blue-900/20 relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <FileText size={48} className="text-zinc-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center animate-bounce delay-700">
                 <Folder size={20} className="text-blue-400" />
              </div>
              <div className="absolute -bottom-2 -left-4 w-10 h-10 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center justify-center animate-bounce">
                 <Files size={18} className="text-indigo-400" />
              </div>
           </div>
        </div>

        {/* Text */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Work in Progress
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Essential <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Resources & Docs</span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            We are compiling all necessary forms, policy documents, and training materials. You will soon be able to access and download them here.
          </p>
        </div>

        {/* Notification Button */}
        <div className="mt-10">
           <button disabled className="px-8 py-3 bg-zinc-800/50 border border-zinc-700 text-zinc-500 rounded-full font-medium cursor-not-allowed">
             Check back later
           </button>
        </div>

      </div>

      {/* Footer copyright for this page */}
      <div className="absolute bottom-6 text-xs text-zinc-600">
        &copy; 2024 HSG CMRIT. All rights reserved.
      </div>

    </div>
  );
}
