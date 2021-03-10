import React from "react"
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Box, withStyles } from "@material-ui/core"
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
    },
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        minHeight: 10, // don't move down when expanded (1)
        '&$expanded': {
            minHeight: 10, // don't move down when expanded (2)
        },

        '&.MuiButtonBase-root': {
            padding: 0,
            marginTop: -20 // remove top spacing
        },
    },
    content: {
        '&$expanded': {
            margin: '0 0', // don't move down when expanded (3)
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(0),
    },
}))(MuiAccordionDetails);

// interface PreviouslyProps {
//     position: "postNews" | "preNews"
//     marginTop: number
// }

export default function Previously() {
    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography >Previously</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography paragraph align="justify">
                        I was at the Security and Privacy Engineering lab (<Link
                            href="https://www.epfl.ch/labs/spring/">
                            SPRING</Link>) at École Polytechnique Fédérale de Lausanne (EPFL),
            where I obtained my masters in Data Science and was supervised by <Link
                            href="http://carmelatroncoso.com/">Carmela Troncoso</Link> and <Link
                                href="https://lia.epfl.ch/~faltings/">Boi Faltings</Link> (<Link
                                    href="https://lia.epfl.ch/">LIA</Link>). I completed my master thesis at
          Learning and Adaptive Systems (<Link
                            href="https://las.inf.ethz.ch/">LAS</Link>) lab at ETH Zurich,
          under the supervision of <Link
                            href="http://www.cs.cmu.edu/~hheidari/">Hoda Heidari</Link> and <Link
                                href="https://las.inf.ethz.ch/krausea">Andreas Krause</Link>.
              I did my undergraduate studies at Isfahan University of Technology (IUT)
              in Electrical Engineering with a specialization in Communication Systems,
              where I was supervised  by <Link
                            href="http://www.manshaei.org/">Mohammad Hossein Manshaei</Link> in
            the Game Theory and Mechanism Design (<Link
                            href="https://gtmd.iut.ac.ir/">GTMD</Link>) group.
        </Typography>
                    <Typography paragraph align="justify">
                        From September 2018 to April 2019, I interned with the Data Science team at Expedia Group (Geneva)
                        where I worked on time-series prediction on large-scale datasets using Scala Spark.
        </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}