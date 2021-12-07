import React, {useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import PlayersPost from '../FootballPlayersPosts/PlayersPost/PlayersPost';
import { getPlayerPostsByPosition } from '../../actions/FootballPlayersPosts';

const FootballPlayerPosition = () => {
    const { footballPosition } = useParams();
    const dispatch = useDispatch();
    const { footballPlayerPosts, isLoading } = useSelector((state) => state.footballPlayerPosts);
    const location = useLocation();

    useEffect(() => {
        dispatch(getPlayerPostsByPosition(footballPosition));
    }, [dispatch, location, footballPosition]);

    if (!footballPlayerPosts.length && !isLoading) return 'No players with selected position found!';

    return (
        <div>
            <Typography variant="h2">{footballPosition}</Typography>
            <Divider style={{ margin: '20px 0 50px 0' }} />
            {isLoading ? <CircularProgress /> : (
                <Grid container alignItems="stretch" spacing={3}>
                    {footballPlayerPosts?.map((footballPlayerPost) => (
                        <Grid key={footballPlayerPost._id} item xs={12} sm={12} md={6} lg={3}>
                            <PlayersPost footballPlayerPost={footballPlayerPost} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default FootballPlayerPosition;
