import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
const testimonials = [
  {
    name: "Anita Desai",
    role: "Homeowner, Mumbai",
    content: "ServiHub has transformed how I manage home services. The professionals are punctual, skilled, and courteous. Highly recommended!",
    rating: 5,
    avatar: "AD"
  },
  {
    name: "Vikram Patel",
    role: "Business Owner, Delhi",
    content: "We use ServiHub for our office maintenance. Their electricians and plumbers are top-notch. Great service at reasonable prices.",
    rating: 5,
    avatar: "VP"
  },
  {
    name: "Priyanka Reddy",
    role: "Working Professional, Bangalore",
    content: "The beauty services at home are a lifesaver! I don't have to spend weekends at salons anymore. The beauticians are well-trained.",
    rating: 5,
    avatar: "PR"
  }
];
export function Testimonials() {
  return <section className="py-20 bg-muted/30"><div className="container"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => <Card
    key={index}
    className="relative overflow-hidden animate-slide-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  ><CardContent className="p-6">{
    /* Quote Icon */
  }<Quote className="h-10 w-10 text-primary/20 mb-4" />{
    /* Content */
  }<p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>{
    /* Rating */
  }<div className="flex gap-1 mb-4">{Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}</div>{
    /* Author */
  }<div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">{testimonial.avatar}</div><div><p className="font-semibold text-foreground">{testimonial.name}</p><p className="text-sm text-muted-foreground">{testimonial.role}</p></div></div></CardContent></Card>)}</div></div></section>;
}
