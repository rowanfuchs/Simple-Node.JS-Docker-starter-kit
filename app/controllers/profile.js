'use strict';

const user = require('../models/user');

exports.getProfile = objectId =>

	new Promise((resolve,reject) => {

		user.find({ _id: objectId })
		.then(users => resolve(users[0]))
		.catch(err => reject({ status: 404, message: 'User not found.' }))

	});