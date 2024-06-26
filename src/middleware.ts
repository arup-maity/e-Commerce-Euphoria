import type { NextRequest } from 'next/server'
interface Auth {
   login: boolean;
   role: string;
}
export async function middleware(request: NextRequest) {
   const token = request.cookies.get('token')?.value

   const options = {
      headers: {
         'Authorization': `Bearer ${token}`
      }
   };
   const url = process.env.NEXT_PUBLIC_API_URL + `/auth/check-login`
   var auth: Auth = { login: false, role: 'user' };

   const response = await fetch(url, options)
   const json = await response.json()
   console.log('auth middleware => ', json)
   if (response.status === 200) {
      auth.login = true
      auth.role = json.payload.role
   }

   // seller protect route
   if (!auth.login && request.nextUrl.pathname.startsWith('/admin/login')) {
      return
   }
   if (!auth.login && request.nextUrl.pathname.startsWith('/seller/login')) {
      return
   }
   if (!auth.login && request.nextUrl.pathname.startsWith('/seller/register')) {
      return
   }

   if (auth.login && auth.role !== "admin" && request.nextUrl.pathname.startsWith('/admin/login')) {
      return
   }
   if (auth.login && auth.role !== "seller" && request.nextUrl.pathname.startsWith('/seller/login')) {
      return
   }
   if (auth.login && auth.role !== "seller" && request.nextUrl.pathname.startsWith('/seller/register')) {
      return
   }

   if (auth.login && auth.role === "admin" && request.nextUrl.pathname.startsWith('/admin/login')) {
      return Response.redirect(new URL('/admin', request.url));
   }
   if (auth.login && auth.role === "seller" && request.nextUrl.pathname.startsWith('/seller/login')) {
      return Response.redirect(new URL('/seller/dashboard', request.url));
   }
   if (auth.login && auth.role === "seller" && request.nextUrl.pathname.startsWith('/seller/register')) {
      return Response.redirect(new URL('/seller/dashboard', request.url));
   }

   if (auth.login && auth.role !== "admin" && request.nextUrl.pathname.startsWith('/admin')) {
      return Response.redirect(new URL('/admin/login', request.url));
   }
   if (auth.login && auth.role !== "seller" && request.nextUrl.pathname.startsWith('/seller')) {
      return Response.redirect(new URL('/seller/login', request.url));
   }

   if (!auth.login && request.nextUrl.pathname.startsWith('/admin')) {
      return Response.redirect(new URL('/admin/login', request.url));
   }
   if (!auth.login && request.nextUrl.pathname.startsWith('/seller')) {
      return Response.redirect(new URL('/seller/login', request.url));
   }
}

export const config = {
   matcher: ['/seller/:path*', '/admin/:path*']
}