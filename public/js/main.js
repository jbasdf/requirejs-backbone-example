// Adds the toolbar and the mods scripts
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    templates: '../templates'
  }
});

require([
  'app_main',
	'no_conflict'
], function(AppMain){
	AppMain.init();
});