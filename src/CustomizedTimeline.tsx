import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./NewsItem"
import { Box, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    oppositeContent: {
        flex: 0.09
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const theme = useTheme()
    const classes = useStyles(theme);

    return (
        <Box style={{ maxWidth: theme.spacing(50) }}>
            <Timeline align="left" style={{ paddingRight: 0 }}>
                <NewsItem
                    date="Jan. 2021"
                    title="ICLR 2021"
                    content="Our paper got accepted"
                    icon="paper"
                />
                <NewsItem
                    date="Jan. 2021"
                    title="We are online!"
                    content="My long overdue personal webpage is online."
                    icon="news"
                    firstPost
                />
            </Timeline>
        </Box >
    );
}