const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.get('/', (req, res) => res.redirect('/user'));

    server.get('/user', (req, res) =>
        app.render(req, res, '/user', { something: 5 })
    );

    server.get('/api/getUser', (req, res) => {
        const user = {
            id: 2,
            username: 'Roma',
            password: 'epam super'
        };
        res.json({ user });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
})();
