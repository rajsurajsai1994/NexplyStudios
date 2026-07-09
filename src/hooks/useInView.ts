import { useEffect, useRef, useState } from 'react';

// Reports true once the element has scrolled near the viewport, and stays
// true afterward (used to defer starting background-video downloads until
// a section is actually about to be seen, instead of every video on a page
// fetching at once on load).
export function useInView<T extends HTMLElement>(rootMargin = '600px 0px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
}
