import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import ClipboardJS from "clipboard"

import Publication from './components/Publication'
import News from "./News"
import About from "./About"
import Masthead from "./Masthead"
import BlogTab from "./components/BlogTab"
import CVTab from "./CVTab"
import { useSmartScroll } from './hooks/useSmartScroll'
import { SmartScrollContext } from './components/SmartScrollContext'

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
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  // Define which publications are shown on Home tab
  const homePublications = ["PAP", "suitability", "dataset-inference", "fairwashing", "pol"];
  
  // Initialize smart scroll hook
  const smartScroll = useSmartScroll(setActiveTab, homePublications);

  return (
    <SmartScrollContext.Provider value={smartScroll}>
    <Container maxWidth="md">
      <Masthead /> {/* Works better outside of the main container on Safari*/}
      
      <Box borderBottom='1px solid rgba(0, 0, 0, 0.3)'  mb={2}>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="navigation tabs">
          <Tab label="Home" />
          {/* <Tab label="Blog" /> */}
          <Tab label="CV" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Grid container direction="column" spacing={1} justifyContent="flex-start">   {/*  Try to put it in a single column */}
          <Grid item container direction="row" spacing={2}>  {/*  Try to put it in a single row */}
            {/* when in "extra small" mode, this should take the whole row; 
            when in "small" mode only 7/12 of the row */}
            <Grid item xs={12} sm={7}>
              <About/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Typography variant="h4" component="h1" gutterBottom>
                News
              </Typography>
              <News/>
            </Grid>
          </Grid>
          <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Select Publications
          </Typography>
          <Publication bibkey={"PAP"} />
          <Publication bibkey={"suitability"} labels={[  { text: "Oral", color: "teal" }]} />
          <Publication bibkey={"fairwashing"} jointWithAndRole={[["Shamsabadi", "Dullerud"], "Joint first authors"]} />
          <Publication bibkey={"dataset-inference"} labels={[  { text: "Spotlight", color: "teal" }]} />
          <Publication bibkey={"pol"} jointWithAndRole={[["Jia"], "Joint first authors"]} />
        </Grid>
          
        </Grid>
      )}

      {/* {activeTab === 1 && (
        <BlogTab />
      )} */}

      {activeTab === 1 && (
        <CVTab />
      )}

      <Box mt={4}>
        <Copyright />
      </Box>
    </Container >
    </SmartScrollContext.Provider>
  );
}
