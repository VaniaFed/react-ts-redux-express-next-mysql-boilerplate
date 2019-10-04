const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.get('/', (req, res) => {
        res.redirect('/search');
    });

    server.get('/search', (req, res) => app.render(req, res, '/search'));

    server.get('/movies/:id', (req, res) => {
        return app.render(req, res, '/movies', { id: req.params.id });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})();
