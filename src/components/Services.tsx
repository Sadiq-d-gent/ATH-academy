import { BookOpen, Users2, Video, MessageSquare, BarChart3, Zap } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { useState, useEffect } from "react";

export const Services = () => {
  const [stats, setStats] = useState({ clients: 0, courses: 0, success: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { clients: 200, courses: 15, success: 95 };
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;

      let current = { clients: 0, courses: 0, success: 0 };

      const timer = setInterval(() => {
        current.clients = Math.min(current.clients + targets.clients / steps, targets.clients);
        current.courses = Math.min(current.courses + targets.courses / steps, targets.courses);
        current.success = Math.min(current.success + targets.success / steps, targets.success);

        setStats({
          clients: Math.floor(current.clients),
          courses: Math.floor(current.courses),
          success: Math.floor(current.success)
        });

        if (current.clients >= targets.clients && 
            current.courses >= targets.courses && 
            current.success >= targets.success) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: "SMC Fundamentals",
      description: "Master the core principles of Smart Money Concepts and institutional trading",
      features: ["Market Structure", "Liquidity Concepts", "Order Blocks", "Fair Value Gaps"]
    },
    {
      icon: Video,
      title: "Live Trading Sessions",
      description: "Watch real-time analysis and decision-making in live market conditions",
      features: ["Real-time Analysis", "Live Charts", "Market Commentary", "Q&A Sessions"]
    },
    {
      icon: MessageSquare,
      title: "1-on-1 Mentorship",
      description: "Personalized guidance tailored to your specific trading goals and challenges",
      features: ["Personal Review", "Custom Strategy", "Progress Tracking", "Goal Setting"]
    },
    {
      icon: Users2,
      title: "Community Access",
      description: "Join our exclusive community of successful traders sharing insights",
      features: ["Private Group", "Trade Ideas", "Market Updates", "Peer Support"]
    },
    {
      icon: BarChart3,
      title: "Risk Management",
      description: "Learn professional risk management techniques to protect your capital",
      features: ["Position Sizing", "Stop Loss Strategy", "Risk Calculation", "Psychology"]
    },
    {
      icon: Zap,
      title: "Advanced Strategies",
      description: "Sophisticated trading techniques used by institutional professionals",
      features: ["Algorithm Trading", "Multi-timeframe", "Correlation Analysis", "Advanced Setups"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Trading <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs designed to transform your trading approach with institutional-grade strategies
            </p>
          </div>
        </ScrollAnimation>

        {/* Animated Stats */}
        <ScrollAnimation>
          <div id="stats-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="card-professional p-8 text-center hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2">{stats.clients}+</div>
              <div className="text-muted-foreground">Clients Mentored</div>
            </div>
            <div className="card-professional p-8 text-center hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2">{stats.courses}+</div>
              <div className="text-muted-foreground">Training Modules</div>
            </div>
            <div className="card-professional p-8 text-center hover-glow">
              <div className="text-4xl font-bold text-gradient mb-2">{stats.success}%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="card-professional p-8 h-full hover-lift group">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};