import { Link } from "react-router-dom";
import { Wrench, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ServiHub</span>
            </Link>
            <p className="text-sm text-background/70">
              Your trusted partner for all home services. Quality professionals at your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/services?category=carpentry" className="hover:text-background transition-colors">Carpentry</Link></li>
              <li><Link to="/services?category=plumbing" className="hover:text-background transition-colors">Plumbing</Link></li>
              <li><Link to="/services?category=electrical" className="hover:text-background transition-colors">Electrical</Link></li>
              <li><Link to="/services?category=housekeeping" className="hover:text-background transition-colors">Housekeeping</Link></li>
              <li><Link to="/services?category=beauty" className="hover:text-background transition-colors">Beauty & Spa</Link></li>
              <li><Link to="/services?category=daycare" className="hover:text-background transition-colors">Day Care</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-background transition-colors">Careers</Link></li>
              <li><Link to="/become-provider" className="hover:text-background transition-colors">Become a Provider</Link></li>
              <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@servihub.com" className="hover:text-background transition-colors">
                  support@servihub.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+911234567890" className="hover:text-background transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>
                  123, Tech Park, Whitefield<br />
                  Bangalore, India - 560066
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} ServiHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
