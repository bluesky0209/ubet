/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                glowing: {
                    '0%': { backgroundPosition: '0 0' },
                    '50%': { backgroundPosition: '400% 0' },
                    '100%': { backgroundPosition: '0 0' },
                },
            },
            animation: {
                glowing: 'glowing 20s linear infinite',
            },
        },
    },
    plugins: [],
}