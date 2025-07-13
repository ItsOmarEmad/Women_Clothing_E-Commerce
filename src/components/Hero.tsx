import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import downloadImage from '@/assets/download.jpeg';

export function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Parallax effect for background
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            parallaxElements.forEach((element) => {
                const speed = 0.5;
                const yPos = -(currentScrollY * speed);
                (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
            });

            // Fade out effect when scrolling down
            if (currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush via-peach/40 to-mint/30 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-50'
            }`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0 parallax-bg">
                <img
                    src={downloadImage}
                    alt="Elegant modest fashion"
                    className="w-full h-full object-cover opacity-20"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/src/assets/download.jpeg";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blush/80 via-peach/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className={`max-w-4xl mx-auto text-center animate-fade-in transition-all duration-700 ${scrollY > 50 ? 'transform translate-y-[-20px] scale-95' : 'transform translate-y-0 scale-100'
                    }`}>
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-peach border border-coral/30 rounded-full text-sm font-medium text-coral mb-6 animate-bounce-in shadow-peach">
                        ✨ New Collection Available
                    </div>

                    {/* Main Heading */}
                    <h1 className={`font-bold mb-6 leading-tight transition-all duration-500 ${scrollY > 30 ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'
                        }`}>
                        <span className={`block text-foreground animate-slide-down transition-all duration-500 ${scrollY > 30 ? 'transform translate-x-[-10px]' : 'transform translate-x-0'
                            }`} style={{ animationDelay: '0.2s' }}>Elegant</span>
                        <span className={`block bg-gradient-sunset bg-clip-text text-transparent animate-slide-up transition-all duration-500 ${scrollY > 30 ? 'transform translate-x-[10px]' : 'transform translate-x-0'
                            }`} style={{ animationDelay: '0.4s' }}>
                            Modest Fashion
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        Discover our curated collection of hijabs, modest wear, and elegant clothing designed for the modern Muslim woman.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                        <Button
                            variant="hero"
                            size="xl"
                            className="bg-gradient-sunset text-white shadow-peach animate-pulse-glow hover:shadow-blush"
                            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Shop Collection
                        </Button>
                        <Button
                            variant="outline"
                            size="xl"
                            className="border-coral text-coral hover:bg-coral hover:text-white transition-all duration-300 animate-slide-left shadow-peach"
                            style={{ animationDelay: '0.2s' }}
                        >
                            View Lookbook
                        </Button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 bg-gradient-peach rounded-full flex items-center justify-center mx-auto mb-4 shadow-peach animate-pulse-glow">
                                <span className="text-2xl">🌟</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
                            <p className="text-sm text-muted-foreground">Carefully selected fabrics and craftsmanship</p>
                        </div>

                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-16 bg-gradient-mint rounded-full flex items-center justify-center mx-auto mb-4 shadow-mint animate-pulse-glow">
                                <span className="text-2xl">🚚</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Free Shipping</h3>
                            <p className="text-sm text-muted-foreground">Free delivery on orders over $100</p>
                        </div>

                        <div className="text-center animate-rotate-in" style={{ animationDelay: '0.6s' }}>
                            <div className="w-16 h-16 bg-gradient-blush rounded-full flex items-center justify-center mx-auto mb-4 shadow-blush animate-pulse-glow">
                                <span className="text-2xl">↩️</span>
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Easy Returns</h3>
                            <p className="text-sm text-muted-foreground">30-day hassle-free return policy</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute top-20 left-10 w-20 h-20 bg-gradient-peach rounded-full opacity-30 animate-float parallax-bg transition-all duration-700 ${scrollY > 50 ? 'transform translate-y-[-30px] scale-75' : 'transform translate-y-0 scale-100'
                }`}></div>
            <div className={`absolute bottom-20 right-10 w-16 h-16 bg-gradient-mint rounded-full opacity-30 animate-float parallax-bg transition-all duration-700 ${scrollY > 50 ? 'transform translate-y-[30px] scale-75' : 'transform translate-y-0 scale-100'
                }`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute top-1/2 right-20 w-12 h-12 bg-gradient-blush rounded-full opacity-40 animate-float parallax-bg transition-all duration-700 ${scrollY > 50 ? 'transform translate-x-[20px] scale-75' : 'transform translate-x-0 scale-100'
                }`} style={{ animationDelay: '2s' }}></div>
            <div className={`absolute top-1/3 left-20 w-8 h-8 bg-gradient-sunset rounded-full opacity-25 animate-float parallax-bg transition-all duration-700 ${scrollY > 50 ? 'transform translate-x-[-20px] scale-75' : 'transform translate-x-0 scale-100'
                }`} style={{ animationDelay: '1.5s' }}></div>
            <div className={`absolute bottom-1/3 left-1/4 w-10 h-10 bg-gradient-feminine rounded-full opacity-20 animate-float parallax-bg transition-all duration-700 ${scrollY > 50 ? 'transform translate-y-[20px] scale-75' : 'transform translate-y-0 scale-100'
                }`} style={{ animationDelay: '2.5s' }}></div>
        </section>
    );
}