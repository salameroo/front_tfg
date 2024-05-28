// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Función para obtener el valor de una cookie
function getCookie(name: string, cookie: string | null) {
    if (!cookie) return null;
    const match = cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

export function middleware(request: NextRequest) {
    const token = getCookie('auth_token', request.headers.get('cookie'));

    if (!token) {
        return NextResponse.redirect(new URL('/pages/login', request.url));
    } else {
        return NextResponse.next();
    }

    // Aquí podrías implementar una verificación adicional del token si es necesario
    // if (!verifyToken(token)) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }

    return NextResponse.next();
}

export const config = {
    matcher: '/pages/site/:path*', // Asegúrate de ajustar esto a las rutas que deseas proteger
};
