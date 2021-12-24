/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback, useRef, useState, useEffect } from 'react';

type Props = {
  duration?: number;
};

function useClipboard(props?: Props) {
  const { duration } = props ? props : { duration: 3000 };
  const [copied, setCopied] = useState<boolean>(false);
  const ref = useRef<HTMLElement | HTMLDivElement | any>(null);
  const resetCopy = useRef<any>(null);

  const onCopy = useCallback(async () => {
    await navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref]);

  useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(() => setCopied(false), duration);
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied, duration]);

  return { copied, ref, onCopy };
}

export { useClipboard };
