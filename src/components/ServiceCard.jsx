import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";
export function ServiceCard({ service }) {
  const category = serviceCategories.find((c) => c.id === service.categoryId);
  const Icon = category?.icon;
  return <Card hover className="overflow-hidden h-full flex flex-col"><CardHeader className="p-0"><div
    className="h-40 relative flex items-center justify-center"
    style={{ backgroundColor: `hsl(${category?.color || "174 84% 32%"} / 0.1)` }}
  >{Icon && <Icon
    className="h-16 w-16"
    style={{ color: `hsl(${category?.color || "174 84% 32%"})` }}
  />}<Badge className="absolute top-3 right-3" variant="accent-light">{category?.name}</Badge></div></CardHeader><CardContent className="p-5 flex-1"><h3 className="font-semibold text-foreground mb-2">{service.name}</h3><p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p><div className="flex items-center gap-4 text-sm"><div className="flex items-center gap-1"><Star className="h-4 w-4 text-accent fill-accent" /><span className="font-medium">{service.rating}</span><span className="text-muted-foreground">({service.reviewCount})</span></div><div className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" /><span>{service.duration}</span></div></div></CardContent><CardFooter className="p-5 pt-0 flex items-center justify-between"><div><span className="text-sm text-muted-foreground">Starting from</span><p className="text-xl font-bold text-primary">₹{service.price}</p></div><Link to={`/booking/${service.id}`}><Button size="sm">
            Book Now
            <ArrowRight className="h-4 w-4 ml-1" /></Button></Link></CardFooter></Card>;
}
