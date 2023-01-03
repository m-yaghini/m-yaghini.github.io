import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import ClipboardJS from "clipboard"
import Scroll from 'react-scroll'

import Publication from './Publication'
import News from "./News"
import About from "./About"
import Masthead from "./Masthead"

export const smoothScroll = (id: string) => Scroll.scroller.scrollTo(id, { smooth: true, duration: 500 })

// Library loading
new ClipboardJS('.btn') // start ClipboardJS

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
    <Container maxWidth="md">
      <Masthead /> {/* Works better outside of the main container on Safari*/}
      <Grid container direction="column" spacing={1} justifyContent="flex-start">   {/*  Try to put it in a single column */}
        <Grid item container direction="row" spacing={2}>  {/*  Try to put it in a single row */}
          {/* when in "extra small" mode, this should take the whole row; 
          when in "small" mode only 7/12 of the row */}
          <Grid item xs={12} sm={7}>
            <About />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h4" component="h1" gutterBottom>
              News
            </Typography>
            <News />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Publications
          </Typography>
          <Publication bibkey={"fairwashing"} jointWithAndRole={[["Shamsabadi", "Dullerud"], "Joint first authors"]} />
          <Publication bibkey={"disp-vuln"} />
          <Publication bibkey={"human"} />
          <Publication bibkey={"pol"} jointWithAndRole={[["Jia"], "Joint first authors"]} />
          <Publication bibkey={"dataset-inference"} />
          <Publication bibkey={"non-discr"} />
          <Publication bibkey={"energy-aware"} />
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Pre-prints
          </Typography>
          <Publication bibkey={"p-dknn"} jointWithAndRole={[["Dziedzic", "Rabanser"], "Equal Contribution"]} />
          <Publication bibkey={"model-governance"} jointWithAndRole={[["Chandrasekaran", "Jia", "Thudi", "Travers"], "Equal Contribution"]} />
        </Grid>
      </Grid>
      <Copyright />
    </Container >

  );
}
