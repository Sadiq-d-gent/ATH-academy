import { ExternalLink, BookOpen, Video, Users, Award } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const portfolioItems = [
    {
      title: "SMC Fundamentals Course",
      description: "Complete Smart Money Concepts training covering market structure, liquidity, and institutional trading",
      category: "Training Course",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      features: ["12 Modules", "Live Sessions", "Community Access"],
      icon: BookOpen
    },
    {
      title: "Advanced Risk Management",
      description: "Professional-grade risk management strategies used by institutional traders",
      category: "Masterclass",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      features: ["Position Sizing", "Psychology", "Advanced Setups"],
      icon: Award
    },
    {
      title: "Live Trading Community",
      description: "Exclusive access to our private trading community with daily market analysis",
      category: "Community",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      features: ["Daily Analysis", "Trade Ideas", "Peer Support"],
      icon: Users
    },
    {
      title: "1-on-1 Mentorship Program",
      description: "Personalized trading mentorship tailored to your specific goals and challenges",
      category: "Mentorship",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      features: ["Personal Review", "Custom Strategy", "Goal Setting"],
      icon: Video
    }
  ];

  const categories = ["All", "Training Course", "Masterclass", "Community", "Mentorship"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Trading <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs and resources designed to transform your trading approach
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Categories */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full px-6 py-2 hover-lift"
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="card-professional overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className="w-full rounded-xl hover-lift"
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="btn-gradient px-8 py-6 text-lg rounded-xl hover-lift hover-glow"
            >
              View All Programs
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};