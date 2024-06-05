'use client';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/loading/spinner';

// Cargar el componente `CreatePostPage` dinámicamente
const CreatePostPage = dynamic(
  () => import('@/components/posts/newPost'),
  { ssr: false, loading: () => <LoadingSpinner /> }
);

export default function PostsPage() {
  return (
    <div className="container mx-auto">
      <CreatePostPage />
    </div>
  );
}
