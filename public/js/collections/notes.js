// define Notes Colelction
define(['underscore', 'backbone', 'models/note'], function (_, Backbone, Note) {

	var Notes = Backbone.Collection.extend({

		// attach the model
		model: Note

	});

	return new Notes;

});