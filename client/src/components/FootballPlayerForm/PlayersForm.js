import React, {useState, useCallback, useEffect} from 'react';
import { Button, Typography, Paper, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64';

import { createPlayersPost, updatePlayersPost } from '../../actions/FootballPlayersPosts';
import useStyles from './styles';


const FootballPlayersForm = ({ currentFootballIdPlayer, setCurrentIdFootballPlayers }) => {
  const [footballPlayerPostData, setFootballPlayerPostData] = useState({ assists: '', skills: [], goal: '', age: '', footballPosition: '', selectedFile: '' });

  const footballPlayerPost = useSelector((state) => (currentFootballIdPlayer ? state.footballPlayerPosts.footballPlayerPosts.find((footballPlayerMessage) => footballPlayerMessage._id === currentFootballIdPlayer) : null));

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = useCallback(() => {
    setCurrentIdFootballPlayers(0);
    setFootballPlayerPostData({ assists: '', skills: [], goal: '', age: '', footballPosition: '', selectedFile: '' });
  }, [setCurrentIdFootballPlayers]);

  useEffect(() => {
    if (!footballPlayerPost?.age) clear();
    if (footballPlayerPost) setFootballPlayerPostData(footballPlayerPost);
  }, [footballPlayerPost, clear]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentFootballIdPlayer === 0) {
      dispatch(createPlayersPost({ ...footballPlayerPostData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updatePlayersPost(currentFootballIdPlayer, { ...footballPlayerPostData, name: user?.result?.name }));
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
    setFootballPlayerPostData({ ...footballPlayerPostData, skills: [...footballPlayerPostData.skills, skill] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setFootballPlayerPostData({ ...footballPlayerPostData, skills: footballPlayerPostData.skills.filter((skill) => skill !== chipToDelete) });
  };

  return (
      <Paper className={classes.paper} elevation={6}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentFootballIdPlayer ? `Editing "${footballPlayerPost?.name}"` : 'Creating Player Profile'}</Typography>
          <TextField name="footballPosition" variant="outlined" label="Position" fullWidth value={footballPlayerPostData.footballPosition} onChange={(e) => setFootballPlayerPostData({ ...footballPlayerPostData, footballPosition: e.target.value })} />
          <TextField name="goal" variant="outlined" label="Goal" fullWidth value={footballPlayerPostData.goal} onChange={(e) => setFootballPlayerPostData({ ...footballPlayerPostData, goal: e.target.value })} />
          <TextField name="assists" variant="outlined" label="Assists" fullWidth multiline rows={4} value={footballPlayerPostData.assists} onChange={(e) => setFootballPlayerPostData({ ...footballPlayerPostData, assists: e.target.value })} />
          <TextField name="age" variant="outlined" label="Age" fullWidth multiline rows={4} value={footballPlayerPostData.age} onChange={(e) => setFootballPlayerPostData({ ...footballPlayerPostData, age: e.target.value })} />

          <div style={{ padding: '5px 0', width: '94%' }}>
            <ChipInput
                name="skills"
                variant="outlined"
                label="Skills"
                fullWidth
                value={footballPlayerPostData.skills}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
            />
          </div>
          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFootballPlayerPostData({ ...footballPlayerPostData, selectedFile: base64 })} />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
  );
};

export default FootballPlayersForm;
