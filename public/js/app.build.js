// Example and options at: https://github.com/jrburke/r.js/blob/master/build/example.build.js#L244
// From gist: https://raw.github.com/gist/1509135/13b9ad3664fca3b68499ad65aaf0003e5d6b5b69/build.js

// Download jquery.js and place it in the build, do not use require-jquery.js 
// in the build, since each of the build layers just needs almond and not the 
// full require.js file.
// This file is run in nodejs to do the build: node build.js

//Load the requirejs optimizer
var requirejs = require('./r.js');

//Set up basic config, include config that is
//common to all the requirejs.optimize() calls.
var basConfig = {
	baseUrl: "public/js",
	locale: "en-us",
	optimize: "uglify",
	//optimize: "none",   // If you need to debug the compiled script
	//namespace: "test",  // If using Almond then no need to namespace
	wrap: true,
	paths: {
		'jquery': 'libs/jquery/jquery',
		'underscore': 'libs/underscore/underscore',
		'backbone': 'libs/backbone/backbone',
		'templates': '../templates'
	},

	//All the built layers will use almond.
	name: 'libs/require/almond'
};

//Create an array of build configs, the baseConfig will
//be mixed in to each one of these below. Since each one needs to
//stand on their own, they all include jquery and the noConflict.js file

var configs = [
	{
		include: ['main'],
		out: 'public/js/min-main.js'
	},
	// Build as many scripts as you need:
	{
		include: ['main_too'],
		out: 'public/js/min-main_too.js'
	}
]; 


// Function used to mix in baseConfig to a new config target
function mix(target) {
	for (var prop in basConfig) {
		if (basConfig.hasOwnProperty(prop)) {
			target[prop] = basConfig[prop];
		}
	}
	return target;
}

//Create a runner that will run a separate build for each item
//in the configs array. Thanks to @jwhitley for this cleverness
var runner = configs.reduceRight(function(prev, currentConfig) {
	return function (buildReportText) { 
		requirejs.optimize(mix(currentConfig), prev);
	};
}, function(buildReportText){
	// Output the build results
	console.log(buildReportText);
});

//Run the builds
runner();