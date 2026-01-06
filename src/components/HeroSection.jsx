import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  return <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">{
    /* Background Pattern */
  }<div className="absolute inset-0 opacity-10"><div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" /><div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" /></div><div className="container relative z-10"><div className="max-w-4xl mx-auto text-center">{
    /* Trust Badge */
  }<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in"><Shield className="h-4 w-4 text-accent" /><span className="text-sm text-primary-foreground">Trusted by 1M+ customers across India</span></div>{
    /* Main Heading */
  }<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up leading-tight">
            Home Services at Your 
            <span className="relative"><span className="relative z-10"> Fingertips</span><svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 200 12" fill="none"><path d="M2 10C50 4 150 4 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></span></h1><p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Book trusted professionals for all your home service needs. 
            From repairs to beauty, we bring experts to your doorstep.
          </p>{
    /* Search Box */
  }<div className="bg-card rounded-2xl p-2 shadow-xl max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: "0.2s" }}><div className="flex flex-col sm:flex-row gap-2"><div className="flex-1 relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><input
    type="text"
    placeholder="Search for a service..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
  /></div><div className="flex gap-2"><div className="relative flex-1 sm:flex-none"><MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><input
    type="text"
    placeholder="Location"
    className="w-full sm:w-40 h-12 pl-12 pr-4 rounded-xl bg-muted/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
  /></div><Link to={`/services${searchQuery ? `?search=${searchQuery}` : ""}`}><Button size="lg" className="h-12 px-6">
                    Search
                    <ArrowRight className="h-4 w-4 ml-1" /></Button></Link></div></div></div>{
    /* Trust Indicators */
  }<div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}><div className="flex items-center gap-2 text-primary-foreground/80"><Star className="h-5 w-5 text-accent fill-accent" /><span className="text-sm font-medium">4.8 Average Rating</span></div><div className="flex items-center gap-2 text-primary-foreground/80"><Clock className="h-5 w-5 text-accent" /><span className="text-sm font-medium">Same Day Service</span></div><div className="flex items-center gap-2 text-primary-foreground/80"><Shield className="h-5 w-5 text-accent" /><span className="text-sm font-medium">Verified Professionals</span></div></div></div></div></section>;
}
