import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./NewsItem"
import { Link } from '@material-ui/core';
import { smoothScroll } from "./App"

export default function News() {

    return (
        <Timeline align="left" style={{ padding: "0 20px 0 0", maxHeight: 400, overflow: 'auto' }}>
            <NewsItem
                date="Apr. 2021"
                title="New Paper at AIES 2021"
                content={<div>
                    My master thesis paper, <Link href="#" onClick={() => { smoothScroll("human") }}>
                        "A Human-in-the-loop Framework to Construct Context-dependent Mathematical Formulations of Fairness"</Link> has been
                        accepted to AIES 2021. (New version will appear on arXiv soon)</div>}
                icon="paper"
            />
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