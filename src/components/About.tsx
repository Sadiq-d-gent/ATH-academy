import { Target, Users, TrendingUp, Award } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Trading",
      description: "Master institutional-level precision with Smart Money Concepts"
    },
    {
      icon: Users,
      title: "Proven Mentorship",
      description: "5+ years of experience mentoring 200+ successful traders"
    },
    {
      icon: TrendingUp,
      title: "Market Understanding",
      description: "Learn to read market manipulation and liquidity grabs"
    },
    {
      icon: Award,
      title: "Results Driven",
      description: "Structured system tailored to your individual goals"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Trading <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mentorship program is built around Smart Money Concepts (SMC) — a powerful strategy 
              used by institutional traders to understand market manipulation, liquidity grabs, and true price action.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="card-professional p-8 text-center hover-lift group">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-16 text-center">
            <div className="card-professional p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Learn to Trade Like the Institutions</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike retail strategies that rely on indicators or guesswork, SMC gives you a clearer picture 
                of what the big players are doing. Whether you're a beginner or struggling to stay consistent, 
                I'll guide you through a system that's simple, structured, and tailored to your goals.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};