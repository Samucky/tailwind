// maquetado2/tailwind.config.js
module.exports = {
  content: [
    './public/**/*.{html,js}',  // Asegúrate de que las rutas son correctas
  ],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        },
        rosa: '#f9a8d4',
        azul: '#7dd3fc',
        alo: '#4ade80',
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  plugins: [],
};
