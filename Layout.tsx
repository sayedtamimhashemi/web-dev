
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount, onCartClick, onNavigate }) => {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => onNavigate('home')}
                className="text-2xl font-serif font-bold tracking-[0.2em] text-stone-900 hover:text-amber-800 transition-colors"
              >
                FASHION BY LIZA
              </button>
              
              <div className="hidden lg:flex items-center space-x-8">
                <button onClick={() => onNavigate('shop')} className="text-stone-600 hover:text-amber-700 transition-colors uppercase text-[10px] tracking-[0.2em] font-bold">Shop</button>
                <button onClick={() => onNavigate('stylist')} className="text-stone-600 hover:text-amber-700 transition-colors uppercase text-[10px] tracking-[0.2em] font-bold">Stylist</button>
                
                {/* Discover Dropdown */}
                <div 
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => setIsDiscoverOpen(true)}
                  onMouseLeave={() => setIsDiscoverOpen(false)}
                >
                  <button className="text-stone-600 hover:text-amber-700 transition-colors uppercase text-[10px] tracking-[0.2em] font-bold flex items-center">
                    Discover
                    <svg className={`ml-1 h-3 w-3 transition-transform duration-300 ${isDiscoverOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDiscoverOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-xl border border-amber-200/50 py-4 px-5">
                      <p className="text-[9px] uppercase tracking-widest text-amber-700 mb-3 font-bold">Our Story</p>
                      <button onClick={() => onNavigate('heritage')} className="text-stone-800 hover:text-amber-700 text-sm font-medium block transition-colors">The Heritage</button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="hidden sm:block text-stone-400 hover:text-stone-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button 
                onClick={onCartClick}
                className="relative p-2 text-stone-600 hover:text-amber-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-stone-900 text-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-3xl mb-6 tracking-widest">FASHION BY LIZA</h2>
              <p className="text-stone-400 max-w-sm text-sm leading-loose">
                Established in 2025 in North York, Fashion by Liza represents the pinnacle of luxury jewelry design in Ontario. Every piece tells a story of passion, precision, and modern beauty.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-widest mb-6 text-amber-500">Client Service</h3>
              <ul className="space-y-3 text-stone-400 text-xs tracking-widest uppercase">
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
                <li><button className="hover:text-white transition-colors">Shipping & Returns</button></li>
                <li><button className="hover:text-white transition-colors">Gift Cards</button></li>
                <li><button className="hover:text-white transition-colors">Ring Sizing</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-widest mb-6 text-amber-500">The House</h3>
              <ul className="space-y-3 text-stone-400 text-xs tracking-widest uppercase">
                <li><button onClick={() => onNavigate('heritage')} className="hover:text-white transition-colors">Heritage</button></li>
                <li><button onClick={() => onNavigate('sustainability')} className="hover:text-white transition-colors">Sustainability</button></li>
                <li><button className="hover:text-white transition-colors">Careers</button></li>
                <li><button className="hover:text-white transition-colors">Stores</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-stone-500 text-[10px] tracking-widest uppercase space-y-4 md:space-y-0">
            <div>&copy; {new Date().getFullYear()} Fashion by Liza. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
