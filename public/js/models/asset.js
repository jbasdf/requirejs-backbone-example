define(['jquery',
				'underscore',
				'backbone'], function($, _, Backbone){
	
	return Backbone.Model.extend({
		
		initialize: function(){
			this.urlRoot = '/assets';
    }
	
	});
	
});
