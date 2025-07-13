import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Successfully subscribed!",
            description: "Thank you for joining our newsletter. You'll receive exclusive offers and updates.",
        });

        setEmail("");
        setIsLoading(false);
    };

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.newsletter-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`newsletter-section py-20 bg-gradient-to-br from-blush/40 via-peach/20 to-mint/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className={`mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-foreground animate-slide-right" style={{ animationDelay: '0.2s' }}>Stay </span>
                            <span className="bg-gradient-sunset bg-clip-text text-transparent animate-slide-left" style={{ animationDelay: '0.4s' }}>Connected</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and styling tips for modest fashion.
                        </p>
                    </div>

                    {/* Newsletter Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12 animate-scale-in" style={{ animationDelay: '0.8s' }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 h-12 border-coral/20 focus:border-coral transition-colors"
                                required
                            />
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                                className="h-12 px-8 bg-gradient-sunset text-white shadow-peach animate-pulse-glow hover:shadow-blush"
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        Subscribing...
                                    </div>
                                ) : (
                                    "Subscribe"
                                )}
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </form>

                    {/* Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 bg-gradient-peach rounded-full flex items-center justify-center mx-auto mb-4 shadow-peach animate-pulse-glow">
                                <span className="text-2xl">💌</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Exclusive Offers</h3>
                            <p className="text-sm text-muted-foreground">Get access to special discounts and member-only sales</p>
                        </div>

                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-16 bg-gradient-mint rounded-full flex items-center justify-center mx-auto mb-4 shadow-mint animate-pulse-glow">
                                <span className="text-2xl">👗</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">New Arrivals</h3>
                            <p className="text-sm text-muted-foreground">Be the first to discover our latest modest fashion pieces</p>
                        </div>

                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.6s' }}>
                            <div className="w-16 h-16 bg-gradient-blush rounded-full flex items-center justify-center mx-auto mb-4 shadow-blush animate-pulse-glow">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Style Tips</h3>
                            <p className="text-sm text-muted-foreground">Expert advice on modest fashion and styling inspiration</p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <p className="text-muted-foreground mb-4">Join over 50,000 women who love our newsletter</p>
                        <div className="flex justify-center items-center gap-8 opacity-60">
                            <div className="flex -space-x-2">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 bg-gradient-gold rounded-full border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                                    >
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center text-gold">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-lg">⭐</span>
                                ))}
                                <span className="ml-2 text-sm text-muted-foreground">4.9/5 rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}