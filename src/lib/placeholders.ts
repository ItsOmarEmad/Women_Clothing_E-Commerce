// Placeholder image URLs for the e-commerce application
export const placeholderImages = {
    // Hero and banner images
    hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center",

    // Product category images
    hijabs: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    tops: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",
    dresses: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",

    // Specific product images
    hijabBeige: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    hijabBlack: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    shirtDustyRose: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",
    dressNavy: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
    tunicWhite: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",

    // Generic placeholders
    product: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop&crop=center",
    category: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center",
    banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center",
} as const;

// Function to get a placeholder image by category
export function getPlaceholderImage(category?: string): string {
    if (!category) return placeholderImages.product;

    const categoryLower = category.toLowerCase();

    if (categoryLower.includes('hijab')) return placeholderImages.hijabs;
    if (categoryLower.includes('top') || categoryLower.includes('shirt') || categoryLower.includes('blouse')) return placeholderImages.tops;
    if (categoryLower.includes('dress')) return placeholderImages.dresses;

    return placeholderImages.product;
}

// Function to get a random placeholder image
export function getRandomPlaceholderImage(): string {
    const images = Object.values(placeholderImages);
    return images[Math.floor(Math.random() * images.length)];
} 