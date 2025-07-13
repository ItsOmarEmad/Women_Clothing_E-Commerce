import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductsSection } from "@/components/ProductsSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
    // State management
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState < string[] > ([]);
    const [wishlist, setWishlist] = useState < string[] > ([]);
    const { toast } = useToast();

    // Load data from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        const savedWishlist = localStorage.getItem("wishlist");

        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        if (savedWishlist) {
            setWishlist(JSON.parse(savedWishlist));
        }
    }, []);

    // Save to localStorage whenever cart or wishlist changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Handlers
    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Smooth scroll to products section
        const productsSection = document.getElementById("products");
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleAddToCart = (productId: string) => {
        if (!cart.includes(productId)) {
            setCart(prev => [...prev, productId]);
            toast({
                title: "Added to Cart!",
                description: "Product has been added to your shopping cart.",
            });
        } else {
            toast({
                title: "Already in Cart",
                description: "This product is already in your cart.",
                variant: "destructive",
            });
        }
    };

    const handleToggleWishlist = (productId: string) => {
        if (wishlist.includes(productId)) {
            setWishlist(prev => prev.filter(id => id !== productId));
            toast({
                title: "Removed from Wishlist",
                description: "Product has been removed from your wishlist.",
            });
        } else {
            setWishlist(prev => [...prev, productId]);
            toast({
                title: "Added to Wishlist!",
                description: "Product has been added to your wishlist.",
            });
        }
    };

    // Smooth scrolling for anchor links
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = target.getAttribute('href')?.substring(1);
                const targetElement = document.getElementById(targetId || '');
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Header
                onSearch={handleSearch}
                cartCount={cart.length}
                wishlistCount={wishlist.length}
            />

            <main>
                <section id="home">
                    <Hero />
                </section>

                <ProductsSection
                    searchQuery={searchQuery}
                    wishlist={wishlist}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                />

                <Newsletter />
            </main>

            <Footer />
        </div>
    );
};

export default Index;
