# alexs-express-boilerplate
a barebones express.js boilerplate for quick JS app deployment

## How to use

Navigate to your project root and run:

    git clone https://github.com/alexkim205/alexs-express-boilerplate.git

Feel free to rename folder to whatever you want.

## Dependencies
This boilerplate uses Node.js to manage packages. It comes with these dependencies:

    "dependencies": {
      "browserify": "^16.2.2",
      "express": "^4.16.3",
      "node-sass": "^4.9.0",
      "pug": "^2.0.3"
    }

## Scripts you can run

to make your life easier with watchers for Sass and Browserify

To make and watch for changes in `.sass` files in the `./public/sass` folder:

    $ npm run css
    $ npm run css:watch

To make and watch for changes in `index.js` file in the `./public/js` folder:

    $ npm run browserify
    $ npm run browserify:watch

