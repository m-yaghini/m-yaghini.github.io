import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { BlogPost } from '../types/blog';

const useStyles = makeStyles((theme: Theme) => ({
  postCard: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
  postMeta: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  postExcerpt: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  readMoreButton: {
    marginTop: theme.spacing(1),
  },
}));

interface BlogListProps {
  posts: BlogPost[];
  onSelectPost: (postId: string) => void;
}

export default function BlogList({ posts, onSelectPost }: BlogListProps) {
  const classes = useStyles();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (posts.length === 0) {
    return (
      <Box padding={4} textAlign="center">
        <Typography variant="h6" color="textSecondary">
          No blog posts yet. Check back soon!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Thoughts on machine learning, research, and technology
      </Typography>

      <Grid container direction="column" spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id}>
            <Paper
              className={classes.postCard}
              elevation={1}
              onClick={() => onSelectPost(post.id)}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="caption" className={classes.postMeta}>
                {post.author} • {formatDate(post.date)}
              </Typography>
              <Typography variant="body1" className={classes.postExcerpt}>
                {post.excerpt}
              </Typography>
              <Button
                color="primary"
                className={classes.readMoreButton}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPost(post.id);
                }}
              >
                Read More →
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
