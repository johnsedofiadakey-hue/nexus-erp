import React from 'react';
import { ShoppingCart, ArrowRight, ShieldCheck, Droplets, Sparkles, Phone, Mail, Instagram } from 'lucide-react';
import logo from '../../assets/logo.png';
import handwashImg from '../../assets/handwash.png';

const products = [
  {
    id: 1,
    name: 'Deva Antibacterial Handwash',
    variant: 'Lavender & Essential Oils',
    price: 'GHS 25.00',
    tag: 'Bestseller',
    img: handwashImg
  },
  {
    id: 2,
    name: 'Deva Deep moisturizing Soap',
    variant: 'Aloe Vera & Vitamin E',
    price: 'GHS 18.00',
    tag: 'New Formula',
    img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=600'
  }
];

export default function PublicSite({ onLoginClick }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Deva" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <h1 className="font-condensed font-bold text-xl tracking-tight text-slate-800">BERRACK</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 -mt-1 font-bold">Manufacturing Co. Ltd</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-deva-500 transition-colors">Products</a>
            <a href="#about" className="hover:text-deva-500 transition-colors">Our Quality</a>
            <a href="#contact" className="hover:text-deva-500 transition-colors">Distribution</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="nx-btn-secondary !py-2 !px-5 text-sm"
            >
              ERP Portal
            </button>
            <button className="nx-btn-primary !py-2 !px-5 text-sm flex items-center gap-2">
              <ShoppingCart size={16} />
              Catalog
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-deva-50 border border-deva-100 rounded-full text-deva-600 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} />
              Redefining Hygiene in Ghana
            </div>
            <h2 className="text-6xl md:text-7xl font-condensed font-black leading-[0.9] text-slate-900">
              PURITY IN EVERY <span className="text-deva-500 underline decoration-deva-100 underline-offset-8">DROP.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              Berrack Manufacturing brings you **Deva**, a premium line of personal care products formulated for maximum protection and skin wellness.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="nx-btn-primary h-14 !px-8 text-md flex items-center gap-3">
                Explore Products
                <ArrowRight size={20} />
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                    JD
                  </div>
                ))}
                <div className="pl-6 pt-3 text-xs font-medium text-slate-400">
                  Trusted by 5,000+ Ghanaian homes
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-deva-100/50 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
            <img 
              src={handwashImg} 
              alt="Deva Handwash" 
              className="w-full h-auto rounded-[2.5rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] animate-bounce">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-[10px] font-black uppercase text-slate-400">Clinical Grade</span>
              </div>
              <p className="text-sm font-bold text-slate-800">99.9% Bacteria Protection Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h3 className="font-condensed text-4xl font-black text-slate-900 uppercase">The Deva Collection</h3>
            <p className="text-slate-500 max-w-xl mx-auto">Scientifically formulated for the Ghanaian climate, ensuring freshness and hygiene all day long.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <div key={product.id} className="group nx-card overflow-hidden hover:shadow-xl transition-all border-none">
                <div className="aspect-square relative overflow-hidden bg-white">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-deva-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {product.tag}
                  </span>
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">{product.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{product.variant}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <span className="text-2xl font-black text-slate-900 font-condensed">{product.price}</span>
                    <button className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-deva-500 transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12 items-center opacity-40 grayscale">
          <div className="font-condensed font-black text-2xl tracking-tighter">FDA APPROVED</div>
          <div className="font-condensed font-black text-2xl tracking-tighter">PH BALANCED</div>
          <div className="font-condensed font-black text-2xl tracking-tighter">NATURAL OILS</div>
          <div className="font-condensed font-black text-2xl tracking-tighter">MADE IN GHANA</div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-24 pb-12 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-deva-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-left">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Deva" className="h-10 w-auto brightness-200" />
                <h1 className="font-condensed font-bold text-2xl tracking-tight text-white">BERRACK</h1>
              </div>
              <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                Empowering healthy living through innovative manufacturing and premium personal care solutions since 2018.
              </p>
              <div className="flex items-center gap-4">
                {[Instagram, Mail, Phone].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-deva-400 hover:text-deva-400 transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="font-bold uppercase tracking-widest text-xs text-deva-400">Quick Links</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Wholesale Inquiry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div className="space-y-6 text-left">
              <h5 className="font-bold uppercase tracking-widest text-xs text-deva-400">Headquarters</h5>
              <div className="space-y-4 text-slate-400 text-sm font-medium leading-relaxed">
                <p>Industrial Area, Plot 24<br />Tema, Greater Accra, Ghana</p>
                <p>+233 24 000 0000<br />info@berrack.com.gh</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-6 text-[10px] items-center uppercase tracking-widest font-black text-slate-500">
            <p>&copy; 2024 Berrack Manufacturing Co. Ltd. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
