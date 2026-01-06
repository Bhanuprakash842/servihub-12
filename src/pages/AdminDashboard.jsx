import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { sampleBookings, providers, serviceCategories } from "@/data/services";
import {
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  Settings,
  BarChart3,
  Shield,
  FileText,
  ChevronRight,
  Search,
  MoreVertical,
  CheckCircle,
  XCircle,
  Eye,
  UserPlus,
  Briefcase,
  AlertTriangle
} from "lucide-react";
import { Helmet } from "react-helmet-async";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const allBookings = sampleBookings;
  const pendingApprovals = providers.filter((p) => !p.verified).length;
  return <><Helmet><title>Admin Dashboard - ServiHub</title><meta name="description" content="ServiHub admin dashboard for managing users, bookings, providers, and platform analytics." /></Helmet><div className="min-h-screen flex flex-col bg-muted/30"><Navbar /><main className="flex-1">{
    /* Header */
  }<section className="gradient-hero py-8"><div className="container"><div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold text-primary-foreground">Admin Dashboard</h1><p className="text-primary-foreground/80">Manage your platform and monitor performance</p></div><Badge variant="accent" className="text-sm"><Shield className="h-4 w-4 mr-1" />
                  Super Admin
                </Badge></div></div></section><div className="container py-8"><div className="grid lg:grid-cols-5 gap-6">{
    /* Sidebar */
  }<div className="lg:col-span-1"><Card><CardContent className="p-4"><nav className="space-y-1">{[
    { icon: BarChart3, label: "Overview", value: "overview" },
    { icon: Users, label: "Users", value: "users" },
    { icon: Briefcase, label: "Providers", value: "providers", badge: pendingApprovals || void 0 },
    { icon: Calendar, label: "Bookings", value: "bookings" },
    { icon: DollarSign, label: "Revenue", value: "revenue" },
    { icon: FileText, label: "Services", value: "services" },
    { icon: AlertTriangle, label: "Reports", value: "reports" },
    { icon: Settings, label: "Settings", value: "settings" }
  ].map((item) => {
    const Icon = item.icon;
    return <button
      key={item.value}
      onClick={() => setActiveTab(item.value)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === item.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
    ><Icon className="h-5 w-5" />{item.label}{item.badge ? <Badge variant="destructive" className="ml-auto">{item.badge}</Badge> : <ChevronRight className="h-4 w-4 ml-auto" />}</button>;
  })}</nav></CardContent></Card></div>{
    /* Main Content */
  }<div className="lg:col-span-4">{activeTab === "overview" && <div className="space-y-6">{
    /* Stats Grid */
  }<div className="grid grid-cols-2 md:grid-cols-4 gap-4">{[
    { label: "Total Users", value: "12,456", change: "+8%", icon: Users, color: "primary" },
    { label: "Active Providers", value: "1,234", change: "+12%", icon: Briefcase, color: "success" },
    { label: "Total Bookings", value: "8,745", change: "+15%", icon: Calendar, color: "accent" },
    { label: "Revenue", value: "\u20B912.5L", change: "+22%", icon: DollarSign, color: "primary" }
  ].map((stat, i) => {
    const Icon = stat.icon;
    return <Card key={i}><CardContent className="p-6"><div className="flex items-center justify-between mb-4"><div className="p-2 rounded-lg bg-muted"><Icon className="h-5 w-5 text-muted-foreground" /></div><Badge variant="success-light" className="text-xs"><TrendingUp className="h-3 w-3 mr-1" />{stat.change}</Badge></div><p className="text-2xl font-bold">{stat.value}</p><p className="text-sm text-muted-foreground">{stat.label}</p></CardContent></Card>;
  })}</div>{
    /* Recent Activity */
  }<div className="grid md:grid-cols-2 gap-6"><Card><CardHeader><CardTitle>Recent Bookings</CardTitle></CardHeader><CardContent><div className="space-y-4">{allBookings.slice(0, 5).map((booking) => <div key={booking.id} className="flex items-center justify-between py-2 border-b last:border-0"><div><p className="font-medium">{booking.serviceName}</p><p className="text-sm text-muted-foreground">{booking.customerName}</p></div><div className="text-right"><p className="font-medium">₹{booking.price}</p><Badge variant={booking.status === "completed" ? "success" : booking.status === "pending" ? "accent" : "default"} className="text-xs">{booking.status}</Badge></div></div>)}</div></CardContent></Card><Card><CardHeader><CardTitle>Top Providers</CardTitle></CardHeader><CardContent><div className="space-y-4">{providers.slice(0, 5).map((provider, index) => <div key={provider.id} className="flex items-center gap-3 py-2 border-b last:border-0"><div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium">{provider.name.split(" ").map((n) => n[0]).join("")}</div><div className="flex-1"><p className="font-medium">{provider.name}</p><p className="text-sm text-muted-foreground">{provider.completedJobs} jobs</p></div><div className="flex items-center gap-1"><span className="text-accent">★</span><span className="font-medium">{provider.rating}</span></div></div>)}</div></CardContent></Card></div>{
    /* Service Categories Performance */
  }<Card><CardHeader><CardTitle>Service Categories</CardTitle></CardHeader><CardContent><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{serviceCategories.slice(0, 8).map((category) => {
    const Icon = category.icon;
    const bookings = Math.floor(Math.random() * 500) + 100;
    return <div
      key={category.id}
      className="p-4 rounded-xl border hover:shadow-md transition-shadow cursor-pointer"
    ><div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
      style={{ backgroundColor: `hsl(${category.color} / 0.1)` }}
    ><Icon className="h-6 w-6" style={{ color: `hsl(${category.color})` }} /></div><p className="font-medium">{category.name}</p><p className="text-sm text-muted-foreground">{bookings} bookings</p></div>;
  })}</div></CardContent></Card></div>}{activeTab === "providers" && <div className="space-y-6"><div className="flex items-center justify-between"><h2 className="text-2xl font-bold">Manage Providers</h2><Button><UserPlus className="h-4 w-4 mr-2" />
                        Add Provider
                      </Button></div>{
    /* Search */
  }<div className="relative max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" /><Input
    placeholder="Search providers..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="pl-10"
  /></div>{
    /* Providers List */
  }<Card><CardContent className="p-0"><div className="divide-y">{providers.map((provider) => <div key={provider.id} className="p-4 flex items-center gap-4"><div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-medium">{provider.name.split(" ").map((n) => n[0]).join("")}</div><div className="flex-1"><div className="flex items-center gap-2"><p className="font-medium">{provider.name}</p>{provider.verified ? <Badge variant="success-light"><CheckCircle className="h-3 w-3 mr-1" />
                                      Verified
                                    </Badge> : <Badge variant="accent-light">Pending</Badge>}</div><p className="text-sm text-muted-foreground">{provider.services.map(
    (s) => serviceCategories.find((c) => c.id === s)?.name
  ).join(", ")}</p></div><div className="text-center"><p className="font-medium">{provider.completedJobs}</p><p className="text-xs text-muted-foreground">Jobs</p></div><div className="text-center"><div className="flex items-center gap-1"><span className="text-accent">★</span><span className="font-medium">{provider.rating}</span></div><p className="text-xs text-muted-foreground">{provider.reviewCount} reviews</p></div><div className="flex items-center gap-2"><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>{!provider.verified && <><Button variant="success" size="sm"><CheckCircle className="h-4 w-4 mr-1" />
                                      Approve
                                    </Button><Button variant="destructive" size="sm"><XCircle className="h-4 w-4 mr-1" />
                                      Reject
                                    </Button></>}<Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button></div></div>)}</div></CardContent></Card></div>}{activeTab === "bookings" && <div className="space-y-6"><div className="flex items-center justify-between"><h2 className="text-2xl font-bold">All Bookings</h2></div><Tabs defaultValue="all"><TabsList><TabsTrigger value="all">All ({allBookings.length})</TabsTrigger><TabsTrigger value="pending">Pending</TabsTrigger><TabsTrigger value="confirmed">Confirmed</TabsTrigger><TabsTrigger value="completed">Completed</TabsTrigger></TabsList><TabsContent value="all" className="mt-4"><Card><CardContent className="p-0"><div className="divide-y">{allBookings.map((booking) => <div key={booking.id} className="p-4 flex items-center gap-4"><div className="flex-1"><div className="flex items-center gap-2 mb-1"><p className="font-medium">{booking.serviceName}</p><Badge variant={booking.status === "completed" ? "success" : booking.status === "pending" ? "accent" : "default"}>{booking.status}</Badge></div><p className="text-sm text-muted-foreground">{booking.customerName} → {booking.providerName}</p></div><div className="text-right"><p className="font-medium">₹{booking.price}</p><p className="text-sm text-muted-foreground">{booking.date}</p></div><Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button></div>)}</div></CardContent></Card></TabsContent></Tabs></div>}{!["overview", "providers", "bookings"].includes(activeTab) && <Card><CardHeader><CardTitle className="capitalize">{activeTab}</CardTitle><CardDescription>This section is coming soon</CardDescription></CardHeader><CardContent className="py-12 text-center"><p className="text-muted-foreground">Feature under development</p></CardContent></Card>}</div></div></div></main><Footer /></div></>;
};
export default AdminDashboard;
