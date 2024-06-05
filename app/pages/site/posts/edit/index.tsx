import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

interface Post {
    id: number;
    title: string;
    description: string;
}

const UserPosts: React.FC = () => {
    const { data, error } = useSWR<Post[]>(`${process.env.LARAVEL}/api/posts/`, fetcher);

    if (error) return <p>Error loading posts</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <div>
            <h1>Your Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <Link href={`/pages/site/posts/edit?id=${post.id}`}>
                            <button>Edit Post</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;


// 'use client';
// import { useSearchParams } from 'next/navigation';
// import useSWR from 'swr';
// import axios from 'axios';
// import PostEditor from '@/app/components/ui/posts/edit';

// const fetcher = (url: string) => axios.get(url).then(res => res.data);

// const EditPost: React.FC = () => {
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id');

//     const { data, error, mutate } = useSWR(id ? `${process.env.LARAVEL}/api/posts/${id}` : null, fetcher);

//     if (error) return <p>Error loading post</p>;
//     if (!data) return <p>Loading...</p>;

//     return <PostEditor post={data} mutate={mutate} />;
// };

// export default EditPost;
