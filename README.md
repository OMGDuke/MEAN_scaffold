# MEAN Scaffold

This is the scaffolding for a lightweight MEAN app, with testing frameworks and a gruntfile set up.

## Installation

- Clone this repo - `git clone git@github.com:harrim91/MEAN_scaffold.git`
- Check that you have node installed with `node -v`
- Run `npm install`
- Check that you have bower installed with `bower -v`, if not run `npm install -g bower`
- Run `bower install`
- Check if you have MongoDB installed with `mongod -version`, if not install it.
- Run `mongod` in a separate terminal window.
- Check that you have bower installed with `grunt --version`, if not run `npm install -g grunt`
- To run the app - `grunt`

## Tests

- Check if you have webdriver-manager, if not run `npm install -g webdriver-manager` followed by `webdriver-manager update`.
- Run `webdriver-manager start` in one window
- In another window, Run `grunt test` (this will run mocha, karma and protractor tests)
