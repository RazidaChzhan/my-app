import React from "react";
import { Typography,  Grid } from '@material-ui/core';

// import Leftmenu from './leftMenu.js';
import Profilemenu from './profileMenu.js';
import SocialNetworks from './socialnetworks.js';

import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import {
    HashRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../index.css';

// export default class SettingsMenu extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Typography className="backgroundimage">
//                     <Grid container spacing={1}>
//                         <Grid item xs={1}></Grid>
//                         <Grid item xs={2} 
//                         style={{backgroundColor: '#FFFFFF', marginTop: '80px', borderRadius: '5px', padding: '25px', width: '441px', height: '186px'}}>
//                             <Leftmenu/>   
//                         </Grid>
//                         <Grid item xs={6}
//                         style={{backgroundColor: '#ffffff', marginTop: '80px', marginLeft: '31px', borderRadius: '5px'}}>
//                             <Profilemenu/>                             
//                             <SocialNetworks/>
//                         </Grid>
//                     </Grid>   
//                 </Typography> 
//             </div>
//         );
//     }
// } 

export default class SettingsMenu extends React.Component {
        render () {
            return (
                <HashRouter>      
               <Typography className="backgroundimage">
                        <Grid container spacing={1}>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={2} 
                            style={{backgroundColor: '#FFFFFF', marginTop: '80px', borderRadius: '5px', padding: '25px', width: '441px', height: '186px'}}>
                                    
                    <MenuList  >
                        <Link className="linktext1" to="/main">
                            <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                            Основная информация
                            </MenuItem>
                        </Link>
                        <Link className="linktext1" to="/socialnetworks">
                            <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                            Социальные сети
                            </MenuItem>
                        </Link>
                        <Link className="linktext1" to="/changepassword">
                            <MenuItem className="menuitemtext" style={{paddingTop: 10}}>
                            Смена пароля
                            </MenuItem>
                        </Link>                  
                    </MenuList>
                   
                            </Grid>
                            <Grid item xs={6}
                            style={{backgroundColor: '#ffffff', marginTop: '80px', marginLeft: '31px', borderRadius: '5px'}}>
                              
                                <Switch>
                                <Route path="/main" component={Profilemenu}>
                                </Route>
                                <Route path="/socialnetworks" component={SocialNetworks}>
                                
                                </Route>
                                <Route path="/changepassword">
                                <h1>changepassword</h1>
                                </Route>
                                </Switch>
                                
                            </Grid>
                        </Grid>   
                    </Typography> 
                </HashRouter> 
            );
        }
    } 