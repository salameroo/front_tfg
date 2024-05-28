// pages/404.js
import Link from 'next/link';

export default function Custom404() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/">
                <p style={{ color: 'blue', textDecoration: 'underline' }}>Go back to Home</p>
            </Link>
        </div>
    );
}
