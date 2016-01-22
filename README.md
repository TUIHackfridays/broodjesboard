# superadmin

## Requirements
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install
Install the dependencies with `npm install` or `sudo npm install`. This will also run `bower install` command to install the vendor dependencies. If bower is not installed, run a `sudo npm install -g bower` first.

## Adding packages
The package is setup so you can easily add external packages to your project, while making it easier to manage dependencies. Doing
`bower install <package-name>` will add the package to the src/vendor folder. You can browse for available bower packages through [bower search page](http://bower.io/search/), and general documentation on bower in [bower.io](http://bower.io/).

## Gulp tasks
- **gulp** will build the files inside the staging folder and perform a watch.
- **gulp clean** will clean the dist and staging folders
- **gulp clean:staging** will clean the staging folder
- **gulp staging** will build the files inside the /staging folder without triggering a watch

## Seeing result in web browser
You'll need to run the command
```
npm run static
```
This command will run http-server and serve the staging folder.
Now just open the browser at ```http://127.0.0.1:8080/```.

## Notice
Currently the gulp release setup is broken.
