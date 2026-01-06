import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { serviceCategories } from "@/data/services";
import { Search, Filter, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
const ServicesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search") || "";
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const allServices = useMemo(() => {
    return serviceCategories.flatMap((category) => category.services);
  }, []);
  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory = !selectedCategory || service.categoryId === selectedCategory;
      const matchesSearch = !localSearch || service.name.toLowerCase().includes(localSearch.toLowerCase()) || service.description.toLowerCase().includes(localSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allServices, selectedCategory, localSearch]);
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      searchParams.set("category", categoryId);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };
  const clearFilters = () => {
    setSelectedCategory(null);
    setLocalSearch("");
    setSearchParams({});
  };
  return <><Helmet><title>Browse Services - ServiHub</title><meta name="description" content="Browse and book professional home services. Find carpenters, plumbers, electricians, beauticians, housekeepers and more." /></Helmet><div className="min-h-screen flex flex-col"><Navbar /><main className="flex-1">{
    /* Header */
  }<section className="gradient-hero py-12"><div className="container"><h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Browse Services
              </h1><p className="text-primary-foreground/80 max-w-2xl">
                Find the perfect professional for your needs from our curated list of services.
              </p></div></section><div className="container py-8">{
    /* Filters */
  }<div className="flex flex-col lg:flex-row gap-6 mb-8">{
    /* Search */
  }<div className="relative flex-1 max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input
    placeholder="Search services..."
    value={localSearch}
    onChange={(e) => setLocalSearch(e.target.value)}
    className="pl-10"
  /></div>{
    /* Category Filters */
  }<div className="flex flex-wrap gap-2 items-center"><Filter className="h-5 w-5 text-muted-foreground" /><Button
    variant={selectedCategory === null ? "default" : "outline"}
    size="sm"
    onClick={() => handleCategoryClick(null)}
  >
                  All
                </Button>{serviceCategories.map((category) => <Button
    key={category.id}
    variant={selectedCategory === category.id ? "default" : "outline"}
    size="sm"
    onClick={() => handleCategoryClick(category.id)}
  >{category.name}</Button>)}{(selectedCategory || localSearch) && <Button variant="ghost" size="sm" onClick={clearFilters}><X className="h-4 w-4 mr-1" />
                    Clear
                  </Button>}</div></div>{
    /* Results Count */
  }<div className="flex items-center gap-2 mb-6"><Badge variant="secondary">{filteredServices.length} services found
              </Badge>{selectedCategory && <Badge variant="primary-light">{serviceCategories.find((c) => c.id === selectedCategory)?.name}</Badge>}</div>{
    /* Services Grid */
  }{filteredServices.length > 0 ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{filteredServices.map((service, index) => <div
    key={service.id}
    className="animate-slide-up"
    style={{ animationDelay: `${index * 0.05}s` }}
  ><ServiceCard service={service} /></div>)}</div> : <div className="text-center py-20"><p className="text-xl text-muted-foreground mb-4">No services found</p><Button onClick={clearFilters}>Clear Filters</Button></div>}</div></main><Footer /></div></>;
};
export default ServicesPage;
