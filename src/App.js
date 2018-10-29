import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import HeroesList from './HeroesList/HeroesList';
import HeroDetail from './HeroDetail/HeroDetail';



class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={HeroesList}/>
          <Route path="/:id" component={HeroDetail} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
