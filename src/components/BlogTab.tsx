import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import { getSortedPosts, getPostById } from '../blogPosts';
import { BlogPost as BlogPostType } from '../types/blog';

interface BlogTabProps {
  initialPostId?: string;
}

export default function BlogTab({ initialPostId }: BlogTabProps) {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(initialPostId || null);
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (selectedPostId) {
      const post = getPostById(selectedPostId);
      setSelectedPost(post || null);
    } else {
      setSelectedPost(null);
    }
  }, [selectedPostId]);

  const handleSelectPost = (postId: string) => {
    setSelectedPostId(postId);
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
  };

  const posts = getSortedPosts();

  return (
    <Box>
      {selectedPost ? (
        <BlogPost post={selectedPost} onBack={handleBackToList} />
      ) : (
        <BlogList posts={posts} onSelectPost={handleSelectPost} />
      )}
    </Box>
  );
}
