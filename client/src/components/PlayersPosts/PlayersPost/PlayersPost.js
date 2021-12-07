import React from 'react';
import {Card, CardActions, CardMedia, Button, Typography, ButtonBase, CardContent} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';

import { deletePlayersPost } from '../../../actions/PlayersPosts';
import useStyles from './styles';
import { useHistory } from "react-router-dom";

const PlayersPost = ({ playerPost, setCurrentIdPlayers }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    const history = useHistory();

    const openPost = () => {
        history.push(`/basketPlayers/${playerPost._id}`);
    };

    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                component="span"
                name="test"
                className={classes.cardAction}
                onClick={openPost}
            >
                <CardMedia className={classes.media} image={ playerPost.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={playerPost.name} />
                <div className={classes.overlay}>
                    <Typography variant="h6">Creator: {playerPost.name}</Typography>
                    <Typography variant="body2">{moment(playerPost.createdAt).fromNow()}</Typography>
                </div>
                {(user?.result?.googleId === playerPost?.creator || user?.result?._id === playerPost?.creator) && (
                    <div className={classes.overlay2}>
                        {<br />}
                        <Tooltip title="Edit Player Post">
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIdPlayers(playerPost._id);
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
                        Skills: {playerPost.skills.map((skill) => `|${skill} `)}
                    </Typography>
                </div>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Position: {playerPost.position}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Age: {playerPost.age}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Points: {playerPost.points}</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">Assists: {playerPost.assists}</Typography>
                </CardContent>

            </ButtonBase>
            <CardActions className={classes.cardActions}>
                {(user?.result?.googleId === playerPost?.creator || user?.result?._id === playerPost?.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePlayersPost(playerPost._id))}>
                        <DeleteIcon fontSize="small" /> &nbsp; Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default PlayersPost;