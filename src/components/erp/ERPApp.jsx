import React, { useState } from 'react';
import { 
  BarChart3, Users, Package, Factory, 
  Settings, LogOut, Search, Bell, 
  TrendingUp, Activity, FlaskConical, Beaker,
  CheckCircle2, AlertTriangle, Clock, Droplets
} from 'lucide-react';
import { cn } from '../../utils/cn';
import logo from '../../assets/logo.png';

export default function ERPApp({ onLogout }) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'Production', icon: Factory },
    { name: 'Formulations', icon: FlaskConical },
    { name: 'Inventory', icon: Package },
    { name: 'Quality Control', icon: Beaker },
    { name: 'Personnel', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm z-20">
        <div className="p-8 pb-10 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Deva" className="h-10 w-auto" />
            <div>
              <h1 className="font-condensed font-black text-xl tracking-tight leading-none">NEXUS ERP</h1>
              <p className="text-[10px] font-bold text-deva-500 uppercase tracking-widest mt-1">Berrack Mfg.</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-10 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold transition-all",
                activeTab === item.name 
                  ? "bg-deva-500 text-white shadow-lg shadow-deva-500/30" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <item.icon size={20} />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
          <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3 mb-6 border border-slate-100">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
              AU
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold truncate">Admin User</p>
              <p className="text-[10px] text-slate-400 font-medium">System Manager</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} />
            Exit System
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 px-10 flex items-center justify-between flex-shrink-0 sticky top-0 z-10">
          <div className="relative w-96 max-w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search batches, formulas, ingredients..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm outline-none ring-2 ring-transparent focus:ring-deva-500/10 transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              FACTORY LINE A • RUNNING
            </div>
            <div className="relative group cursor-pointer">
              <Bell className="text-slate-400 group-hover:text-deva-500 transition-colors" size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
            </div>
            <div className="h-8 w-[1px] bg-slate-100 mx-2" />
            <p className="text-[12px] font-condensed font-black tracking-widest text-slate-500">
              22 APR 2024 • 20:44
            </p>
          </div>
        </header>

        {/* View Area */}
        <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto space-y-10">
            {activeTab === 'Dashboard' ? (
              <DashboardView />
            ) : (
              <div className="flex flex-col items-center justify-center py-40 text-center space-y-4">
                <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-300">
                  <Factory size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Module Under Construction</h3>
                  <p className="text-slate-400 text-sm">We are currently implementing the {activeTab} logic for Berrack Manufacturing.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-condensed font-black text-slate-900 leading-none">PRODUCTION OVERVIEW</h2>
          <p className="text-slate-400 font-medium mt-2">Berrack Manufacturing Co. • Batch Status Feed</p>
        </div>
        <div className="flex gap-3">
          <button className="nx-btn-secondary !py-2">Generate Report</button>
          <button className="nx-btn-primary !py-2">+ New Batch</button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Liters Produced" 
          value="1,240L" 
          trend="+12%" 
          sub="Today's aggregate" 
          icon={Droplets}
          color="blue"
        />
        <StatCard 
          label="Yield Efficiency" 
          value="98.2%" 
          trend="+2.1%" 
          sub="Target: 95%" 
          icon={TrendingUp}
          color="green"
        />
        <StatCard 
          label="QC Passing Rate" 
          value="99.4%" 
          trend="0%" 
          sub="Last 100 Batches" 
          icon={CheckCircle2}
          color="deva"
        />
        <StatCard 
          label="Bottling Progress" 
          value="842/1000" 
          trend="-5%" 
          sub="Pending: 158 units" 
          icon={Package}
          color="amber"
          warning
        />
      </div>

      {/* Live Batches */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-3">
              Active Production Batches
              <span className="px-3 py-1 bg-deva-500/10 text-deva-600 text-[10px] font-black uppercase tracking-widest rounded-full">3 Active</span>
            </h3>
          </div>
          <div className="nx-card overflow-hidden border-none shadow-xl">
             <table className="w-full text-left">
               <thead className="bg-slate-50 border-b border-slate-100">
                 <tr>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Batch ID</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Product</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Stage</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Target</th>
                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Yield</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                 {[
                   { id: 'B-DEV-042', name: 'Deva Handwash (Lavender)', stage: 'Mixing', target: '500L', yield: '65%', color: 'deva' },
                   { id: 'B-DEV-043', name: 'Deva Liquid Soap (Aloe)', stage: 'Quality Check', target: '200L', yield: '92%', color: 'green' },
                   { id: 'B-DEV-044', name: 'Deva Original White', stage: 'Bottling', target: '50L', yield: '100%', color: 'slate' },
                 ].map(batch => (
                   <tr key={batch.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                     <td className="px-8 py-6 font-bold text-slate-400 group-hover:text-deva-500 transition-colors">{batch.id}</td>
                     <td className="px-8 py-6 font-bold text-slate-900">{batch.name}</td>
                     <td className="px-8 py-6">
                       <span className={cn(
                         "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                         {
                           'bg-deva-100 text-deva-600': batch.color === 'deva',
                           'bg-green-100 text-green-600': batch.color === 'green',
                           'bg-slate-100 text-slate-600': batch.color === 'slate'
                         }
                       )}>
                         {batch.stage}
                       </span>
                     </td>
                     <td className="px-8 py-6 font-bold">{batch.target}</td>
                     <td className="px-8 py-6">
                       <div className="flex items-center gap-3">
                         <div className="flex-1 h-1.5 min-w-[80px] bg-slate-100 rounded-full overflow-hidden">
                           <div 
                             className="h-full bg-deva-500 rounded-full" 
                             style={{ width: batch.yield }} 
                           />
                         </div>
                         <span className="text-xs font-black">{batch.yield}</span>
                       </div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>

        <div className="space-y-6 text-left">
           <h3 className="font-bold text-slate-800">Quality Control Feed</h3>
           <div className="space-y-4">
              <QCAlert 
                batch="B-DEV-043" 
                type="PH Balance" 
                value="PH 5.5" 
                status="Verified" 
                time="12m ago"
              />
              <QCAlert 
                batch="B-DEV-041" 
                type="Viscosity" 
                value="High Density" 
                status="Corrected" 
                time="1h ago"
              />
              <QCAlert 
                batch="B-DEV-039" 
                type="Clarity" 
                value="Cloudy" 
                status="Rejected" 
                time="3h ago"
                error
              />
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, sub, icon: Icon, warning }) {
  return (
    <div className="nx-card p-8 border-none shadow-xl hover:translate-y-[-4px] transition-all cursor-default relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-deva-500/5 group-hover:bg-deva-500/10 transition-colors -mr-12 -mt-12 rounded-full" />
      <div className="flex items-start justify-between mb-6 relative">
        <div className="p-3 bg-deva-50 text-deva-600 rounded-xl">
          <Icon size={24} />
        </div>
        <span className={cn(
          "text-[10px] font-black px-2 py-1 rounded-md",
          trend.startsWith('+') ? "bg-green-100 text-green-600" : trend === '0%' ? "bg-slate-100 text-slate-400" : "bg-red-100 text-red-600"
        )}>
          {trend}
        </span>
      </div>
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</p>
      <h4 className="text-4xl font-condensed font-black text-slate-900 mt-1">{value}</h4>
      <p className="text-xs font-semibold text-slate-400 mt-4 flex items-center gap-2">
        {warning && <AlertTriangle size={14} className="text-amber-500 animate-pulse" />}
        {sub}
      </p>
    </div>
  );
}

function QCAlert({ batch, type, status, value, time, error }) {
  return (
    <div className={cn(
      "p-5 rounded-2xl border flex items-center gap-4 transition-all hover:bg-white cursor-pointer",
      error ? "bg-red-50/50 border-red-100" : "bg-white border-slate-100 shadow-sm"
    )}>
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
        error ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
      )}>
        {error ? <AlertTriangle size={24} /> : <CheckCircle2 size={24} />}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-black uppercase text-slate-400">{batch}</p>
          <span className="text-[10px] text-slate-300 font-bold">{time}</span>
        </div>
        <h5 className="font-bold text-sm truncate">{type}: {value}</h5>
        <p className={cn("text-[10px] font-black uppercase", error ? "text-red-500" : "text-green-500")}>
          {status}
        </p>
      </div>
    </div>
  );
}
