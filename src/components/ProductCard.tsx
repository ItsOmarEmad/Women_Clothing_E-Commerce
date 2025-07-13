import { useState, useEffect, useRef } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    badge?: "New" | "Best Seller" | "Sale" | "Premium";
    colors?: string[];
}

interface ProductCardProps {
    product: Product;
    onAddToCart: (productId: string) => void;
    onToggleWishlist: (productId: string) => void;
    isInWishlist: boolean;
}

export function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const badgeVariants = {
        "New": "bg-blue-500 text-white",
        "Best Seller": "bg-gold text-primary",
        "Sale": "bg-red-500 text-white",
        "Premium": "bg-gradient-elegant text-white"
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group relative bg-card rounded-xl border border-border hover:shadow-elegant transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                } hover:-translate-y-1`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badge */}
            {product.badge && (
                <Badge
                    className={cn(
                        "absolute top-3 left-3 z-10 font-medium",
                        badgeVariants[product.badge]
                    )}
                >
                    {product.badge}
                </Badge>
            )}

            {/* Wishlist Button */}
            <Button
                variant="ghost"
                size="icon"
                className={cn(
                    "absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300",
                    isInWishlist && "text-red-500 bg-red-50 hover:bg-red-100"
                )}
                onClick={() => onToggleWishlist(product.id)}
            >
                <Heart
                    className={cn(
                        "h-4 w-4 transition-all duration-300",
                        isInWishlist && "fill-current"
                    )}
                />
            </Button>

            {/* Product Image */}
            <div className="relative overflow-hidden rounded-t-xl">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/src/assets/Gemini_Generated_Image_d4v3k3d4v3k3d4v3.png";
                    }}
                />

                {/* Quick Add to Cart - Appears on Hover */}
                <div className={cn(
                    "absolute inset-0 bg-black/20 flex items-end justify-center pb-4 transition-opacity duration-300",
                    isHovered ? "opacity-100" : "opacity-0"
                )}>
                    <Button
                        variant="default"
                        size="sm"
                        className="bg-gold text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        onClick={() => onAddToCart(product.id)}
                    >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Quick Add
                    </Button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
                {/* Category */}
                <p className="text-xs text-gold font-medium uppercase tracking-wide">{product.category}</p>

                {/* Name */}
                <h3 className="font-semibold text-foreground line-clamp-2 hover:text-gold transition-colors duration-300 cursor-pointer">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-3 w-3",
                                    i < Math.floor(product.rating)
                                        ? "text-gold fill-current"
                                        : "text-muted-foreground"
                                )}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                    </span>
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Colors:</span>
                        <div className="flex gap-1">
                            {product.colors.map((color, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-4 h-4 rounded-full border-2 transition-all duration-200",
                                        selectedColor === color
                                            ? "border-gold scale-110"
                                            : "border-border hover:border-gold/50"
                                    )}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                        {discount > 0 && (
                            <Badge variant="destructive" className="text-xs">
                                -{discount}%
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Add to Cart Button */}
                <Button
                    variant="outline"
                    className="w-full border-gold/20 hover:border-gold hover:bg-gold hover:text-primary transition-all duration-300"
                    onClick={() => onAddToCart(product.id)}
                >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}