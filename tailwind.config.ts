import type { Config } from "tailwindcss";

/**
 * ÚNICA fuente de verdad de la paleta de Estética Brisa (demo).
 * Un cambio de marca/color solo debe tocar este archivo.
 *
 * Contraste (WCAG, calculado):
 *  - ink sobre mist ........ 14.9:1
 *  - ink sobre accent ...... 7.3:1  (texto de botones)
 *  - accentText sobre mist .. 6.2:1  (acento usado COMO TEXTO)
 *  - muted sobre mist ....... 6.2:1
 *  - accent sobre mist ...... 2.0:1  -> NO usar como color de texto
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          mist: "#F5F3F9", // fondo general (también themeColor del layout)
          vapor: "#E8E2F5", // superficies tintadas / tarjetas
          ink: "#231A3B", // texto principal y fondo oscuro del footer
          accent: "#B9A0EE", // único acento: fondos, botones, bordes
          accentHover: "#A98BE6", // hover/activo de fondos y botones
          accentText: "#6B3FC0", // acento cuando va COMO TEXTO sobre claro
          muted: "#5F5675", // texto secundario
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
