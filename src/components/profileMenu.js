import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import BackupRoundedIcon from '@material-ui/icons/BackupRounded';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import avatar from '../images/avatarMenu.png';
import '../index.css';
import Lidertext from './LiderText.js';
import {purple, grey } from '@material-ui/core/colors';

const PurpleRadio = withStyles({
    root: { 
      color: grey[500] , 
      '&$checked': {
        color: purple[800] ,
      },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);
  
const useStyles = makeStyles(theme => ({
      formControl: {
        margin: theme.spacing(1),
        minWidth: 450,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

let isChecked = false;
export default function ProfileMenu () {
    
    const [value, setValue] = React.useState(2);

    
    const handleChangeRadio = event => { 
        setValue(event.target.value);
        console.log('event.target.value', event.target.value);
        if(event.target.value === 'groupLider'){
            isChecked = true;
        }else{
            isChecked = false;
        }
        console.log('isChecked', isChecked);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [age] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

return (
    <Typography>
    <Grid container spacing={1}>
        <Grid item xs={5} style={{borderRight: '2px solid #D2D2D2'}}>           
            <p className="maininformation" style={{marginLeft: 15}}>
            Основная информация</p>
            <Grid container spacing={1}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <img src={avatar} alt={avatar}></img>     
                </Grid>
            </Grid>
                        
            <Grid container spacing={1}>
                <Grid item xs={4}></Grid>
                <Grid item xs={1}>
                    <BackupRoundedIcon color="disabled" style={{ fontSize: 25 }}/>
                </Grid>
                <Grid item xs={4}>
                    <a className="policy">Заменить</a>
                </Grid>
            </Grid>
        </Grid>   

            <Grid item xs={7}>
                <Grid container spacing={1}>
                    <Grid item xs={10} style={{marginTop: 20, marginLeft: 40}}>
                        <form>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="firstname"
                            label="Ваше имя"
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
                            label="Ваша фамилия"
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

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="city"
                                label="Ваш населенный пункт"
                                name="city"
                                autoComplete="city"
                                autoFocus />       

                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">Я студент</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    onChange={handleChange}
                                    labelWidth={labelWidth}
                                >                            
                                </Select>
                            </FormControl>

                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Введите E-mail"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    />  
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Введите телефон"
                                    name="phone"
                                    autoComplete="phone"
                                    autoFocus
                                    />  
                                </Grid>
                            </Grid>

                            <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup aria-label="userType" name="userType" value={value} onChange={handleChangeRadio}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <FormControlLabel value="simpleUser" control={<PurpleRadio/>} label="Обычный пользователь" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <FormControlLabel value="groupLider" control={<PurpleRadio/>} label="Лидер группы"/> 
                                            <HelpOutlineIcon color="disabled" style={{ fontSize: 20 }} />
                                        </Grid>
                                    </Grid>                                
                                </RadioGroup>
                            </FormControl>
                            
                            <Lidertext isChecked = {isChecked} />

                                                     
                            <Grid container spacing={1} style={{paddingBottom: 43}}>
                                <Grid item xs={8}></Grid>
                                <Grid item xs={4}>
                                <Button className="btnsave" 
                                style={{color: '#ffffff', textTransform: 'capitalize', borderRadius: 100, width: 154, height: 50, 
                                fontFamily: 'Segoe UI', fontSize: 16}}>Сохранить</Button> 
                                </Grid>
                            </Grid>                           
                        </form>
                    </Grid>
                </Grid>  
            </Grid>
        </Grid>
        </Typography>
    )
}