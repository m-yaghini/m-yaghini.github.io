import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./NewsItem"

export default function News() {
    const theme = useTheme()

    return (
        <Timeline align="left" style={{ padding: "0 0 0 0" }}>
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
    );
}