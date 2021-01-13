import React from "react"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Box } from "@material-ui/core"

export default function () {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About
          </Typography>
            <Typography paragraph align="justify">
                I am a PhD student at the <Link href="https://cleverhans-lab.github.io/">
                    CleverHans Lab</Link> under the supervision of <Link href="www.papernot.fr">
                    Nicolas Papernot</Link> at the <Link href="https://vectorinstitute.ai/">Vector
              Institute for Artificial Intelligence</Link> and University of Toronto.
        </Typography>
            <Typography paragraph align="justify">
                My current interests are in the intersection of machine learning and privacy.
                More broadly,  I am  interested in trustworthy machine learning,
                whether that trustworthiness is defined with respect to privacy
                (differentially private learning), fairness (algorithmic fairness), etc.
                More recently, I have been tackling questions of intellectual property for
                machine learning models, and generalization/domain-invariance,
                such as dealing with out-of-distribution data.
        </Typography>
        </Box>
    )
}