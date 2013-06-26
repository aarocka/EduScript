//this is the main app file for ember
App = Ember.Application.create();

App.Router.map(function() {
	this.resource('editor');
})