// define App View
define(['jquery', 'underscore', 'backbone', 'collections/notes'], function ($, _, Backbone) {

	var AppView = Backbone.View.extend({

		// override default element
		el: '.notes-container',

		render: function () {
			this.$el.html('a1');
		}

	});

	return AppView;

});