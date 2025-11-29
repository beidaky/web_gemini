import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import TypingEffect from './components/TypingEffect';
import Section from './components/Section';
import TiltCard from './components/TiltCard';
import CursorSpotlight from './components/CursorSpotlight';

// Icons
const IconCpu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
);
const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const IconZap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const App: React.FC = () => {
  return (
    <main className="bg-dark-bg text-white w-full h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
      <ParticlesBackground />
      <CursorSpotlight />

      {/* Hero Section */}
      <Section id="hero">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-dark-bg/80 z-0" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-sm font-bold tracking-widest uppercase animate-pulse">
            System Online v2.0
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
              NEXUS
            </span>
            <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-4 tracking-widest uppercase">
              Interactive Design System
            </span>
          </h1>
          
          <div className="mt-8 flex justify-center">
            <TypingEffect />
          </div>

          <div className="mt-16 animate-float">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 mx-auto">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Scroll to initialize</p>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section id="features" className="bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Advanced rendering techniques powered by lightweight algorithms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TiltCard 
              title="Neural Processing" 
              description="Real-time data visualization using advanced canvas rendering for maximum performance on any device."
              icon={<IconCpu />}
            />
            <TiltCard 
              title="Visual Perception" 
              description="Adaptive UI that responds to user presence, lighting conditions, and input methods dynamically."
              icon={<IconEye />}
            />
            <TiltCard 
              title="Instant Reaction" 
              description="Zero-latency interactions powered by optimized React hooks and hardware acceleration."
              icon={<IconZap />}
            />
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section id="philosophy">
        <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/10 to-transparent z-0" />
        <div className="container mx-auto px-6 z-10 flex flex-col items-center">
          <blockquote className="font-display text-3xl md:text-6xl font-bold text-center leading-tight max-w-4xl">
            "The best interface is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
              no interface
            </span>."
          </blockquote>
          <p className="mt-8 text-xl text-gray-400 font-light italic">
            — Seamless Interaction Philosophy
          </p>
          
          <div className="mt-16 relative w-64 h-64">
             {/* Decorative glowing orb */}
             <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full blur-[80px] opacity-40 animate-blob" />
             <div className="absolute inset-4 bg-black rounded-full z-10 flex items-center justify-center border border-white/10 backdrop-blur-xl">
                <span className="font-display text-4xl font-bold text-white/20">AI</span>
             </div>
          </div>
        </div>
      </Section>

      {/* Interactive Demo Section */}
      <Section id="demo">
        <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl font-bold mb-6">Fluid Motion</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every pixel is calculated to provide a silk-smooth experience.
              Mouse over the interactive elements to see the physics engine in action.
              <br /><br />
              We utilize <span className="text-neon-blue">parallax depth</span> and <span className="text-neon-purple">dynamic lighting</span> to create immersion.
            </p>
            <button className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               <span className="relative z-10 font-bold tracking-wider">INITIATE SEQUENCE</span>
               <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>
          
          <div className="relative h-96 w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center group">
             <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" />
             <div className="relative z-10 p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-white/20 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Hover State</h3>
                <p className="text-sm text-gray-300">Parallax scaling active</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full snap-start h-[50vh] flex flex-col justify-center items-center relative bg-black border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/10 via-dark-bg to-black" />
        
        <div className="z-10 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight mb-8">Ready for the Future?</h2>
          <div className="flex gap-6 mb-12">
             <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a>
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 Nexus Interface. Engineered for performance.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;