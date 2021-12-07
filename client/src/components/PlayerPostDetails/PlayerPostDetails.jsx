import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useParams} from 'react-router-dom';

import { getPlayerPost } from '../../actions/PlayersPosts';
import useStyles from './styles';

const PlayerPost = () => {
  const { playerPost, isLoading } = useSelector((state) => state.playerPosts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlayerPost(id));
  }, [id, dispatch]);

  if (!playerPost) return null;

  if (isLoading) {
    return (
        <Paper elevation={6} className={classes.loadingPaper}>
          <CircularProgress size="7em" />
        </Paper>
    );
  }

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h6">
            Position:
            <Link to={`/positions/${playerPost.position}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${playerPost.position}`}
            </Link>
          </Typography>
          <Typography gutterBottom variant="h6">Age: {playerPost.age}</Typography>
          <Typography gutterBottom variant="h6">Points scored: {playerPost.points}</Typography>
          <Typography gutterBottom variant="h6">Assists: {playerPost.assists}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">Skills:
            {playerPost.skills.map((skill, id) => (<h5 to={`/skills/${skill}`} key={id.toString()} value={id}
            style={{ textDecoration: 'none', color: '#3f51b5' }}>{` - ${skill} `}</h5>))}
          </Typography>

          <Typography variant="body1">{moment(playerPost.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={playerPost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={playerPost.name} />
        </div>
      </div>
    </Paper>
  );
};

export default PlayerPost;
