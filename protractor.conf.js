exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec/e2e/**/*.spec.js'],
	baseUrl: 'http://localhost:3000',
	onPrepare: function() {
		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
	}
}