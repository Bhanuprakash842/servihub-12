import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Users, Shield } from "lucide-react";

const Feature = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const ServiceProviderPage = () => {
    const benefits = [
        {
            icon: TrendingUp,
            title: "Grow Your Business",
            description: "Access a large customer base looking for your specific skills."
        },
        {
            icon: Users,
            title: "Flexible Schedule",
            description: "Work when you want. You have full control over your availability."
        },
        {
            icon: Shield,
            title: "Secure Payments",
            description: "Get paid directly and securely through our platform."
        },
        {
            icon: CheckCircle,
            title: "Verified Badge",
            description: "Stand out with a verified badge after passing our vetting process."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Become a Provider - ServiHub</title>
                <meta name="description" content="Join ServiHub as a service provider and grow your business." />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative py-20 md:py-32 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 -z-10" />
                        <div className="container grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                    Expand Your Reach with <span className="text-primary">ServiHub</span>
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Join our network of trusted professionals. We handle the marketing and booking so you can focus on delivering great service.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="px-8" asChild>
                                        <Link to="/signup?type=provider">Join Now</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link to="/how-it-works">Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative h-[400px] bg-muted rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                    {/* Placeholder for an image */}
                                    <span className="text-lg">Provider Image Component</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="py-20">
                        <div className="container">
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
                                <p className="text-lg text-muted-foreground">
                                    We provide the tools and support you need to succeed.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {benefits.map((benefit, index) => (
                                    <Feature key={index} {...benefit} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 bg-primary text-primary-foreground">
                        <div className="container text-center max-w-3xl">
                            <h2 className="text-3xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
                            <p className="text-lg mb-8 opacity-90">
                                Sign up today and start receiving job requests in your area.
                            </p>
                            <Button size="lg" variant="secondary" className="px-8" asChild>
                                <Link to="/signup?type=provider">Get Started</Link>
                            </Button>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default ServiceProviderPage;
