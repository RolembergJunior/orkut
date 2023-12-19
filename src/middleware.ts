import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest){
    const token = request.cookies.get("auth_token")?.value;

    const singInURL = new URL("/", request.url);

    if(!token) {
        if(request.nextUrl.pathname === "/") return NextResponse.next();
        
        return NextResponse.redirect(singInURL);
    } 

    const homeURL = new URL("/home", request.url);

        if(request.nextUrl.pathname === "/"){
            return NextResponse.redirect(homeURL);
        }
}

export const config = {
    matcher: ["/", "/home", "/perfil", "/jogos", "/comunidade"],
};