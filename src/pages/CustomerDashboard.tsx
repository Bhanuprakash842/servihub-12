import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleBookings } from "@/data/services";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  User,
  Bell,
  Settings,
  Heart,
  CreditCard,
  HelpCircle,
  ChevronRight,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const statusColors = {
  pending: "accent",
  confirmed: "primary",
  "in-progress": "primary",
  completed: "success",
  cancelled: "destructive"
} as const;

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  
  const customerBookings = sampleBookings.filter(b => b.customerId === "cust-1");
  const upcomingBookings = customerBookings.filter(b => b.status === "confirmed" || b.status === "pending");
  const pastBookings = customerBookings.filter(b => b.status === "completed" || b.status === "cancelled");

  return (
    <>
      <Helmet>
        <title>Customer Dashboard - ServiHub</title>
        <meta name="description" content="Manage your bookings, view history, and access your ServiHub customer account." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-muted/30">
        <Navbar />
        <main className="flex-1">
          {/* Header */}
          <section className="gradient-hero py-8">
            <div className="container">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center text-accent-foreground text-2xl font-bold">
                  JD
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary-foreground">Welcome back, John!</h1>
                  <p className="text-primary-foreground/80">Manage your bookings and account</p>
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
                        { icon: Calendar, label: "My Bookings", value: "bookings" },
                        { icon: Heart, label: "Favorites", value: "favorites" },
                        { icon: CreditCard, label: "Payments", value: "payments" },
                        { icon: Bell, label: "Notifications", value: "notifications" },
                        { icon: User, label: "Profile", value: "profile" },
                        { icon: Settings, label: "Settings", value: "settings" },
                        { icon: HelpCircle, label: "Help & Support", value: "help" },
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
                            <ChevronRight className="h-4 w-4 ml-auto" />
                          </button>
                        );
                      })}
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {activeTab === "bookings" && (
                  <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">My Bookings</h2>
                      <Link to="/services">
                        <Button>
                          <Plus className="h-4 w-4 mr-2" />
                          Book New Service
                        </Button>
                      </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Total Bookings", value: customerBookings.length, color: "primary" },
                        { label: "Upcoming", value: upcomingBookings.length, color: "accent" },
                        { label: "Completed", value: pastBookings.filter(b => b.status === "completed").length, color: "success" },
                        { label: "This Month", value: "₹1,948", color: "primary" }
                      ].map((stat, i) => (
                        <Card key={i}>
                          <CardContent className="p-4 text-center">
                            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Bookings Tabs */}
                    <Tabs defaultValue="upcoming">
                      <TabsList>
                        <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
                        <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="upcoming" className="mt-4 space-y-4">
                        {upcomingBookings.length === 0 ? (
                          <Card>
                            <CardContent className="py-12 text-center">
                              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                              <p className="text-muted-foreground">No upcoming bookings</p>
                              <Link to="/services">
                                <Button className="mt-4">Book a Service</Button>
                              </Link>
                            </CardContent>
                          </Card>
                        ) : (
                          upcomingBookings.map((booking) => (
                            <Card key={booking.id}>
                              <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                                      <Badge variant={statusColors[booking.status] === "accent" ? "accent" : statusColors[booking.status] === "success" ? "success" : "default"}>
                                        {booking.status}
                                      </Badge>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                      <span className="flex items-center gap-1">
                                        <User className="h-4 w-4" />
                                        {booking.providerName}
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
                                    <Button variant="outline" size="sm">Reschedule</Button>
                                    <Button variant="destructive" size="sm">Cancel</Button>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))
                        )}
                      </TabsContent>

                      <TabsContent value="past" className="mt-4 space-y-4">
                        {pastBookings.map((booking) => (
                          <Card key={booking.id}>
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-semibold text-lg">{booking.serviceName}</h3>
                                    <Badge variant={booking.status === "completed" ? "success" : "destructive"}>
                                      {booking.status}
                                    </Badge>
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <User className="h-4 w-4" />
                                      {booking.providerName}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      {booking.date}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <p className="text-xl font-bold text-primary">₹{booking.price}</p>
                                  {booking.status === "completed" && (
                                    <Button variant="outline" size="sm">
                                      <Star className="h-4 w-4 mr-1" />
                                      Rate
                                    </Button>
                                  )}
                                  <Button size="sm">Book Again</Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </div>
                )}

                {activeTab !== "bookings" && (
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

export default CustomerDashboard;
