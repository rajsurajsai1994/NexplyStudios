import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Ensures every navigation lands at the top of the new page (showing its
// hero/header) instead of keeping the previous page's scroll position -
// React Router doesn't do this automatically in an SPA.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
