'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

	name 			: String,
	email			: String,
	hashed_password	: String,
	created_at		: String,
	temp_password	: String,
	temp_password_time: String

});

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('user', userSchema);