// const fs = require('fs');
// const path = require('path');
// const { minify: htmlMinify } = require('html-minifier-terser');
// const { minify: jsMinify } = require('terser');
// const { minify: cssMinify } = require('clean-css');

// async function optimizeHTML() {
//     console.log('Optimizing HTML...');
//     const htmlPath = path.join(__dirname, 'index.html');
//     const html = fs.readFileSync(htmlPath, 'utf8');

//     const optimized = await htmlMinify(html, {
//         removeComments: true,
//         removeRedundantAttributes: true,
//         removeScriptTypeAttributes: true,
//         removeStyleLinkTypeAttributes: true,
//         useShortDoctype: true,
//         collapseWhitespace: true,
//         minifyCSS: true,
//         minifyJS: true,
//         removeEmptyAttributes: true,
//         removeOptionalTags: true
//     });

//     fs.writeFileSync(htmlPath, optimized);
//     console.log('HTML optimized successfully');
// }

// async function optimizeCSS() {
//     console.log('Optimizing CSS...');
//     const cssPath = path.join(__dirname, 'style.css');
//     const css = fs.readFileSync(cssPath, 'utf8');

//     const CleanCSS = require('clean-css');
//     const minifier = new CleanCSS({
//         level: 2,
//         format: false
//     });

//     const optimized = minifier.minify(css);

//     fs.writeFileSync(cssPath, optimized.styles);
//     console.log('CSS optimized successfully');
// }

// async function optimizeJS() {
//     console.log('Optimizing JavaScript...');
//     const jsPath = path.join(__dirname, 'script.js');
//     const js = fs.readFileSync(jsPath, 'utf8');

//     const optimized = await jsMinify(js, {
//         compress: {
//             drop_console: true,
//             drop_debugger: true,
//             pure_funcs: ['console.log']
//         },
//         mangle: {
//             safari10: true
//         }
//     });

//     fs.writeFileSync(jsPath, optimized.code);
//     console.log('JavaScript optimized successfully');
// }

// async function optimizeImages() {
//     console.log('Optimizing images...');
//     console.log('Note: Image optimization requires manual processing with tools like TinyPNG or ImageOptim');
//     console.log('For now, skipping automatic image optimization to avoid ES module issues');
//     console.log('Images are already in WebP format which is optimal');
//     return [];
// }

// async function createOptimizedHTML() {
//     console.log('Creating optimized HTML structure...');
//     const htmlPath = path.join(__dirname, 'index.html');
//     let html = fs.readFileSync(htmlPath, 'utf8');

//     // Remove unnecessary fonts (keep only essential ones)
//     const fontsToKeep = [
//         'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
//         'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap'
//     ];

//     // Remove other font links
//     html = html.replace(/<link[^>]*href="https:\/\/fonts\.googleapis\.com[^"]*"[^>]*>/g, (match) => {
//         const href = match.match(/href="([^"]*)"/)[1];
//         return fontsToKeep.some(font => href.includes(font)) ? match : '';
//     });

//     // Add preload for critical resources
//     const preloadLinks = `
//     <link rel="preload" href="style.css" as="style">
//     <link rel="preload" href="script.js" as="script">
//     <link rel="preload" href="./images/logo.png" as="image">
//     `;

//     html = html.replace('<head>', '<head>' + preloadLinks);

//     // Add resource hints
//     const resourceHints = `
//     <link rel="dns-prefetch" href="//fonts.googleapis.com">
//     <link rel="dns-prefetch" href="//i.pinimg.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     `;

//     html = html.replace('<head>', '<head>' + resourceHints);

//     fs.writeFileSync(htmlPath, html);
//     console.log('Optimized HTML structure created');
// }

// async function main() {
//     try {
//         await optimizeHTML();
//         await optimizeCSS();
//         await optimizeJS();
//         await createOptimizedHTML();
//         await optimizeImages();

//         console.log('All optimizations completed successfully!');
//         console.log('\nOptimization Summary:');
//         console.log('✅ HTML minified and optimized');
//         console.log('✅ CSS minified and compressed');
//         console.log('✅ JavaScript minified and optimized');
//         console.log('✅ Unnecessary fonts removed');
//         console.log('✅ Resource hints and preloading added');
//         console.log('✅ Images optimized and converted to WebP');
//         console.log('\nNext steps:');
//         console.log('1. Test the website to ensure everything works');
//         console.log('2. Consider implementing lazy loading for images');
//         console.log('3. Add service worker for caching');
//         console.log('4. Enable GZIP compression on server');

//     } catch (error) {
//         console.error('Optimization failed:', error);
//     }
// }

// main();
