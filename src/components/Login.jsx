import React, { useState } from 'react';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Login({ onLogin, onBack }) {
  const [email, setEmail] = useState('admin@berrack.com.gh');
  const [password, setPassword] = useState('********');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-deva-50/50 -z-10 translate-x-1/2 lg:translate-x-1/2 -skew-x-12" />
      
      {/* Left Side: Branding */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-0 space-y-8 md:space-y-10 text-center lg:text-left">
        <button onClick={onBack} className="text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center justify-center lg:justify-start gap-2 transition-colors active:scale-95">
          ← Back to Public Site
        </button>
        
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
             <img src={logo} alt="Deva" className="h-12 md:h-16 w-auto" />
             <div>
               <h1 className="font-condensed font-black text-3xl md:text-4xl tracking-tighter text-slate-900 leading-none uppercase">Nexus ERP</h1>
               <p className="text-[10px] md:text-sm font-bold text-deva-500 uppercase tracking-[0.3em] mt-1">Berrack Manufacturing</p>
             </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-condensed font-black text-slate-900 uppercase leading-tight">
             Secure Access Terminal
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-sm leading-relaxed font-medium mx-auto lg:mx-0">
             Authorized personnel only. Please verify your identity to access the Berrack production and inventory management system.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
           <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <ShieldCheck className="text-deva-500 mx-auto lg:mx-0" size={24} />
              <p className="text-[10px] font-black uppercase text-slate-400">Security Level</p>
              <p className="text-xs md:text-sm font-bold">Encrypted L5</p>
           </div>
           <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <User className="text-deva-500 mx-auto lg:mx-0" size={24} />
              <p className="text-[10px] font-black uppercase text-slate-400">Active Node</p>
              <p className="text-xs md:text-sm font-bold">Factory Line A</p>
           </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-12 bg-slate-50 lg:bg-transparent pb-12 lg:pb-0">
        <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-deva-500/10 border border-slate-100 mb-8 lg:mb-0">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">Personnel Login</h3>
            <p className="text-sm text-slate-400 font-medium mt-1">Enter your credentials below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  disabled
                  className="nx-input pl-12 bg-slate-50 border-transparent text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password"
                  value={password}
                  disabled
                  className="nx-input pl-12 bg-slate-50 border-transparent text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <button type="submit" className="w-full nx-btn-primary h-14 !rounded-2xl flex items-center justify-center gap-3 mt-4">
              Access Dashboard
              <ArrowRight size={20} />
            </button>

            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4">
               Forgot Password? Contact IT Support
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
