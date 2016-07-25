describe('New Article Page', function() {
	beforeEach(function() {
    browser.get('/');
  });

  it('should get home page title', function() {
    expect(browser.getTitle()).toEqual('Sample App');
  });
});

// describe('some feature', function() {
// 	xit('should do something', function() {});
// });