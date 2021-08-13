// npm add react-router-dom

import react from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom'
import './../App.css';

import BlogList from './BlogList';
import BlogDetails from './BlogDetails';

function ReactRouter() {

  return (
    <Router>
        <div className="App">
        <header className="App-header">
            React Router :: 
            <Switch>
                <Route exact path='/blogs' component={BlogList} />
                <Route path='/blogs/:blogId' component={BlogDetails} />
            </Switch>
        </header>
        </div>
    </Router>
  );
}

export default ReactRouter;
