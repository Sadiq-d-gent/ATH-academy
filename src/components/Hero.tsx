import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ScrollAnimation } from "./ScrollAnimation";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello! I\'m interested in your trading mentorship program.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-6 lg:px-12">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">ATH Academy</span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <ScrollAnimation animationType="fade-in-up">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Master <span className="text-gradient">Smart Money</span>
            <br />
            Trading Concepts
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animationType="fade-in-up" delay={200}>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our proven mentorship program focused on institutional trading strategies. 
            Learn how the big players move markets and turn confusion into clarity.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animationType="scale-in" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp px-8 py-6 text-lg rounded-xl hover-lift hover-glow"
              size="lg"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Start Learning Today
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg rounded-xl hover-lift border-2 hover:bg-secondary"
              size="lg"
            >
              View Success Stories
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <ScrollAnimation animationType="fade-in" delay={600}>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">200+</div>
              <div className="text-muted-foreground">Traders Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};