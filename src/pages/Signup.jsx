import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useLocation } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Signup = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const defaultTab = searchParams.get("type") === "provider" ? "provider" : "customer";

    return (
        <>
            <Helmet>
                <title>Sign Up - ServiHub</title>
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center p-4 bg-muted/20">
                    <Card className="w-full max-w-md">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                            <CardDescription className="text-center">
                                Enter your details to get started with ServiHub
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue={defaultTab} className="w-full">
                                <TabsList className="grid w-full grid-cols-2 mb-4">
                                    <TabsTrigger value="customer">I'm a Customer</TabsTrigger>
                                    <TabsTrigger value="provider">I'm a Provider</TabsTrigger>
                                </TabsList>

                                <TabsContent value="customer" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Doe" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="m@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" required />
                                    </div>
                                    <Button className="w-full">
                                        <UserPlus className="mr-2 h-4 w-4" /> Create Customer Account
                                    </Button>
                                </TabsContent>

                                <TabsContent value="provider" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="p-first-name">First name</Label>
                                            <Input id="p-first-name" placeholder="Jane" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="p-last-name">Last name</Label>
                                            <Input id="p-last-name" placeholder="Smith" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="service-type">Service Type</Label>
                                        <Input id="service-type" placeholder="e.g. Plumbing, Cleaning" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="p-email">Email</Label>
                                        <Input id="p-email" type="email" placeholder="jane@pro.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="p-password">Password</Label>
                                        <Input id="p-password" type="password" required />
                                    </div>
                                    <Button className="w-full">
                                        <UserPlus className="mr-2 h-4 w-4" /> Join as Provider
                                    </Button>
                                </TabsContent>
                            </Tabs>

                            <div className="relative mt-4">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <Button variant="outline">Google</Button>
                                <Button variant="outline">Facebook</Button>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 text-center">
                            <div className="text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link to="/login" className="text-primary font-medium hover:underline">
                                    Sign in
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Signup;
