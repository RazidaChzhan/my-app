import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import '../index.css';

export default class ChangePassword extends React.Component {
    render () {
        return (
            <Grid container spacing={1}>
                 <Grid item xs={6} style={{marginLeft: 40, marginBottom: 10, paddingBottom: 50}}>
                     <h2>Смена пароля</h2>
                     <form>
                     <TextField
                            id="outlined-password-input"
                            label="Старый пароль"
                            type="password"
                            fullWidth
                            margin="dense"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{paddingBottom: 10}}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Новый пароль"
                            type="password"
                            fullWidth
                            margin="dense"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{paddingBottom: 10}}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Новый пароль повторно"
                            type="password"
                            fullWidth
                            margin="dense"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{paddingBottom: 10}}
                        />
                        
                     </form>
                 </Grid>
                 <Grid item xs={4}>
                 <Button className="btnsave" 
                                style={{color: '#ffffff', textTransform: 'capitalize', borderRadius: 100, width: 154, height: 50, 
                                fontFamily: 'Segoe UI', fontSize: 16, marginLeft: 70, marginTop: 220}}>Изменить</Button> 
                 </Grid>
            </Grid>    
        );
    }
}