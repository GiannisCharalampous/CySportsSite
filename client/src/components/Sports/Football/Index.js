import React from 'react';
import useStyles from './Style';
import {Button, Grid, Paper} from "@material-ui/core";
import {Link} from 'react-router-dom';
import PlayerAppList from "../../HorizontalArrowMenuFootball/PlayerAppList";
import CourtAppList from "../../HorizontalArrowMenuFootball/CourtAppList";
import FootballImg from "../../../images/football-soccer.jpg";

const Football = () => {

    const classes = useStyles();

    return (
        <Grid>
            <Paper style={{
                backgroundImage: `url(${FootballImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                width: '100%',
                minHeight: '500px',
                backgroundSize: 'cover',
            }}>
                <h5 className={classes.title}>PLAY FOOTBALL IN CYPRUS</h5>
                <Button component={Link} to='/footballPlayers' className={classes.button}>VIEW ALL PLAYERS</Button>
            </Paper>

            <Paper className={classes.border}>
                <p className={classes.subTitle}>TOP RATED PLAYERS</p>
                <PlayerAppList />
                <Button component={Link} to='/footballPlayers' className={classes.button2}>VIEW ALL PLAYERS</Button>
                <p className={classes.subTitle}>TOP LOCATIONS</p>
                <CourtAppList />
            </Paper>

        </Grid>

    );
};

export default Football;