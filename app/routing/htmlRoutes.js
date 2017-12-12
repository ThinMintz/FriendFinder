/*Your htmlRoutes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.*/


var path = require('path');

module.exports = function (app) {
	//brings user to survey page
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	//brings user to home page
	app.get('/home', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	//brings user to home page if no other page is found
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};