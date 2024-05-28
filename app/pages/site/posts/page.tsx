'use client';
import { useState } from 'react';
import CreatePostPage from '../../../components/ui/posts/newPost';

export default function PostsPage() {
  const [posts, setPosts] = useState([
    { id: 1, username: 'user1', imageUrl: '/images/post1.jpg', likes: 20 },
    { id: 2, username: 'user2', imageUrl: '/images/post2.jpg', likes: 15 },
    { id: 3, username: 'user3', imageUrl: '/images/post3.jpg', likes: 30 },
    // Agrega más objetos de publicaciones según sea necesario
  ]);

  return (
    <div className="container mx-auto ">
      <CreatePostPage />
    </div>
  );
}
