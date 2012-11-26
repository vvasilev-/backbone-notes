// file - models/note.js

define(['backbone', 'lodash'], function(Backbone, _){

	var Note = Backbone.Model.extend({

		validate: function(attrs){
			
			if ( !attrs.title && !attrs.body ) {
				return [ 'Title and body can\'t be empty!', false ];
			} else if ( !attrs.title ){
				return [ 'Title can\'t be empty!', false ];
			} else if ( !attrs.body ){
				return [ 'Body can\'t be empty!', false ];
			}

		},

		// remove the note and view
		clear: function(){

			this.destroy();
			this.view.remove();

		}

	});

	return Note;

});