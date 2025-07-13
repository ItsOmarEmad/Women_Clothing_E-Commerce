import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
    onSearch: (query: string) => void;
    cartCount: number;
    wishlistCount: number;
}

export function Header({ onSearch, cartCount, wishlistCount }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    // Scroll animation effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled past threshold
            setIsScrolled(currentScrollY > 50);

            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHeaderVisible(false); // Hide header when scrolling down
            } else {
                setIsHeaderVisible(true); // Show header when scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "New Arrivals", href: "#new" },
        { name: "Hijabs", href: "#hijabs" },
        { name: "Modest Wear", href: "#modest" },
        { name: "Sale", href: "#sale" },
    ];

    return (
        <header
            className={`bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95 transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-lg py-2' : 'py-4'
                } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="container mx-auto px-4">
                {/* Top bar */}
                <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
                    <p>Free shipping on orders over $100</p>
                    <div className="flex items-center gap-4">
                        <span>Help</span>
                        <span>Track Order</span>
                        <span>Size Guide</span>
                    </div>
                </div>

                {/* Main header */}
                <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'
                    }`}>
                    {/* Logo */}
                    <div className="flex items-center animate-fade-in">
                        <h1 className={`font-semibold text-gold hover:text-gold-dark transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'
                            }`}>
                            Modest Elegance
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground hover:text-coral transition-colors duration-300 font-medium animate-fade-in"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Search Bar - Desktop */}
                    <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Input
                                type="text"
                                placeholder="Search for hijabs, modest wear..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pr-10 border-coral/20 focus:border-coral transition-colors"
                            />
                            <Button
                                type="submit"
                                size="sm"
                                variant="ghost"
                                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                            >
                                <Search className="h-4 w-4" />
                            </Button>
                        </div>
                    </form>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-2">
                        {/* Search - Mobile */}
                        <Button variant="ghost" size="icon" className="md:hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <Search className="h-5 w-5" />
                        </Button>

                        {/* User */}
                        <Button variant="ghost" size="icon" className="hidden sm:flex animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <User className="h-5 w-5" />
                        </Button>

                        {/* Wishlist */}
                        <Button variant="ghost" size="icon" className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <Heart className="h-5 w-5" />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gold text-primary text-xs rounded-full flex items-center justify-center font-medium animate-bounce-in">
                                    {wishlistCount}
                                </span>
                            )}
                        </Button>

                        {/* Cart */}
                        <Button variant="ghost" size="icon" className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-gold text-primary text-xs rounded-full flex items-center justify-center font-medium animate-bounce-in">
                                    {cartCount}
                                </span>
                            )}
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden animate-fade-in"
                            style={{ animationDelay: '0.5s' }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="md:hidden pb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search for hijabs, modest wear..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pr-10 border-coral/20 focus:border-coral transition-colors"
                        />
                        <Button
                            type="submit"
                            size="sm"
                            variant="ghost"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                        >
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </form>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-border bg-background absolute left-0 right-0 top-full shadow-elegant animate-fade-in">
                        <nav className="container mx-auto px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-border mt-4">
                                <a href="#account" className="block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300">
                                    My Account
                                </a>
                                <a href="#help" className="block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors duration-300">
                                    Help & Support
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}