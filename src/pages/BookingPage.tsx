import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { serviceCategories, providers } from "@/data/services";
import { 
  Star, 
  Clock, 
  MapPin, 
  Calendar as CalendarIcon, 
  CheckCircle,
  Shield,
  ArrowLeft
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

const BookingPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);

  // Find service
  const service = serviceCategories
    .flatMap(c => c.services)
    .find(s => s.id === serviceId);

  const category = serviceCategories.find(c => c.id === service?.categoryId);
  const Icon = category?.icon;

  // Find providers for this category
  const availableProviders = providers.filter(p => 
    p.services.includes(service?.categoryId || "")
  );

  const [selectedProvider, setSelectedProvider] = useState(availableProviders[0]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button onClick={() => navigate("/services")}>
            Browse Services
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBooking = () => {
    if (!date || !selectedTime || !address) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Booking confirmed! You will receive a confirmation shortly.");
    navigate("/customer");
  };

  return (
    <>
      <Helmet>
        <title>Book {service.name} - ServiHub</title>
        <meta name="description" content={`Book ${service.name} service. ${service.description}. Starting from ₹${service.price}.`} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Header */}
          <section className="gradient-hero py-8">
            <div className="container">
              <Button 
                variant="ghost" 
                className="text-primary-foreground mb-4"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold text-primary-foreground">
                Book {service.name}
              </h1>
            </div>
          </section>

          <div className="container py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Service Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <div 
                        className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `hsl(${category?.color} / 0.1)` }}
                      >
                        {Icon && <Icon className="h-10 w-10" style={{ color: `hsl(${category?.color})` }} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-accent fill-accent" />
                            <span className="font-medium">{service.rating}</span>
                            <span className="text-muted-foreground">({service.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Select Provider */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Provider</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {availableProviders.map((provider) => (
                        <div
                          key={provider.id}
                          className={cn(
                            "p-4 rounded-xl border-2 cursor-pointer transition-all",
                            selectedProvider?.id === provider.id
                              ? "border-primary bg-primary-light"
                              : "border-border hover:border-primary/50"
                          )}
                          onClick={() => setSelectedProvider(provider)}
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                              {provider.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold">{provider.name}</h4>
                                {provider.verified && (
                                  <Badge variant="success-light" className="text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Star className="h-4 w-4 text-accent fill-accent" />
                                  {provider.rating} ({provider.reviewCount})
                                </span>
                                <span>{provider.experience} experience</span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {provider.location}
                                </span>
                              </div>
                              <p className="text-sm text-primary mt-1">
                                {provider.completedJobs} jobs completed
                              </p>
                            </div>
                            {selectedProvider?.id === provider.id && (
                              <CheckCircle className="h-6 w-6 text-primary" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Date & Time */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Date Picker */}
                      <div>
                        <Label className="mb-2 block">Select Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Time Slots */}
                      <div>
                        <Label className="mb-2 block">Select Time</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Address</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Complete Address *</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your complete address including flat no., building name, street, landmark..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any specific instructions for the service provider..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-medium">{service.name}</span>
                      </div>
                      {selectedProvider && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Provider</span>
                          <span className="font-medium">{selectedProvider.name}</span>
                        </div>
                      )}
                      {date && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Date</span>
                          <span className="font-medium">{format(date, "PP")}</span>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Time</span>
                          <span className="font-medium">{selectedTime}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="text-2xl font-bold text-primary">₹{service.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        *Final price may vary based on requirements
                      </p>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleBooking}
                      disabled={!date || !selectedTime || !address}
                    >
                      Confirm Booking
                    </Button>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment & money-back guarantee</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
