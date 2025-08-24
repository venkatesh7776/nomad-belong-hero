import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to notify you when we launch.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list! 🌍",
      description: "We'll notify you as soon as we launch. Adventure awaits!",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 font-onest text-base h-24 md:h-12 bg-card border-border shadow-soft focus-visible:ring-primary"
          disabled={isLoading}
        />
        <Button 
          type="submit" 
          variant="hero"
          size="lg"
          disabled={isLoading}
          className="h-12 px-8 whitespace-nowrap"
          style={{ backgroundColor: '#E47035', borderColor: '#E47035' }}
        >
          {isLoading ? "Joining..." : "Notify Me"}
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mt-3 font-onest text-center">
        No spam. Just updates that matter.
      </p>
    </form>
  );
};

export default EmailSignupForm;