import React, {useState, useCallback, useEffect} from 'react';
import { Button, Typography, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';

import { createPlayersPost, updatePlayersPost } from '../../actions/PlayersPosts';
import useStyles from './styles';

const PlayerForm = ({ currentIdPlayer, setCurrentIdPlayers }) => {
  const [playerPostData, setPlayerPostData] = useState({ assists: '', skills: [], points: '', age: '', position: '', selectedFile: '' });

  const playerPost = useSelector((state) => (currentIdPlayer ? state.playerPosts.playerPosts.find((playerMessage) => playerMessage._id === currentIdPlayer) : null));

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = useCallback(() => {
    setCurrentIdPlayers(0);
    setPlayerPostData({ assists: '', skills: [], points: '', age: '', position: '', selectedFile: '' });
  }, [setCurrentIdPlayers]);

  useEffect(() => {
    if (!playerPost?.age) clear();
    if (playerPost) setPlayerPostData(playerPost);
  }, [playerPost, clear]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentIdPlayer === 0) {
      dispatch(createPlayersPost({ ...playerPostData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePlayersPost(currentIdPlayer, { ...playerPostData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
        <Paper className={classes.paper} elevation={6}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own player profile.
          </Typography>
        </Paper>
    );
  }

  const handleAddChip = (skill) => {
    setPlayerPostData({ ...playerPostData, skills: [...playerPostData.skills, skill] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPlayerPostData({ ...playerPostData, skills: playerPostData.skills.filter((skill) => skill !== chipToDelete) });
  };

  return (
      <Paper className={classes.paper} elevation={6}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentIdPlayer ? `Editing "${playerPost?.name}"` : 'Creating Player Profile'}</Typography>
          <TextField name="position" variant="outlined" label="Position" fullWidth value={playerPostData.position} onChange={(e) => setPlayerPostData({ ...playerPostData, position: e.target.value })} />
          <TextField name="points" variant="outlined" label="Points" fullWidth value={playerPostData.points} onChange={(e) => setPlayerPostData({ ...playerPostData, points: e.target.value })} />
          <TextField name="assists" variant="outlined" label="Assists" fullWidth multiline rows={4} value={playerPostData.assists} onChange={(e) => setPlayerPostData({ ...playerPostData, assists: e.target.value })} />
          <TextField name="age" variant="outlined" label="Age" fullWidth multiline rows={4} value={playerPostData.age} onChange={(e) => setPlayerPostData({ ...playerPostData, age: e.target.value })} />

          <div style={{ padding: '5px 0', width: '94%' }}>
            <ChipInput
                name="skills"
                variant="outlined"
                label="Skills"
                fullWidth
                value={playerPostData.skills}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
            />
          </div>
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPlayerPostData({ ...playerPostData, selectedFile: base64 })} />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
  );
};

export default PlayerForm;
