import React from 'react';
import { Grid } from '@material-ui/core';

import SimpleModal from './modalLider.js';

export default function Lidertext(props) {
    console.log('Lidertext.isChecked', props.isChecked);
  
    return (
      <div>
        { props.isChecked ? (<Grid container spacing={1}>
                <Grid item xs={12}>
                    <p>
                    Лидер собирает команду и отправляет приглашения участникам.
                    После появляется динамика команды: общая диаграмма о прохождении трека.
                    </p>
                    <SimpleModal />
                </Grid>                
            </Grid> )
          : (null)
        }
      </div>
    );
}