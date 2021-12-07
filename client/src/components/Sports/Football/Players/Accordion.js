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
import { getPlayerPostsByPosition } from '../../../../actions/FootballPlayersPosts'

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
    const handleChange = (panel, footballPosition) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        switch (footballPosition) {
            case 'GK':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'ST':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
        }
    };

    const handleChangeTooltip = (footballPosition) => () => {
        switch (footballPosition) {
            case 'DL':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'DC':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'DR':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'MC':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'MR':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'ML':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'DML':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'DMC':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'DMR':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'AMC':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'AML':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
            case 'AMR':
                dispatch(getPlayerPostsByPosition({footballPosition}));
                history.push(`/footballPositions/${footballPosition}`);
                break;
        }
    }
    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} value='GK' onChange={handleChange('panel1', 'GK')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>GK</Typography>
                    <Typography className={classes.secondaryHeading}>GOALKEEPER</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', '')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>D</Typography>
                    <Typography className={classes.secondaryHeading}>
                        DEFENCE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Tooltip title="DEFENCE LEFT">
                        <Button onClick={handleChangeTooltip('DL')}>
                            DL
                        </Button>
                        </Tooltip>
                        <Tooltip title="DEFENCE CENTER">
                        <Button onClick={handleChangeTooltip('DC')}>
                            DC
                        </Button>
                        </Tooltip>
                        <Tooltip title="DEFENCE RIGHT">
                        <Button onClick={handleChangeTooltip('DR')}>
                            DR
                        </Button>
                        </Tooltip>
                        <div>{<br/>}</div>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', '')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>DM</Typography>
                    <Typography className={classes.secondaryHeading}>
                        DEFENCE MIDDLE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Tooltip title="DEFENCE MIDDLE LEFT">
                        <Button onClick={handleChangeTooltip('DML')}>
                            DML
                        </Button>
                        </Tooltip>
                        <Tooltip title="DEFENCE MIDDLE CENTER">
                        <Button onClick={handleChangeTooltip('DMC')}>
                            DMC
                        </Button>
                        </Tooltip>
                        <Tooltip title="DEFENCE MIDDLE RIGHT">
                        <Button onClick={handleChangeTooltip('DMR')}>
                            DMR
                        </Button>
                        </Tooltip>
                        <div>{<br/>}</div>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', '')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography className={classes.heading}>M</Typography>
                    <Typography className={classes.secondaryHeading}>
                        MIDDLE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Tooltip title="MIDDLE LEFT">
                        <Button onClick={handleChangeTooltip( 'ML')}>
                            ML
                        </Button>
                        </Tooltip>
                        <Tooltip title="MIDDLE CENTER">
                        <Button onClick={handleChangeTooltip('MC')}>
                            MC
                        </Button>
                        </Tooltip>
                        <Tooltip title="MIDDLE RIGHT">
                        <Button onClick={handleChangeTooltip('MR')}>
                            MR
                        </Button>
                        </Tooltip>
                        <div>{<br/>}</div>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5', '')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography className={classes.heading}>AM</Typography>
                    <Typography className={classes.secondaryHeading}>
                        AFTER MIDDLE
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Tooltip title="AFTER MIDDLE LEFT">
                        <Button onClick={handleChangeTooltip('AML')}>
                            AML
                        </Button>
                        </Tooltip>
                        <Tooltip title="AFTER MIDDLE CENTER">
                        <Button onClick={handleChangeTooltip('AMC')}>
                            AMC
                        </Button>
                        </Tooltip>
                        <Tooltip title="AFTER MIDDLE RIGHT">
                        <Button onClick={handleChangeTooltip('AMR')}>
                            AMR
                        </Button>
                        </Tooltip>
                        <div>{<br/>}</div>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6', 'ST')}>
                <AccordionSummary
                    expandIcon={<ArrowRight />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography className={classes.heading}>ST</Typography>
                    <Typography className={classes.secondaryHeading}>
                        STRIKER
                    </Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}
