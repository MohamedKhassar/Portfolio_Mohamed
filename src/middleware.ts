import { NextRequest, NextResponse } from "next/server";
import projects from "./data/Data";
import axios from "axios";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl.clone();
    try {
        const name = pathname.slice('/project/'.length).replaceAll("%20", " ");
        const response = await axios.get(`${process.env.BASE_URL}/api/project/${name}`);
        const data = response.data

        if (!data.exists) {
            return NextResponse.redirect(new URL('/not-found', request.nextUrl.origin));
        }
        return NextResponse.next();
    } catch (error) {
        const err = error as Error
        console.error(err.message);
    }
    return NextResponse.next();
}

export const config = {
    matcher: '/project/:path*',
};
