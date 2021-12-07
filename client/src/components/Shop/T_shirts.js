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
                <CardMedia image='https://cdn.shopify.com/s/files/1/0048/1008/0290/products/Men-s-sports-t-shirt-patterns-sublimation_jpg_800x.jpg'
                           style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image='https://5.imimg.com/data5/KO/SL/MY-44395190/bl-500x500.jpg'
                           style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image='https://5.imimg.com/data5/LS/WK/MY-42499681/sports-tshirt-500x500.jpg'
                           style={{height: '200px', width: '200px', marginLeft: '50px'}} />
                <div style={{textAlign: 'center'}}><del style={{color: "red"}}>PRICE: 100$</del></div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
        </main>
    )};