'use client';
import { useState } from 'react';
import CreatePostPage from '../../../components/ui/posts/newPost';

export default function PostsPage() {

  return (
    <div className="container mx-auto ">
      <CreatePostPage />
    </div>
  );
}
