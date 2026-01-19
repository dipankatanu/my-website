/** @type {import('tailwindcss').Config} */

export default {
  /* ============================================================
     CONTENT PATHS
     Specify which files Tailwind should scan for class usage
     ============================================================ */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  /* ============================================================
     DARK MODE CONFIGURATION
     Use class-based dark mode (controlled by next-themes)
     ============================================================ */
  darkMode: "class",

  /* ============================================================
     THEME CUSTOMIZATION
     Extend default Tailwind theme with custom values
     ============================================================ */
  theme: {
    extend: {
      /* --------------------------------------------------
         COLORS
         Custom color palette for brand consistency
         -------------------------------------------------- */
      colors: {
        // Use CSS variables for theme-aware colors
        background: "var(--bg)",
        foreground: "var(--text-strong)",
        
        // Semantic color aliases
        primary: {
          DEFAULT: "#0f172a", // slate-900
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#0284c7", // sky-600
          foreground: "#ffffff",
        },
      },

      /* --------------------------------------------------
         TYPOGRAPHY
         Font families with fallbacks
         -------------------------------------------------- */
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },

      /* --------------------------------------------------
         SPACING
         Custom spacing scale for consistent layouts
         -------------------------------------------------- */
      spacing: {
        18: "4.5rem",   // 72px
        22: "5.5rem",   // 88px
        26: "6.5rem",   // 104px
        30: "7.5rem",   // 120px
      },

      /* --------------------------------------------------
         BORDER RADIUS
         Custom radius values for modern UI
         -------------------------------------------------- */
      borderRadius: {
        "4xl": "2rem",      // 32px
        "5xl": "2.5rem",    // 40px
      },

      /* --------------------------------------------------
         FONT SIZE
         Extended typography scale
         -------------------------------------------------- */
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],  // 10px
        "3xl": ["2rem", { lineHeight: "2.25rem" }],        // 32px
        "4xl": ["2.5rem", { lineHeight: "2.75rem" }],      // 40px
        "5xl": ["3rem", { lineHeight: "3.25rem" }],        // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }],           // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }],            // 72px
      },

      /* --------------------------------------------------
         MAX WIDTH
         Custom container widths
         -------------------------------------------------- */
      maxWidth: {
        "8xl": "88rem",   // 1408px
        "9xl": "96rem",   // 1536px
      },

      /* --------------------------------------------------
         BOX SHADOW
         Custom shadow utilities for depth
         -------------------------------------------------- */
      boxShadow: {
        "soft": "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "medium": "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)",
        "strong": "0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.04)",
      },

      /* --------------------------------------------------
         ANIMATIONS
         Custom keyframe animations
         -------------------------------------------------- */
      keyframes: {
        // Fade in from bottom
        fadeInUp: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(10px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        
        // Fade in (simple)
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        
        // Subtle pulse for attention
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        
        // Slide in from left
        slideInLeft: {
          "0%": { 
            transform: "translateX(-10px)", 
            opacity: "0" 
          },
          "100%": { 
            transform: "translateX(0)", 
            opacity: "1" 
          },
        },
      },

      /* --------------------------------------------------
         ANIMATION UTILITIES
         Pre-configured animation classes
         -------------------------------------------------- */
      animation: {
        "fade-in-up": "fadeInUp 0.3s ease-out",
        "fade-in": "fadeIn 0.2s ease-out",
        "pulse-soft": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-in-left": "slideInLeft 0.3s ease-out",
      },

      /* --------------------------------------------------
         BACKDROP BLUR
         Custom blur values for glassmorphism
         -------------------------------------------------- */
      backdropBlur: {
        xs: "2px",
      },

      /* --------------------------------------------------
         LETTER SPACING
         Fine-tuned tracking values
         -------------------------------------------------- */
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
        snug: "-0.011em",
      },

      /* --------------------------------------------------
         LINE HEIGHT
         Extended leading scale
         -------------------------------------------------- */
      lineHeight: {
        "extra-tight": "1.1",
        "extra-loose": "2",
      },

      /* --------------------------------------------------
         Z-INDEX
         Semantic z-index scale
         -------------------------------------------------- */
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },

      /* --------------------------------------------------
         TRANSITION
         Custom transition timings
         -------------------------------------------------- */
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },

      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  /* ============================================================
     PLUGINS
     Additional Tailwind functionality
     ============================================================ */
  plugins: [
    // Add custom utilities plugin
    function({ addUtilities }) {
      const newUtilities = {
        // Text rendering optimizations
        ".text-render-optimized": {
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "text-rendering": "optimizeLegibility",
        },
        
        // Hide scrollbar but keep functionality
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        
        // Gradient text effect
        ".text-gradient": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
