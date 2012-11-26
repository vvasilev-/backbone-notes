// file - views/note.js

define(['jquery', 'backbone', 'lodash', 'text!templates/note.html'], function($, Backbone, _, Tpl){

	var Note = Backbone.View.extend({

		// the element for this view.
		tagName: 'div',

		// classname for this view.
		className: 'note',

		// cache the template for this view.
		template: _.template(Tpl),

		// The view listens for changes to its model, re-rendering. Since there's
	    // a one-to-one correspondence between a **Note** and a **NoteView** in this
	    // app, we set a direct reference on the model for convenience.
		initialize: function(){

			var model = this.model;

			model.on('change', this.render, this);
			model.view = this;

		},

		// Render the contents of the note item.
		render: function(){

			this.$el.html(this.template(this.model.toJSON()));
	    	return this;

		}

	});

	return Note;

});