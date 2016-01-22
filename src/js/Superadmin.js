define(
	['backbone', 'Session', 'Router', 'config'],
	function (Backbone, Session, Router, config)
	{
		var Superadmin = {

			init : function ()
			{
				// Authentication
				Session.authenticate ();

				// Set config
				this.config = config;

				return this;
			},

			activate: function ()
			{
				// First load essential user data
				Session.loadEssentialData (function ()
				{
					// Load navigation
					// this.navigation = new NavigationView (this);
					// $('#sidebar').html(this.navigation.render().el);

					// And then rout the router.
					this.router = new Router ();

					Backbone.history.start();
				});
			},

			// render: function ()
			// {
			// 	// Do some rendering
			// 	$('#page').html (this.view.render ().el);

			// 	// this.navigation.handleSidebarMenu();
			// },

			// setView: function (view)
			// {
			// 	// Remove the old
			// 	if (this.view) this.view.remove();

			// 	Session.trigger('destroy:view');

			// 	this.view = view;

			// 	this.render();
			// },
		};

		/*
		 *	Add authorization headers to each Backbone.sync call
		 */
		Backbone.ajax = function()
		{
			// Is there a auth token?
			if(Session.authenticationtoken)

				arguments[0].headers = {
		            'Authorization': 'Bearer ' + Session.authenticationtoken,
		            'Accept': "application/json"
		        };

			return Backbone.$.ajax.apply(Backbone.$, arguments);
		};

    	return Superadmin;
	}
);


