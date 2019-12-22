import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default class Leftmenu extends React.Component {
    render () {
        return (
            <MenuList style={{color: '#7A7A7A', fontFamily: 'Segoe UI', fontSize: '18px', lineHeight: '24px;'}} >
                  <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10}}>Основная информация</MenuItem>
                  <MenuItem className="menuitemtext" style={{borderBottom: '2px solid #D2D2D2', paddingBottom: 10, paddingTop: 20}}>Социальные сети</MenuItem>
                  <MenuItem className="menuitemtext" style={{paddingTop: 20}}>Смена пароля</MenuItem>
            </MenuList> 
        );
    }   
}