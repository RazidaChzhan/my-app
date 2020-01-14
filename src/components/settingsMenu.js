import React from "react";
import { Typography,  Grid } from '@material-ui/core';

import Profilemenu from './profileMenu.js';
import SocialNetworks from './socialnetworks.js';
import ChangePassword from './changePassword.js';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import {
   HashRouter,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import '../index.css';

export default class SettingsMenu extends React.Component {
        render () {
            return (
                
                <HashRouter>
                
               <Typography className="backgroundimage">
                        <Grid container spacing={1}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}>
                                <Grid container className="leftmenu"
                                style={{backgroundColor: '#FFFFFF', marginLeft: 110, marginTop: '80px', borderRadius: '5px'}}>
                                    <MenuList style={{paddingLeft: 25}}>
                                        <Link activeClassName="active-menu-item-text" className="linktext1" to="/main">
                                            <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 20, paddingTop: 10}}>
                                            Основная информация
                                            </MenuItem>
                                        </Link>
                                        <Link  activeClassName="active-menu-item-text" className="linktext1" to="/socialnetworks">
                                            <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10, paddingBottom: 17, paddingTop: 20}}>
                                            Социальные сети
                                            </MenuItem>
                                        </Link>
                                        <Link  activeClassName="active-menu-item-text" className="linktext1" to="/changepassword">
                                            <MenuItem className="menuitemtext" style={{paddingBottom: 20, paddingTop: 15}}>
                                            Смена пароля
                                            </MenuItem>
                                        </Link>                  
                                    </MenuList>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                {/* <Profilemenu/> */}
                                <Grid container style={{backgroundColor: '#ffffff', marginTop: '80px', borderRadius: '5px', marginLeft: -50}} >
                                <Switch>
                                <Route path="/main" component={Profilemenu}>
                                </Route>
                                <Route path="/socialnetworks" component={SocialNetworks}>                                
                                </Route>
                                <Route path="/changepassword" component={ChangePassword}>                                
                                </Route>
                                <Redirect to="/main" ></Redirect>
                                </Switch>    
                                </Grid>                      
                            </Grid>
                        </Grid>   
                    </Typography>                 
                </HashRouter>
            );
        }
    } 