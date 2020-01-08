import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import '../index.css';

export default class ChangePassword extends React.Component {
    render () {
        return (
            <Grid container spacing={3}>
                 <Grid item xs={5} style={{marginTop: 10, marginLeft: 40, marginBottom: 20}}>
                     <h1>Смена пароля</h1>
                     <form>
                     <TextField
                            id="outlined-password-input"
                            label="Старый пароль"
                            type="password"
                            fullWidth
                            margin="normal"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Новый пароль"
                            type="password"
                            fullWidth
                            margin="normal"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Новый пароль повторно"
                            type="password"
                            fullWidth
                            margin="normal"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        
                     </form>
                 </Grid>
                 <Grid item xs={6}>
                 <Button className="btnsave" 
                                style={{color: '#ffffff', textTransform: 'capitalize', borderRadius: 100, width: 154, height: 50, 
                                fontFamily: 'Segoe UI', fontSize: 16, marginLeft: 70, marginTop: 280}}>Изменить</Button> 
                 </Grid>
            </Grid>    
        );
    }
}