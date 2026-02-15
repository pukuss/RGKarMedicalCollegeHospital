import React, { useState } from 'react';
import { 
  QrCode, Smartphone, Landmark, ShieldCheck, 
  ChevronRight, Fingerprint, Receipt, Download,
  CreditCard, Wallet, CheckCircle2, Search, Bell,
  Stethoscope, Activity, Pill, Printer, Lock, 
  User, Calendar, Percent, Building2, Phone, HelpCircle
} from 'lucide-react';

const EnterpriseHospitalPay = () => {
  const [method, setMethod] = useState('card');
  const [emiMonth, setEmiMonth] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Simulation of processing state
  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2500);
  };

  return (
    <div className=" relative top-14 md:20 bg-black text-[#0F172A] font-sans antialiased pb-20">
      
      {/* 1. ENTERPRISE HEADER (Global Nav) */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-3 shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-9 h-9 bg-[#232F3E] rounded-lg flex items-center justify-center text-white">
                  <Building2 size={18} />
               </div>
               <div>
                  <h1 className="text-sm font-black text-slate-800 uppercase tracking-wide leading-none">CMMH <span className="text-[#007185]">PRIME</span></h1>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Medical Center</p>
               </div>
            </div>
            <div className="h-8 w-[1px] bg-slate-200" />
            <div className="text-lg font-bold italic text-[#232F3E]">
              amazon<span className="text-[#FF9900]">pay</span>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex flex-1 max-w-lg mx-12 relative">
             <input type="text" placeholder="Search Invoice ID, Patient Name, or Policy No..." className="w-full bg-slate-100 border-none rounded-md py-2 px-4 text-sm focus:ring-2 focus:ring-[#FF9900] outline-none transition-all" />
             <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-6">
             <button className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#007185]">
                <HelpCircle size={16} /> Support
             </button>
             <div className="relative">
                <Bell size={20} className="text-slate-600" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
             </div>
             <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                <div className="text-right hidden lg:block">
                   <p className="text-xs font-bold text-slate-800">Sarah Wright</p>
                   <p className="text-[10px] font-medium text-slate-500">Paying for: Alexander</p>
                </div>
                <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">SW</div>
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto p-4 md:p-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* =======================
            LEFT COLUMN: CONTEXT & DETAILS 
           ======================= */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* A. PATIENT & ADMISSION CARD */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6">
             <div className="flex gap-5">
                <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                   <User className="w-full h-full p-4 text-slate-300" />
                </div>
                <div>
                   <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-slate-900">Alexander J. Wright</h2>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded tracking-wider">Admitted</span>
                   </div>
                   <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-500">
                      <p className="flex items-center gap-2"><span className="font-bold text-slate-700">ID:</span> 990-211-B</p>
                      <p className="flex items-center gap-2"><span className="font-bold text-slate-700">Ward:</span> Cardio-402</p>
                      <p className="flex items-center gap-2"><span className="font-bold text-slate-700">Dr:</span> A. Sharma (Surg)</p>
                      <p className="flex items-center gap-2"><span className="font-bold text-slate-700">Date:</span> Feb 02, 2026</p>
                   </div>
                </div>
             </div>
             <div className="flex flex-col justify-center items-end border-l border-slate-100 pl-6">
                <button className="flex items-center gap-2 text-xs font-bold text-[#007185] hover:underline mb-3">
                   <Download size={14} /> Download Medical Report
                </button>
                <button className="flex items-center gap-2 text-xs font-bold text-[#007185] hover:underline">
                   <Printer size={14} /> Print Detailed Invoice
                </button>
             </div>
          </section>

          {/* B. INVOICE BREAKDOWN (TABLE) */}
          <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
             <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest">Bill Particulars</h3>
                <span className="text-[10px] font-bold bg-white border border-slate-200 px-3 py-1 rounded text-slate-600">GSTIN: 19AAACC1206</span>
             </div>
             
             <div className="divide-y divide-slate-100">
                {[
                   { name: "Executive Suite (3 Days)", code: "RM-Exec-03", price: 1200.00 },
                   { name: "Cardiology Consultation", code: "CS-Card-01", price: 450.00 },
                   { name: "Pharmacy & Consumables", code: "PH-Med-99", price: 340.00 },
                   { name: "Laboratory Panel (Full)", code: "LB-Pnl-A", price: 210.00 },
                ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                      <div>
                         <p className="text-sm font-bold text-slate-700">{item.name}</p>
                         <p className="text-[10px] font-mono text-slate-400">{item.code}</p>
                      </div>
                      <p className="font-mono font-medium text-slate-900">${item.price.toFixed(2)}</p>
                   </div>
                ))}

                {/* Adjustments */}
                <div className="bg-emerald-50/50 px-6 py-3 flex justify-between items-center text-emerald-700">
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={16} />
                      <span className="text-xs font-bold uppercase tracking-wide">Insurance Coverage (Aetna Health)</span>
                   </div>
                   <span className="font-mono font-bold">-$500.00</span>
                </div>
                <div className="bg-[#FF9900]/10 px-6 py-3 flex justify-between items-center text-[#B16A00]">
                   <div className="flex items-center gap-2">
                      <Wallet size={16} />
                      <span className="text-xs font-bold uppercase tracking-wide">Amazon Prime Savings</span>
                   </div>
                   <span className="font-mono font-bold">-$50.00</span>
                </div>
             </div>
          </section>

          {/* C. PAYMENT METHODS (TABBED) */}
          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
             <h3 className="text-sm font-bold text-slate-800 mb-6 flex items-center gap-2">
                <CreditCard size={18} className="text-[#007185]" /> Choose Payment Mode
             </h3>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* 1. SAVED CARDS */}
                <button 
                  onClick={() => {setMethod('card'); setEmiMonth(null);}}
                  className={`col-span-1 md:col-span-2 p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden ${method === 'card' ? 'border-[#007185] bg-[#007185]/5' : 'border-slate-200 hover:border-slate-300'}`}
                >
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-white rounded-md shadow-sm inline-block">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                      </div>
                      {method === 'card' && <CheckCircle2 className="text-[#007185]" size={18} />}
                   </div>
                   <p className="text-sm font-bold text-slate-700">HDFC Bank Credit Card</p>
                   <p className="text-xs text-slate-500 font-mono">•••• 8892</p>
                </button>

                {/* 2. UPI APPS */}
                <button 
                  onClick={() => {setMethod('upi'); setEmiMonth(null);}}
                  className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${method === 'upi' ? 'border-[#007185] bg-[#007185]/5' : 'border-slate-200 hover:border-slate-300'}`}
                >
                   <Smartphone className={method === 'upi' ? 'text-[#007185]' : 'text-slate-400'} size={24} />
                   <div>
                      <p className="text-xs font-black uppercase tracking-wide text-slate-700">UPI / GPay</p>
                      <p className="text-[10px] text-slate-500">Instant Approval</p>
                   </div>
                </button>

                {/* 3. AMAZON PAY LATER (EMI) */}
                <button 
                   onClick={() => {setMethod('emi'); setEmiMonth(3);}}
                   className={`p-4 rounded-xl border-2 text-left transition-all flex flex-col justify-between ${method === 'emi' ? 'border-[#FF9900] bg-[#FF9900]/10' : 'border-slate-200 hover:border-slate-300'}`}
                >
                   <Percent className={method === 'emi' ? 'text-[#B16A00]' : 'text-slate-400'} size={24} />
                   <div>
                      <p className="text-xs font-black uppercase tracking-wide text-slate-700">Pay Later</p>
                      <p className="text-[10px] text-slate-500">Zero Cost EMI</p>
                   </div>
                </button>
             </div>

             {/* Dynamic Section: EMI Selection */}
             {method === 'emi' && (
                <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200 animate-in slide-in-from-top-2">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Select EMI Tenure</h4>
                      <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-1 rounded">ELIGIBLE LIMIT: $5,000</span>
                   </div>
                   <div className="grid grid-cols-3 gap-4">
                      {[3, 6, 12].map((m) => (
                         <button 
                           key={m} 
                           onClick={() => setEmiMonth(m)}
                           className={`p-3 rounded-lg border text-center transition-all ${emiMonth === m ? 'bg-white border-[#FF9900] shadow-md ring-1 ring-[#FF9900]' : 'bg-white border-slate-200 opacity-60'}`}
                         >
                            <p className="text-lg font-bold text-slate-800">${(1650/m).toFixed(0)}<span className="text-[10px] text-slate-400">/mo</span></p>
                            <p className="text-[10px] font-bold text-slate-500 uppercase">{m} Months</p>
                         </button>
                      ))}
                   </div>
                </div>
             )}
          </section>
        </div>

        {/* =======================
            RIGHT COLUMN: CHECKOUT TERMINAL
           ======================= */}
        <div className="xl:col-span-4">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl sticky top-28">
             
             {/* Total Display */}
             <div className="text-center pb-8 border-b border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Total Amount Due</p>
                <div className="flex justify-center items-baseline gap-1">
                   <span className="text-lg font-bold text-slate-400">$</span>
                   <span className="text-5xl font-black text-slate-900 tracking-tighter">1,650.00</span>
                </div>
                {method === 'emi' && (
                   <p className="text-xs font-bold text-[#B16A00] mt-2 bg-[#FF9900]/10 inline-block px-3 py-1 rounded-full">
                      EMI Selected: ${(1650/emiMonth).toFixed(2)} x {emiMonth} months
                   </p>
                )}
             </div>

             {/* Dynamic Summary */}
             <div className="py-6 space-y-3">
                <div className="flex justify-between text-xs text-slate-500">
                   <span>Subtotal</span>
                   <span className="font-mono">$2,200.00</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                   <span>Tax (GST 18%)</span>
                   <span className="font-mono">$396.00</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-600 font-bold">
                   <span>Insurance & Disc.</span>
                   <span className="font-mono">-$946.00</span>
                </div>
             </div>

             {/* QR Scan Area (Mini) */}
             <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-4 border border-slate-200 mb-6">
                <div className="bg-white p-2 rounded border border-slate-200">
                   <QrCode size={40} className="text-slate-800" />
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-700">Scan to Pay</p>
                   <p className="text-[10px] text-slate-500">Compatible with all UPI apps</p>
                </div>
             </div>

             {/* PRIMARY ACTION BUTTON (AMAZON STYLE) */}
             <button 
               onClick={handlePayment}
               disabled={isProcessing}
               className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-[#0F1111] font-bold py-4 rounded-full shadow-sm border border-[#FCD200] transition-all active:scale-95 flex items-center justify-center gap-2 mb-6"
             >
               {isProcessing ? (
                 <div className="flex items-center gap-2">
                   <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                   <span className="text-xs uppercase tracking-wide">Processing...</span>
                 </div>
               ) : (
                 <>
                   <Lock size={16} /> Pay ${method === 'emi' ? (1650/emiMonth).toFixed(2) : '1,650.00'}
                 </>
               )}
             </button>

             {/* Trust Footer */}
             <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-500 bg-slate-50 py-2 rounded">
                   <ShieldCheck size={14} className="text-emerald-500" />
                   <span>Amazon A-to-z Medical Guarantee</span>
                </div>
                <p className="text-[9px] text-center text-slate-400 leading-relaxed px-4">
                   By continuing, you agree to Amazon Payments <a href="#" className="text-[#007185] underline">Terms</a> and CMMH <a href="#" className="text-[#007185] underline">Privacy Policy</a>.
                </p>
             </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default EnterpriseHospitalPay;