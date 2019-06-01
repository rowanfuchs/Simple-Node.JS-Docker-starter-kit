'use strict';

const app 			= require('express');
const router 		= app.Router();
const profile 		= require('./controllers/profile');
const pino          = require('pino');
const logger        = pino({
	level: 10,
	prettyPrint: { colorize: true }
});

router.get('/', function (req, res) {

	res.render('index.html', {
        title: 'Main page',
        message: 'Hello world'
    });
});

router.get('/users/:id', function (req, res) {

	logger.debug(`Get user ${req.params.id}`);
	profile.getProfile(req.params.id)
		.then(data =>
            res.render('user.html',
                data
            ))
		.catch(err =>
            res.render('index.html', {
                title: err.status,
                message: err.message
            })
        );
});

router.get('*', function (req, res) {

	logger.debug(`404 error: ${req.url}`);
	res.render('index.html', {
		title: '404',
		message: 'Page not found.'
	});
});

module.exports = router;