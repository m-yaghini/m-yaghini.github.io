import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    // fontWeight: 500,
  },
}));

interface CVSectionProps {
  title?: string;
  children: React.ReactNode;
}

                //  <Typography variant="h4" component="h1" gutterBottom>
                //       Publications
                //     </Typography>

export default function CVSection({ title, children }: CVSectionProps) {
  const classes = useStyles();

    return (
      <Box className={classes.section}>
        {title && (
          <Typography variant="h4" component="h1" className={classes.sectionTitle} gutterBottom>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    );
}
