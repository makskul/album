function template(props) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                ${props.head}
            </head>
            <body>
                <div id="app" class="jump">${props.AppClient}</div>
            </body>
            <script src="client.bundle.js" async></script>
        </html>
    `
}

export default template