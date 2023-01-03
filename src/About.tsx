import React from "react"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Box } from "@material-ui/core"
import Previously from "./Previously"
import { smoothScroll } from "./App"

export default function About() {

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About Me
            </Typography>
            <Typography paragraph align="justify">
                I am a PhD student at the <Link href="https://cleverhans-lab.github.io/">
                    CleverHans Lab</Link> under the supervision of <Link href="www.papernot.fr">
                    Nicolas Papernot</Link> at the <Link href="https://vectorinstitute.ai/">Vector
                        Institute for Artificial Intelligence</Link> and University of Toronto. I am also a <Link href="https://research.facebook.com/blog/2022/2/announcing-the-recipients-of-the-2022-meta-phd-research-fellowship/">Meta PhD Fellow</Link>. In 2021-2022, I was also a graduate fellow at the <Link href="https://srinstitute.utoronto.ca/">Schwartz Reisman Institute for Technology and Society</Link>.
            </Typography>

            <Typography paragraph align="justify">
                My research interests are in the intersection of machine learning and privacy, and
                more broadly trustworthy machine learning. In particular, I study problems of <Link href="#" onClick={() => { smoothScroll("model-governance") }}>model governance</Link>.
            </Typography>

            <Typography paragraph align="justify">
                Recently, I have tackled questions of protecting the
                intellectual property of ML models through detecting and deterring
                model extraction (via <Link href="#" onClick={() => { smoothScroll("dataset-inference") }}>dataset inference</Link> and <Link href="#" onClick={() => { smoothScroll("pol") }}>proofs</Link> of learning). As well as, detecting and tackling failures of trustworthiness measures, such as <Link href="#" onClick={() => { smoothScroll("pol") }}>fairwashing</Link>, where explainability is abused to justify unfairness.
            </Typography>
            <Previously />
        </Box>
    )
}