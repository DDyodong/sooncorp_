import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import AppRouter from './router';
import { localeForPath, pages, redirectForPath } from './site';
import './index.css';

const redirect = redirectForPath(window.location.pathname);
if (redirect) {
  // Fallback for local previews; CloudFront performs the permanent redirects.
  window.location.replace(redirect + window.location.search + window.location.hash);
} else {
  const locale = localeForPath(window.location.pathname);
  document.documentElement.lang = locale ?? 'ko';
  document.title = locale ? pages[locale].title : '페이지를 찾을 수 없습니다 | SOON Corporation';
  const root = document.getElementById('root')!;
  const page = <StrictMode><AppRouter locale={locale} /></StrictMode>;
  if (root.dataset.prerendered === 'true') hydrateRoot(root, page);
  else createRoot(root).render(page);
}
