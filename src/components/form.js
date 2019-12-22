import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

// import './App.css';
 

import 'date-fns';
 
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
   instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function FormMenu () {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const classes = useStyles();
      return (
       
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <form className={classes.form} noValidate>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="Введите имя"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="secondname"
            label="Введите фамилию"
            name="secondname"
            autoComplete="secondname"
            autoFocus
            />    
            <div style={{paddingTop: 20}}>              
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>             
                  <KeyboardDatePicker
                  autoOk
                  fullWidth
                  variant="inline"
                  inputVariant="outlined"
                  label="Дата рождения"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  InputAdornmentProps={{ position: "end" }}
                  onChange={date => handleDateChange(date)}
                  />
                  </MuiPickersUtilsProvider>
            </div>          
        </form>
        </Grid>
        </Grid>

    );
  }    