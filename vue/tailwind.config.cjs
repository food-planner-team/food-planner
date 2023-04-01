/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            keyframes: {
                spin2: {
                    from: {
                        transform: "rotate(120deg)",
                    },

                    to: {
                        transform: "rotate(160deg)",
                    },
                },
            },
            animation: {
                "spin-layout": "spin2 8s ease infinite alternate",
            },
            colors: {
                primary: "rgb(70, 110, 102)",
                "primary-dark": "rgb(48, 80, 80)",
                alpha: "rgba(255, 255, 255, 0.5)",
                "alpha-dark": "rgba(0, 0, 0, 0.06)",
                typography: "rgb(170, 170, 170)",
                "typography-dark": "rgb(51, 51, 51)",
                white: "rgb(252, 252, 252)",
                "white-accent": "rgb(242, 242, 242)",
                grey: "rgb(136, 136, 136)",
                "grey-light": "rgb(214, 214, 214)",
                "box-shadow": "rgba(112, 144, 176, 0.125)",
                error: "rgb(224, 37, 37)",
                black: "rgb(0, 0, 0)",
                "error-bg": "rgb(255, 236, 236)",
            },
            screens: {
                "3xl": "2500px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/forms"),
        require("flowbite/plugin"),
    ],
};
