import React, { useState } from 'react';
import { 
  BarChart3, Users, Package, Factory, 
  Settings, LogOut, Search, Bell, 
  TrendingUp, Activity, FlaskConical, Beaker,
  CheckCircle2, AlertTriangle, Clock, Droplets,
  Fingerprint, CalendarRange, Wallet, UserCheck, Plane, 
  CalendarCheck, ShieldAlert, Award, Briefcase, Menu, X, User
} from 'lucide-react';
import { cn } from '../../utils/cn';
import logo from '../../assets/logo.png';

export default function ERPApp({ onLogout }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: BarChart3, primary: true },
    { name: 'Production', icon: Factory, primary: true },
    { name: 'Personnel', icon: Users, primary: true },
    { name: 'Inventory', icon: Package, primary: true },
    { name: 'Formulations', icon: FlaskConical },
    { name: 'Quality Control', icon: Beaker },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "bg-white border-r border-slate-200 flex-col h-full shadow-sm z-50 transition-all duration-300",
        "fixed inset-y-0 left-0 w-64 md:relative md:flex",
        isMobileMenuOpen ? "flex translate-x-0" : "flex -translate-x-full md:translate-x-0"
      )}>
        <div className="p-8 pb-10 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Deva" className="h-10 w-auto" />
            <div>
              <h1 className="font-condensed font-black text-xl tracking-tight leading-none uppercase">Nexus ERP</h1>
              <p className="text-[10px] font-bold text-deva-500 uppercase tracking-widest mt-1">Berrack Mfg.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden p-2 text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-10 px-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                setIsMobileMenuOpen(false);
              }}
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
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-slate-100 px-4 flex items-center justify-between flex-shrink-0 z-30">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 -ml-2 text-slate-600 active:scale-90 transition-transform"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Deva" className="h-7 w-auto" />
            <h1 className="font-condensed font-black text-sm tracking-tight uppercase">Nexus</h1>
          </div>
          <div className="flex items-center gap-3">
             <Bell size={20} className="text-slate-400" />
             <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-500 border border-slate-200">
               AU
             </div>
          </div>
        </header>

        {/* Desktop Topbar */}
        <header className="hidden md:flex h-20 bg-white border-b border-slate-200 px-10 items-center justify-between flex-shrink-0 sticky top-0 z-10 text-left">
          <div className="relative w-96 max-w-full text-left">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search batches, formulas, ingredients..." 
              className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm outline-none ring-2 ring-transparent focus:ring-deva-500/10 transition-all text-left"
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
              22 APR 2024 • 20:53 V1.1
            </p>
          </div>
        </header>

        {/* View Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-10 bg-slate-50/50 safe-area-bottom">
          <div className="max-w-7xl mx-auto space-y-6 md:space-y-10">
            {activeTab === 'Dashboard' ? (
              <DashboardView />
            ) : activeTab === 'Personnel' ? (
              <PersonnelView />
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

        {/* Bottom Navigation - Mobile only */}
        <nav className="md:hidden h-16 bg-white border-t border-slate-100 flex items-center justify-around px-2 pb-safe z-30 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
          {navItems.filter(i => i.primary).map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all",
                activeTab === item.name ? "text-deva-500" : "text-slate-400"
              )}
            >
              <item.icon size={20} className={cn(activeTab === item.name && "scale-110")} />
              <span className="text-[10px] font-black uppercase tracking-tighter">{item.name}</span>
            </button>
          ))}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center gap-1 px-3 py-1 text-slate-400"
          >
            <Menu size={20} />
            <span className="text-[10px] font-black uppercase tracking-tighter">More</span>
          </button>
        </nav>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
          <div className="nx-card border-none shadow-xl overflow-x-auto no-scrollbar">
             <table className="w-full text-left min-w-[600px]">
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
      <p className="text-xs font-semibold text-slate-400 mt-4 flex items-center gap-2 text-left">
        {warning && <AlertTriangle size={14} className="text-amber-500 animate-pulse" />}
        {sub}
      </p>
    </div>
  );
}

function QCAlert({ batch, type, status, value, time, error }) {
  return (
    <div className={cn(
      "p-5 rounded-2xl border flex items-center gap-4 transition-all hover:bg-white cursor-pointer text-left",
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

function PersonnelView() {
  const [subTab, setSubTab] = useState('Employees');

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-condensed font-black text-slate-900 leading-none uppercase">Personnel Management</h2>
          <p className="text-slate-400 font-medium mt-2">Workforce Analytics • Shift Control • Payroll</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
          {['Employees', 'Attendance', 'Shifts', 'Leave', 'Payroll'].map(tab => (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className={cn(
                "px-5 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                subTab === tab ? "bg-deva-500 text-white shadow-md shadow-deva-500/20" : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[500px]">
        {subTab === 'Employees' && <EmployeeSubView />}
        {subTab === 'Attendance' && <AttendanceSubView />}
        {subTab === 'Shifts' && <ShiftSubView />}
        {subTab === 'Leave' && <LeaveSubView />}
        {subTab === 'Payroll' && <PayrollSubView />}
      </div>
    </div>
  );
}

function EmployeeSubView() {
  const employees = [
    { id: 'STF-001', name: 'Akwasi Mensah', role: 'Production Supervisor', dept: 'Soap Production', shift: 'Morning', status: 'Active' },
    { id: 'STF-004', name: 'Kofi Owusu', role: 'Quality Analyst', dept: 'QC Labs', shift: 'Morning', status: 'On Leave' },
    { id: 'STF-009', name: 'Ama Serwaa', role: 'Machine Operator', dept: 'Packaging', shift: 'Night', status: 'Active' },
    { id: 'STF-012', name: 'Ekow Baidoo', role: 'Chemist', dept: 'R&D', shift: 'Morning', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-slate-800">Staff Registry</h3>
        <button className="nx-btn-primary !py-2 !px-4 text-xs">+ Add Employee</button>
      </div>
      <div className="nx-card border-none shadow-xl overflow-x-auto no-scrollbar">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">ID</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Dept</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Shift</th>
              <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {employees.map(emp => (
              <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                <td className="px-8 py-6 font-bold text-slate-400">{emp.id}</td>
                <td className="px-8 py-6">
                  <div className="font-bold text-slate-900 group-hover:text-deva-500 transition-colors">{emp.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{emp.role}</div>
                </td>
                <td className="px-8 py-6 text-sm font-medium">{emp.dept}</td>
                <td className="px-8 py-6">
                   <div className="flex items-center gap-2">
                     <Clock size={14} className="text-slate-300" />
                     <span className="text-xs font-bold text-slate-600">{emp.shift}</span>
                   </div>
                </td>
                <td className="px-8 py-6">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                    emp.status === 'Active' ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                  )}>
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AttendanceSubView() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 text-left">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Biometric Feed (Live)</h3>
          <div className="flex items-center gap-2 text-[10px] font-black text-green-500 bg-green-50 px-3 py-1 rounded-full border border-green-100">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             TERMINAL ONLINE • B-101
          </div>
        </div>
        <div className="nx-card border-none shadow-xl p-0 overflow-x-auto no-scrollbar">
          <table className="w-full text-left min-w-[500px]">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Timestamp</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Employee</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Event</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { time: '08:02 AM', name: 'Akwasi Mensah', event: 'Clock-In', status: 'On Time' },
                { time: '08:15 AM', name: 'Kwame Boahen', event: 'Clock-In', status: '15m Late', late: true },
                { time: '08:45 AM', name: 'Ama Lu', event: 'Clock-In', status: 'On Time' },
                { time: '05:00 PM', name: 'Seth Ofori', event: 'Clock-Out', status: 'Completed' },
              ].map((log, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-5 flex items-center gap-3">
                    <Fingerprint size={16} className="text-deva-400" />
                    <span className="text-sm font-bold text-slate-600">{log.time}</span>
                  </td>
                  <td className="px-8 py-5 font-bold text-slate-900">{log.name}</td>
                  <td className="px-8 py-5 text-xs font-bold text-slate-400">{log.event}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "text-[10px] font-black uppercase",
                      log.late ? "text-red-500" : "text-green-500"
                    )}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="font-bold text-slate-800">Attendance KPIs</h3>
        <div className="grid gap-4">
          <div className="nx-card p-6 border-none shadow-lg">
             <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Present Today</p>
             <h4 className="text-3xl font-condensed font-black mt-1">94%</h4>
             <p className="text-[10px] text-green-500 font-bold mt-2">+2% from yesterday</p>
          </div>
          <div className="nx-card p-6 border-none shadow-lg bg-red-50/30">
             <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Late Arrivals</p>
             <h4 className="text-3xl font-condensed font-black mt-1">08</h4>
             <p className="text-[10px] text-red-500 font-bold mt-2">Requires Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShiftSubView() {
  return (
    <div className="space-y-8 text-left">
       <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Operational Shifts (Next 24h)</h3>
          <div className="flex gap-2">
             <button className="nx-btn-secondary !py-2 !px-4 text-[10px]">Print Roster</button>
             <button className="nx-btn-primary !py-2 !px-4 text-[10px]">Auto-Rotate</button>
          </div>
       </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShiftCard title="Morning Core" time="06:00 - 14:00" staffed="12/12" status="Full" />
          <ShiftCard title="Afternoon Flow" time="14:00 - 22:00" staffed="08/12" status="Understaffed" warning />
          <ShiftCard title="Night Production" time="22:00 - 06:00" staffed="10/12" status="Allocated" />
       </div>
       <div className="nx-card p-8 border-none shadow-xl relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-32 h-full bg-deva-50/30 -mr-16 skew-x-12" />
          <div className="flex items-center gap-4 mb-6">
             <CalendarRange className="text-deva-500" />
             <h4 className="font-bold py-2">Upcoming Rotations</h4>
          </div>
          <div className="space-y-4">
             {[
               { date: 'Mon, 24 Apr', team: 'Blue Team', action: 'Night → Morning', reason: 'Routine Rotation' },
               { date: 'Tue, 25 Apr', team: 'Gold Team', action: 'Off → Night', reason: 'Production Surge' },
             ].map((rot, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                   <div>
                      <p className="text-xs font-black text-slate-400 uppercase">{rot.date}</p>
                      <p className="font-bold text-slate-800">{rot.team}: {rot.action}</p>
                   </div>
                   <span className="text-[10px] font-black uppercase text-deva-500">{rot.reason}</span>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}

function ShiftCard({ title, time, staffed, status, warning }) {
  return (
    <div className={cn(
      "nx-card p-6 border-none shadow-lg transition-all hover:scale-[1.02] text-left",
      warning ? "bg-amber-50/50 ring-1 ring-amber-100" : "bg-white"
    )}>
       <div className="flex justify-between items-start mb-4">
          <h4 className="font-black text-lg font-condensed">{title}</h4>
          <span className={cn(
            "text-[10px] font-black uppercase px-2 py-1 rounded-md",
            warning ? "text-amber-600 bg-amber-100" : "text-green-600 bg-green-100"
          )}>{status}</span>
       </div>
       <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-400">
             <Clock size={16} />
             <span className="text-sm font-bold">{time}</span>
          </div>
          <div className="space-y-2">
             <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                <span>Staffing</span>
                <span>{staffed}</span>
             </div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={cn("h-full rounded-full", warning ? "bg-amber-500" : "bg-green-500")} 
                  style={{ width: (parseInt(staffed.split('/')[0])/parseInt(staffed.split('/')[1])*100) + '%' }} 
                />
             </div>
          </div>
       </div>
    </div>
  );
}

function LeaveSubView() {
  return (
    <div className="space-y-8 text-left">
       <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Leave Requests & Availability</h3>
          <button className="nx-btn-primary !py-2 !px-4 text-[10px]">Policy Config</button>
       </div>
       <div className="nx-card border-none shadow-xl overflow-x-auto no-scrollbar">
          <table className="w-full text-left min-w-[700px]">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Requester</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Period</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Type</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'Kofi Owusu', dates: '22 - 29 Apr', type: 'Annual Leave', days: '7 Days', status: 'Pending Review' },
                { name: 'Sarah Addo', dates: '25 - 26 Apr', type: 'Sick Leave', days: '2 Days', status: 'Review Needed', warning: true },
              ].map((req, i) => (
                <tr key={i}>
                  <td className="px-8 py-6">
                    <div className="font-bold text-slate-900">{req.name}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Quality Analyst</div>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-600">
                    {req.dates} <span className="text-slate-400 ml-2">({req.days})</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-2 text-xs font-bold">
                       <Plane size={14} className="text-slate-300" />
                       {req.type}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                      req.warning ? "bg-red-100 text-red-600" : "bg-deva-100 text-deva-600"
                    )}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                       <button className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20">
                          <CheckCircle2 size={16} />
                       </button>
                       <button className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors">
                          <LogOut size={16} className="rotate-180" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
    </div>
  );
}

function PayrollSubView() {
  return (
    <div className="space-y-8 text-left">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
             <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Payroll Month</p>
                <h3 className="text-2xl font-black font-condensed">APRIL 2024</h3>
             </div>
             <div className="h-10 w-[1px] bg-slate-200" />
             <div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Valuation</p>
                <h3 className="text-2xl font-black font-condensed text-deva-600">GHS 84,250.00</h3>
             </div>
          </div>
          <div className="flex gap-3">
             <button className="nx-btn-secondary !py-2 !px-5 text-xs flex items-center gap-2">
                <Wallet size={16} />
                Generate Vouchers
             </button>
             <button className="nx-btn-primary !py-2 !px-5 text-xs flex items-center gap-2">
                Process Month
                <ArrowRight size={16} />
             </button>
          </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 nx-card border-none shadow-xl overflow-x-auto no-scrollbar">
             <table className="w-full text-left min-w-[600px]">
                <thead className="bg-slate-50 border-b border-slate-100">
                   <tr>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Employee</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Basic Pay</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Total Ded.</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Net Pay</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                   {[
                     { name: 'Akwasi Mensah', basic: '5,500', ded: '825', net: '4,675', status: 'Verified' },
                     { name: 'Ama Serwaa', basic: '3,200', ded: '480', net: '2,720', status: 'Pending' },
                     { name: 'Ekow Baidoo', basic: '7,800', ded: '1,170', net: '6,630', status: 'Verified' },
                   ].map((pay, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-slate-900">{pay.name}</td>
                        <td className="px-8 py-6 font-bold font-condensed tracking-wide text-slate-600">GHS {pay.basic}</td>
                        <td className="px-8 py-6 font-bold font-condensed tracking-wide text-red-400">GHS {pay.ded}</td>
                        <td className="px-8 py-6 font-black font-condensed tracking-tight text-slate-900 border-l border-slate-50">GHS {pay.net}</td>
                        <td className="px-8 py-6">
                           <span className={cn(
                             "text-[10px] font-black uppercase",
                             pay.status === 'Verified' ? "text-green-500" : "text-amber-500"
                           )}>{pay.status}</span>
                        </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
          <div className="space-y-6 text-left">
             <h3 className="font-bold text-slate-800">Statutory Compliance</h3>
             <div className="nx-card p-6 border-none shadow-lg space-y-6">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Statutory Estimates (Ghana)</p>
                  <div className="space-y-3">
                     <DeductionRow label="SSNIT Tier 1 & 2" percent="13.5%" total="GHS 11,373" />
                     <DeductionRow label="PAYE (Income Tax)" percent="Est. 12%" total="GHS 10,110" />
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                   <div className="flex items-center gap-3 text-amber-500">
                      <ShieldAlert size={18} />
                      <p className="text-xs font-bold leading-tight">Tax filing deadline: May 15th, 2024</p>
                   </div>
                </div>
             </div>
             <div className="p-6 bg-slate-900 rounded-2xl text-white space-y-4">
                <div className="flex justify-between items-start">
                   <Award className="text-deva-400" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Efficiency Bonus</span>
                </div>
                <div>
                   <h5 className="font-bold">Team Performance Pool</h5>
                   <p className="text-[10px] text-slate-400 font-medium">GHS 5,000 to be distributed based on yield efficiency.</p>
                </div>
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 transition-all rounded-xl text-[10px] font-black uppercase">Distribute Now</button>
             </div>
          </div>
       </div>
    </div>
  );
}

function DeductionRow({ label, percent, total }) {
  return (
    <div className="flex items-center justify-between">
       <div>
          <p className="text-xs font-bold text-slate-700">{label}</p>
          <p className="text-[10px] text-slate-400 font-medium">{percent}</p>
       </div>
       <p className="text-sm font-black font-condensed">{total}</p>
    </div>
  );
}
