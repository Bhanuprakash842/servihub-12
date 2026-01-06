import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export function CTASection() {
  return <section className="py-20 gradient-hero relative overflow-hidden">{
    /* Background Elements */
  }<div className="absolute inset-0 opacity-10"><div className="absolute top-10 right-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" /><div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" /></div><div className="container relative z-10"><div className="max-w-3xl mx-auto text-center"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6"><Sparkles className="h-4 w-4 text-accent" /><span className="text-sm text-primary-foreground">Join thousands of happy customers</span></div><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2><p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto">
            Book your first service today and experience the convenience of professional home services.
          </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link to="/services"><Button variant="accent" size="xl">
                Book a Service
                <ArrowRight className="h-5 w-5 ml-2" /></Button></Link><Link to="/become-provider"><Button variant="hero-outline" size="xl">
                Become a Provider
              </Button></Link></div></div></div></section>;
}
