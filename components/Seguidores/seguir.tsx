import React, { useState } from 'react';
import Cookies from 'js-cookie';

interface FollowButtonProps {
    userId: number;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
    const [following, setFollowing] = useState(false);

    const handleFollow = async () => {
        try {
            const response = await fetch(`${process.env.LARAVEL}/api/follow`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('auth_token')}`
                },
                credentials: 'include',
                body: JSON.stringify({ user_id: userId })
            });

            if (response.ok) {
                setFollowing(true);
            } else {
                const res = await response.json();
                console.error('Failed to follow:', res.message);
            }
        } catch (error) {
            console.error('An error occurred while following:', error);
        }
    };

    return (
        <button onClick={handleFollow} disabled={following}>
            {following ? 'Following' : 'Follow'}
        </button>
    );
};

export default FollowButton;
