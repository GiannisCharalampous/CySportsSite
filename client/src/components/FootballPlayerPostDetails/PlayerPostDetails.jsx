import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {Link, useParams} from 'react-router-dom';

import { getPlayerPost } from '../../actions/FootballPlayersPosts';
import useStyles from './styles';

const FootballPlayerPostDetails = () => {
  const { footballPlayerPost, isLoading } = useSelector((state) => state.footballPlayerPosts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlayerPost(id));
  }, [id, dispatch]);

  if (!footballPlayerPost) return null;

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
            <Link to={`/footballPositions/${footballPlayerPost.footballPosition}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${footballPlayerPost.footballPosition}`}
            </Link>
          </Typography>
          <Typography gutterBottom variant="h6">Age: {footballPlayerPost.age}</Typography>
          <Typography gutterBottom variant="h6">Goal scored: {footballPlayerPost.goal}</Typography>
          <Typography gutterBottom variant="h6">Assists: {footballPlayerPost.assists}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">Skills:
            {footballPlayerPost.skills.map((skill, id) => (<h4 to={`/skills/${skill}`} key={id.toString()} value={id}
            style={{ textDecoration: 'none', color: '#3f51b5' }}>{` -${skill} `}</h4>))}
          </Typography>

          <Typography variant="body1">{moment(footballPlayerPost.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={footballPlayerPost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
               alt={footballPlayerPost.name} />
        </div>
      </div>
    </Paper>
  );
};

export default FootballPlayerPostDetails;
