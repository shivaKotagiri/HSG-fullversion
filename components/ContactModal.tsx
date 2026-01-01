"use client";

import { X, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            Contact Us
          </h2>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          <div className="space-y-4">
            <p className="text-zinc-600 text-sm">
              Have questions about Hindustan Scouts & Guides? Reach out to us directly or fill out the form below.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-full shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase">Phone</p>
                  <a href="tel:+919951040546" className="text-zinc-900 font-medium hover:text-blue-600 transition-colors">
                    +91 9951040546
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-full shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase">Email</p>
                  <a href="mailto:hindustanscoutsandguides.cmrit@gmail.com" className="text-zinc-900 font-medium hover:text-blue-600 transition-colors break-all">
                    hindustanscoutsandguides.cmrit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-full shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase">Address</p>
                  <p className="text-zinc-900 font-medium text-sm leading-snug">
                    CMR Institute of Technology,<br/>
                    Kandlakoya, Medchal Road,<br/>
                    Hyderabad - 501401
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* Simple Form Placeholder */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                Send a Message
              </label>
              <textarea 
                id="message"
                rows={3}
                className="w-full rounded-lg border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={16} />
              SendMessage
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
