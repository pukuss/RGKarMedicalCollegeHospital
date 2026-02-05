import React from "react";
import { motion } from "framer-motion";
import { 
  HeartPulse, MapPin, Phone, Mail, ArrowRight, 
  Facebook, Twitter, Instagram, Linkedin, ShieldCheck, 
  Globe, Zap, Award, Users, Clock
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#010409] pt-40 pb-12 overflow-hidden text-slate-300">
      
      {/* --- 1. AMBIENT BACKGROUND ANIMATION (Neural Network Style) --- */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(37, 99, 235, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Animated Glow Orbs */}
          <circle cx="20%" cy="30%" r="150" fill="rgba(37, 99, 235, 0.15)" className="animate-pulse" />
          <circle cx="80%" cy="70%" r="200" fill="rgba(14, 165, 233, 0.1)" className="animate-bounce" style={{ animationDuration: '8s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- 2. THE "BENTO" CTA PANEL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24"
        >
          {/* Large Main CTA */}
          <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-6">
                <Zap size={14} className="fill-current" /> AI-POWERED DIAGNOSTICS
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
                Redefining the Future <br /> of Medical Excellence.
              </h2>
              <button className="px-8 py-4 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-3 group/btn shadow-xl shadow-blue-900/40">
                Book a Free Consultation <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
            {/* Background SVG Animation for CTA */}
            <svg className="absolute right-[-10%] bottom-[-20%] w-2/3 opacity-20 group-hover:rotate-12 transition-transform duration-1000" viewBox="0 0 200 200">
               <path fill="#FFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.5,-0.9C83.9,13.8,77.3,27.7,68.4,39.7C59.5,51.7,48.3,61.9,35.4,69.1C22.4,76.3,7.8,80.5,-6.6,79.1C-21,77.7,-35.1,70.7,-47.5,61.5C-59.9,52.3,-70.5,41,-76.3,27.7C-82.1,14.4,-83,0.9,-79.8,-12.3C-76.6,-25.5,-69.3,-38.4,-58.9,-46.9C-48.4,-55.4,-34.9,-59.5,-22.4,-67.3C-9.9,-75.1,1.5,-86.6,14.7,-84.9C27.9,-83.1,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>

          {/* Side Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 backdrop-blur-xl">
              <Clock className="text-blue-500 mb-4" size={32} />
              <h4 className="text-white font-bold text-xl mb-1">24/7 Response</h4>
              <p className="text-slate-500 text-sm">Emergency triage available via mobile or phone.</p>
            </div>
            <div className="flex-1 p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 backdrop-blur-xl">
              <Award className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-white font-bold text-xl mb-1">Global Top 10</h4>
              <p className="text-slate-500 text-sm">Recognized for surgical and diagnostic innovation.</p>
            </div>
          </div>
        </motion.div>

        {/* --- 3. MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Logo & Statistics */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="text-blue-500" size={36} strokeWidth={2.5} />
                <span className="text-3xl font-black text-white tracking-tighter uppercase">MediCare<span className="text-blue-600">+</span></span>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg italic">
                "Where precision technology meets the heart of human compassion."
              </p>
            </div>

            {/* LIVE COUNTER STATS (SVG GIF Look-alike) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-2xl font-black text-white">12k+</p>
                <p className="text-[10px] uppercase font-bold text-blue-500 tracking-widest flex items-center gap-1">
                  <Users size={12} /> Satisfied Patients
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-2xl font-black text-white">99.8%</p>
                <p className="text-[10px] uppercase font-bold text-green-500 tracking-widest flex items-center gap-1">
                  <ShieldCheck size={12} /> Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {['Virtual Care', 'Neuroscience', 'Oncology', 'Cardiology', 'Genomics'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Patient Center</h4>
            <ul className="space-y-4 text-slate-500">
              {['Portal Login', 'Pay Bill', 'Records', 'Insurance', 'Feedback'].map(item => (
                <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* High-detail Contact Block */}
          <div className="lg:col-span-4 p-8 rounded-4xl bg-linear-to-b from-blue-600/10 to-transparent border border-blue-500/10">
            <div className="flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" /> Global HQ
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20"><MapPin size={18} /></div>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">102 Tech Plaza, Sector V, Salt Lake City,<br />Kolkata, India - 700091</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20"><Phone size={18} /></div>
                <p className="text-white font-bold">+91 8945512739</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20"><Mail size={18} /></div>
                <p className="text-white font-bold">prashantaa007@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. THE ULTIMATE BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#010409] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="doc" />
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500"><span className="text-white font-bold">50+ Specialists</span> online right now</p>
          </div>
          
          <div className="flex items-center gap-8">
             <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-600 hover:text-white transition-colors"><Icon size={20} /></a>
                ))}
             </div>
             <div className="h-6 w-px bg-white/10 hidden md:block" />
             <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">© {currentYear} MEDICARE+ GROUP</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;