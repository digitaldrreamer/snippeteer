import { browser } from '$app/environment';
import Favicon from '$lib/images/favicon.png';
import { settings } from '$lib/stores/settings';
let addViewport;
settings.subscribe((setting) => {
    addViewport = setting.metaTags.addViewport
})



function extractMetaDataHtmlFromHtml(html, titleSuffix = ' | Snippeteer') {
    // Parse the HTML string using DOMParser
    if (browser) {

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract and update the title with the suffix
        let titleTag = doc.querySelector('title');
        let titleHtml;

        if (titleTag) {
            const updatedTitle = titleTag.textContent + titleSuffix; // Append suffix to the title
            titleTag.textContent = updatedTitle;
            titleHtml = titleTag.outerHTML;
        } else {
            // If no title exists, create one with the suffix
            titleHtml = `<title>New Project${titleSuffix}</title>`;
        }

        // Extract favicon
        const faviconTag =
            doc.querySelector('link[rel="icon"]') || doc.querySelector('link[rel="shortcut icon"]');
        const faviconHtml = faviconTag ? faviconTag.outerHTML : `<link rel="icon" href="${Favicon}">`;

        // Extract meta description
        const descriptionTag = doc.querySelector('meta[name="description"]');
        const descriptionHtml = descriptionTag
            ? descriptionTag.outerHTML
            : '<!-- No description meta tag -->';

        // Extract meta keywords
        const keywordsTag = doc.querySelector('meta[name="keywords"]');
        const keywordsHtml = keywordsTag ? keywordsTag.outerHTML : '<!-- No keywords meta tag -->';

        // Extract viewport meta
        const viewportTag = doc.querySelector('meta[name="viewport"]');
        const viewportHtml = viewportTag ? viewportTag.outerHTML : $settings.metaTags.addViewport ? '<meta name="viewport" content="width=device-width, initial-scale=1">' : '<!-- No viewport meta tag -->';

        // Extract author meta
        const authorTag = doc.querySelector('meta[name="author"]');
        const authorHtml = authorTag ? authorTag.outerHTML : '<!-- No author meta tag -->';

        // Return the metadata as HTML string
        return `
${titleHtml}
${faviconHtml}
${descriptionHtml}
${keywordsHtml}
${viewportHtml}
${authorHtml}
`;
    }
}

function insertCssJsIntoHtml(htmlz, cssz, jsz, selectedLibs, cdns) {
    // update localstorage value

    // Create a style tag for CSS
    const styleTag = `<style>${cssz}</style>`;

    // Create a script tag for JS
    const scriptTag = `<script>${jsz}</script>`;

    // Inject the style and script tags into the HTML
    // Assuming you want to inject the CSS inside the <head> and the JS at the end of <body>
    let modifiedHtml = htmlz;

    // Insert selected library CDNs into the head
    const libraries = Object.entries(selectedLibs)
        .filter(([lib, isSelected]) => isSelected) // Filter the selected libraries
        .map(([lib]) => cdns[lib]) // Map the selected libraries to their CDN links
        .join('\n'); // Join them into a single string

    const metaDataCode = extractMetaDataHtmlFromHtml(htmlz);

    // Check if <head> tag exists to inject CDNs and CSS
    if (modifiedHtml.includes('</head>')) {
        modifiedHtml = modifiedHtml.replace(
            '</head>',
            `${metaDataCode}\n${libraries}\n${styleTag}</head>`
        );
    } else {
        // If no <head>, just add the CDNs and style before the body
        modifiedHtml = `${libraries}\n${styleTag}\n${modifiedHtml}`;
    }

    // Check if <body> tag exists to inject JS
    if (modifiedHtml.includes('</body>')) {
        modifiedHtml = modifiedHtml.replace('</body>', `${scriptTag}</body>`);
    } else {
        // If no <body>, append the script at the end
        modifiedHtml += `\n${scriptTag}`;
    }

    return modifiedHtml;
}

export { insertCssJsIntoHtml, extractMetaDataHtmlFromHtml }