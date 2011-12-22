define(['jquery',
				'underscore',
				'backbone',
				"../models/asset",
				"../views/main/main_view",
				"../views/global/error"], function($, _, Backbone, Asset, MainView, ErrorMessage){
	
	return Backbone.Router.extend({
		routes: {
			"": 						"index"
		},

		initialize: function(){
			this.asset = new Asset();

			// Views
			this.main_view = new MainView({ 'model': this.asset });

		},

		index: function(){
		}

	});
});