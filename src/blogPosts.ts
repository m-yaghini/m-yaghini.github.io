import { BlogPost } from './types/blog';

// Import markdown content
// In a real implementation, you'd import these from .md files
// Example: import post1Content from './posts/example-post.md';

export const blogPosts: BlogPost[] = [
  {
    id: 'example-post-1',
    title: 'Welcome to My Blog',
    date: '2025-01-15',
    author: 'Mohammad Yaghini',
    excerpt: 'Initial post to welcome readers to my new blog!',
    content: `# Welcome to My Blog`
  }
];

// Helper function to get post by ID
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get sorted posts (newest first)
export const getSortedPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
