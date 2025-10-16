import type { Config } from "tailwindcss";

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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        brand: {
          teal: "hsl(var(--brand-teal))",
          "teal-foreground": "hsl(var(--brand-teal-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        architect: {
          glow: "hsl(var(--architect-glow))",
          accent: "hsl(var(--architect-accent))",
          vibrant: "hsl(var(--architect-vibrant))",
          pink: "hsl(var(--architect-pink))",
          cyan: "hsl(var(--architect-cyan))",
          emerald: "hsl(var(--architect-emerald))",
          orange: "hsl(var(--architect-orange))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "draw-line": {
          from: {
            strokeDashoffset: "100%",
          },
          to: {
            strokeDashoffset: "0%",
          },
        },
        "draw-rect": {
          from: {
            strokeDasharray: "1000",
            strokeDashoffset: "1000",
          },
          to: {
            strokeDasharray: "1000",
            strokeDashoffset: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "blueprint-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2px hsl(var(--primary)))",
          },
          "50%": {
            filter: "drop-shadow(0 0 12px hsl(var(--architect-glow)))",
          },
        },
        "particle-float": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translate(-100px, -300px) rotate(360deg)",
            opacity: "0",
          },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(0.8)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: "0",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
        "rainbow-glow": {
          "0%": {
            filter:
              "drop-shadow(0 0 5px hsl(var(--architect-pink))) hue-rotate(0deg)",
          },
          "25%": {
            filter:
              "drop-shadow(0 0 15px hsl(var(--architect-cyan))) hue-rotate(90deg)",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 20px hsl(var(--architect-emerald))) hue-rotate(180deg)",
          },
          "75%": {
            filter:
              "drop-shadow(0 0 15px hsl(var(--architect-orange))) hue-rotate(270deg)",
          },
          "100%": {
            filter:
              "drop-shadow(0 0 5px hsl(var(--architect-pink))) hue-rotate(360deg)",
          },
        },
        "color-shift": {
          "0%": { background: "hsl(var(--architect-pink))" },
          "20%": { background: "hsl(var(--primary))" },
          "40%": { background: "hsl(var(--architect-cyan))" },
          "60%": { background: "hsl(var(--architect-emerald))" },
          "80%": { background: "hsl(var(--architect-orange))" },
          "100%": { background: "hsl(var(--architect-pink))" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            boxShadow:
              "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "draw-line": "draw-line 1s ease-out",
        "draw-rect": "draw-rect 1s ease-out",
        float: "float 3s ease-in-out infinite",
        "blueprint-glow": "blueprint-glow 2s ease-in-out infinite",
        "particle-float": "particle-float 6s ease-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "rainbow-glow": "rainbow-glow 3s ease-in-out infinite",
        "color-shift": "color-shift 4s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
