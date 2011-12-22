define(['jquery',
				'underscore',
				'backbone',
				'./routers/main_router'], function($, _, Backbone, MainRouter){
	return 	{
		init: function(){
			new MainRouter();
			Backbone.history.start();
		}
	};
});