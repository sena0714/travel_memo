import {NextFetchEvent, NextRequest, NextResponse} from "next/server";

const isAuthenticated = async (req: NextRequest, referer: string) => {
    const request = new Request('http://web:80/api/logged_in');
    const res = await fetch(request, {
        method: 'GET',
        cache: "no-store",
        credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': req.headers.get('cookie') ?? '',
            'referer': referer
        },
    })
    .then(response => response.json())
    .then(data => {
        return data
    });
    return res;
}

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith('/login') && await isAuthenticated(req, process.env.NEXT_PUBLIC_MY_APP_URL+req.nextUrl.pathname)) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/';
        return NextResponse.redirect(redirectUrl);
    }
    
    if (
        (
            req.nextUrl.pathname.endsWith('/') ||
            req.nextUrl.pathname.startsWith('/users')
        ) 
        && !(await isAuthenticated(req, process.env.NEXT_PUBLIC_MY_APP_URL+req.nextUrl.pathname))
    ) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = '/login';
        return NextResponse.redirect(redirectUrl);
    }

    return NextResponse.next()
}