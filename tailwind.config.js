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
      type: {
        '0%': { transform: 'translateX(0ch)' },
        '5%, 10%': { transform: 'translateX(1ch)' },
        '15%, 20%': { transform: 'translateX(2ch)' },
        '25%, 30%': { transform: 'translateX(3ch)' },
        '35%, 40%': { transform: 'translateX(4ch)' },
        '45%, 50%': { transform: 'translateX(5ch)' },
        '55%, 60%': { transform: 'translateX(6ch)' },
        '65%, 70%': { transform: 'translateX(6.5ch)' },
        '75%, 80%': { transform: 'translateX(6.5ch)' },
        '85%, 90%': { transform: 'translateX(6.5ch)' },
        '95%, 100%': { transform: 'translateX(6.5ch)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in forwards',
      slideInFromLeft: '1s ease-out 0s 1 slideInFromLeft',
      type: 'type 2.5s ease-out .5s normal both',
    }
  }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}
