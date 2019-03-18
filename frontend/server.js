const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // server.get('/page/:slug', (req, res) => {
    //   const actualPage = '/page';
    //   const queryParams = {
    //     slug: req.params.slug,
    //     apiRoute: 'page',
    //   };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('/blog/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = {
        slug: req.params.slug,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/blog/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = {
        slug: req.params.slug,
        apiRoute: 'blog',
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/work/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = {
        slug: req.params.slug,
        apiRoute: 'work',
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/_preview/:id/:wpnonce', (req, res) => {
      const actualPage = '/preview';
      const queryParams = {
        id: req.params.id,
        wpnonce: req.params.wpnonce,
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/:slug', (req, res) => {
      const actualPage = '/page';
      const queryParams = {
        slug: req.params.slug,
        apiRoute: 'page',
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
