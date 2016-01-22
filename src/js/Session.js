define(
	['backbone', 'Superadmin', 'Models/Me'],
	function (Backbone, Superadmin, Me)
	{
		Session = 
		{
			user : null,
			
			authenticate: function ()
			{
				var token = window.localStorage.getItem ('token');
				
				// Check if there is authentication
				if(token && token.length >= 18)
				{	
					this.authenticationtoken = token;
					
				} else this.authenticationtoken = "the-Golden-Key-28chars-token";
				
				// else window.location = "/login.html";
			},
		
			// isLoaded : function ()
			// {
			// 	return this.user != null;
			// },
			
			loadEssentialData : function (callback)
			{
				this.user = new Me();

				this.user.once("activated", function ()
				{	
					callback();

				}.bind(this));
				
				this.user.fetch();
			},
			
			render: function ()
			{
				// Do some rendering
				$('#page').html (this.view.render ().el);
				
				// this.navigation.handleSidebarMenu();
			},
			
			setView: function (view)
			{
				// Remove the old
				if (this.view) this.view.remove();
				
				Session.trigger('destroy:view');
				
				this.view = view;	
					
				this.render();
			}
		}
		
		// Add events
		_.extend(Session, Backbone.Events);
		
		return Session;
	}
);