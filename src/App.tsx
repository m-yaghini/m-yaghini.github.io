import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Publication from './Publication'
import ClipboardJS from "clipboard"
new ClipboardJS('.btn')


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://m-yaghini.github.io/">
        Mohammad Yaghini
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}


export default function App() {

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Mohammad Yaghini
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom>
          PhD Student in Machine Learning
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          About
          </Typography>
        <Typography paragraph>
          I am a PhD student at the <Link href="https://cleverhans-lab.github.io/">
            CleverHans Lab</Link> under the supervision of <Link href="www.papernot.fr">
            Nicolas Papernot</Link> at the <Link href="https://vectorinstitute.ai/">Vector
              Institute</Link> for Artificial Intelligence and University of Toronto.
        </Typography>
        <Typography paragraph>
          My current interests are in the intersection of machine learning and privacy.
          More broadly,  I am  interested in trustworthy machine learning,
          whether that trustworthiness is defined with respect to privacy
          (differentially private learning), fairness (algorithmic fairness), etc.
          More recently, I have been tackling questions of intellectual property for
          machine learning models, and generalization/domain-invariance,
          e.g. dealing with out-of-distribution data.
        </Typography>
        <Typography paragraph>
          Previously, I was at the Security and Privacy Engineering lab (<Link
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
              where I was supervised for 2 years by <Link
            href="http://www.manshaei.org/">Mohammad Hossein Manshaei</Link> in
            the Game Theory and Mechanism Design (<Link
            href="https://gtmd.iut.ac.ir/">GTMD</Link>) group.
        </Typography>
        <Typography paragraph>
          From September 2018 to April 2019, I interned with the Data Science team at Expedia Group (Geneva)
          where I worked on time-series prediction on large-scale datasets using Scala Spark.
        </Typography>
        {/* <Box sx={{ my: 10 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Projects
          </Typography>
          <Grid container
            direction="column">
            <Grid item>
              <SimpleCard></SimpleCard>
            </Grid>
          </Grid>
        </Box> */}
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Pre-prints
          </Typography>
          <Grid container
            direction="column">
            <Grid item>
              <Publication bibkey={"disp-vuln"} />
              <Publication bibkey={"human"} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Publications
          </Typography>
          <Grid container
            direction="column">
            <Grid item>
              <Publication bibkey={"boi"} />
              <Publication bibkey={"mehdi"} />
            </Grid>
          </Grid>
        </Box>

        <Copyright />
      </Box>
    </Container >
  );
}
