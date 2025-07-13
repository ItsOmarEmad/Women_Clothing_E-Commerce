import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholders";

// Placeholder hero image
const heroImage = placeholderImages.hero;

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blush via-peach/40 to-mint/30">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Elegant modest fashion"
                    className="w-full h-full object-cover opacity-20"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blush/80 via-peach/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-peach border border-coral/30 rounded-full text-sm font-medium text-coral mb-6 animate-bounce-in shadow-peach">
                        ✨ New Collection Available
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block text-foreground animate-slide-down" style={{ animationDelay: '0.2s' }}>Elegant</span>
                        <span className="block bg-gradient-sunset bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-peach rounded-full opacity-30 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-mint rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-blush rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-20 w-8 h-8 bg-gradient-sunset rounded-full opacity-25 animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-gradient-feminine rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
        </section>
    );
}