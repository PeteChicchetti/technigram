# MERN w/ GraphQL Boilerplate

MERN stack boiler plate with Sign Up / Login / Logout functionality using GraphQL, Apollo Server, and Apollo Client. Can Sign Up / Login and be taken to a Dashboard where user can logout using functionality set up in client/utils/auth.js. No styling, just basic Sign Up / Login / Logout functionality. Also uses React Router.

## Instructions:

Follow along below to install the latest dependencies, or ``` npm install ``` in the root directory for the versions included in the current package.json files.

### Client Folder:

- delete the package-lock.json
- in the package.json, delete all dependencies
- navigate to the client folder
- run the following command:

```
  npm install @apollo/client graphql jwt-decode react react-dom react-router-dom react-scripts web-vitals @testing-library/jest-dom @testing-library/react @testing-library/user-event

```

- while in the client folder, run ```npm start``` to make sure there are no errors

### Server Folder: 

- delete the package-lock.json
- in the package.json, delete all dependencies
- navigate to the server folder
- run the following command:

```
npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose dotenv

```

- in the connection.js (server/config/connection.js) make sure to change the name of the database to the name of your corresponding database

- navigate to server folder, run ```npm start``` to make sure there are no errors


### Root Directory: 

- install concurrently as a dev dependency:

```
npm i concurrently -D

```

### Side Notes:

- you'll eventually want to change the favicon.ico in the client/public folder (this is the icon shown on the tab of the browser)
- you'll want to change the title in the client/public/index.html from "MERN" to the name of your application
- you'll also want to change the "name" in the root package.json from "mern-boiler" to the name of your application
- if you are having issues access the Apollo Sandbox, inside server/server.js line 25, remove the "*" after the "/" - from ``` app.get('/*') ``` to ``` app.get('/') ```


### Final Check:
 - in the root directory, run `npm run develop`

### Video Demonstration:

[Video Link](https://watch.screencastify.com/v/C5vZrOS3Hq7FGSvvaRPB)
 