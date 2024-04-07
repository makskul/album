function generateAppHtml(appHtml, meta) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${meta.title}</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script src="/dist/client.bundle.js"></script>
    </body>
    </html>
  `;
}

module.exports = generateAppHtml;
