export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export interface Comment {
  id: number;
  author: string;
  authorGithub?: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface CommentFormData {
  name: string;
  email?: string;
  githubUsername?: string;
  content: string;
  postId: string;
}
