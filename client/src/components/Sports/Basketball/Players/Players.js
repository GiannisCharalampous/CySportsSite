import React, {useEffect, useState} from 'react';
import {Container, Grid, Grow} from "@material-ui/core";
import ControlledAccordions from "./Accordion";

import PlayersPosts from "../../../PlayersPosts/PlayersPosts";
import PlayerForm from "../../../PlayersForm/PlayersForm";
import {getPlayersPosts} from "../../../../actions/PlayersPosts";
import {useDispatch} from "react-redux";
import useStyles from "../../../Home/styles";

const Players = () => {
    const [currentIdPlayer, setCurrentIdPlayers] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Grow in>
            <Container maxWidth="xl">
                <h1>Search based on players' positions</h1>
                <ControlledAccordions />
                {<br />}
                <h3><strong>Available Basket Players:</strong></h3>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <PlayersPosts setCurrentIdPlayers={setCurrentIdPlayers} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                    {<br />}{<br />}
                        <PlayerForm currentIdPlayer={currentIdPlayer} setCurrentIdPlayers={setCurrentIdPlayers} />
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