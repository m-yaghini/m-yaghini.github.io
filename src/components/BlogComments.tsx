import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
  Divider,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { fetchApprovedComments, submitComment } from '../services/githubComments';
import { Comment } from '../types/blog';

const useStyles = makeStyles((theme: Theme) => ({
  commentSection: {
    marginTop: theme.spacing(4),
  },
  commentForm: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  commentList: {
    marginTop: theme.spacing(2),
  },
  comment: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  commentHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  commentMeta: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

interface BlogCommentsProps {
  postId: string;
}

export default function BlogComments({ postId }: BlogCommentsProps) {
  const classes = useStyles();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [content, setContent] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    loadComments();
  }, [postId]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadComments = async () => {
    setLoading(true);
    const fetchedComments = await fetchApprovedComments(postId);
    setComments(fetchedComments);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !content.trim()) {
      return;
    }

    setSubmitting(true);
    setSubmitStatus('idle');

    const success = await submitComment({
      name: name.trim(),
      email: email.trim() || undefined,
      githubUsername: githubUsername.trim() || undefined,
      content: content.trim(),
      postId,
    });

    setSubmitting(false);

    if (success) {
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setGithubUsername('');
      setContent('');
    } else {
      setSubmitStatus('error');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box className={classes.commentSection}>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      <Paper className={classes.commentForm} elevation={0} variant="outlined">
        <Typography variant="h6" gutterBottom>
          Leave a Comment
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          All comments are moderated and will appear after approval.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email (optional)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                margin="normal"
                helperText="Not displayed publicly"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="GitHub Username (optional)"
                value={githubUsername}
                onChange={(e) => setGithubUsername(e.target.value)}
                variant="outlined"
                margin="normal"
                helperText="To display your GitHub avatar"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                rows={4}
                label="Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
                margin="normal"
              />
            </Grid>
          </Grid>

          {submitStatus === 'success' && (
            <Alert severity="success" style={{ marginTop: 16 }}>
              Comment submitted successfully! It will appear after moderation.
            </Alert>
          )}

          {submitStatus === 'error' && (
            <Alert severity="error" style={{ marginTop: 16 }}>
              Failed to submit comment. Please try again or check your configuration.
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={submitting || !name.trim() || !content.trim()}
            className={classes.submitButton}
          >
            {submitting ? <CircularProgress size={24} /> : 'Submit Comment'}
          </Button>
        </form>
      </Paper>

      <Divider />

      <Box className={classes.commentList}>
        <Typography variant="h6" gutterBottom>
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" padding={4}>
            <CircularProgress />
          </Box>
        ) : comments.length === 0 ? (
          <Typography variant="body2" color="textSecondary" style={{ padding: 16 }}>
            No comments yet. Be the first to comment!
          </Typography>
        ) : (
          comments.map((comment) => (
            <Paper key={comment.id} className={classes.comment} elevation={0} variant="outlined">
              <Box className={classes.commentHeader}>
                <Avatar
                  className={classes.avatar}
                  src={comment.authorAvatar}
                  alt={comment.author}
                >
                  {comment.author.charAt(0).toUpperCase()}
                </Avatar>
                <Box className={classes.commentMeta}>
                  <Typography variant="subtitle2">
                    {comment.author}
                    {comment.authorGithub && (
                      <Typography variant="caption" color="textSecondary" component="span">
                        {' '}(@{comment.authorGithub})
                      </Typography>
                    )}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {formatDate(comment.createdAt)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                {comment.content}
              </Typography>
            </Paper>
          ))
        )}
      </Box>
    </Box>
  );
}
