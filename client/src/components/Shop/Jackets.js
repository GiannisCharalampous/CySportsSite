import React from 'react';
import {CardMedia} from "@material-ui/core";
import MenJacket1 from "../../images/jacket1M.jpg";
import MenJacket2 from "../../images/jacket2M.jpg";
import MenJacket3 from "../../images/jacket3M.jpg";
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
                <CardMedia image={MenJacket1} style={{height: '200px', width: '200px', marginLeft: '50px'}}/>
                <div style={{textAlign: 'center'}}>
                    <del style={{color: "red"}}>PRICE: 100$</del>
                </div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image={MenJacket2} style={{height: '200px', width: '200px', marginLeft: '50px'}}/>
                <div style={{textAlign: 'center'}}>
                    <del style={{color: "red"}}>PRICE: 100$</del>
                </div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
            <div className={classes.column}>
                <CardMedia image={MenJacket3} style={{height: '200px', width: '200px', marginLeft: '50px'}}/>
                <div style={{textAlign: 'center'}}>
                    <del style={{color: "red"}}>PRICE: 100$</del>
                </div>
                <div style={{textAlign: 'center'}}>DISCOUNT PRICE: 50$</div>
            </div>
        </main>
    )
};