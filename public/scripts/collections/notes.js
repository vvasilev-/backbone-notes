// file - collections/note.js

define(['jquery', 'backbone', 'lodash', 'scripts/models/note'], function($, Backbone, _, Note){

	var Notes = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: Note,

		// URL reference to this collection's database.
		url: '/notes'

	});

	return new Notes;

});