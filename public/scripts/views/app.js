// file - app.js

define(['jquery', 'backbone', 'lodash', 'scripts/collections/notes', 'scripts/views/note'], function($, Backbone, _, Notes, Note){

	var App = Backbone.View.extend({

		// the element for this view.
		el: $('.container'),

		// events for this view.
		events: {
			'submit .note-form': 'saveNote',
			'click form input[type="button"]': 'hideModal',
			'click .notes-nav .edit': 'editNote',
			'click .notes-nav .delete': 'deleteNote',
			'click .header .add': 'addNote'
		},

		// At initialization we bind to the relevant events on the `Notes`
	    // collection, when items are added or changed. Kick things off by
	    // loading any preexisting todos.
		initialize: function(){

			Notes.on('add', this.addOne, this);
			Notes.on('reset', this.addAll, this);
			Notes.on('error', this.showMsg, this);
			Notes.on('sync', this.hideModal, this);

			Notes.fetch();

			this.form = $('.note-form');
			this.titleField = this.form.find('.field:not(.textarea)');
			this.bodyField = this.form.find('.textarea');
			this.saveBtn = this.form.find('input[type="submit"]');
			this.cancelBtn = this.form.find('input[type="button"]');
			this.msg = this.form.find('.form-msg');
			this.overlay = $('.overlay');

		},

		// Add a single note item to the list by creating a view for it, and
		// appending its element to the container.
		addOne: function(model){

			var view = new Note({ model: model });
			this.$('.notes').append(view.render().el);

		}, 

		// Add all items in the `Notes` collection at once.
		addAll: function(){

			Notes.each(this.addOne);

		}, 

		// Edit note
		editNote: function(evt){

			var id = $(evt.target).attr('href').split('/')[1];
			var model = Notes.get(id);
			
			// set heading
			this.form.find('h2').text('Edit a note');

			this.form.data('id', id);

			// set values of fields
			this.titleField.val(model.get('title'));
			this.bodyField.val(model.get('body'));

			// show modal
			this.showModal();

			return false;

		},

		// Add note
		addNote: function(){

			// set heading
			this.form.find('h2').text('Add a note');

			// show modal
			this.showModal();

			return false;

		},

		// Save note
		saveNote: function(){

			var model = Notes.get(this.form.data('id'));
			var title = this.titleField.val();
			var body = this.bodyField.val();

			if (model != undefined) {

				model.save({
					'title': title,
					'body': body
				});

			} else {

				Notes.create({
					'title': title,
					'body': body
				});

			}

			this.titleField.val('');
			this.bodyField.val('');

			return false;

		},

		// Delete note
		deleteNote: function(evt){

			var model = Notes.get($(evt.target).attr('href').split('/')[1]);

			model.clear();

			return false;

		},

		// Hide modal.
		hideModal: function(){

			this.overlay.removeClass('visible');
			this.form.removeClass('visible');

			this.hideMsg();

		},

		// Show modal.
		showModal: function(){

			this.overlay.addClass('visible');
			this.form.addClass('visible');

		},

		// Show message.
		showMsg: function(model, response){

			if (!response[1]) {
				this.msg.removeClass('success').addClass('error').text(response[0]);
			} 

			this.msg.slideDown(300);

		},

		// Hide message.
		hideMsg: function() {
			this.msg.removeClass('error success').empty().hide();
		}

	});

	return App;

});