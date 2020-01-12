import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import avatar from '../images/avatar.png';
import rightarrow from '../images/right-arrow.png'
import '../index.css'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2FA2BC'
        },
        secondary: {
            main: '#ffffff',
        },
      }
});

export default function AppMainMenu() {
     return (
   
    <ThemeProvider theme={theme}>
        <Typography className="backgroundimage">
        <Grid container>
          <Grid item xs={1} style={{paddingLeft: 270}}></Grid>
          <Grid item xs={3} style={{backgroundColor: '#FFFFFF', marginTop: 85, borderRadius: 5, padding: 25, width: 405, height: 425}}>
            <Grid container spacing={10}>
                <Grid item xs={3}>
                <img src={avatar} alt={avatar} style={{width: 64, height: 64, paddingLeft: 27, paddingTop: '10px'}}></img>   
                </Grid>
                <Grid item xs={8}>
                <p><b>Иван Михайлов</b></p>
                <p className="footertext">студент</p>   
                </Grid>
            </Grid>
                <hr></hr>
                <Grid item={10} style={{paddingTop: 12, paddingLeft: 27, paddingBottom: 8}}>
                    <p>web.d3v@yandex.ru</p>
                    <p>+7 952 347-34-19</p>
                    <p><b>Тюмень</b></p>
                </Grid>
                <hr></hr>
                <Grid item={10} style={{paddingTop: 3, paddingLeft: 27}}>
                <p>Вы прошли: <b>0 треков</b></p>
                <p>Активный трек: <b>1</b></p>
                </Grid>
        </Grid> 
        <Grid item xs={6} style={{marginTop: '65px'}}>
        <Grid container spacing={1} style={{marginLeft: '20px', marginBottom: '30px'}}>
            <Grid item xs={1}>
            <a className="linkbutton">Все</a>
            </Grid>
            <Grid item xs={2}>
            <a className="linkbutton">Мои треки</a>
            </Grid>
            <Grid item xs={1}>
            <a className="linkbutton">Пройденные</a>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid item xs={4}>
                <span className="linktext">Социальное проектирование</span>
            </Grid>
            <Grid item xs={3}>
                <span className="linktext">Программирование</span>
            </Grid>
            <Grid item xs={2}>
                <span className="linktext">Веб-дизайн</span>
            </Grid>
            <Grid item xs={3}>
                <span className="linktext">Английский язык</span>
            </Grid>
        </Grid>
        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: 20, marginTop: 20, height: 90, paddingTop: 15,  width: 927, height: 120}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} style={{paddingTop: 20}}>
            <span><b>Социальное проектирование</b></span>
            </Grid>
            <Grid item xs={4} style={{paddingTop: '20px'}}>
            <span className="track">Трек пройден на 0%</span>   
            </Grid>
            <Grid item xs={2}>
            <img src={rightarrow} alt={rightarrow} style={{width: '50px', height: '50px'}}></img>  
            </Grid>
        </Grid>

        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: '20px', marginTop: '20px', height: '90px', paddingTop: '15px'}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} style={{paddingTop: '20px'}}>
            <span><b>Введение в веб-дизайн</b></span>
            </Grid>
            <Grid item xs={4} style={{paddingTop: '20px'}}>
            <span className="track">Трек пройден на 0%</span>   
            </Grid>
            <Grid item xs={2}>
            <img src={rightarrow} alt={rightarrow} style={{width: '50px', height: '50px'}}></img>  
            </Grid>
        </Grid>

        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: '20px', marginTop: '20px', height: '90px', paddingTop: '15px'}}>
            <Grid item xs={1}></Grid>
            <Grid item xs={5} style={{paddingTop: '20px'}}>
            <span><b>Английский для IT-специалистов</b></span>
            </Grid>
            <Grid item xs={4} style={{paddingTop: '20px'}}>
            <span className="track">Трек пройден на 0%</span>   
            </Grid>
            <Grid item xs={2}>
            <img src={rightarrow} alt={rightarrow} style={{width: '50px', height: '50px'}}></img>  
            </Grid>
        </Grid>
        </Grid>
        </Grid>            
        </Typography>
     </ThemeProvider>   
  );
}