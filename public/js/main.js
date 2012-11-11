// define requirejs paths
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-1.8.2.min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		}
	}
});

// start the app
require(['views/app'], function(AppView){
  	
  	var appView = new AppView;

  	// render main view
  	appView.render();

});
