import { Comment, CommentFormData } from '../types/blog';

// Configuration - these should be environment variables in production
const GITHUB_REPO_OWNER = process.env.REACT_APP_GITHUB_OWNER || 'your-username';
const GITHUB_REPO_NAME = process.env.REACT_APP_GITHUB_REPO || 'your-repo';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; // Optional for fetching, required for posting

const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches approved comments for a specific blog post
 */
export const fetchApprovedComments = async (postId: string): Promise<Comment[]> => {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues?labels=approved-comment,post-${postId}&state=open`,
      { headers }
    );

    if (!response.ok) {
      console.error('Failed to fetch comments:', response.statusText);
      return [];
    }

    const issues = await response.json();

    return issues.map((issue: any) => {
      // Parse comment body to extract metadata
      const body = issue.body || '';
      
      // Try to extract metadata from comment body
      let author = 'Anonymous';
      let authorGithub = '';
      let authorAvatar = '';
      let content = body;

      // Check if body has metadata section
      if (body.includes('---METADATA---')) {
        const parts = body.split('---METADATA---');
        content = parts[0].trim();
        const metadata = parts[1];
        
        const nameMatch = metadata.match(/Name: (.+)/);
        const githubMatch = metadata.match(/GitHub: (.+)/);
        
        if (nameMatch) author = nameMatch[1].trim();
        if (githubMatch) authorGithub = githubMatch[1].trim();
      }

      // If issue was created by a GitHub user, use their info
      if (issue.user?.login) {
        authorGithub = issue.user.login;
        authorAvatar = issue.user.avatar_url;
        if (author === 'Anonymous') {
          author = issue.user.login;
        }
      }

      return {
        id: issue.number,
        author,
        authorGithub,
        authorAvatar,
        content,
        createdAt: issue.created_at,
      };
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
};

/**
 * Submits a new comment for moderation
 */
export const submitComment = async (formData: CommentFormData): Promise<boolean> => {
  if (!GITHUB_TOKEN) {
    console.error('GitHub token is required to submit comments');
    return false;
  }

  try {
    const metadata = `

---METADATA---
Name: ${formData.name}
${formData.email ? `Email: ${formData.email}` : ''}
${formData.githubUsername ? `GitHub: ${formData.githubUsername}` : ''}
Post ID: ${formData.postId}`;

    const issueBody = `${formData.content}${metadata}`;

    const response = await fetch(
      `${GITHUB_API_BASE}/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Comment on post: ${formData.postId}`,
          body: issueBody,
          labels: ['pending-comment', `post-${formData.postId}`],
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Error submitting comment:', error);
    return false;
  }
};
