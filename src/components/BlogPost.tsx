import React from 'react';
import { Box, Typography, Button, Divider } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BlogPost as BlogPostType } from '../types/blog';
import BlogComments from './BlogComments';
import ReactMarkdown from 'react-markdown';

const useStyles = makeStyles((theme: Theme) => ({
  backButton: {
    marginBottom: theme.spacing(2),
  },
  postHeader: {
    marginBottom: theme.spacing(3),
  },
  postMeta: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
  },
  postContent: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    '& h1': {
      ...theme.typography.h3,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    '& h2': {
      ...theme.typography.h4,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    '& h3': {
      ...theme.typography.h5,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    '& p': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(2),
    },
    '& ul, & ol': {
      marginBottom: theme.spacing(2),
    },
    '& li': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(1),
    },
    '& code': {
      backgroundColor: theme.palette.grey[100],
      padding: '2px 6px',
      borderRadius: 3,
      fontFamily: 'monospace',
    },
    '& pre': {
      backgroundColor: theme.palette.grey[100],
      padding: theme.spacing(2),
      borderRadius: 4,
      overflow: 'auto',
      marginBottom: theme.spacing(2),
    },
    '& blockquote': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      paddingLeft: theme.spacing(2),
      marginLeft: 0,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
    },
  },
}));

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  const classes = useStyles();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        className={classes.backButton}
      >
        Back to Blog
      </Button>

      <Box className={classes.postHeader}>
        <Typography variant="h3" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" className={classes.postMeta}>
          {post.author} • {formatDate(post.date)}
        </Typography>
      </Box>

      <Divider />

      <Box className={classes.postContent}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Box>

      <Divider />

      <BlogComments postId={post.id} />
    </Box>
  );
}
