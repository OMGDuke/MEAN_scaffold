describe('Main Module', function() {
	var sampleApp;
	beforeEach(function() {
		sampleApp = angular.module('sampleApp');
	});
	
	it('Should be registered', function() {
		expect(sampleApp).toBeDefined();
	});
});