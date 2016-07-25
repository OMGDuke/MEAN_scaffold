var express = require('express'),
		morgan = require('morgan'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override');

module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

	app.use(bodyParser.json());
	app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(express.static(__dirname + '/public'));

	require('../app/routes/index.server.routes.js') (app);

	return app;
};
