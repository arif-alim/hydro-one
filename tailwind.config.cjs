const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        maxWidth: {
            sm: '590px',
            md: '690px',
            lg: '790px',
            xl: '890px',
            '2xl': '960px',
        },
        screens: {
            sm: '420px',
            // => @media (min-width: 640px) { ... }

            md: '575px',
            // => @media (min-width: 768px) { ... }

            lg: '767px',
            // => @media (min-width: 1024px) { ... }

            xl: '991px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1199px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            sans: ['Roobert-TRIAL, sans-serif'],
        },
        extend: {
            spacing: {
                15: '15px',
            },
            colors: {
                mint: '#E3F7F1',
                teal: '#005866',
                //   text: "#1f1111",
                //   gray: "#D9D8D6",
                //   light: "#E5E5E5",
                //   off: "#FAFAFA",
                //   yellow: "#FFDD00",
            },
        },
    },

    plugins: [],
}
