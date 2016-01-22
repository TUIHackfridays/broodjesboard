define (
	['backbone', 'Models/Account'],
	function(Backbone, Account)
	{
		var Accounts = Backbone.Collection.extend(
		{
			typestring : "accounts",
			
			model: Account,
			
			initialize : function (options)
			{
				if(options) $.extend(this, options);
				
				// Event listeners
				this.on ('backgrid:edited', this.patchModel);
			},
			
			url : function()
			{	
				var url = Superadmin.config.apiurl + this.typestring;
				
				return this.parameters? url + "?" + $.param (this.parameters): url;
			},
			
			patchModel : function (model)
			{
				// Patch model, if changed
				if (Object.keys (model.changed).length)
				
					model.save(model.changed, {patch: true});
			}
		});
		
		return Accounts;
	}
);