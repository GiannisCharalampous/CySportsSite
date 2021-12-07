import React, {useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import PlayersPost from '../PlayersPosts/PlayersPost/PlayersPost';
import { getPlayerPostsByPosition } from '../../actions/PlayersPosts';

const PlayerPosition = () => {
    const { position } = useParams();
    const dispatch = useDispatch();
    const { playerPosts, isLoading } = useSelector((state) => state.playerPosts);
    const location = useLocation();

    useEffect(() => {
        dispatch(getPlayerPostsByPosition(position));
    }, [dispatch, location, position]);

    if (!playerPosts.length && !isLoading) return 'No players with selected position found!';

    return (
        <div>
            <Typography variant="h2">{position}</Typography>
            <Divider style={{ margin: '20px 0 50px 0' }} />
            {isLoading ? <CircularProgress /> : (
                <Grid container alignItems="stretch" spacing={3}>
                    {playerPosts?.map((playerPost) => (
                        <Grid key={playerPost._id} item xs={12} sm={12} md={6} lg={3}>
                            <PlayersPost playerPost={playerPost} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default PlayerPosition;
