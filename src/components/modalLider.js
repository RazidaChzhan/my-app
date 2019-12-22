// import React from 'react';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
         <Button
            type="button" onClick={handleOpen}
            variant="contained"
            color="primary"
            endIcon={<LinkIcon/>}
            style={{color: '#ffffff', textTransform: 'capitalize', 
            width: 188, height: 40, fontFamily: 'Segoe UI', fontSize: 16, backgroundColor: '#1A73E8'}}
            > Создать группу
        </Button>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
        <div style={modalStyle} className={classes.paper}>
          <Grid container spacing={1}>
              <Grid item xs={11}>
                  <h4>Ссылка приглашение в группу</h4>
              </Grid>
              <Grid item xs={1} style={{paddingTop: 20}}>
                  <LinkIcon/>
              </Grid>
          </Grid>
         
          <Grid container spacing={1}>
              <Grid item>
                  <p>Доступ по ссылке включен</p>
              </Grid>
          </Grid>
          <Grid container spacing={1}>
              <Grid item xs={7}>
              <TextField
                disabled
                id="outlined-disabled"
                //   label="Disabled"
                defaultValue="https://Wz6wFYR8rEQEvLu8D"
                variant="outlined"
                style={{width: 360, height: 43}}/>
              </Grid>    
        
                <Grid item xs={5}>
                    <Button style={{background: '#802882',borderRadius: 5, 
                    color: '#ffffff', textTransform: 'capitalize', height: 55, width: 200}}>
                    Копировать ссылку</Button>
                </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}

