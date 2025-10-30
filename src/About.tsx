import React from "react"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Box } from "@material-ui/core"
import Previously from "./Previously"
import ScrollLink from "./components/ScrollLink"

interface AboutProps {
    onExpand?: (isExpanded: boolean) => void;
}

export default function About({ onExpand }: AboutProps) {

    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About Me
            </Typography>
            <Typography paragraph align="justify">
                I am a PhD student at the <Link href="https://cleverhans-lab.github.io/">
                    CleverHans Lab</Link> under the supervision of <Link href="www.papernot.fr">
                    Nicolas Papernot</Link> at the <Link href="https://vectorinstitute.ai/">Vector
                        Institute for Artificial Intelligence</Link> and University of Toronto. I was a <Link href="https://research.facebook.com/blog/2022/2/announcing-the-recipients-of-the-2022-meta-phd-research-fellowship/">Meta PhD Fellow</Link> in 2022–2024. In 2021–2022, I was also a graduate fellow at the <Link href="https://srinstitute.utoronto.ca/">Schwartz Reisman Institute for Technology and Society</Link>.
            </Typography>

            <Typography paragraph align="justify">
                My research interests are in the intersection of machine learning, algorithmic fairness, and
                more broadly trustworthy machine learning. I am interested in problems of technical ML governance, such as <ScrollLink to="PAP">ML Regulation</ScrollLink>, where <Box component="span" fontWeight="bold"> a plurality of stakeholders</Box> decide the societal outcome. A key focus of my research is to tackle, identify the consequences, and take advantage of the <Box component="span" fontWeight="bold">information asymmetry</Box> between the stakeholders via algorithm design (<ScrollLink to="raco-dp">RaCO-DP</ScrollLink>), auditing (<ScrollLink to="fairwashing">Fairwashing</ScrollLink>), and system design (<ScrollLink to="suitability">Suitability Filter</ScrollLink>) respectively.
            </Typography>

            <Typography paragraph align="justify">
                Earlier in my PhD, I tackled questions of provenance and protecting the
                intellectual property of ML models by detecting and deterring
                model extraction (via <ScrollLink to="dataset-inference">dataset inference</ScrollLink> and <ScrollLink to="pol">proofs of learning</ScrollLink>). 
                {/* As well as, detecting and tackling failures of trustworthiness measures, such as <Link component="span" onClick={() => { smartScroll("fairwashing") }} style={{ cursor: 'pointer' }}>fairwashing</Link>, where explainability is abused to justify unfairness. */}
            </Typography>
            <Previously onExpand={onExpand} />
        </Box>
    )
}