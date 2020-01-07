import React from "react";
import { Grid } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import '../index.css';
import ProgressBar from "./progressBar";
import "../../node_modules/react-circular-progressbar/dist/styles.css";

export default function SocialDEsign () {
        return (
            <Grid container>
                <ProgressBar/>
                <div style={{
                    paddingLeft: 100,
                    paddingTop: 30,
                }}>
                <h1 className="socialdesigntxt">Социальное проектирование</h1>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={3}>
                            <VideocamIcon color="disabled"/>
                            </Grid>
                            <Grid item xs={8}>
                                6 модулей
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item xs={3}>
                            <FileCopyIcon color="disabled"/>
                            </Grid>
                            <Grid item xs={8}>
                                12 заданий
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                </div>
                
            </Grid>
        );
    }
  