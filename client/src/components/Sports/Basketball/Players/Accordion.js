import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {ArrowRight} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getPlayerPostsByPosition } from '../../../../actions/PlayersPosts'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (panel, position) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        switch (position) {
            case 'PG':
                dispatch(getPlayerPostsByPosition({position}));
                history.push(`/positions/${position}`);
                break;
            case 'SG':
                dispatch(getPlayerPostsByPosition({position}));
                history.push(`/positions/${position}`);
                break;
            case 'SF':
                dispatch(getPlayerPostsByPosition({position}));
                history.push(`/positions/${position}`);
                break;
            case 'PF':
                dispatch(getPlayerPostsByPosition({position}));
                history.push(`/positions/${position}`);
                break;
            case 'C':
                dispatch(getPlayerPostsByPosition({position}));
                history.push(`/positions/${position}`);
                break;
        }
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} value='PG' onChange={handleChange('panel1', 'PG')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>PG</Typography>
                    <Typography className={classes.secondaryHeading}>POINT GUARD</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', 'SG')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>SG</Typography>
                    <Typography className={classes.secondaryHeading}>
                        SHOOTING GUARD
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', 'SF')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>SF</Typography>
                    <Typography className={classes.secondaryHeading}>
                        SMALL FORWARD
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', 'PF')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>PF</Typography>
                    <Typography className={classes.secondaryHeading}>
                        POWER FORWARD
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5', 'C')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography className={classes.heading}>C</Typography>
                    <Typography className={classes.secondaryHeading}>
                        CENTER
                    </Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}
