import { Card, CardContent } from "@/components/ui/card";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";
function ServiceCategoryCard({ category }) {
  const Icon = category.icon;
  return <Link to={`/services?category=${category.id}`}><Card hover className="group overflow-hidden"><CardContent className="p-6 text-center"><div
    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
    style={{ backgroundColor: `hsl(${category.color} / 0.1)` }}
  ><Icon
    className="h-8 w-8 transition-colors"
    style={{ color: `hsl(${category.color})` }}
  /></div><h3 className="font-semibold text-foreground mb-1">{category.name}</h3><p className="text-sm text-muted-foreground">{category.description}</p></CardContent></Card></Link>;
}
export function ServiceCategories() {
  return <section className="py-20 bg-muted/30"><div className="container"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From home repairs to personal care, we've got all your service needs covered
          </p></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">{serviceCategories.map((category, index) => <div
    key={category.id}
    className="animate-slide-up"
    style={{ animationDelay: `${index * 0.05}s` }}
  ><ServiceCategoryCard category={category} /></div>)}</div></div></section>;
}
