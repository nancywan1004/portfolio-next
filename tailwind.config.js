module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
       fadeIn: {
        '0%': {
          opacity: 0,
          transform: 'translateY(-25%)'
        },
        '100%': {
          opacity: 1,
          transform: "translateY(0)"
        },
        slideInFromLeft: {
          '0%': {
            transform: "translateX(-100%)"
          },
          '100%': {
            transform: "translateX(0)"
          }
        }
      }, 
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in forwards',
      slideInFromLeft: '1s ease-out 0s 1 slideInFromLeft'
    }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: false,
    themes: [],
    rtl: false,
  },
}
