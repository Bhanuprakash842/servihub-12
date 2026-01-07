import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
    return (
        <>
            <Helmet>
                <title>How It Works - ServiHub</title>
                <meta name="description" content="Learn how ServiHub connects you with trusted professionals for your home service needs." />
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 pt-10">
                    <div className="container text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4">Simple, Fast, and Reliable</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We've streamlined the process of finding and booking home services so you can get back to doing what you love.
                        </p>
                    </div>

                    <HowItWorks />

                    <section className="py-20 bg-muted/30">
                        <div className="container max-w-4xl text-center">
                            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join thousands of satisfied customers who trust ServiHub.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" asChild>
                                    <Link to="/services">Book a Service</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link to="/signup">Create Account</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HowItWorksPage;
