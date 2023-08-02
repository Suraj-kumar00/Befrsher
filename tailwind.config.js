/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '4xl': {'max': '2560px'},
      // => @media (max-width: 2560px) { ... }
      

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm1': {'max': '425px'},
      'sm2': {'max': '375px'},
      'sm3': {'max': '320px'},  
    },
    extend: {
      boxShadow: {
        'my_shadow': '25px 23px 20px 0px rgba(0, 0, 0, 0.30)',
      },
      lineHeight:{
        'leading-1.31':'1.3125rem'
      },
      width:{
        '1512':'94.5rem',
        '341':'21.3125rem', 
      },
      height:{
        '60':'3.75rem',

      },
      margin:{
        '524':"32.75rem",
        '33':"2.0625rem",
      },
      borderRadius: {
        '15':'0.9375rem'
    },
 
    fontFamily:{
      'inter': ['Inter', 'sans-serif']
    
    },
  plugins: [],
},

}
}
