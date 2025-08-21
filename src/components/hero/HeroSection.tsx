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
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="font-onest font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
            Work.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Travel.
            </span>{" "}
            <span className="text-primary">Belong.</span>
          </h1>
          
          {/* Subtext */}
          <p className="font-onest text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A new way for digital nomads to explore the world while staying connected. 
            We're launching soon, be the first to know.
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