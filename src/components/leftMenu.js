import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
// import { Route, Router, Switch } from 'react-router';
// import { Link } from 'react-router-dom';
import ProfileMenu from './profileMenu';
import SocialNetworks from './socialnetworks';
import '../index.css';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

import {
    HashRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

// export default class Leftmenu extends React.Component {    
//     render () {
//         return (
//            <Router>          
//                 <MenuList  >
//                     <Link className="linktext1" to="/settings/main">
//                         <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
//                         Основная информация
//                         </MenuItem>
//                     </Link>
//                     <Link className="linktext1" to="/settings/socialnetworks">
//                         <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
//                         Социальные сети
//                         </MenuItem>
//                     </Link>
//                     <Link className="linktext1" to="/settings/changepassword">
//                         <MenuItem className="menuitemtext" style={{paddingTop: 10}}>
//                         Смена пароля
//                         </MenuItem>
//                     </Link>                  
//                 </MenuList>
//                 <Switch>
//                     <Route path="/settings/main" component={ProfileMenu}></Route>
//                     <Route path="/settings/socialnetworks"><h2>socialnetwork</h2></Route>
//                     <Route path="/settings/changepassword"><h2>changepassword</h2></Route>
//                 </Switch>
//             </Router>
//         );
//     }   
// }

export default class Leftmenu extends React.Component {    
    render () {
        return (
           <HashRouter>          
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
                    <Switch>
                        <Route path="/main">
                            <h1>main</h1>
                        </Route>
                        <Route path="/socialnetworks">
                            <h1>socialnetwork</h1>
                        </Route>
                        <Route path="/changepassword">
                            <h1>changepassword</h1>
                        </Route>
                    </Switch>
            </HashRouter>
        );
    }   
}