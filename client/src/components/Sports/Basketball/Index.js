import React from 'react';
import useStyles from './Style';
import basketballImg from "../../../images/BasketAd.jpg";
import {Button, Grid, Paper} from "@material-ui/core";
import {Link} from 'react-router-dom';
import PlayerAppList from "../../HorizontalArrowMenuBasket/PlayerAppList";
import CourtAppList from "../../HorizontalArrowMenuBasket/CourtAppList";

const Basketball = () => {

    const classes = useStyles();

    return (
        <Grid>
            <Paper style={{
                backgroundImage: `url(${basketballImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                width: '100%',
                minHeight: '500px',
                backgroundSize: 'cover',
            }}>
                <h5 className={classes.title}>PLAY BASKETBALL IN CYPRUS</h5>
                <Button component={Link} to='/basketPlayers' className={classes.button}>VIEW ALL PLAYERS</Button>
            </Paper>

            <Paper className={classes.border}>
                <p className={classes.subTitle}>TOP RATED PLAYERS</p>
                <PlayerAppList />
                <Button component={Link} to='/basketPlayers' className={classes.button2}>VIEW ALL PLAYERS</Button>
                <p className={classes.subTitle}>TOP LOCATIONS</p>
                <CourtAppList />
            </Paper>

        </Grid>

    );
};

export default Basketball;