import projects from "@/data/Data"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest, { params: { name } }: { params: { name: string } }) => {
    const project = projects.find(project =>
        project.title.toLowerCase() === name.toLowerCase().replaceAll("%20", " ")
    );

    if (project) {
        return NextResponse.json({ exists: true });
    } else {
        return NextResponse.json({ exists: false });
    }
}