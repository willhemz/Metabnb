/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: () => ({
        'headerHeight': '742px',
        '18': '70pxs',
        '100': '459px',
        'imgH': '176px',
        '92': '372px',
        'picH': '574.85px',
        'walletH': '326px'
      }),
      backgroundImage: {
        'gradColor': 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)'
      },
      width: () => ({
        'imgW': '234px',
        'cardW': '8px',
        'walletW': '600px'
      }),
      colors: {
        primary: '#434343',
        secondary: {
          100: '#ffc089',
          200: '#a02279'
        },
        tertiary: '#d7d7d7',
        shade: '#1d1d1d',
        wimp: {
          100: '#F8F9FA',
          200: '#CFD8DC'
        }
      },
      fontFamily: {
        redRose: [
          'Red Rose', 'cursive'
        ],
      },
      fontSize: {
        '5.5xl': ['56px', {lineHeight:'1.25'}]
      }
    },
  },
  plugins: [],
}
