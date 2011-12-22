define([
  'jquery',
  'underscore',
  'backbone',
	'models/asset'], function($, _, Backbone, Asset){
  return Backbone.Collection.extend({
    model: Asset,

    initialize: function(){
			this.url = '/assets';
    }

  });

});