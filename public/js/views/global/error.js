define([
  'jquery',
  'underscore',
  'backbone',
	'./notice'
], function($, _, Backbone, Notice){

  return Notice.extend({
		className: "error",
		defaultMessage: 'Something went wrong. Please try again.'
	});
		
});