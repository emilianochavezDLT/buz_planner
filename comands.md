# Commands Basics
List of useful commands!

## Running the App
### Running Nodemon
First I installed nodemon locally. So, you have to use the npx command to run nodemon:

```bash
npx nodemon app.js
```

If you are not choosing to use nodemon then you have to run it using the node command. This is a useful command, so I am putting it down:

```bash
node app.js
```


### Looking at the App

To see you app on the browser, you have to go to:

```bash
http://localhost:3000
```

### Installing node modules
To reinstall packages that you need use the command:
```bash
npm install
```
OR
```bash
yarn install
```
To download all the necessary packages as specified in package.json and package-lock.json.


### Inside React
Success! Created client at /Users/Echav/Documents/buz_planner/client
Inside that directory, you can run several commands:

```bash
  npm start
```

Starts the development server.

```bash
npm run build
```
  
Bundles the app into static files for production.

```bash
npm test
```
Starts the test runner.

```bash
npm run eject
```
  
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

```bash
cd client
```
```bash
npm start
```

### Concurrently for Node and React
```bash
npm install concurrently --save
```

What does it do?

The start script uses concurrently to execute both the frontend and backend scripts simultaneously. When you run the npm start command, concurrently will start the React and Express servers, allowing them to work together seamlessly.

Modifying the **ROOT** package.json file to include commands.

```json
"scripts": {
  "start": "node app.js",
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run start\" \"npm run client\""
}
```

Then in the **client/package.json** file set up a proxy to forward API requests to the Express server

```json
"proxy": "http://localhost:5000"
```

React Directory
```json
client
├── public
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── UserPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...

```

To start up both servers, use the command:

```bash
npm run dev
```

### React Router Dom

[GeeksforGeeks Article](https://www.geeksforgeeks.org/what-is-react-router-dom/)

It allows you to display pages and allow users to navigate them. 

The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example.


