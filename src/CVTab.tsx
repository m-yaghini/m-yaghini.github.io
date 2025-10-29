// import React from 'react';
import { Box, Typography, Chip, Grid, withStyles, Link } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CVSection from './components/CVSection';
import CVItem from './components/CVItem';
import { cvData } from './cvData';
import Publication from './components/Publication';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';


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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  contactInfo: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[50],
    borderRadius: theme.shape.borderRadius,
  },
  contactItem: {
    marginBottom: theme.spacing(0.5),
  },
  interestChip: {
    margin: theme.spacing(0.5),
  },
  serviceList: {
    marginBottom: theme.spacing(2),
  },
  serviceCategory: {
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
}));

export default function CVTab() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {/* Contact Information */}
      {/* <Box className={classes.contactInfo}>
        <Typography variant="body2" className={classes.contactItem}>
          {cvData.contact.address}
        </Typography>
        <Typography variant="body2" className={classes.contactItem}>
          {cvData.contact.city}
        </Typography>
        <Typography variant="body2" className={classes.contactItem}>
          Phone: {cvData.contact.phone}
        </Typography>
        <Typography variant="body2" className={classes.contactItem}>
          Email: {cvData.contact.email}
        </Typography>
        <Typography variant="body2" className={classes.contactItem}>
          Website: <a href={cvData.contact.website} target="_blank" rel="noopener noreferrer">{cvData.contact.website}</a>
        </Typography>
      </Box> */}

      {/* Research Interests */}
      <CVSection title="Research Interests">
        <Box>
          {cvData.researchInterests.map((interest, index) => (
            <Chip
              key={index}
              label={interest}
              className={classes.interestChip}
              color="secondary"
            />
          ))}
        </Box>
      </CVSection>

      {/* <Divider /> */}

      {/* Education */}
      <CVSection title="Education">
        {cvData.education.map((edu, index) => (
          <CVItem
            key={index}
            title={edu.degree}
            subtitle={edu.institution}
            location={edu.location}
            date={edu.date}
            details={edu.details}
          />
        ))}
      </CVSection>

      {/* <Divider /> */}

      {/* Honors and Awards */}
      <CVSection title="Honors and Awards">
        {cvData.awards.map((award, index) => (
          <CVItem
            key={index}
            title={award.title}
            date={award.date}
          />
        ))}
      </CVSection>

      {/* <Divider /> */}

      {/* Publications - Reference existing Publication component */}
      <CVSection>
        {/* <Typography variant="body2" color="textSecondary" paragraph>
          See the <strong>Publications</strong> section on the Home tab for a complete list of publications with links to papers and BibTeX citations.
        </Typography> */}
        <Grid container direction="column" spacing={1} justifyContent="flex-start">   {/*  Try to put it in a single column */}
                  <Grid item>
                    <Typography variant="h4" component="h1" gutterBottom>
                      Publications
                    </Typography>
                    <Publication bibkey={"fairwashing"} jointWithAndRole={[["Shamsabadi", "Dullerud"], "Joint first authors"]} />
                    <Publication bibkey={"tubes"} />
                    <Publication bibkey={"disp-vuln"} />
                    <Publication bibkey={"human"} />
                    <Publication bibkey={"pol"} jointWithAndRole={[["Jia"], "Joint first authors"]} />
                    <Publication bibkey={"dataset-inference"} />
                    <Publication bibkey={"non-discr"} />
                    <Publication bibkey={"energy-aware"} />
                    {/* <Publication bibkey={"energy-aware"} /> */}
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" component="h1" gutterBottom>
                      Select Pre-prints
                    </Typography>
                    {/* <Publication bibkey={"reg_games"}/> */}
                    {/* <Publication bibkey={"impartiality"}/> */}
                    <Publication bibkey={"raco-dp"} />
                    <Publication bibkey={"p-dknn"} jointWithAndRole={[["Dziedzic", "Rabanser"], "Equal Contribution"]} />
                    <Publication bibkey={"model-governance"} jointWithAndRole={[["Chandrasekaran", "Jia", "Thudi", "Travers"], "Equal Contribution"]} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" component="h1" gutterBottom>
                      Workshops
                    </Typography>
                    <Publication bibkey={"fair-revenue"} />
                    <Publication bibkey={"yaghini2024empirical"} />
                    <Publication bibkey={"yaghini2023learninga"}/>
                    <Publication bibkey={"yaghini2023regulation"}/>
                  </Grid>
                </Grid>
      </CVSection>

      {/* <Divider /> */}

      {/* Co-Advisory */}
      <CVSection title="(Co-)Advisory">
        {cvData.advisory.map((advisee, index) => (
          <CVItem
            key={index}
            title={`${advisee.name}, ${advisee.role}`}
            date={advisee.date}
            // description={advisee.project}
          />
        ))}
      </CVSection>

      {/* <Divider /> */}

      {/* Academic Service */}
      <CVSection title="Academic Service">
        <Box className={classes.serviceList}>
          <Typography variant="subtitle2" className={classes.serviceCategory}>
            Organizer
          </Typography>
          {cvData.academicService.organizer.map((item, index) => (
            <Typography key={index} variant="body2">
              • {item.link ? <Link href={item.link}>{item.title}</Link> : item.title}
            </Typography>
          //   <CVItem
          //   key={index}
          //   title={item.title}
          //   date={item.date}
          //   // description={advisee.project}
          // />
          ))}

          <Typography variant="subtitle2" className={classes.serviceCategory}>
            Program Committee Member
          </Typography>
          {cvData.academicService.programCommittee.map((item, index) => (
            <Typography key={index} variant="body2">
              • {item}
            </Typography>
          ))}

          <Typography variant="subtitle2" className={classes.serviceCategory}>
            Reviewer
          </Typography>
          {cvData.academicService.reviewer.map((item, index) => (
            <Typography key={index} variant="body2">
              • {item}
            </Typography>
          ))}

          <Typography variant="subtitle2" className={classes.serviceCategory}>
            External Reviewer
          </Typography>
          {cvData.academicService.externalReviewer.map((item, index) => (
            <Typography key={index} variant="body2">
              • {item}
            </Typography>
          ))}
        </Box>
      </CVSection>

      {/* <Divider /> */}

      {/* Academic Experience */}
      <CVSection title="Academic Experience">
        {cvData.experience.map((exp, index) => (
          <CVItem
            key={index}
            title={exp.title}
            subtitle={exp.institution}
            location={exp.location}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </CVSection>

      {/* <Divider /> */}

      {/* Teaching Experience */}
      <CVSection title="Teaching Experience">
        {cvData.teaching.map((teach, index) => (
          <CVItem
            key={index}
            title={teach.title}
            subtitle={teach.course}
            location={teach.institution}
            date={teach.date}
            description={teach.responsibilities}
          />
        ))}

        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography >Previously</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {cvData.teachingUndergrad.map((teach, index) => (
                        <CVItem
                          key={index}
                          title={teach.title}
                          subtitle={teach.course}
                          location={teach.institution}
                          date={teach.date}
                          description={teach.responsibilities}
                        />
                      ))}
                </AccordionDetails>
            </Accordion>
        </Box>

      </CVSection>

      {/* <Divider /> */}

      {/* Industry Experience */}
      <CVSection title="Industry Experience">
        {cvData.industry.map((job, index) => (
          <CVItem
            key={index}
            title={job.title}
            subtitle={job.company}
            location={job.location}
            date={job.date}
            description={job.description}
          />
        ))}
      </CVSection>

      {/* <Divider /> */}

      {/* Talks */}
      <CVSection title="Talks">
        {cvData.talks.map((talk, index) => (
          <CVItem
            key={index}
            title={talk.title}
            subtitle={talk.venue}
            date={talk.date}
          />
        ))}
      </CVSection>
    </Box>
  );
}
