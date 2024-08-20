import { NextRequest, NextResponse } from "next/server"
import projects from "./data/Data"

export function middleware(request: NextRequest) {
    const name = request.nextUrl.pathname.replaceAll("/project/", "")
    const project = projects.find(project => project.title.toLowerCase() == name.toLowerCase().replaceAll("%20", " "))
    if (!project) {
        return NextResponse.redirect(new URL('/not-found', request.nextUrl.origin))
    } else {
        return NextResponse.next()
    }
}

export const config = {
    matcher: '/project((?!_next|static).*)'
}