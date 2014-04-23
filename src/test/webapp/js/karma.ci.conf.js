
//Load the base configuration
var baseConfig = require('./karma.conf.js');

module.exports = function(config) {
	// Load base config
	baseConfig(config);

	// Update the location of webjar dependencies
	updateWebjarPaths(config);
	
	// Override base config
	config.set({
		
		// Switch to a headless PhantomJS browser for tests
		browsers : [ 'PhantomJS' ],
		
		// Add the junit reporter so test results can be reported alongside Java tests
		reporters: ['progress', 'junit'],

		// Only run once in CI mode
		singleRun : true,

		// Do no watch for file changes
		autoWatch : false,
		
		// Load required plugins
		plugins: [
		       'karma-jasmine',
		       'karma-phantomjs-launcher',
		       'karma-junit-reporter'
		],
		
		// Configure the JUnit reporter
		junitReporter : {
			outputFile : 'target/surefire-reports/js-tests.xml',
			suite : 'js-tests'
		}
	});
};

//Override path to webjar dependencies
function updateWebjarPaths(config) {
	for (var i = 0; i < config.files.length; i++){
		config.files[i] = config.files[i].replace(
				'http://localhost:8080/maven-karma-webjars-example/webjars', 
				'target/dependency/META-INF/resources/webjars');
	}
}