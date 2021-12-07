import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia} from "@material-ui/core";
import MenJacket1 from '../../images/jacket1M.jpg';
import PermanentDrawerLeft from "./SideShopMenu";

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

export default function Shop() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <PermanentDrawerLeft/>
                <div className={classes.toolbar} />
                <div style={{textAlign:'center'}}>DISCOUNT 50% TO ALL JACKETS</div>
                {<br />}
                    <CardMedia image={MenJacket1} style={{marginLeft: '42%', height: '200px', width: '200px'}}/>

            </main>
        </div>
    );
}
