import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PlayersPost from '../PlayersPosts/PlayersPost/PlayersPost';
import useStyles from './styles';

const PlayersPosts = ({ setCurrentIdPlayers }) => {
  const { playerPosts, isPLoading } = useSelector((state) => state.playerPosts);
  const classes = useStyles();

  if (!playerPosts.length && !isPLoading) return 'No player posts!';

  return (
      isPLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {playerPosts?.map((playerPost) => (
          <Grid key={playerPost._id} item xs={12} sm={12} md={6} lg={3}>
            <PlayersPost playerPost={playerPost} setCurrentIdPlayers={setCurrentIdPlayers} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default PlayersPosts;
