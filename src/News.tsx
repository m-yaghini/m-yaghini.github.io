import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./NewsItem"
import { Link } from '@material-ui/core';
import { smoothScroll } from "./App"

export default function News() {

    return (
        <Timeline align="left" style={{ padding: "0 0 0 0" }}>
            <NewsItem
                date="Feb. 2021"
                title="New paper at Oakland"
                content={<div>
                    Our paper, <Link href="#" onClick={() => { smoothScroll("pol") }}>
                        "Proof-of-Learning: Definitions and Practice"</Link> has been
                        accepted to 41st IEEE Symposium on Security and Privacy (Oakland).</div>}
                icon="paper"
            />
            <NewsItem
                date="Jan. 2021"
                title="New paper at ICLR 2021"
                content={<div>
                    Our paper, <Link href="#" onClick={() => { smoothScroll("dataset-inference") }}>
                        "Dataset Inference: Ownership Resolution in Machine Learning"</Link> has been
                        accepted to ICLR 2021 with a <b>spotlight</b>.
                </div>}
                icon="paper"
            />
            <NewsItem
                date="Sep. 2020"
                title="A new start"
                content="I have started my PhD at CleverHans lab."
                icon="news"
                firstPost
            />
        </Timeline>
    );
}