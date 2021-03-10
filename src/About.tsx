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
              Institute for Artificial Intelligence</Link> and University of Toronto.
        </Typography>

            <Typography paragraph align="justify">
                My research interests are in the intersection of machine learning and privacy, and
                more broadly trustworthy machine learning. I am also interested in ML safety for the audio domain.
        </Typography>

            <Typography paragraph align="justify">
                Recently, I have tackled questions of protecting the
                intellectual property of ML models through detecting and deterring
                model extraction (via <Link href="#" onClick={() => { smoothScroll("dataset-inference") }}>dataset inference</Link> and <Link href="#" onClick={() => { smoothScroll("pol") }}>proofs</Link> of learning).
        </Typography>
            <Previously />
        </Box>
    )
}