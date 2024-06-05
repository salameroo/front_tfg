'use client';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import PostEditor from '@/app/components/ui/posts/edit';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const EditPost: React.FC = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const { data, error, mutate } = useSWR(id ? `http://localhost:8000/api/posts/${id}` : null, fetcher);

    if (error) return <p>Error loading post</p>;
    if (!data) return <p>Loading...</p>;

    return <PostEditor post={data} mutate={mutate} />;
};

export default EditPost;
