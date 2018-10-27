import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { red, blue} from '@material-ui/core/colors';
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import HeroesList from './HeroesList/HeroesList';
import HeroDetail from './HeroDetail/HeroDetail';


const theme = createMuiTheme({
  palette: {
    text: '#fff',
    primary: red,
    secondary: blue
  },
  typography: {
    useNextVariants: true,
    title: {
      color: '#fff'
    }
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <MuiThemeProvider theme={theme}>
            <Layout>
              <Switch>
                <Route path="/" exact component={HeroesList}/>
                <Route path="/:id" component={HeroDetail} />
                <Redirect to="/" />
              </Switch>
            </Layout>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
