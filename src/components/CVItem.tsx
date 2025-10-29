import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    marginBottom: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(0.5),
  },
  title: {
    fontWeight: 500,
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(0.5),
  },
  date: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
  },
  description: {
    marginTop: theme.spacing(1),
  },
  bulletList: {
    marginTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  bullet: {
    marginBottom: theme.spacing(0.5),
  },
}));

interface CVItemProps {
  title?: string;
  subtitle?: string;
  date?: string;
  location?: string;
  description?: string;
  details?: string[];
}

export default function CVItem({
  title,
  subtitle,
  date,
  location,
  description,
  details,
}: CVItemProps) {
  const classes = useStyles();

  return (
    <Box className={classes.item}>
      {title && (
        <Box className={classes.header}>
          <Typography variant="subtitle1" className={classes.title}>
            {title}
          </Typography>
          {date && (
            <Typography variant="body2" className={classes.date}>
              {date}
            </Typography>
          )}
        </Box>
      )}
      
      {subtitle && (
        <Typography variant="body2" className={classes.subtitle}>
          {subtitle}
          {location && ` • ${location}`}
        </Typography>
      )}

      {description && (
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      )}

      {details && details.length > 0 && (
        <Box className={classes.bulletList}>
          {details.map((detail, index) => (
            <Typography key={index} variant="body2" className={classes.bullet}>
              • {detail}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}
