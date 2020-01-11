import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import {Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';


import AppHeader from './components/header';
import AppFooter from './components/footer';
import AppMainMenu from './components/mainmenu1';
import SettingsMenu from './components/settingsMenu';



import { Link } from "@material-ui/core";
import SocialDEsign from "./components/socialDesign";
import './index.css';

const packageJSON = [
  {
    name: "Профиль",
    path: "/profile"
  },
  {
    name: "Настройки",
    path: "/settings"
  },
];

const theme = createMuiTheme ({
  palette: {
    primary: {
        main: '#2FA2BC'
    },
    secondary: {
        main: '#222222',
    },
  }
});

export default class App extends Component {
  render() {
    const location = window.location.href;
    
    return (
        <div>
          
          <AppHeader/>
          {/* <SocialDEsign/> */}
          <ThemeProvider theme={theme}>
          <Container style={{marginLeft: '160px', marginBottom: '20px'}}>
          <h1>Личный кабинет</h1>
          {packageJSON.map((item, index) => (
            <Link
              variant={
                location.indexOf(item.path) !== -1 ? "outlined" : "contained"
              }
              key={index}
              component={NavLink}
              exact={item.name === "Home" ? true : false}
              to={item.path}             
              activeClassName="active"
              className="profile"
              underline="none"
              color="textSecondary"
              style={{
                marginRight: '35px',
              }}
            >
              {item.name}
            </Link>
          ))}          
          </Container>
          </ThemeProvider> 
          
            <Switch>
              <Route name="MainMenu" exact path="/profile" component={AppMainMenu} />
              <Route  name="SettingsMenu" path="/settings" component={SettingsMenu} />
              <Redirect to="/profile"></Redirect>

          </Switch>          
          <AppFooter/>
        </div>
     
    );
  }
}
