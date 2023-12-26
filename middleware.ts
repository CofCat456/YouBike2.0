import { type NextRequest, NextResponse } from 'next/server';

import { navList } from './data/navs';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const mathUrls = navList.map(({ link }: { link: string }) => link);

  if (mathUrls.includes(pathname.replace('/', ''))) {
    return NextResponse.rewrite(new URL('/site', request.url));
  }
}
