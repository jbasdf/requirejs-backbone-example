define(['backbone'], function(Backbone){

	return function (method, model, options) {
		options.timeout = 10000; // required, or the application won't pick up on 404 responses
		options.dataType = "jsonp";
		return Backbone.sync(method, model, options);
	};

});