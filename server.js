// server.js
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./App.jsx');
const metaData = require('./metaData.json');
const generateAppHtml = require('./generateAppHtml');
const app = express();

app.get('*', async (req, res) => {
    try {
        const context = {};

        // Получение метаданных для текущего маршрута
        const routeMetaData = metaData[req.url] || {};

        const appHtml = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );

        const html = generateAppHtml(appHtml, routeMetaData);
        res.send(html);
    } catch (error) {
        console.error('Ошибка при загрузке страницы:', error);
        res.status(500).send('Произошла ошибка при загрузке страницы');
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
