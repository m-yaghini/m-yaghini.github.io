import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import NewsItem from "./components/NewsItem"
import { createStyles, Link, makeStyles, Theme} from '@material-ui/core';
import ScrollLink from "./components/ScrollLink"


const useStyles = makeStyles((theme: Theme) => createStyles({

    container: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        WebkitMaskImage: "linear-gradient(to top, transparent 2%, black 20%)",
        maskImage: "linear-gradient(to top, transparent 2%, black 20%)",
        
        // Match MUI Accordion animation exactly
        transition: theme.transitions.create('max-height', {
            duration: theme.transitions.duration.standard - 0.1,
            easing: theme.transitions.easing.easeInOut,
        }),
        
        // Scrollbar styling
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.palette.grey[400],
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.grey[600],
        },
    }
}));

interface NewsProps {
    maxHeight?: number;
}

export default function News({ maxHeight }: NewsProps) {

    const classes = useStyles()

    return (
        <Timeline className={classes.container} align="left" style={{ padding: "0 20px 0 0", maxHeight: maxHeight || 500, overflow: 'auto', cursor: 'pointer' }}>
            <NewsItem
                date="Sept. 2025"
                title="Paper in NeurIPS ACA 2025"
                content={<div>
                   A new position paper in NeurIPS Algorithmic Collective Action workshop on incentivizing collaboration with fair revenue sharing between stakeholders in an LLM economy. Preprint forth-coming!
                </div>}
                icon="paper"
            />
            <NewsItem
                date="June 2025"
                title="Oral presentation at ICML"
                content={<div>
                   Our paper <ScrollLink to="suitability">Suitability Filter</ScrollLink> will have an oral presentation at ICML this year!
                </div>}
                icon="news"
            />
            <NewsItem
                date="May 2025"
                title="Suitability Filters accepted to ICML 2025"
                content={<div>
                   Suitability filters are computational model cards that move the onus of establishing suitability for user data from the user to the company who has much more information about the model and its training data.
                </div>}
                icon="paper"
            />
            <NewsItem
                date="May 2025"
                title="Make rate-constrained optimization (e.g. group fairness) DP!"
                content={<div>
                    I am excited to share <ScrollLink to="raco-dp">our new preprint</ScrollLink> on a general framework for privatizing rate-constrained optimization.
                </div>}
                icon="paper"
            />
             <NewsItem
                date="April 2025"
                title="ML Regulation as a Principal-Agent Problem accepted to FAccT 2025!"
                content={<div>
                    We model trustworthy ML regulation as a  Principal (public) and Agent (private company) problem and show how the information asymmetry and the misaligned incentives can lead to unintended over-regulation. 
                </div>}
                icon="paper"
            />
            <NewsItem
                date="Feb. 2024"
                title="Regulation Games for Trustworthy Machine Learning"
                content={<div>
                    <ScrollLink to="yaghini2023regulation"> We introduce</ScrollLink> a new framework for modeling the trustworthy ML as a multi-agent multi-objective problem. In particular, we model the relationship trustworthy ML regulators and model builder. We present a tool to simulate their interactions with the goal of designing more effective regulations and penalties.
                </div>}
                icon="paper"
            />
            <NewsItem
                date="Dec. 2024"
                title="Two papers accepted to Regulatable ML@NeurIPS2023"
                content={<div>
                    <Link href="https://openreview.net/forum?id=u9gLNSGgRA">Regulation Games</Link> and <Link href="https://openreview.net/forum?id=R5MTSLPyYZ">FairPATE</Link> have been accepted to NeurIPS 2023 Workshop on Regulatable ML.
                </div>}
                icon="paper"
            />
            <NewsItem
                date="Jul. 2023"
                title="Visiting Secure and Private AI Lab at ETHZ"
                content={
                    <div>
                        <Link href='https://floriantramer.com'>Florian Tramèr</Link> is kindly hosting me in the <Link href='https://spylab.ai'>Secure and Private AI (SPY) Lab</Link> at ETHZ this summer where I will be working on an ML Privacy research project.
                    </div>
                }
                ></NewsItem>
            <NewsItem
                date="Feb. 2023"
                title="Pareto Frontier of Fairness, Privacy, and Utility"
                content={<div>
                    <ScrollLink to="yaghini2023learninga">We present</ScrollLink> two new algorithms (<i>FairPATE</i> and <i>FairDP-SGD</i>) to recover the frontier of utility with (central) differential privacy and demographic parity mitigations.
                </div>}
                icon="paper"
            />

             <NewsItem
                date="Oct. 2022"
                title="Fairwashing in NeurIPS"
                content={<div>
                    <ScrollLink to="fairwashing">Washing The Unwashable: On The (Im) possibility of Fairwashing Detection</ScrollLink> will appear in NeurIPS 2022.
                </div>}
                icon="paper"
            />
                
            <NewsItem
                date="Sept. 2022"
                title="Teaching ECE421: Intro. to ML"
                content={<div>
                    I will be co-teaching <Link href="https://www.papernot.fr/teaching/f22/ml/index.html">ECE421 Introduction to Machine Learning</Link> with Nicolas Papernot in the fall 2022 semester.
                </div>}
                icon="talk"
            />
            <NewsItem
                date="Jul. 2022"
                title="p-dknn Pre-print"
                content={<div>
                    New pre-print out on using hypothesis testing and knn structure for NP-classification <ScrollLink to="p-dknn">p-dknn</ScrollLink>.
                </div>}
                icon="paper"
            />
            <NewsItem
                date="Jun. 2022"
                title="MSR Internship"
                content={<div>
                    I have started an internship with MSR Cambridge Privacy and Security group, 
                    supervised by <Link href="https://www.microsoft.com/en-us/research/people/santiago/">Santiago Zanella-Béguelin</Link> and <Link href="https://www.microsoft.com/en-us/research/people/luwutsch/">Lukas Wutschitz</Link>.
                </div>}
                icon="news"
            />
            <NewsItem
                date="Feb. 2022"
                title="Meta PhD Fellowship"
                content={<div>
                    I have received a <Link href="https://research.facebook.com/blog/2022/2/announcing-the-recipients-of-the-2022-meta-phd-research-fellowship/">Meta PhD Fellowship</Link>.
                </div>}
                icon="news"
            />
            <NewsItem
                date="Sept. 2021"
                title="SRI Graduate Fellowship"
                content={<div>
                    I am honored to have been selected as a <Link href="https://srinstitute.utoronto.ca/news/introducing-graduate-fellows-2021-22">Schwartz Reisman graduate fellow</Link>.
                </div>}
                icon="news"
            />
            <NewsItem
                date="Jul. 2021"
                title="Disparate Vulnerability Will Appear in PETS 2022!"
                content={<div>
                    Our paper <ScrollLink to="disp-vuln">
                        "Disparate Vulnerability: on the Unfairness of Privacy Attacks Against
                        Machine Learning"</ScrollLink> has been
                    accepted to PETS 2022. New updated arXiv version coming soon.</div>}
                icon="paper"
            />
            <NewsItem
                date="Apr. 2021"
                title="New Paper at AIES 2021"
                content={<div>
                    My master thesis paper, <ScrollLink to="human">
                        "A Human-in-the-loop Framework to Construct Context-dependent Mathematical Formulations of Fairness"</ScrollLink> has been
                    accepted to AIES 2021.</div>}
                icon="paper"
            />
            <NewsItem
                date="Feb. 2021"
                title="New paper at Oakland"
                content={<div>
                    Our paper, <ScrollLink to="pol">
                        "Proof-of-Learning: Definitions and Practice"</ScrollLink> has been
                    accepted to 41st IEEE Symposium on Security and Privacy (Oakland).</div>}
                icon="paper"
            />
            <NewsItem
                date="Jan. 2021"
                title="New paper at ICLR 2021"
                content={<div>
                    Our paper, <ScrollLink to="dataset-inference">
                        "Dataset Inference: Ownership Resolution in Machine Learning"</ScrollLink> has been
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