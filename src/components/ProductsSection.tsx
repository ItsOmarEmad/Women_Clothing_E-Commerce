import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { placeholderImages } from "@/lib/placeholders";

// Placeholder product images
const hijabBeige = placeholderImages.hijabBeige;
const shirtDustyRose = placeholderImages.shirtDustyRose;
const hijabBlack = placeholderImages.hijabBlack;
const dressNavy = placeholderImages.dressNavy;
const tunicWhite = placeholderImages.tunicWhite;

const products = [
  {
    id: "1",
    name: "Premium Chiffon Hijab - Beige",
    price: 29.99,
    originalPrice: 39.99,
    image: hijabBeige,
    category: "Hijabs",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller" as const,
    colors: ["#F5E6D3", "#E8D5C4", "#D4B896"]
  },
  {
    id: "2",
    name: "Modest Long Sleeve Blouse",
    price: 49.99,
    image: shirtDustyRose,
    category: "Tops",
    rating: 4.6,
    reviews: 89,
    badge: "New" as const,
    colors: ["#D4A5A5", "#B88B8B", "#8B6B6B"]
  },
  {
    id: "3",
    name: "Classic Black Hijab - Premium Silk",
    price: 45.99,
    originalPrice: 59.99,
    image: hijabBlack,
    category: "Hijabs",
    rating: 4.9,
    reviews: 201,
    badge: "Premium" as const,
    colors: ["#000000", "#2C2C2C", "#4A4A4A"]
  },
  {
    id: "4",
    name: "Elegant Maxi Dress - Navy",
    price: 89.99,
    image: dressNavy,
    category: "Dresses",
    rating: 4.7,
    reviews: 156,
    colors: ["#1F2937", "#374151", "#6B7280"]
  },
  {
    id: "5",
    name: "Cotton Tunic - Pure White",
    price: 39.99,
    originalPrice: 49.99,
    image: tunicWhite,
    category: "Tops",
    rating: 4.5,
    reviews: 78,
    badge: "Sale" as const,
    colors: ["#FFFFFF", "#F8F9FA", "#F1F3F4"]
  },
  {
    id: "6",
    name: "Luxe Georgette Hijab - Beige",
    price: 34.99,
    image: hijabBeige,
    category: "Hijabs",
    rating: 4.6,
    reviews: 92,
    colors: ["#F5E6D3", "#E8D5C4", "#D4B896"]
  },
  {
    id: "7",
    name: "Flowing Midi Dress - Rose",
    price: 69.99,
    image: shirtDustyRose,
    category: "Dresses",
    rating: 4.4,
    reviews: 67,
    badge: "New" as const,
    colors: ["#D4A5A5", "#B88B8B", "#8B6B6B"]
  },
  {
    id: "8",
    name: "Premium Jersey Hijab - Black",
    price: 24.99,
    image: hijabBlack,
    category: "Hijabs",
    rating: 4.8,
    reviews: 183,
    badge: "Best Seller" as const,
    colors: ["#000000", "#2C2C2C", "#4A4A4A"]
  }
];

interface ProductsSectionProps {
  searchQuery: string;
  wishlist: string[];
  onAddToCart: (productId: string) => void;
  onToggleWishlist: (productId: string) => void;
}

export function ProductsSection({ searchQuery, wishlist, onAddToCart, onToggleWishlist }: ProductsSectionProps) {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const categories = ["All", "Hijabs", "Tops", "Dresses"];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 6, filteredProducts.length));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleProducts(6); // Reset visible products when changing category
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

    const section = document.getElementById('products');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="products" className={`py-20 bg-background transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground animate-slide-right" style={{ animationDelay: '0.2s' }}>Our </span>
            <span className="bg-gradient-sunset bg-clip-text text-transparent animate-slide-left" style={{ animationDelay: '0.4s' }}>Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Discover our carefully curated selection of modest fashion pieces, designed with elegance and comfort in mind.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-blush/50 border border-coral/20 animate-scale-in">
            {categories.map((category, index) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-gradient-sunset data-[state=active]:text-white transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard
                      product={product}
                      onAddToCart={onAddToCart}
                      onToggleWishlist={onToggleWishlist}
                      isInWishlist={wishlist.includes(product.id)}
                    />
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreProducts && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleLoadMore}
                    className="border-coral text-coral hover:bg-gradient-sunset hover:text-white transition-all duration-300 animate-fade-in shadow-peach"
                  >
                    Load More Products
                  </Button>
                </div>
              )}

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">No products found</h3>
                  <p className="text-muted-foreground">
                    {searchQuery
                      ? `No products match "${searchQuery}". Try different keywords.`
                      : `No products in ${activeCategory} category.`
                    }
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Categories Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="relative group cursor-pointer animate-fade-in">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={hijabBlack}
                alt="Hijab Collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Hijab Collection</h3>
                <p className="text-sm opacity-90">Premium quality scarves</p>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={dressNavy}
                alt="Dress Collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Elegant Dresses</h3>
                <p className="text-sm opacity-90">Modest & stylish designs</p>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={tunicWhite}
                alt="Modest Wear"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modest Tops</h3>
                <p className="text-sm opacity-90">Comfortable everyday wear</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}