module.exports = {
    purge: [
        "./layouts/**/*.html",
        "./content/**/*.md",
        "./content/**/*.html",
        "./assets/**/*.js",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {}
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
