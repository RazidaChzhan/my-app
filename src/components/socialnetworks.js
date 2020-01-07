import React from 'react';
import { Grid, Icon } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import VkIcon from './vk.svg';



import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import '../index.css';

export default class SocialNetworks extends React.Component {
    render () {
        return (
            <Grid container spacing={1}>
                <Grid item style={{paddingLeft: 20}}>
                    <h1>Социальные сети</h1>
                    <p style={{fontFamily: 'Segoe UI', fontSize: '16px', lineHeight: '25px', 
                    color: 'rgba(34, 34, 34, 0.55)'}}>Вы можете связать свой профиль с профилями в социальных сетях и сервисах:</p>
                    <hr></hr>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <FacebookIcon color="disabled"/> Facebook
                        </Grid>
                        <Grid item xs={3}>
                        
                           
                        </Grid>
                        <Grid item xs={3}>
                        <InstagramIcon color="disabled"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}