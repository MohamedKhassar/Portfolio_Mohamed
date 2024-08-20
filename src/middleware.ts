import { NextRequest, NextResponse } from "next/server";
import projects from "./data/Data";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Only process requests starting with '/project/'
    if (pathname.startsWith('/project/')) {
        const name = pathname.slice('/project/'.length).replaceAll("%20", " ");

        // Find the project by title
        const projectExists = projects.some(project =>
            project.title.toLowerCase() === name.toLowerCase()
        );

        // Redirect if project not found, otherwise continue
        if (!projectExists) {
            return NextResponse.redirect(new URL('/not-found', request.nextUrl.origin));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/project/:path*',
};
