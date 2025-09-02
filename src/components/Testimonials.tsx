import { Star, Quote } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Trader",
      content: "The SMC mentorship completely transformed my trading. I went from struggling to consistent profitability in just 3 months.",
      rating: 5,
      location: "New York, USA"
    },
    {
      name: "Michael Chen",
      role: "Investment Analyst",
      content: "Finally learned to think like institutions. The risk management techniques alone have saved my account multiple times.",
      rating: 5,
      location: "Singapore"
    },
    {
      name: "David Okonkwo",
      role: "Forex Trader",
      content: "From Nigeria to profitable trading - this program gave me the structure and mindset I needed to succeed consistently.",
      rating: 5,
      location: "Lagos, Nigeria"
    },
    {
      name: "Emma Rodriguez",
      role: "Day Trader",
      content: "The live sessions and community support are incredible. I've learned more here than in years of solo trading.",
      rating: 5,
      location: "Madrid, Spain"
    },
    {
      name: "Ahmed Hassan",
      role: "Financial Advisor",
      content: "Smart Money Concepts opened my eyes to how markets really work. My clients are seeing better results too.",
      rating: 5,
      location: "Dubai, UAE"
    },
    {
      name: "Lisa Thompson",
      role: "Retail Trader",
      content: "The personal mentorship was game-changing. Having someone review my trades and guide my progress made all the difference.",
      rating: 5,
      location: "London, UK"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Students Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real traders who transformed their approach with our proven mentorship program
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="card-professional p-8 h-full hover-lift relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-accent font-medium">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={600}>
          <div className="text-center mt-16">
            <div className="card-professional p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join 200+ Successful Traders</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Start your journey to consistent profitability with our proven SMC methodology
              </p>
              <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 Average Rating</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};