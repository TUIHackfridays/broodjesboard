# Corporify Superadmin Improvements
Please upstream following improvements into the Generic Superadmin package.
Copy the re-works faithfully. Some files have been completely overhauled, with reason.


## Core
-	added version to config file api field
-	dynamic urls from config
-	added .mustache extension to templates
-	excluded .mustache extension to gulp "Template" builder.
-	Separated navigation in template file (loads on initial Session call)
-	Added sourcemaps dependency to npm
-	Re-implemented /me in nav
-	Debugged redirect loop on Superdamin.authentication
-	Added Utilities folder in js (required for login)
-	Added login html & logic
-	Re-added Team view
-	Update Pageview functions
-	Fixed broken Jumbotron


## Style
-	Implemented core UI package in bower and gulp (check with Rui and implement the Unified Bootstrap package for generic).
-	Added sass instead of css styes file references
-	Spliced up font and general styling
-	Removed css references from gulp and added to main.scss file
-	Added Core UI Pack variables to main sass (avoid hard-coding colours and icons)
-	Added sourcemaps and compress to sass gulp output


# TO-DOs
This is for you.

-	~~Add a pointer in README during which function the bower install happens. Required to know if you add a bower dependency manually, and want to follow the readme on how to bower update.~~
-	~~Change Font dependency to Core UI pack (to check with Rui)~~
-	Add staging and stable build flows. Staging should contain source-map, Stable not. 
	Staging: full, development & debugging optimised. Stable: light, production optimised
-	~~Catch css (/sass) errors gracefully. Right now, it throws an ugly npm error. Should be a nice parsed error message, continuing with the other gulp actions afterwards if possible.~~
-	Add correct credentials and info to bower and package json files (url, version, package reference, etc)
-	~~Parse dynamic mustache fields in Gulp for login.html (Check with Rui if same should be done for index.htmliew functions)~~
-	~~Add left-side nav menu, as in Softtouch. Specifically user management should be compareable - such as relating users and accounts~~
