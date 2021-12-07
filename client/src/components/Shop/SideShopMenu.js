import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Shop} from "@material-ui/icons";
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        minHeight: '40px',
        marginTop: '140px',
        marginLeft: '40px',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <div style={{textAlign: 'center', marginTop: '-30px', marginBottom: '30px'}}>Men's</div>
                <Divider style={{blockSize: '3px', backgroundColor: 'red'}}/>
                <List>
                    {['Jackets', 'Pants', 'T-shirts'].map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/${text}`}>
                            <ListItemIcon>{index % 2 === 0 ? <Shop style={{color: 'blueviolet'}}/> :
                                <Shop style={{color: 'blueviolet'}}/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider style={{blockSize: '3px', backgroundColor: 'red'}}/>
                <div style={{minHeight: '50px', textAlign: 'center', marginTop: '30px'}}>Women's</div>
                <Divider style={{blockSize: '3px', backgroundColor: 'red'}}/>
                <List>
                    {['Jackets', 'Pants', 'T-shirts'].map((text, index) => (
                        <ListItem button key={text} component={Link} to={`/${text}`}>
                            <ListItemIcon>{index % 2 === 0 ? <Shop style={{color: 'rosybrown'}}/> :
                                <Shop style={{color: 'rosybrown'}}/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};