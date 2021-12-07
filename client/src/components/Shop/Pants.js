import React from 'react';
import {CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PermanentDrawerLeft from "./SideShopMenu";

const useStyles = makeStyles(() => ({
    column: {
        marginTop: '100px',
        marginLeft: '190px',
        float: 'left',
        width: '20%',
        padding: '2px',
    },
}));

export default function Jackets() {

    const classes = useStyles();

    return (
        <main>
            <PermanentDrawerLeft/>
            <div className={classes.column}>
                <CardMedia image='https://img.joomcdn.net/2308c8dc22596638a33129115f3310ef5c4404f9_original.jpeg'
                           style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image='https://img.joomcdn.net/e129698e033f5d9b15634f135736e9b10374c129_original.jpeg'
                           style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image='https://img.joomcdn.net/625be5186fe5206d91cc0c3a97b27ebca7309ec8_original.jpeg' style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
        </main>
    )};