
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const mapUrl = "https://maps.app.goo.gl/bVieHvzqcKZqzgwKA";
  const phoneNumber = "+14383088851";
  const displayPhone = "+1 (438) 308-8851";
  const recipientEmail = "fashionliza22@gmail.com";
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/jewelry-workshop.webp" 
            alt="Fashion by Liza Jewelry Workshop" 
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 via-stone-800/30 to-amber-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-stone-900/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-none tracking-tight drop-shadow-2xl text-white">
              Fashion by <br />
              <span className="italic bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">Liza</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-xl mb-12 font-light leading-relaxed drop-shadow-lg">
              Your destination for stunning, handcrafted jewelry. From elegant necklaces to custom designs, we bring your vision to life with passion and artistry.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => setCurrentPage('shop')}
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:from-amber-700 hover:to-amber-800 hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 shadow-xl shadow-amber-900/30 transform hover:scale-105"
              >
                Explore Collections
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white/95 text-stone-900 px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-amber-800 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 backdrop-blur-md border-2 border-amber-200/50 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Details Highlight */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white border-y border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Visit Our Boutique</h2>
          <p className="text-stone-600 font-light mb-8 max-w-xl mx-auto">We'd love to welcome you! Come explore our collection in person and let us help you find something special.</p>
          <div className="space-y-6">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block group">
              <p className="font-serif text-4xl bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent group-hover:from-amber-800 group-hover:via-amber-700 group-hover:to-amber-800 transition-all duration-300">1700 Wilson Ave Unit# 51</p>
              <p className="text-stone-500 font-light text-lg mt-2 group-hover:text-amber-700 transition-colors">North York, ON M3L 1B2, Canada</p>
            </a>
            
            <div className="flex justify-center mt-8">
              <a 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-amber-700 to-amber-800 text-white px-8 py-4 hover:from-amber-800 hover:to-amber-900 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Directions</span>
              </a>
            </div>
            
            <div className="max-w-2xl mx-auto mt-14 p-8 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200/50 shadow-lg shadow-amber-900/5 rounded-sm">
              <p className="text-stone-600 text-base leading-relaxed">
                Can't visit us in person? No problem! We ship securely to anywhere in <span className="font-bold text-stone-800">North America</span>, including the <span className="font-bold text-stone-800">United States</span>. Give us a call at <a href={`tel:${phoneNumber}`} className="font-bold text-amber-800 hover:text-amber-900 transition-colors">{displayPhone}</a> and we'll take care of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-md">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Featured Pieces</h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent">Our Bestsellers</h3>
          </div>
          <button onClick={() => setCurrentPage('shop')} className="text-[10px] uppercase tracking-widest font-bold border-b-2 border-amber-700 pb-2 hover:text-amber-800 hover:border-amber-800 transition-all duration-300 hover:shadow-sm">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {PRODUCTS.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );

  const renderHeritage = () => (
    <div className="pb-24">
      {/* Hero Section with Original Image */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="/images/jewelry-hero.jpeg" 
            alt="Fashion by Liza Signature Collection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 via-amber-900/30 to-stone-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/40" />
        </div>
        <div className="relative max-w-4xl px-4">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-300 mb-6">Our Story</h2>
          <h3 className="text-5xl md:text-7xl font-serif mb-8 text-white drop-shadow-2xl">Crafted with Love</h3>
          <p className="text-amber-50 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Where passion meets precision. Every piece tells a story of elegance, dedication, and timeless beauty.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Meet Liza</h2>
          <h3 className="text-4xl font-serif bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent mb-8">The Heart Behind the Brand</h3>
          <p className="text-stone-600 text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Hi, I'm Liza! What started as a dream in my small North York studio has grown into something I never imagined. Every piece I create comes straight from my heart. I design jewelry that tells your story, celebrates your special moments, and becomes part of your legacy. For me, this isn't just about fashion. It's about real connection, honest craftsmanship, and the beautiful journey we share together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-20">
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-2 border-amber-200/50 shadow-lg">
            <h4 className="text-2xl font-serif mb-4 bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent">2025: A New Beginning</h4>
            <p className="text-stone-600 text-sm leading-relaxed font-light mb-4">
              I still remember the day I opened my doors on Wilson Avenue. The excitement, the nerves, the overwhelming joy of finally bringing my vision to life.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              Every morning, I walk into my studio knowing that today, I get to create something beautiful. Whether it's sketching a new design, carefully selecting the perfect stones, or working with my hands to bring a piece to life, this is where I feel most at home.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-2 border-amber-200/50 shadow-lg">
            <h4 className="text-2xl font-serif mb-4 bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent">Our Promise to You</h4>
            <p className="text-stone-600 text-sm leading-relaxed font-light mb-4">
              Quality is everything. Each piece is handcrafted with attention to every detail, using only the finest materials. We believe jewelry should last a lifetime and beyond.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              When you wear Fashion by Liza, you're not just wearing jewelry. You're wearing a piece of art, a story, and a promise of excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id_here' || 
          templateId === 'your_template_id_here' || 
          publicKey === 'your_public_key_here') {
        // Fallback to mailto if EmailJS not configured
        const subject = encodeURIComponent(`Online Order Inquiry from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        
        setFormStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
        setTimeout(() => setFormStatus('idle'), 5000);
        return;
      }

      // Initialize EmailJS
      emailjs.init(publicKey);

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email: recipientEmail,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams);
      
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const renderContact = () => (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Let's Connect</h2>
            <h3 className="text-5xl font-serif mb-8 bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent tracking-tight">Reach Out to Us</h3>
            <div className="space-y-8">
              <p className="text-stone-600 font-light leading-loose text-lg">
                Ready to find your perfect piece? Reach out to us however works best for you. Send us a message on <span className="font-bold text-amber-800">Instagram</span>, <span className="font-bold text-amber-800">TikTok</span>, <span className="font-bold text-amber-800">Facebook</span>, or check out our <span className="font-bold text-amber-800">YouTube</span> for the latest designs. You can also shop directly on our <span className="font-bold text-amber-800">Etsy</span> store, email us, or just give us a call. We're here to help!
              </p>
              <div className="bg-gradient-to-br from-amber-50 to-white p-8 border-2 border-amber-200/50 shadow-md rounded-sm">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-4">We Ship Across North America</h4>
                <p className="text-stone-700 text-base leading-relaxed">
                  Whether you're in <strong className="text-amber-800">Canada</strong> or the <strong className="text-amber-800">United States</strong>, we've got you covered. Every order is carefully packaged, fully insured, and shipped right to your door with love.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="bg-gradient-to-br from-white to-amber-50/30 p-6 border border-amber-200/50 rounded-sm">
              <h5 className="text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-4 border-b border-amber-200/50 pb-2">When to Visit</h5>
              <div className="text-stone-600 text-sm grid grid-cols-2 gap-y-3">
                <p className="font-medium">Monday - Friday</p>
                <p>10:00 AM - 8:00 PM</p>
                <p className="font-medium">Saturday</p>
                <p>10:00 AM - 6:00 PM</p>
                <p className="font-medium">Sunday</p>
                <p>12:00 PM - 5:00 PM</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-amber-50/30 p-6 border border-amber-200/50 rounded-sm">
                <h5 className="text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-2">Our Location</h5>
                <p className="text-stone-600 text-sm">1700 Wilson Ave Unit# 51<br />North York, ON M3L 1B2, Canada</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white p-6 border-2 border-amber-300/50 rounded-sm">
                <h5 className="text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-2">Call Us Directly</h5>
                <a href={`tel:${phoneNumber}`} className="text-amber-800 font-bold tracking-[0.1em] text-xl hover:text-amber-900 transition-colors">
                  {displayPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-white to-amber-50/30 p-10 border-2 border-amber-200/50 shadow-2xl shadow-amber-900/10 h-fit">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-[9px] uppercase tracking-widest font-bold text-amber-800 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b-2 border-amber-200 py-2 focus:outline-none focus:border-amber-600 text-stone-800 text-sm bg-transparent placeholder:text-stone-400" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-widest font-bold text-amber-800 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b-2 border-amber-200 py-2 focus:outline-none focus:border-amber-600 text-stone-800 text-sm bg-transparent placeholder:text-stone-400" 
                  placeholder="Your Last Name" 
                />
              </div>
            </div>
            <div>
              <label className="block text-[9px] uppercase tracking-widest font-bold text-amber-800 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-b-2 border-amber-200 py-2 focus:outline-none focus:border-amber-600 text-stone-800 text-sm bg-transparent placeholder:text-stone-400" 
                placeholder="Your Email Address" 
              />
            </div>
            <div>
              <label className="block text-[9px] uppercase tracking-widest font-bold text-amber-800 mb-2">Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full border-b-2 border-amber-200 py-2 focus:outline-none focus:border-amber-600 text-stone-800 text-sm bg-transparent placeholder:text-stone-400 resize-none" 
                placeholder="Tell us what you're looking for..." 
              />
            </div>
            {formStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 text-sm py-3 px-4">
                Thank you! Your inquiry has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 text-sm py-3 px-4">
                There was an error sending your message. Please try again or contact us directly at {recipientEmail}.
              </div>
            )}
            <button 
              type="submit" 
              disabled={formStatus === 'sending'}
              className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-4 font-bold uppercase tracking-widest text-[10px] hover:from-amber-800 hover:to-amber-900 hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Galleries</h2>
        <h3 className="text-5xl font-serif bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent tracking-tight mb-8">Collections</h3>
        
        {/* Collection Description Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 via-white to-amber-50 border-2 border-amber-200/60 p-8 rounded-lg shadow-lg shadow-amber-100/50">
          <p className="text-stone-700 text-base leading-relaxed mb-4">
            Here's a glimpse of our exquisite jewelry collection. We have many more beautiful pieces waiting for you at our boutique!
          </p>
          <p className="text-stone-600 text-sm leading-relaxed italic">
            Our collection is regularly updated with new arrivals. Visit us in-store to explore the full range, or call us at <a href={`tel:${phoneNumber}`} className="text-amber-700 font-bold hover:text-amber-900 transition-colors">{displayPhone}</a> for custom orders and special requests.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-20">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  const renderTerms = () => (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <div className="text-center mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold bg-gradient-to-r from-amber-800 to-amber-700 bg-clip-text text-transparent mb-6">Transparency</h2>
        <h3 className="text-5xl font-serif bg-gradient-to-r from-stone-900 via-amber-900 to-stone-900 bg-clip-text text-transparent tracking-tight">Terms & Policies</h3>
      </div>

      <div className="space-y-20">
        <section className="bg-gradient-to-br from-white to-amber-50/30 p-8 border border-amber-200/50 shadow-sm">
          <h4 className="text-2xl font-serif bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent mb-6 border-b border-amber-200/50 pb-4">Privacy Policy</h4>
          <p className="text-stone-600 leading-relaxed font-light">
            At Fashion by Liza, we are committed to protecting your privacy. We collect information only as necessary to provide our services and boutique updates. Your personal data is never sold or shared with third parties.
          </p>
        </section>

        <section className="bg-gradient-to-br from-white to-amber-50/30 p-8 border border-amber-200/50 shadow-sm">
          <h4 className="text-2xl font-serif bg-gradient-to-r from-stone-800 via-amber-800 to-stone-800 bg-clip-text text-transparent mb-6 border-b border-amber-200/50 pb-4">Returns & Exchange Policy</h4>
          <p className="text-stone-700 leading-relaxed font-medium mb-4 text-lg">
            All sales are final.
          </p>
          <p className="text-stone-600 leading-relaxed font-light">
            For additional information regarding your purchase or our boutique policies, please contact us directly at <a href={`tel:${phoneNumber}`} className="font-bold text-amber-800 hover:text-amber-900 transition-colors">{displayPhone}</a>.
          </p>
        </section>
      </div>
    </div>
  );

  return (
    <Layout onNavigate={setCurrentPage}>
      {currentPage === 'home' && renderHome()}
      {currentPage === 'shop' && renderShop()}
      {currentPage === 'heritage' && renderHeritage()}
      {currentPage === 'contact' && renderContact()}
      {currentPage === 'terms' && renderTerms()}
    </Layout>
  );
};

export default App;

