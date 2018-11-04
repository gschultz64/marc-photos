# Marc Schultz Photography

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Clone/Download Instructions

- git clone git@github.com:gschultz64/marc-photos.git or [https://github.com/gschultz64/marc-photos.git](https://github.com/gschultz64/marc-photos.git)
- cd marc-photos
- install node.js [offical node.js website](https://nodejs.org/en/)
- npm install
- npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Other Information

images hosted on cloudinary (temporary)

**Integrate [Strapi](https://strapi.io/documentation/3.x.x/getting-started/quick-start.html) for CMS dashboard**

- Click the above link to follow the Strapi quick start guide. I created a strapi project called "cms" in the marc-photos project, and we'll both need to set up our local versions for development. 

[Sass](https://sass-lang.com)

### Database

**PostgreSQL**: marcDb

### Proxy Server

server.js - localhost:9000

Send Stripe charges

Use "node server.js" to start proxy server

### Node Modules

- [classnames](https://www.npmjs.com/package/classnames#usage-with-reactjs)
- [react-photo-gallery](http://neptunian.github.io/react-photo-gallery/)
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [stripe, react-stripe-elements](https://stripe.com/docs/development#node)
- [typography](http://kyleamathews.github.io/typography.js/)
- [react-helmet](https://github.com/nfl/react-helmet)
- [cloudinary-react](https://cloudinary.com/documentation/react_integration)
