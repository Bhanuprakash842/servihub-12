import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Login - ServiHub</title>
            </Helmet>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center p-4 bg-muted/20">
                    <Card className="w-full max-w-md">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
                            <CardDescription className="text-center">
                                Enter your credentials to access your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link to="#" className="text-sm font-medium text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button className="w-full">
                                <LogIn className="mr-2 h-4 w-4" /> Sign In
                            </Button>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline">Google</Button>
                                <Button variant="outline">Facebook</Button>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4 text-center">
                            <div className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-primary font-medium hover:underline">
                                    Sign up
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

export default Login;
