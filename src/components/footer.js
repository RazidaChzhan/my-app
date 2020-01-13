import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core';
import CopyrightSharpIcon from '@material-ui/icons/CopyrightSharp';

import '../index.css';
import logoheader from '../images/Tvoy_universitet_3 2.png';

import logoinstagram from '../images/logoinstagram.svg';
import logovkontakte from '../images/logovkontakte.svg';
import footerlogo from '../images/footerlogo.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1, 
      color: '#222222',  
    },
     }));

         
  export default function AppFooter() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar 
        position="static"
        style={{background: '#F0F3F4', paddingTop: 35, paddingBottom: 25}}>
          <Toolbar>
            <Typography className={classes.title}>
                <Grid container spacing={1}>
                <Grid item xs={1}></Grid>
                    <Grid item xs={5} style={{paddingLeft: 80}}>
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                <img className="headerimg" src={logoheader} alt={logoheader} style={{width: 114, height: 85}}></img>
                                </Grid>
                                <Grid item xs={4}  style={{marginLeft: 30, borderLeft: '3px solid #2FA2BC', height: 64, marginTop: 22}}>
                                <p className="headertext">Образовательная <br></br>онлайн-платформа</p>
                                </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={3} style={{marginLeft: 20, paddingTop: 20}}>
                                <p className="footerphone">8 800 000-00-00</p>
                                <p className="footertext">Бесплатно по России</p>
                                </Grid>
                                <Grid item xs={3} style={{marginLeft: 20, paddingTop: 20}}>
                                <p className="footerphone">+7 3452 00-00-00</p>
                                <p className="footertext">Тюмень и область</p>   
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} style={{paddingLeft: 90}}>
                            <p className="footertext">Договор оферты</p>
                            <a className="policy">Политика конфидинциальности</a>
                            <p className="footertext">мойуниверситет.рф <CopyrightSharpIcon fontSize="small"/> 2019</p>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>
                                    <img src={logovkontakte} alt={logovkontakte} style={{width: 40, height: 40}}></img>
                                </Grid>
                                <Grid item xs={1}>
                                    <img src={logoinstagram} alt={logoinstagram} style={{width: 40, height: 40, paddingLeft: 20}}></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} style={{paddingLeft: 50}}>
                            <Grid container spacing={1}>
                                <Grid item xs={5} style={{paddingTop: 10}}>
                                    <div className="footertext" style={{paddingTop: '25px'}}>
                                      Разработка сайта 
                                      <br></br>Менделеев Маркетинг
                                      </div>
                                </Grid>
                                <Grid item xs={4} style={{paddingTop: 20, paddingLeft: 20}}>
                                    <img src={footerlogo} alt={footerlogo}></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>             
            </Typography>            
          </Toolbar>
        </AppBar>
      </div>
    );
  }