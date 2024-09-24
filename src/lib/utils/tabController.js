/**
 * Represents a dynamic tab that can be opened and updated with content.
 */
class DynamicTab {
    /** @type {Window | null} */
    newTab;

    /**
     * Creates an instance of DynamicTab.
     * @throws {Error} If unable to open a new tab.
     */
    constructor() {
        this.newTab = this.openNewTab();
        if (this.newTab === null) {
            throw new Error("Unable to open new tab. Please check your popup blocker settings.");
        }
    }

    /**
     * Opens a new tab.
     * @returns {Window | null} The newly opened window object, or null if blocked.
     */
    openNewTab() {
        const newTab = window.open('', '_blank');
        if (newTab === null) {
            alert("Popup blocked. Please allow popups for this site to use this feature.");
        }
        return newTab;
    }

    /**
     * Updates the content of the new tab.
     * @param {string} content - The HTML content to write to the new tab.
     * @param {string} [title="Dynamic Tab"] - The title of the new tab.
     * @param {string} [description="A dynamically updated tab"] - The description metadata for the new tab.
     */
    updateNewTabContent(content, title = "Dynamic Tab", description = "A dynamically updated tab") {
        if (this.newTab) {
            this.newTab.document.open();
            this.newTab.document.write(`
          <html>
            <head>
              <title>${title}</title>
              <meta name="description" content="${description}">
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
              <div id="dynamic-content">${content}</div>
            </body>
          </html>
        `);
            this.newTab.document.close();
        }
    }
}

export default DynamicTab