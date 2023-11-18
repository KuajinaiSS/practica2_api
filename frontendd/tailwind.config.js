/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['src/components/**/*.{vue,js,ts,jsx,tsx}', 'src/Profile.tsx',"./index.html",], // Agrega la ruta al archivo Profile.tsx
  theme: {
    extend: {
      colors: {
        header: "#3498db",
        fondo: "#87ceeb",
        contenedor: "#aad8e6",
        secundario: "#0097a7",
        tabla1: "#b2ebf2",
        tabla2: "#e0f7fa",
      },
      boxShadow: {
        shadow: "0px 5px 15px 0px rgba(0,0,0,0.54)",
      }
        
    },
  },
  plugins: [],
}

