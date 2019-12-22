import React from "react";
import { Typography,  Grid } from '@material-ui/core';

import Leftmenu from './leftMenu.js';
import Profilemenu from './profileMenu.js';

import '../index.css';

export default class SettingsMenu extends React.Component {
    render () {
        return (
            <div>
                <Typography className="backgroundimage">
                    <Grid container spacing={1}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={2} 
                        style={{backgroundColor: '#FFFFFF', marginTop: '80px', borderRadius: '5px', padding: '25px', width: '441px', height: '186px'}}>
                            <Leftmenu/>   
                        </Grid>
                        <Grid item xs={6}
                        style={{backgroundColor: '#ffffff', marginTop: '80px', marginLeft: '31px', borderRadius: '5px'}}>
                            <Profilemenu/>                             
                        </Grid>
                    </Grid>   
                </Typography> 
            </div>
        );
    }
} 