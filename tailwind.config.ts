/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Modest Fashion Palette
				pink: {
					DEFAULT: 'hsl(var(--pink))',
					light: 'hsl(var(--pink-light))',
					dark: 'hsl(var(--pink-dark))'
				},
				rose: {
					DEFAULT: 'hsl(var(--rose))',
					light: 'hsl(var(--rose-light))'
				},
				lavender: 'hsl(var(--lavender))',
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					light: 'hsl(var(--gold-light))',
					dark: 'hsl(var(--gold-dark))'
				},
				peach: 'hsl(var(--peach))',
				coral: 'hsl(var(--coral))',
				mint: 'hsl(var(--mint))',
				'soft-blue': 'hsl(var(--soft-blue))',
				blush: 'hsl(var(--blush))',
				cream: 'hsl(var(--cream))',
				taupe: {
					DEFAULT: 'hsl(var(--taupe))',
					light: 'hsl(var(--taupe-light))'
				},
				olive: 'hsl(var(--olive))',
				mauve: 'hsl(var(--mauve))',
				beige: 'hsl(var(--beige))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-pink': 'var(--gradient-pink)',
				'gradient-rose': 'var(--gradient-rose)',
				'gradient-elegant': 'var(--gradient-elegant)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-peach': 'var(--gradient-peach)',
				'gradient-blush': 'var(--gradient-blush)',
				'gradient-mint': 'var(--gradient-mint)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-feminine': 'var(--gradient-feminine)',
				'gradient-modest': 'var(--gradient-modest)',
				'gradient-grace': 'var(--gradient-grace)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'pink': 'var(--shadow-pink)',
				'gold': 'var(--shadow-gold)',
				'peach': 'var(--shadow-peach)',
				'blush': 'var(--shadow-blush)',
				'mint': 'var(--shadow-mint)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-up': {
					'0%': {
						transform: 'translateY(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-down': {
					'0%': {
						transform: 'translateY(-20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'slide-left': {
					'0%': {
						transform: 'translateX(20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-right': {
					'0%': {
						transform: 'translateX(-20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
						transform: 'scale(1.05)'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '1'
					},
					'70%': {
						transform: 'scale(0.9)'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'rotate-in': {
					'0%': {
						transform: 'rotate(-200deg) scale(0.5)',
						opacity: '0'
					},
					'100%': {
						transform: 'rotate(0deg) scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'slide-down': 'slide-down 0.4s ease-out',
				'slide-left': 'slide-left 0.4s ease-out',
				'slide-right': 'slide-right 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'rotate-in': 'rotate-in 0.6s ease-out'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)'
			}
		}
	},
	plugins: [import("tailwindcss-animate")],
};
