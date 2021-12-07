import React from 'react';
import {Card, CardActions, CardMedia, Button, Typography, ButtonBase, CardContent} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';

import { deletePlayersPost } from '../../../actions/FootballPlayersPosts';
import useStyles from './styles';
import { useHistory } from "react-router-dom";

const PlayersPost = ({ footballPlayerPost, setCurrentIdFootballPlayers }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    const openPost = () => {
        history.push(`/footballPlayers/${footballPlayerPost._id}`);
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={ footballPlayerPost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                           title={footballPlayerPost.name} />
                <div className={classes.overlay}>
                    <Typography variant="h6">Creator: {footballPlayerPost.name}</Typography>
                    <Typography variant="body2">{moment(footballPlayerPost.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === footballPlayerPost?.creator || user?.result?._id === footballPlayerPost?.creator) && (
                    <div className={classes.overlay2}>
                        {<br />}
                        <Tooltip title="Edit Player Post">
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIdFootballPlayers(footballPlayerPost._id);
                                }}
                                style={{ color: 'white' }}
                                size="small"
                            >
                                <MoreHorizIcon fontSize="default" />
                            </Button>
                        </Tooltip>
                    </div>
                )}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        Skills: {footballPlayerPost.skills.map((skill) => `|${skill} `)}
                    </Typography>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Position: {footballPlayerPost.footballPosition}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Age: {footballPlayerPost.age}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Goal: {footballPlayerPost.goal}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Assists: {footballPlayerPost.assists}</Typography>
                </CardContent>

            </ButtonBase>
            <CardActions className={classes.cardActions}>
                {(user?.result?.googleId === footballPlayerPost?.creator || user?.result?._id === footballPlayerPost?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePlayersPost(footballPlayerPost._id))}>
                        <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default PlayersPost;