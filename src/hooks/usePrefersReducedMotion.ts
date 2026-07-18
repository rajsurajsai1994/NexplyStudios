import { useEffect, useState } from 'react';

// True when the visitor has "reduce motion" on at the OS/browser level -
// used to skip autoplaying background video and show the poster frame
// instead.
//
// Starts as `false` unconditionally (not a `typeof window` check) so the
// very first client render matches what the server rendered - SSR always
// produces `false` since `window` doesn't exist there. Checking
// `window.matchMedia` synchronously in the initializer would make the
// client's first render diverge from the server's whenever the visitor
// actually has reduce-motion on, which is exactly what triggers a
// hydration mismatch (React error #418). The real value is only read once
// mounted, in the effect below - that update happens after hydration
// completes, so it's just a normal state update, not a mismatch.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mql.matches);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
