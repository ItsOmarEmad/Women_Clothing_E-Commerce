import React from 'react';

interface ColorSwatchProps {
    name: string;
    hsl: string;
    description: string;
    className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hsl, description, className }) => (
    <div className="flex flex-col space-y-2">
        <div
            className={`w-24 h-24 rounded-lg shadow-elegant ${className}`}
            style={{ backgroundColor: `hsl(${hsl})` }}
        />
        <div className="text-center">
            <h4 className="font-semibold text-sm text-taupe">{name}</h4>
            <p className="text-xs text-taupe-light font-mono">{hsl}</p>
            <p className="text-xs text-taupe-light mt-1">{description}</p>
        </div>
    </div>
);

const ColorPalette: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-modest p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gold mb-4">Modest Fashion Color Palette</h1>
                    <p className="text-lg text-taupe-light max-w-2xl mx-auto">
                        A sophisticated, elegant color palette inspired by modest fashion for hijabi women.
                        Evoking femininity, grace, and spiritual confidence.
                    </p>
                </div>

                {/* Primary Colors */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Primary Colors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        <ColorSwatch
                            name="Deep Gold"
                            hsl="35 85% 45%"
                            description="Strength & Class"
                            className="bg-gold"
                        />
                        <ColorSwatch
                            name="Soft Blush"
                            hsl="350 25% 95%"
                            description="Purity & Softness"
                            className="bg-blush"
                        />
                        <ColorSwatch
                            name="Deep Mauve"
                            hsl="320 25% 65%"
                            description="Grace & Sophistication"
                            className="bg-mauve"
                        />
                    </div>
                </section>

                {/* Neutral Palette */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Neutral Palette</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        <ColorSwatch
                            name="Warm Off-White"
                            hsl="45 30% 98%"
                            description="Background & Purity"
                            className="bg-background border border-border"
                        />
                        <ColorSwatch
                            name="Deep Warm Taupe"
                            hsl="25 15% 25%"
                            description="Text & Grounded"
                            className="bg-taupe"
                        />
                        <ColorSwatch
                            name="Creamy Beige"
                            hsl="40 25% 94%"
                            description="Muted & Warm"
                            className="bg-beige"
                        />
                    </div>
                </section>

                {/* Extended Palette */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Extended Palette</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                        <ColorSwatch
                            name="Soft Rose"
                            hsl="350 25% 75%"
                            description="Feminine"
                            className="bg-pink"
                        />
                        <ColorSwatch
                            name="Soft Lavender"
                            hsl="300 20% 75%"
                            description="Peaceful"
                            className="bg-lavender"
                        />
                        <ColorSwatch
                            name="Soft Peach"
                            hsl="25 40% 85%"
                            description="Warm"
                            className="bg-peach"
                        />
                        <ColorSwatch
                            name="Soft Olive"
                            hsl="60 15% 70%"
                            description="Natural"
                            className="bg-olive"
                        />
                        <ColorSwatch
                            name="Muted Coral"
                            hsl="15 35% 70%"
                            description="Energetic"
                            className="bg-coral"
                        />
                        <ColorSwatch
                            name="Soft Blue"
                            hsl="210 25% 85%"
                            description="Calming"
                            className="bg-soft-blue"
                        />
                    </div>
                </section>

                {/* Gold Variants */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Gold Variants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        <ColorSwatch
                            name="Light Gold"
                            hsl="35 80% 65%"
                            description="Gentle Highlight"
                            className="bg-gold-light"
                        />
                        <ColorSwatch
                            name="Deep Gold"
                            hsl="35 85% 45%"
                            description="Primary Brand"
                            className="bg-gold"
                        />
                        <ColorSwatch
                            name="Dark Gold"
                            hsl="35 90% 35%"
                            description="Strong Accent"
                            className="bg-gold-dark"
                        />
                    </div>
                </section>

                {/* Gradient Showcase */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Gradients</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="h-32 rounded-lg bg-gradient-elegant shadow-elegant" />
                            <div className="text-center">
                                <h4 className="font-semibold text-taupe">Elegant Gold to Mauve</h4>
                                <p className="text-sm text-taupe-light">Premium sections</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 rounded-lg bg-gradient-modest shadow-blush" />
                            <div className="text-center">
                                <h4 className="font-semibold text-taupe">Modest Beige to Cream</h4>
                                <p className="text-sm text-taupe-light">Soft backgrounds</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-32 rounded-lg bg-gradient-grace shadow-gold" />
                            <div className="text-center">
                                <h4 className="font-semibold text-taupe">Grace Gold to Olive</h4>
                                <p className="text-sm text-taupe-light">Natural themes</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usage Examples */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-taupe mb-8 text-center">Usage Examples</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Button Examples */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-taupe">Buttons</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-gold text-cream px-6 py-3 rounded-lg shadow-gold hover:bg-gold-dark transition-colors">
                                    Primary Action
                                </button>
                                <button className="w-full bg-blush text-taupe px-6 py-3 rounded-lg border border-border hover:bg-pink transition-colors">
                                    Secondary Action
                                </button>
                                <button className="w-full bg-mauve text-cream px-6 py-3 rounded-lg shadow-elegant hover:opacity-90 transition-opacity">
                                    Accent Action
                                </button>
                            </div>
                        </div>

                        {/* Card Examples */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-taupe">Cards</h3>
                            <div className="space-y-3">
                                <div className="bg-card border border-border rounded-lg p-6 shadow-elegant">
                                    <h4 className="font-semibold text-gold mb-2">Premium Card</h4>
                                    <p className="text-taupe-light text-sm">Elegant styling with gold accents</p>
                                </div>
                                <div className="bg-beige border border-border rounded-lg p-6 shadow-blush">
                                    <h4 className="font-semibold text-taupe mb-2">Soft Card</h4>
                                    <p className="text-taupe-light text-sm">Gentle styling with warm tones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Principles */}
                <section className="bg-card border border-border rounded-lg p-8 shadow-elegant">
                    <h2 className="text-2xl font-bold text-gold mb-6 text-center">Design Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-taupe mb-3">Strength & Class</h3>
                            <p className="text-taupe-light">
                                Primary colors reflect confidence and sophistication, using deep gold to represent
                                strength and luxury while maintaining elegance.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-taupe mb-3">Purity & Softness</h3>
                            <p className="text-taupe-light">
                                Secondary colors embody gentleness and peace, with soft blush tones that create
                                a welcoming and feminine atmosphere.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-taupe mb-3">Natural Elegance</h3>
                            <p className="text-taupe-light">
                                Earth tones and warm neutrals create a grounded, authentic feel that respects
                                cultural values and creates a premium experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-taupe mb-3">Spiritual Grace</h3>
                            <p className="text-taupe-light">
                                Muted, sophisticated tones that avoid overly vibrant colors, creating a calm
                                and respectful environment that honors spiritual values.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ColorPalette; 