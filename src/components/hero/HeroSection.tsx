import EmailSignupForm from "./EmailSignupForm";
import heroBackground from "@/assets/nomad-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/65" />
      
      {/* Logo in top corner */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 p-6">
        <img 
          src="/Nomadic Trails Scout.png" 
          alt="Nomadic Trails Scout Logo" 
          className="h-10 md:h-12 lg:h-16 w-auto"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Main Headline */}
          <h1 className="font-onest font-bold text-6xl text-foreground leading-tight" style={{ fontSize: '58px' }}>
            Work.{" "}
            <span style={{ color: '#27A6AA' }}>Travel.</span>{" "}
            <span style={{ color: '#27A6AA' }}>Belong.</span>
          </h1>
          
          {/* Subtext */}
          <p className="font-onest max-w-3xl mx-auto leading-relaxed whitespace-nowrap" style={{ fontSize: '20px', color: 'rgba(0, 0, 0, 0.6)' }}>
            A new way for Digital nomads to travel + stay connected - Launching soon.
          </p>
          
          {/* Email Signup Form */}
          <div className="pt-6">
            <EmailSignupForm />
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