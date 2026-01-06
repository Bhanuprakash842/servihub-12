import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { sampleBookings, serviceCategories } from "@/data/services";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  User,
  DollarSign,
  TrendingUp,
  CheckCircle,
  XCircle,
  Settings,
  BarChart3,
  Wallet,
  MessageSquare,
  ChevronRight,
  Phone
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isOnline, setIsOnline] = useState(true);
  
  const providerBookings = sampleBookings.filter(b => b.providerId === "prov-1" || b.providerId === "prov-2" || b.providerId === "prov-3");
  const newRequests = providerBookings.filter(b => b.status === "pending");
  const activeJobs = providerBookings.filter(b => b.status === "confirmed" || b.status === "in-progress");
  const completedJobs = providerBookings.filter(b => b.status === "completed");

  return (
    <>
      <Helmet>
        <title>Provider Dashboard - ServiHub</title>
        <meta name="description" content="Manage your service bookings, earnings, and profile as a ServiHub service provider." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-muted/30">
        <Navbar />
        <main className="flex-1">
          {/* Header */}
          <section className="gradient-hero py-8">
            <div className="container">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    RK
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-primary-foreground">Rajesh Kumar</h1>
                    <div className="flex items-center gap-2 text-primary-foreground/80">
                      <Star className="h-4 w-4 text-accent fill-accent" />
                      <span>4.9 Rating • Carpentry, Painting</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm text-primary-foreground">Status:</span>
                  <Switch checked={isOnline} onCheckedChange={setIsOnline} />
                  <Badge variant={isOnline ? "success" : "secondary"}>
                    {isOnline ? "Online" : "Offline"}
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          <div className="container py-8">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <nav className="space-y-1">
                      {[
                        { icon: Calendar, label: "Job Requests", value: "jobs", badge: newRequests.length },
                        { icon: BarChart3, label: "Dashboard", value: "dashboard" },
                        { icon: Wallet, label: "Earnings", value: "earnings" },
                        { icon: MessageSquare, label: "Messages", value: "messages" },
                        { icon: Star, label: "Reviews", value: "reviews" },
                        { icon: User, label: "My Profile", value: "profile" },
                        { icon: Settings, label: "Settings", value: "settings" },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.value}
                            onClick={() => setActiveTab(item.value)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                              activeTab === item.value
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                            {item.label}
                            {item.badge ? (
                              <Badge variant="accent" className="ml-auto">{item.badge}</Badge>
                            ) : (
                              <ChevronRight className="h-4 w-4 ml-auto" />
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {activeTab === "jobs" && (
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "New Requests", value: newRequests.length, icon: Calendar, color: "accent" },
                        { label: "Active Jobs", value: activeJobs.length, icon: Clock, color: "primary" },
                        { label: "Completed", value: completedJobs.length, icon: CheckCircle, color: "success" },
                        { label: "This Month", value: "₹12,450", icon: DollarSign, color: "primary" }
                      ].map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                          <Card key={i}>
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-${stat.color}-light`}>
                                  <Icon className={`h-5 w-5 text-${stat.color}`} />
                                </div>
                                <div>
                                  <p className="text-2xl font-bold">{stat.value}</p>
                                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    {/* Job Requests Tabs */}
                    <Tabs defaultValue="new">
                      <TabsList>
                        <TabsTrigger value="new">New Requests ({newRequests.length})</TabsTrigger>
                        <TabsTrigger value="active">Active ({activeJobs.length})</TabsTrigger>
                        <TabsTrigger value="completed">Completed ({completedJobs.length})</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="new" className="mt-4 space-y-4">
                        {newRequests.length === 0 ? (
                          <Card>
                            <CardContent className="py-12 text-center">
                              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                              <p className="text-muted-foreground">No new requests</p>
                            </CardContent>
                          </Card>
                        ) : (
                          newRequests.map((booking) => (
                            <Card key={booking.id} className="border-l-4 border-l-accent">
                              <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                                      <Badge variant="accent">New Request</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                                      <span className="flex items-center gap-1">
                                        <User className="h-4 w-4" />
                                        {booking.customerName}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {booking.date}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {booking.time}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {booking.address}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <p className="text-xl font-bold text-primary">₹{booking.price}</p>
                                    <Button variant="outline" size="sm">
                                      <Phone className="h-4 w-4 mr-1" />
                                      Call
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                      <XCircle className="h-4 w-4 mr-1" />
                                      Decline
                                    </Button>
                                    <Button variant="success" size="sm">
                                      <CheckCircle className="h-4 w-4 mr-1" />
                                      Accept
                                    </Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                        )}
                      </TabsContent>

                      <TabsContent value="active" className="mt-4 space-y-4">
                        {activeJobs.map((booking) => (
                          <Card key={booking.id} className="border-l-4 border-l-primary">
                            <CardContent className="p-6">
                              <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                                    <Badge variant="default">{booking.status}</Badge>
                                  </div>
                                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      {booking.customerName}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {booking.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {booking.time}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <MapPin className="h-4 w-4" />
                                      {booking.address}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <p className="text-xl font-bold text-primary">₹{booking.price}</p>
                                  <Button variant="outline" size="sm">
                                    <Phone className="h-4 w-4 mr-1" />
                                    Contact
                                  </Button>
                                  <Button variant="success" size="sm">
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Mark Complete
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>

                      <TabsContent value="completed" className="mt-4 space-y-4">
                        {completedJobs.map((booking) => (
                          <Card key={booking.id}>
                            <CardContent className="p-6">
                              <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                                    <Badge variant="success">Completed</Badge>
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      {booking.customerName}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {booking.date}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <p className="text-xl font-bold text-primary">₹{booking.price}</p>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 text-accent fill-accent" />
                                    <span className="font-medium">5.0</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>
                )}

                {activeTab === "dashboard" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Performance Overview</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-primary-light">
                              <TrendingUp className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Total Earnings</p>
                              <p className="text-2xl font-bold">₹45,670</p>
                            </div>
                          </div>
                          <p className="text-sm text-success flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            +12% from last month
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-success-light">
                              <CheckCircle className="h-6 w-6 text-success" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Jobs Completed</p>
                              <p className="text-2xl font-bold">127</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            98% completion rate
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-accent-light">
                              <Star className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Average Rating</p>
                              <p className="text-2xl font-bold">4.9</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Based on 234 reviews
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}

                {activeTab !== "jobs" && activeTab !== "dashboard" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="capitalize">{activeTab}</CardTitle>
                      <CardDescription>This section is coming soon</CardDescription>
                    </CardHeader>
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">Feature under development</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProviderDashboard;
