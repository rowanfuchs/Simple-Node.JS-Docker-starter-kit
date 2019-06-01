'use strict';

require('custom-env').env(true);

const express       = require('express');
const router        = require('./routes');
const nunjucks 		= require('nunjucks');
const app           = express();
const port          = process.env.PORT || 3000;
const pino          = require('pino');
const logger        = pino({
    level: 10,
    prettyPrint: { colorize: true }
});

nunjucks.configure('./views', {
    autoescape: true,
    express: app
});

app.set('view engine', nunjucks);
app.use('/', router);
app.listen(port);

logger.info(`Environment: ${process.env.APP_ENV} started on port ${port}`);