# Time Extension

This is a simple browser extension that displays the current time. It adds a small popup window to your browser toolbar where the current time is shown.

## Manifest

The `manifest.json` file contains the configuration information for the extension. Here is an overview of the key properties:

- `manifest_version`: Specifies the version of the manifest file format used (version 3 in this case).
- `name`: The name of the extension ("Time Extension").
- `version`: The version number of the extension ("1.0").
- `description`: A brief description of the extension's purpose ("This extension will display the current time.").
- `permissions`: The permissions required by the extension (in this case, "activeTab" is used).
- `action`: Specifies the default action of the extension when clicked. The `default_popup` property points to the `popup.html` file, which contains the UI of the extension.
- `icons`: Specifies the icons used for the extension in different sizes (16x16, 48x48, and 128x128 pixels).

## Popup UI

The `popup.html` file represents the user interface of the extension's popup window. It contains a simple HTML structure with a CSS style and a JavaScript script.

- The `title` element specifies the title of the popup window ("Time Extension").
- The CSS styles in the `style` tag define the appearance of the popup. It sets the width, height, and alignment of the content.
- The `time` paragraph element with the `id` of "time" is where the current time will be displayed.
- The `script` tag references the `popup.js` file, which contains the JavaScript code for updating the time.

## JavaScript Code

The `popup.js` file contains the JavaScript code that updates the current time in the popup window. Here's a breakdown of the code:

- The `DOMContentLoaded` event listener waits for the DOM content to be fully loaded before executing the code inside the callback function.
- The `timeElement` variable stores a reference to the `p` element with the `id` of "time".
- The `setInterval` function is used to update the time every 10 milliseconds. It executes the callback function repeatedly at the specified interval.
- Inside the callback function, `new Date().toLocaleTimeString()` retrieves the current time and formats it as a localized string.
- The `textContent` property of the `timeElement` is updated with the current time, effectively displaying it in the popup window.

## Usage

To use this extension, follow these steps:

1. Clone or download the project files to your local machine.
2. Open your web browser (compatible with Chrome-like browsers).
3. Go to the extensions management page (e.g., chrome://extensions/).
4. Enable developer mode (if not already enabled).
5. Click on the "Load unpacked" button and select the project folder.
6. The extension should now be installed and visible in the toolbar.
7. Click on the extension icon to open the popup window and view the current time.

Note: The extension requires the "activeTab" permission to access the current tab's content.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it according to your needs.
