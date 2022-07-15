// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import OpenSeadragon = require("openseadragon")

window.addEventListener("DOMContentLoaded", () => {

  const osd = OpenSeadragon({
    id: "openseadragon1"
  });
  
})
