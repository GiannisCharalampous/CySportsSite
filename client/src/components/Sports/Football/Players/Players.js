import React, {useEffect, useState} from 'react';
import {Container, Grid, Grow} from "@material-ui/core";
import ControlledAccordions from "./Accordion";
import {getPlayersPosts} from "../../../../actions/FootballPlayersPosts";
import {useDispatch} from "react-redux";
import useStyles from "../../../Home/styles";
import FootballPlayersForm from "../../../FootballPlayerForm/PlayersForm";
import FootballPlayersPosts from "../../../FootballPlayersPosts/PlayersPosts";

const Players = () => {
    const [currentFootballIdPlayer, setCurrentIdFootballPlayers] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Grow in>
            <Container maxWidth="xl">
                <h1>Search based on players' positions</h1>
                <ControlledAccordions />
                {<br />}
                <h3><strong>Available Football Players:</strong></h3>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <FootballPlayersPosts setCurrentIdFootballPlayers={setCurrentIdFootballPlayers} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {<br />}{<br />}
                        <FootballPlayersForm currentFootballIdPlayer={currentFootballIdPlayer} setCurrentIdFootballPlayers={setCurrentIdFootballPlayers} />
                        { useEffect(() => {
                            dispatch(getPlayersPosts());
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Players;