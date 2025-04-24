import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./app/lib/session";

const protectedRoutes = ["/home"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname;
    const isPortectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;
    const session = cookie ? await decrypt(cookie) : null;

    if(isPortectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if(isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL("/home", req.nextUrl));
    }
    return NextResponse.next();
}