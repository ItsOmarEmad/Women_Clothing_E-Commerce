// Local asset imports for the e-commerce application
import geminiImage1 from '@/assets/Gemini_Generated_Image_d4v3k3d4v3k3d4v3.png';
import geminiImage2 from '@/assets/Gemini_Generated_Image_9y49mw9y49mw9y49.png';
import geminiImage3 from '@/assets/Gemini_Generated_Image_3d3f5f3d3f5f3d3f.png';
import edsagaImage from '@/assets/edsaga.png';
import downloadImage from '@/assets/download.jpeg';

export const placeholderImages = {
    // Hero and banner images
    hero: geminiImage1,

    // Product category images
    hijabs: geminiImage2,
    tops: geminiImage3,
    dresses: edsagaImage,

    // Specific product images
    hijabBeige: geminiImage2,
    hijabBlack: geminiImage2,
    shirtDustyRose: geminiImage3,
    dressNavy: edsagaImage,
    tunicWhite: downloadImage,

    // Generic placeholders
    product: geminiImage1,
    category: geminiImage1,
    banner: geminiImage1,
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