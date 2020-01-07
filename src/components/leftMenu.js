import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileMenu from './profileMenu';
import SocialNetworks from './socialnetworks';


export default class Leftmenu extends React.Component {
    render () {
        return (
            // <Router>
            <div>           
            <MenuList style={{color: '#7A7A7A', fontFamily: 'Segoe UI', fontSize: '18px', lineHeight: '24px;'}} >
                <Link to="/settings/main" style={{ textDecoration: 'none',}}>
                    <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                    Основная информация
                    </MenuItem>
                </Link>
                <Link to="/settings/main" style={{ textDecoration: 'none',}}>
                    <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>
                    Социальные сети
                    </MenuItem>
                </Link>
                <Link to="/settings/main" style={{ textDecoration: 'none',}}>
                    <MenuItem className="menuitemtext" style={{paddingTop: 20}}>
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