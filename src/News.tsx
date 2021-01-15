import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./NewsItem"
import { Link } from '@material-ui/core';
import Scroll from 'react-scroll'

const smoothScroll = (id: string) => Scroll.scroller.scrollTo(id, { smooth: true, duration: 500 })

export default function News() {
    const theme = useTheme()

    return (
        <Timeline align="left" style={{ padding: "0 0 0 0" }}>
            <NewsItem
                date="Jan. 2021"
                title="New paper at ICLR 2021"
                content={<div>
                    Our paper, <Link href="#" onClick={() => { smoothScroll("dataset-inference") }}>
                        "Dataset Inference: Ownership Resolution in Machine Learning"</Link> has been
                        accepted to ICLR 2021.</div>}
                icon="paper"
            />
            <NewsItem
                date="Jan. 2021"
                title="We are online!"
                content=""
                icon="news"
                firstPost
            />
        </Timeline>
    );
}