import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import '../index.css';
import logoheader from '../images/Tvoy_universitet_3 2.png';
import avatar from '../images/avatar.png';



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

     const StyledMenu = withStyles({
        paper: {
         background: '#FFFFFF',
         width: '338px',
         height: '152px'
        },
      })(props => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          {...props}
        />
      ));

      const StyledMenuItem = withStyles(theme => ({
        root: {
          '&:focus': {
            backgroundColor: '#ffffff',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.white,
            },
          },
        },
      }))(MenuItem);
     
  export default function AppHeader() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <div className={classes.root}>
        <AppBar 
        position="static"
        style={{background: '#FFFFFF' }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <Grid container spacing={1}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={1}>
                    <img className="headerimg" src={logoheader} alt={logoheader} style={{width: "114", height: "85"}}></img>
                    </Grid>
                    <Grid item xs={3} style={{marginLeft: '30px'}}>
                    <p className="headertext">Образовательная <br></br>онлайн-платформа</p>
                    </Grid>
                </Grid>
            </Typography>
            <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
        style={{backgroundColor: '#802882', width: '337px', height: '100px', color: '#ffffff', textTransform: 'capitalize'}}        
        >
        <Grid container spacing={1}>
            <Grid item xs={2}>
            <img src={avatar} alt={avatar}></img>
            </Grid>
            <Grid item xs={6} style={{paddingTop: '20px'}}>
            Иван Михайлов
            </Grid>
            <Grid item xs={2} style={{paddingTop: '20px'}}>
            <ArrowDropDownIcon/>
            </Grid>
        </Grid>         
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         <StyledMenuItem 
         style={{color: '#222222', fontFamily: 'Segoe UI', fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '22px'}}> 
         Моя страница
         </StyledMenuItem>
        <StyledMenuItem 
        style={{color: '#222222', fontFamily: 'Segoe UI', fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '22px'}}>
          Мои треки
        </StyledMenuItem>
        <StyledMenuItem 
        style={{color: '#222222', fontFamily: 'Segoe UI', fontStyle: 'normal', fontWeight: 'normal', fontSize: '15px', lineHeight: '22px'}}>
         Выйти 
         <ExitToAppIcon/>
        </StyledMenuItem>
      </StyledMenu>          
          </Toolbar>
        </AppBar>
      </div>
    );
  }