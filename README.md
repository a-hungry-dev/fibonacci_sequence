
## **TODO:**
- [x] 1. Initialise an npm project in the base of the repository `npm init` 
    - [https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

- [x] 2. Add the dependency Express to our newly created project `npm install express` 
    - [http://expressjs.com/en/starter/installing.html](http://expressjs.com/en/starter/installing.html)

- [x] 3. Crate our main js file (index.js) and set up Express to serve a static directory 
    - [http://expressjs.com/en/starter/hello-world.html](http://expressjs.com/en/starter/hello-world.html) 
    - [http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express)

`index.js`

```javascript
// this is how we import a module/dependency
const express = require('express');

// here we are using one of the methods that express exposes to us
// (we will talk more about that later)
const app = express();

// just a variable declration of port so it's easy to configure
// this is used on the last line of this file and isn't necesary
const port = 3000;

// we are defining a directory in our project (relative to the index.js file)
// that we want to serve to a browser, when we run our app in the next step
// files in the /public folder will be available at 127.0.0.1:3000/
// for example if we add /public/index.html it will be
// available at 127.0.0.1:3000/index.html
app.use(express.static('public'));

// this is configuring the port we would like the application to run on
// typically this would be either 80 (http) or 443 (https)
// 3000 is fine for now
app.listen(port, () => console.log('Example app listening at http://localhost:' + port));
```

- [x] 4. Go ahead and create the `/public` directory if you haven't done so already and add some files
    - index.html
    - styles.css
    - scripts.js

The project directory should look like this:
```
project/ (the base of our repository)
│   README.md
│   package.json
│   index.js
|
└───public/
    │   index.html
    │   styles.css
    │   scripts.js
```

- [x] 5. You're ready to run your app! from the base of the repository run `node index.js`. You should now be able to view the webpage you created in the previous step

- [ ] 6. Now it's time to consider routing, add `GET:/fibonacci` route to your `index.js` file
    - [https://expressjs.com/en/starter/basic-routing.html](https://expressjs.com/en/starter/basic-routing.html)
    - [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)

```javascript
// ...

app.use(express.static('public'));

app.get("/fibonacci", (req, res) => {
    // req is the request object, it has a bunch of information about the request.
    // including query parameters e.g. if the request was made with "/fibonacci?number=10"
    // (req.query.number === "10" // true) notice it's a string

    // res gives us ways to respond to the request.
    // if success
    //  res.json({ })
    // if error
    //  res.json({ error: "" })
    // if really bad error breaking stuff
    //  res.status(500).send("")

})

// ...
```

- [ ] 6. lets see if we can make use of our new route using the web page, i'll leave it up to you to work this one out!
    - [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
