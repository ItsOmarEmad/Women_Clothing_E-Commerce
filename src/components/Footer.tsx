import { useState, useEffect } from "react";
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

    const footerSections = [
        {
            title: "Shop",
            links: [
                { name: "New Arrivals", href: "#new" },
                { name: "Hijabs", href: "#hijabs" },
                { name: "Modest Wear", href: "#modest" },
                { name: "Dresses", href: "#dresses" },
                { name: "Sale", href: "#sale" },
            ]
        },
        {
            title: "Customer Care",
            links: [
                { name: "Size Guide", href: "#size-guide" },
                { name: "Shipping Info", href: "#shipping" },
                { name: "Returns & Exchanges", href: "#returns" },
                { name: "Track Your Order", href: "#track" },
                { name: "FAQ", href: "#faq" },
            ]
        },
        {
            title: "About",
            links: [
                { name: "Our Story", href: "#story" },
                { name: "Modest Fashion Blog", href: "#blog" },
                { name: "Sustainability", href: "#sustainability" },
                { name: "Careers", href: "#careers" },
                { name: "Press", href: "#press" },
            ]
        }
    ];

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

        const footer = document.querySelector('.footer-section');
        if (footer) {
            observer.observe(footer);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer className={`footer-section bg-beige text-taupe transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold text-gold mb-4">
                                Modest Elegance
                            </h3>
                            <p className="text-taupe-light text-lg leading-relaxed max-w-lg">
                                Empowering women through elegant, modest fashion. We believe every woman deserves to feel confident and beautiful while staying true to her values.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-gold" />
                                <span className="text-taupe-light">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-gold" />
                                <span className="text-taupe-light">hello@modestelelegance.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="h-5 w-5 text-gold" />
                                <span className="text-taupe-light">New York, NY 10001</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <p className="text-taupe-light mb-4">Follow us for daily inspiration</p>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" size="icon" className="hover:bg-gold/10 hover:text-gold transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:bg-gold/10 hover:text-gold transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:bg-gold/10 hover:text-gold transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:bg-gold/10 hover:text-gold transition-colors">
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h4 className="font-semibold text-gold mb-4 text-lg">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-taupe-light hover:text-gold transition-colors duration-300 text-sm"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-border pt-8 mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">🚚</span>
                            </div>
                            <h5 className="font-medium text-gold mb-1">Free Shipping</h5>
                            <p className="text-xs text-taupe-light">Orders over $100</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h5 className="font-medium text-gold mb-1">Secure Payment</h5>
                            <p className="text-xs text-taupe-light">SSL Protected</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">↩️</span>
                            </div>
                            <h5 className="font-medium text-gold mb-1">Easy Returns</h5>
                            <p className="text-xs text-taupe-light">30-day policy</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">💬</span>
                            </div>
                            <h5 className="font-medium text-gold mb-1">24/7 Support</h5>
                            <p className="text-xs text-taupe-light">Here to help</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border bg-taupe-light/5">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-taupe-light">
                            <span>© {currentYear} Modest Elegance. Made with</span>
                            <Heart className="h-4 w-4 text-gold fill-current" />
                            <span>for modest fashion</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-taupe-light">
                            <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
                            <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
                            <a href="#cookies" className="hover:text-gold transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}