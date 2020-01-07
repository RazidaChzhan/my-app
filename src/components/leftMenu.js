import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileMenu from './profileMenu';
import SocialNetworks from './socialnetworks';
import '../index.css';


export default class Leftmenu extends React.Component {
    render () {
        return (
            // <Router>
            <div>           
            <MenuList  >
                <Link className="linktext1" to="/settings/main">
                    <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                    Основная информация
                    </MenuItem>
                </Link>
                <Link className="linktext1" to="/settings/main">
                    <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                    Социальные сети
                    </MenuItem>
                </Link>
                <Link className="linktext1" to="/settings/main">
                    <MenuItem className="menuitemtext" style={{paddingTop: 10}}>
                    Смена пароля
                    </MenuItem>
                </Link>                  
            </MenuList> 
            {/* <Switch>
                <Route path="/settings/main" component={ProfileMenu} />
                <Route path="/settings/socialnetworks" component={SocialNetworks} />
            </Switch>           */}
        </div>
        // </Router>
        );
    }   
}