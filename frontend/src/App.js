import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateArticle from "./components/CreateArticle";
import ArticleList from "./components/ArticleList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditArticle from './components/EditArticle';
import ArticleDetail from './components/ArticleDetail';
import AppBar from "./components/AppBar";


function App() {

  return (
      <div>
          <AppBar/>
          <Router>
              <Route exact path="/" component={ArticleList}/>
              <Route exact path="/create" component={CreateArticle}/>
              <Route exact path="/edit/:id" component={EditArticle}/>
              <Route exatc path="/view/:id" component={ArticleDetail}/>
          </Router>
      </div>

  );
}

export default App;
