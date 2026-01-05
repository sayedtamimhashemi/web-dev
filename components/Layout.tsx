
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate }) => {
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isOnlineOrderOpen, setIsOnlineOrderOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [showShopifyComingSoon, setShowShopifyComingSoon] = useState(false);
  const mapUrl = "https://maps.app.goo.gl/bVieHvzqcKZqzgwKA";
  const phoneNumber = "+14383088851";
  const displayPhone = "+1 (438) 308-8851";
  
  const instagramUrl = "https://www.instagram.com/fashionliza22?igsh=MXBwaTM2Y2JjdGcydA==";
  const tiktokUrl = "https://www.tiktok.com/@fashionbyliza1?is_from_webapp=1&sender_device=pc";
  const facebookUrl = "https://www.facebook.com/share/1AauTR522k/?mibextid=wwXIfr";
  const youtubeUrl = "https://youtube.com/@fashionliza-k4w?si=Pptu6YgFjEosSNRI";
  const etsyUrl = "https://www.etsy.com/ca/shop/FashionbyLiza";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-stone-50 via-amber-50/20 to-stone-50">
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-stone-50 via-amber-50/80 to-stone-50 backdrop-blur-md border-b border-amber-300/40 shadow-md shadow-amber-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <button 
                onClick={() => setIsLogoModalOpen(true)}
                className="flex items-center transition-all duration-300 hover:scale-125 cursor-pointer"
                title="Click to view logo"
              >
                <img 
                  src="/images/logo.png" 
                  alt="Fashion by Liza" 
                  className="h-16 w-auto drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                />
              </button>
              
              <div className="hidden lg:flex items-center space-x-8">
                <button onClick={() => onNavigate('home')} className="text-amber-900 hover:text-amber-600 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] font-bold hover:drop-shadow-sm">Home</button>
                <button onClick={() => onNavigate('shop')} className="text-amber-900 hover:text-amber-600 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] font-bold hover:drop-shadow-sm">Collections</button>
                
                {/* Discover Dropdown */}
                <div 
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => setIsDiscoverOpen(true)}
                  onMouseLeave={() => setIsDiscoverOpen(false)}
                >
                  <button className="text-amber-900 hover:text-amber-600 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] font-bold flex items-center hover:drop-shadow-sm">
                    Discover
                    <svg className={`ml-1 h-3 w-3 transition-transform duration-300 ${isDiscoverOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isDiscoverOpen && (
                    <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-amber-50 to-white shadow-xl border border-amber-300/50 py-4 px-5">
                      <p className="text-[9px] uppercase tracking-widest text-amber-800 mb-3 font-bold">Our Story</p>
                      <button onClick={() => onNavigate('heritage')} className="text-amber-900 hover:text-amber-600 text-sm font-medium block transition-colors mb-3">The Heritage</button>
                      <div className="border-t border-amber-200/50 pt-3">
                        <p className="text-[9px] uppercase tracking-widest text-amber-800 mb-3 font-bold">Legal</p>
                        <button onClick={() => onNavigate('terms')} className="text-amber-900 hover:text-amber-600 text-sm font-medium block transition-colors">Terms & Policy</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Online Order Dropdown */}
                <div 
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => setIsOnlineOrderOpen(true)}
                  onMouseLeave={() => setIsOnlineOrderOpen(false)}
                >
                  <button className="text-amber-900 hover:text-amber-600 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] font-bold flex items-center hover:drop-shadow-sm">
                    Online Order
                    <svg className={`ml-1 h-3 w-3 transition-transform duration-300 ${isOnlineOrderOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isOnlineOrderOpen && (
                    <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-amber-50 to-white shadow-xl border border-amber-300/50 py-4 px-5">
                      <p className="text-[9px] uppercase tracking-widest text-amber-800 mb-3 font-bold">Shop Online</p>
                      <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className="text-amber-900 hover:text-[#F56400] text-sm font-medium flex items-center transition-colors mb-3">
                        <span style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}} className="mr-1">Etsy</span>
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <button 
                        onClick={() => setShowShopifyComingSoon(true)}
                        className="text-amber-900 hover:text-amber-600 text-sm font-medium block transition-colors"
                      >
                        Shopify
                        <span className="ml-2 text-[8px] bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Soon</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => onNavigate('contact')} className="text-amber-900 hover:text-amber-600 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] font-bold hover:drop-shadow-sm mr-4 border-r border-amber-300 pr-6">Contact</button>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-[#E4405F] transition-all duration-300 hover:scale-110" title="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-black transition-all duration-300 hover:scale-110" title="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1 1.1.41 2.23 1.32 2.87.52.38 1.18.57 1.83.56 1.05-.05 2.03-.62 2.63-1.48.56-.82.73-1.82.69-2.81V.02z"/>
                </svg>
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-[#1877F2] transition-all duration-300 hover:scale-110" title="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-[#FF0000] transition-all duration-300 hover:scale-110" title="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:text-[#F56400] transition-all duration-300 hover:scale-110 flex items-center" title="Etsy">
                <span className="text-xs font-bold tracking-wide" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>Etsy</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-stone-100 py-24 border-t border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-3xl mb-8 tracking-widest uppercase bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">FASHION BY LIZA</h2>
              <p className="text-stone-400 max-w-sm text-sm leading-loose font-light">
                Established in 2025. Bridging traditional artistry with modern Canadian design. Based in North York, serving all of North America.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-110 flex items-center space-x-2" title="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
                </a>
                <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-all duration-300 hover:scale-110 flex items-center space-x-2" title="TikTok">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1 1.1.41 2.23 1.32 2.87.52.38 1.18.57 1.83.56 1.05-.05 2.03-.62 2.63-1.48.56-.82.73-1.82.69-2.81V.02z"/></svg>
                  <span className="text-[10px] uppercase tracking-widest font-bold">TikTok</span>
                </a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 flex items-center space-x-2" title="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Facebook</span>
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#FF0000] transition-all duration-300 hover:scale-110 flex items-center space-x-2" title="YouTube">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest font-bold">YouTube</span>
                </a>
                <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#F56400] transition-all duration-300 hover:scale-110 flex items-center space-x-2" title="Etsy">
                  <span className="text-sm font-bold" style={{fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>Etsy</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-widest mb-8 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Visit Our Boutique</h3>
              <div className="text-stone-400 text-xs leading-loose space-y-4 font-light">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors italic">
                  1700 Wilson Ave Unit# 51<br />North York, ON M3L 1B2, Canada
                </a>
                <a href={`tel:${phoneNumber}`} className="text-stone-300 font-bold tracking-widest hover:text-white transition-colors block mt-2">
                  {displayPhone}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[10px] uppercase tracking-widest mb-8 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Information</h3>
              <ul className="space-y-4 text-stone-400 text-xs tracking-widest uppercase font-bold">
                <li><button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">Collections</button></li>
                <li><button onClick={() => onNavigate('heritage')} className="hover:text-white transition-colors">Our Heritage</button></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-amber-800/30 flex flex-col md:flex-row justify-between items-center text-stone-400 text-[10px] tracking-widest uppercase space-y-4 md:space-y-0 font-bold">
            <div>Copyright &copy; {new Date().getFullYear()} Fashion by Liza - All Rights Reserved.</div>
            <div>
              <button 
                onClick={() => onNavigate('terms')} 
                className="hover:text-amber-400 transition-colors cursor-pointer underline-offset-4 hover:underline"
              >
                Terms & Policies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Logo Modal */}
      {isLogoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsLogoModalOpen(false)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsLogoModalOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo Image */}
            <img 
              src="/images/logo.png" 
              alt="Fashion by Liza" 
              className="w-80 md:w-96 drop-shadow-2xl"
            />
            
            {/* Go to Home Button */}
            <button 
              onClick={() => {
                setIsLogoModalOpen(false);
                onNavigate('home');
              }}
              className="mt-8 bg-white/10 backdrop-blur-sm text-white py-3 px-10 font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      {/* Shopify Coming Soon Modal */}
      {showShopifyComingSoon && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setShowShopifyComingSoon(false)}
        >
          <div 
            className="bg-gradient-to-br from-amber-50 via-white to-amber-50 p-8 rounded-lg shadow-2xl border-2 border-amber-300/50 max-w-sm mx-4 text-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-4">🛍️</div>
            <h3 className="text-2xl font-serif text-amber-900 mb-3">Coming Soon!</h3>
            <p className="text-stone-600 mb-6">
              Our Shopify store is currently under construction. Stay tuned for an amazing shopping experience!
            </p>
            <button 
              onClick={() => setShowShopifyComingSoon(false)}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 px-6 font-bold uppercase tracking-widest text-xs hover:from-amber-700 hover:to-amber-800 transition-all duration-300 rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
