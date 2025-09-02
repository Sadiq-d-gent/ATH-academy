import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890?text=Hello! I am interested in your trading mentorship program.', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@tradinghub.com?subject=Trading Mentorship Inquiry', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat"
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Start <span className="text-gradient bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Trading Like a Pro?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join our exclusive mentorship program and transform your trading approach with Smart Money Concepts
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CTA Section */}
          <ScrollAnimation>
            <div className="card-glass p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp Consultation</div>
                    <div className="text-white/70">Instant access to our mentorship team</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-gradient-success rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Support</div>
                    <div className="text-white/70">Detailed program information & pricing</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Consultation</div>
                    <div className="text-white/70">Speak directly with our trading experts</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="btn-whatsapp px-8 py-6 text-lg rounded-xl hover-lift flex-1"
                  size="lg"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Message on WhatsApp
                </Button>
                <Button 
                  onClick={handleEmailClick}
                  variant="outline" 
                  className="px-8 py-6 text-lg rounded-xl hover-lift border-white/30 text-white hover:bg-white/10 flex-1"
                  size="lg"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  Send Email
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation delay={200}>
            <div className="text-white space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Program?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                    <span className="text-white/90">5+ years of proven trading experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                    <span className="text-white/90">200+ successfully mentored traders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                    <span className="text-white/90">Exclusive Smart Money Concepts training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
                    <span className="text-white/90">Live trading sessions & community access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2" />
                    <span className="text-white/90">Personalized 1-on-1 mentorship</span>
                  </li>
                </ul>
              </div>

              <div className="card-glass p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <span className="font-semibold">Global Reach</span>
                </div>
                <p className="text-white/80">
                  Serving traders worldwide with programs tailored for different time zones and market conditions
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Trust Indicators */}
        <ScrollAnimation delay={400}>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">30+</div>
                <div className="text-white/70 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4.9</div>
                <div className="text-white/70 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};