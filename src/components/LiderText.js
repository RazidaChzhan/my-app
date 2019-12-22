import React from 'react';
import { Grid } from '@material-ui/core';


export default class Lidertext extends React.Component {
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>
                    Лидер собирает команду и отправляет приглашения участникам.
                    После появляется динамика команды: общая диаграмма о прохождении трека.
                    </p>
                </Grid>
            </Grid> 
        );
    }    
}