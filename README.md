# Plan for Thursday Night

- Introduction to reactstrap
- Introduction to the React Router
- Implement the Router to support views for your industry project API
- Introduction to `useEffect` and loading data form a remote server API using "Ajax"
- Go Full Stack

## reactstrap for bootstrap with ease in React

A sample of form options in case you love them. Something to ignore if you don't fall in love with them.

## Router

Super important stuff here with Router.

This is how this folder was created:

`npx create-react-app week-12-storefront`

`cd week-12-storefront/`

## Once in the new project folder as created by create-react-app, we install the Router

`npm install --save react-router-dom`

For more information about how the makers of CRA recommend starting with the router see:

<https://create-react-app.dev/docs/adding-a-router/>

The CRA docs link to the React Router basic example:

<https://reactrouter.com/web/example/basic>

The code shared in that example has been placed into App.js as follows:

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
```

