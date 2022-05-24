const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        maxWidth: {
            sm: '350px',
            md: '690px',
            lg: '790px',
            xl: '890px',
            '2xl': '960px',
        },
        screens: {
            sm: '421px',
            // => @media (min-width: 421x) { ... }

            md: '576px',
            // => @media (min-width: 576px) { ... }

            lg: '768px',
            // => @media (min-width: 768px) { ... }

            xl: '992px',
            // => @media (min-width: 992px) { ... }

            '2xl': '1200px',
            // => @media (min-width: 1200px) { ... }
        },
        fontFamily: {
            sans: ['Roobert-TRIAL, sans-serif'],
        },
        extend: {
            spacing: {
                15: '15px',
            },
            colors: {
                hydroMint: '#E3F7F1',
                hydroTeal: '#005866',
                hydroTealLight: '#017a8d',
                hydroTealLighter: '#019cb5',
                hydroText: '#1f1111',
                hydroGray: '#D9D8D6',
                hydroLight: '#E5E5E5',
                hydroOff: '#FAFAFA',
                hydroYellow: '#FFDD00',
            },
            fontSize: {
                xx: '0.65rem',
                xs: '0.75rem',
                xz: '0.8rem',
                sm: '.845rem',
                sz: '0.875rem',
                tiny: '.9125rem',
                tb: '.935rem',
                tbl: '0.95',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '4xxl': '2.5rem',
                '5xl': '2.75rem',
                '6xl': '3rem',
                '7xl': '3.5rem',
            },
        },
    },

    plugins: [],
}
