# Pw Skills Website

### Setup instruction

1. Clone the project
```
    git clone https://github.com/pw-skills/pw-skills-website.git
    

```
2. Move into the directory

```
cd pw-skills-website

```

3. install dependancies
```
npm install

```

4. Run the project
```
    npm run dev

```
### Setup instructions for tailwind
[Tailwind afficial instruction doc](https://tailwindcss.com/docs/guides/vite)

1. Install tailwind

```
npm install -D tailwindcss postcss autoprefixer

```

2. Create tailwind.config.js file

```
npx tailwindcss init -p

```
3. Add the paths to all of your template files in your tailwind.config.js file.
```
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

```
4. Add the @tailwind directives for each of Tailwind’s layers to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Added dependencies 

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```

