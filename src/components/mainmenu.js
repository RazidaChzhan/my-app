import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2FA2BC'
        },
        secondary: {
            main: '#222222',
        },
      }
});

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
export default function MainMenu() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
        <Typography>
        <Container>
        <h1 style={{marginLeft: '20px'}}>Личный кабинет</h1>
        <Tabs
        value={value}
        indicatorColor="primary"
        textColor="secondary"
        onChange={handleChange}
        aria-label="disabled tabs example">
            <Tab label="Профиль" style={{textTransform: 'capitalize', fontFamily: 'Segoe UI', fontSize: '24px'}}/>
            <Tab label="Настройки" style={{textTransform: 'capitalize', fontFamily: 'Segoe UI', fontSize: '24px'}}>
            </Tab>
        </Tabs>
        </Container>    
        </Typography>
     </ThemeProvider>    
  );
}
