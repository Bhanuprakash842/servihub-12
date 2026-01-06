import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  User,
  LogIn,
  Wrench
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"><nav className="container flex h-16 items-center justify-between">{
    /* Logo */
  }<Link to="/" className="flex items-center gap-2"><div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary"><Wrench className="h-5 w-5 text-primary-foreground" /></div><span className="text-xl font-bold text-foreground">ServiHub</span></Link>{
    /* Desktop Navigation */
  }<div className="hidden md:flex items-center gap-6"><Link
    to="/services"
    className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/services") ? "text-primary" : "text-muted-foreground"}`}
  >
            Services
          </Link><Link
    to="/how-it-works"
    className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/how-it-works") ? "text-primary" : "text-muted-foreground"}`}
  >
            How It Works
          </Link><Link
    to="/become-provider"
    className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/become-provider") ? "text-primary" : "text-muted-foreground"}`}
  >
            Become a Provider
          </Link></div>{
    /* Desktop Auth Buttons */
  }<div className="hidden md:flex items-center gap-3"><DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline" size="sm"><User className="h-4 w-4 mr-2" />
                Dashboard
              </Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="w-48"><DropdownMenuItem asChild><Link to="/customer" className="w-full cursor-pointer">
                  Customer Dashboard
                </Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/provider" className="w-full cursor-pointer">
                  Provider Dashboard
                </Link></DropdownMenuItem><DropdownMenuItem asChild><Link to="/admin" className="w-full cursor-pointer">
                  Admin Dashboard
                </Link></DropdownMenuItem></DropdownMenuContent></DropdownMenu><Button size="sm"><LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button></div>{
    /* Mobile Menu Button */
  }<Button
    variant="ghost"
    size="icon"
    className="md:hidden"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >{isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button></nav>{
    /* Mobile Menu */
  }{isMobileMenuOpen && <div className="md:hidden border-t bg-background animate-slide-up"><div className="container py-4 space-y-4"><Link
    to="/services"
    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
    onClick={() => setIsMobileMenuOpen(false)}
  >
              Services
            </Link><Link
    to="/how-it-works"
    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
    onClick={() => setIsMobileMenuOpen(false)}
  >
              How It Works
            </Link><Link
    to="/become-provider"
    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
    onClick={() => setIsMobileMenuOpen(false)}
  >
              Become a Provider
            </Link><div className="pt-4 border-t space-y-2"><Link to="/customer" onClick={() => setIsMobileMenuOpen(false)}><Button variant="outline" className="w-full justify-start">
                  Customer Dashboard
                </Button></Link><Link to="/provider" onClick={() => setIsMobileMenuOpen(false)}><Button variant="outline" className="w-full justify-start">
                  Provider Dashboard
                </Button></Link><Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}><Button variant="outline" className="w-full justify-start">
                  Admin Dashboard
                </Button></Link><Button className="w-full"><LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button></div></div></div>}</header>;
}
