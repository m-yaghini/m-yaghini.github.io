import React from "react"
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Box, makeStyles, Paper, SvgIcon, Typography } from "@material-ui/core";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { ChatBubble, NewReleases } from "@material-ui/icons";
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
    content: {
        paddingRight: 0
    },
    oppositeContent: {
        flex: 0.0
    },
    dot: {
        flex: 0.0,
        height: "10px",
        minHeight: "10px",
    },
    newsTitle: {
        fontSize: theme.typography.subtitle1.fontSize,
    },
    newsContent: {
        fontSize: theme.typography.subtitle2.fontSize,
    },
    cardPaper: {
        padding: '6px 16px',
    },
}));


interface NewsItemProps {
    title: string,
    date: string,
    content: string,
    icon?: "news" | "paper" | "talk",
    firstPost?: boolean
}

export default function ({ title, date, content, icon, firstPost }: NewsItemProps) {
    const classes = useStyles();
    const dispIcon = (
        icon === "news" ?
            (
                <TimelineDot color="inherit">
                    <ChatBubble />
                </TimelineDot>
            ) : icon === "paper" ?
                (
                    <TimelineDot color="inherit">
                        <NewReleases />
                    </TimelineDot>
                )
                : icon === "talk" ?
                    (
                        <TimelineDot color="inherit">
                            <RecordVoiceOverIcon />
                        </TimelineDot>
                    ) : // misc
                    (
                        <TimelineDot color="inherit">
                            <InfoIcon />
                        </TimelineDot>
                    )
    )

    const initDot = firstPost !== undefined ? (
        <TimelineItem className={classes.dot}>
            <TimelineOppositeContent className={classes.dot}>
                <Typography variant="body2" style={{ visibility: "hidden" }}>
                    {date}
                </Typography>
            </TimelineOppositeContent>
            <TimelineDot style={{ padding: "2px", marginLeft: "0.85rem" }}>
            </TimelineDot>
            <TimelineContent className={classes.content}>
            </TimelineContent>
        </TimelineItem >
    ) : undefined


    return (
        <div>
            <TimelineItem>
                <TimelineOppositeContent className={classes.oppositeContent} >
                    <Typography variant="body2" color="textSecondary">
                        {date}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    {dispIcon}
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.content}>
                    <Paper elevation={3} className={classes.cardPaper}>
                        <Typography variant="h6" component="h1">
                            <Box className={classes.newsTitle}>
                                {title}
                            </Box>
                        </Typography>
                        <Typography>
                            <Box className={classes.newsContent}>
                                {content}
                            </Box>
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            { initDot}
        </div >
    )
}