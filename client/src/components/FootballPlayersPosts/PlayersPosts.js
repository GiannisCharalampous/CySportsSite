import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import PlayersPost from '../FootballPlayersPosts/PlayersPost/PlayersPost';
import useStyles from './styles';

const FootballPlayersPosts = ({ setCurrentIdFootballPlayers }) => {
  const { footballPlayerPosts, isPLoading } = useSelector((state) => state.footballPlayerPosts);
  const classes = useStyles();

  if (!footballPlayerPosts.length && !isPLoading) return 'No player posts!';

  return (
      isPLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {footballPlayerPosts?.map((footballPlayerPost) => (
          <Grid key={footballPlayerPost._id} item xs={12} sm={12} md={6} lg={3}>
            <PlayersPost footballPlayerPost={footballPlayerPost} setCurrentIdFootballPlayers={setCurrentIdFootballPlayers} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default FootballPlayersPosts;
