import EmailSignupForm from "./EmailSignupForm";
import heroBackground from "/final tree with sun.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/65" />
      
      {/* Logo in top center */}
      <div className="relative z-20 pt-16 pb-8 text-center">
        <img 
          src="/Nomadic Trails Scout.png" 
          alt="Nomadic Trails Scout Logo" 
          className="h-16 w-auto"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start text-center px-4 pt-16">
        <div className="max-w-4xl mx-auto space-y-4">
          
          {/* Main Headline */}
          <h1 className="font-bold text-black text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide">
            <span className="relative group inline-block mx-1">
              S
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                Search
              </span>
            </span>
            <span className="relative group inline-block mx-1">
              C
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                Companion
              </span>
            </span>
            <span className="relative group inline-block mx-1">
              O
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                Optimize
              </span>
            </span>
            <span className="relative group inline-block mx-1">
              U
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                Understand
              </span>
            </span>
            <span className="relative group inline-block mx-1">
              T
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                Travel
              </span>
            </span>
          </h1>
          
          {/* Subtext */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed">
              A new way for digital nomads explore the
            </p>
            <p className="text-gray-500 text-xl md:text-2xl leading-relaxed">
              world and stay connected.
            </p>
          </div>
          
          {/* Email Signup Form */}
          <div className="pt-4">
            <EmailSignupForm />
          </div>
          
          {/* Keywords */}
          <div className="flex items-center justify-center space-x-4 text-xl font-medium pt-10">
            <span style={{ color: '#E47035' }}>Explore</span>
            <span className="text-gray-700">×</span>
            <span style={{ color: '#13BFFF' }}>Travel</span>
            <span className="text-gray-700">×</span>
            <span style={{ color: '#38A238' }}>Belong</span>
          </div>
          
          {/* Feature Blocks */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-16">
            {/* Journey Planner */}
            <div className="text-center max-w-40">
              <div className="w-12 h-12 bg-orange-100 rounded-md mx-auto mb-3 flex items-center justify-center border border-orange-300">
                <svg className="w-6 h-6" fill="none" stroke="#E47035" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                </svg>
              </div>
              <h3 className="font-bold text-base mb-1 text-black">Journey Planner</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Simplified travel planning designed for nomads</p>
            </div>
            
            {/* AI Assistant */}
            <div className="text-center max-w-40">
              <div className="w-12 h-12 bg-orange-100 rounded-md mx-auto mb-3 flex items-center justify-center border border-orange-300">
                <svg className="w-6 h-6" fill="none" stroke="#E47035" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-base mb-1 text-black">AI Assistant</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Central search designed specifically for nomads</p>
            </div>
            
            {/* Community */}
            <div className="text-center max-w-40">
              <div className="w-12 h-12 bg-orange-100 rounded-md mx-auto mb-3 flex items-center justify-center border border-orange-300">
                <svg className="w-6 h-6" fill="none" stroke="#E47035" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base mb-1 text-black">Community</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Connect with fellow nomads worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle animated elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary-glow/30 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;