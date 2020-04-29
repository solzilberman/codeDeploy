import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Paper, Box, Typography, Tab, Tabs, AppBar } from '@material-ui/core';

import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import VideoList from '../api/VideoList';
import Articles from "./Articles"



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        minWidth: '80%',
        marginTop: '5vh'
    },
}));

export default function Content(props) {
    const { category, stackend, language, level } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    if (!props) {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

    const { videos } = props;



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Paper style={{ width: '80%', margin: 'auto' }}>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="icon tabs example"
                        centered
                    >
                        <Tab icon={<VideocamRoundedIcon />}  {...a11yProps(0)} />
                        <Tab icon={<DescriptionRoundedIcon />} {...a11yProps(1)} />
                        <Tab icon={<MoreHorizRoundedIcon />}  {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly', }}>
                            <VideoList videos={videos} />
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div>
                            <Articles />
                        </div>
                    </TabPanel>
                    <div>
                        <h1>Coming Soon</h1>
                    </div>
                    <TabPanel value={value} index={2} dir={theme.direction}>

                    </TabPanel>
                </SwipeableViews>
            </div>
        </Paper>
    );
}