module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          // add instrument serif font
            'Instrument_Serif': ['Instrument Serif', 'serif'],
            'Overused_Grotesk': ['Overused Grotesk', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  