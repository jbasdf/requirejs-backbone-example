define([    
    'jquery',
	  'underscore',
	  'backbone',
		'text!templates/main/main_view.html',
	], function ($, _, Backbone, MainViewTemplate){
			
	return Backbone.View.extend({

		initialize: function() {
			_.bindAll(this, 'render');			
			this.render();
		},
		
		render: function(){
			$('#inside').html($.fn.jquery);	
			$(this.el).html(_.template(MainViewTemplate, { 'message': 'Hello World' }));	
			$('body').append(this.el);
			return this;
		}
	
	});
});