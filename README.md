# Github Repository Search

This is a sample project demonstrating the use of Github Repository Search.

The dependencies listed for the sample application are listed in package.json

To build the application, we can use npm or yarn

``` 
npm install 
or
yarn install
```

The development server can be started using 

``` 
yarn start 
or
npm start
```

The application can be access on http://localhost:4200

Due to time-constraint a very simple application was developed if having more time the following can be implemented - 

* ag-grid is being used to display the JSON data currently. This can be replaced by a proper UX with pagination supported
* cypress framework can be used to provide unit-testing.
* data validation can be done on the user input
* data caching can be provided if the user is searching the same repository name. this will help in reducing the number of API calls to the Github API
