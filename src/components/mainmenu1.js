import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';

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
        <Typography className="backgroundimage" style={{paddingBottom: 225}}>
            <Grid container>
                <Grid item xs={1}></Grid>

                <Grid item xs={3} style={{backgroundColor: '#FFFFFF', marginTop: 85, borderRadius: 5, padding: 25, width: 405, height: 425, marginLeft: 110}}>
                    <Grid container spacing={10}>
                    <Grid item xs={3}>
                        <img src={avatar} alt={avatar} style={{width: 64, height: 64, paddingLeft: 27, paddingTop: '10px'}}></img>   
                    </Grid>
                    <Grid item xs={8}>
                        <p><b>Иван Михайлов</b></p>
                        <p className="footertext">студент</p>   
                    </Grid>                    
                    </Grid> 
                    <hr style={{width: 360}}></hr>
                    <Grid item={10} style={{paddingTop: 12, paddingLeft: 27, paddingBottom: 8}}>
                        <p>web.d3v@yandex.ru</p>
                        <p>+7 952 347-34-19</p>
                        <p><b>Тюмень</b></p>
                    </Grid>
                    <hr style={{width: 360}}></hr>
                    <Grid item={10} style={{paddingTop: 3, paddingLeft: 27}}>
                        <p>Вы прошли: <b>0 треков</b></p>
                        <p>Активный трек: <b>1</b></p>
                    </Grid>
                </Grid>

                <Grid item xs={7}>
                    <Grid container spacing={1} style={{ marginBottom: 30, marginTop: 60}}>
                        <Grid item xs={1}>
                            <Button className="linkbutton" 
                            style={{ marginLeft: 40, textTransform: 'capitalize', fontFamily: 'Segoe UI', fontSize: 24, color: '#222222'}}>
                            Все</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className="linkbutton"
                            style={{textTransform: 'capitalize', fontFamily: 'Segoe UI', fontSize: 24, color: '#222222'}}>
                            Мои треки</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button className="linkbuttonpassed"
                            style={{textTransform: 'capitalize', fontFamily: 'Segoe UI', fontSize: 24, color: '#222222'}}
                            >Пройденные</Button>
                        </Grid>
                    </Grid>     

                    <Grid container>
                        <Grid item xs={3}>
                            <span className="linktext">Социальное проектирование</span>
                        </Grid>
                        <Grid item xs={2}>
                            <span className="linktext">Программирование</span>
                        </Grid>
                        <Grid item xs={2}>
                            <span className="linktext">Веб-дизайн</span>
                        </Grid>
                        <Grid item xs={2}>
                            <span className="linktext" style={{marginLeft: 0}}>Английский язык</span>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: 30, marginTop: 40, height: 90, paddingTop: 20,  paddingLeft: 50, width: 990, height: 130}}>
                           
                            <Grid item xs={7}>
                                <h3 className="textall">Социальное проектирование</h3>
                            </Grid>
                            <Grid item xs={3} style={{paddingTop: 40, paddingLeft: 25}} >
                                <span className="track">Трек пройден на 0%</span>   
                            </Grid>
                            <Grid item xs={2} style={{paddingTop: 20, paddingLeft: 50}}>
                                <img src={rightarrow} alt={rightarrow} style={{width: 60, height: 60}}></img>  
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: 30, marginTop: 25, height: 90, paddingTop: 15, paddingLeft: 50,   width: 990, height: 130}}>
                           
                            <Grid item xs={7}>
                                <h3 className="textall">Введение в веб-дизайн</h3>
                            </Grid>
                            <Grid item xs={3} style={{paddingTop: 40, paddingLeft: 25}}>
                                <span className="track" >Трек пройден на 0%</span>   
                            </Grid>
                            <Grid item xs={1} style={{paddingTop: 20, paddingLeft: 50}}>
                                <img src={rightarrow} alt={rightarrow} style={{width: 60, height: 60}}></img>  
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid container spacing={1} style={{backgroundColor: '#FFFFFF', marginLeft: 30, marginTop: 25, height: 90, paddingTop: 15,  paddingLeft: 50, width: 990, height: 130}}>
                            
                            <Grid item xs={7}>
                            <h3 className="textall">Английский для IT-специалистов</h3>
                            </Grid>
                            <Grid item xs={3}style={{paddingTop: 40,paddingLeft: 25 }}>
                                <span className="track">Трек пройден на 0%</span>   
                            </Grid>
                            <Grid item xs={2} style={{paddingTop: 20, paddingLeft: 50}}>
                                <img src={rightarrow} alt={rightarrow} style={{width: 60, height: 60}}></img>  
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>                    
            </Grid>
        </Typography>
     </ThemeProvider>   
  );
}