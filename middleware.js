import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Пропускаем статические файлы, API routes и страницу авторизации
  const publicPaths = [
    '/_next',
    '/api/auth',
    '/api/contact', // Разрешаем API для контактов
    '/favicon.ico',
    '/images',
    '/file.svg',
    '/globe.svg',
    '/next.svg',
    '/vercel.svg',
    '/window.svg',
    '/robots.txt',
    '/sitemap.xml',
    '/auth',
  ];

  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));
  
  if (isPublicPath) {
    return NextResponse.next();
  }

  // Проверяем наличие cookie с паролем
  const passwordCookie = request.cookies.get('site_password');
  const correctPassword = process.env.SITE_PASSWORD;
  
  // Если пароль не установлен в переменных окружения, пропускаем проверку
  // (позволяет сборке пройти успешно, но в production нужно установить SITE_PASSWORD)
  if (!correctPassword) {
    // В режиме разработки или если пароль не настроен, пропускаем
    return NextResponse.next();
  }

  // Если cookie нет или пароль неверный, редиректим на страницу ввода пароля
  if (!passwordCookie || passwordCookie.value !== correctPassword) {
    // Редиректим на страницу ввода пароля
    const url = request.nextUrl.clone();
    url.pathname = '/auth';
    if (pathname !== '/') {
      url.searchParams.set('redirect', pathname);
    }
    return NextResponse.redirect(url);
  }

  // Пароль верный, разрешаем доступ
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
