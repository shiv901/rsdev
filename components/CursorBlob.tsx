'use client';

import { useRef, useEffect } from 'react';

const CursorBlob = () => {
  const blobRef = useRef<any>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      //   if (blobRef.current) {
      //     blobRef.current.style.left = `${clientX}px`;
      //     blobRef.current.style.top = `${clientY}px`;
      //   }

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        {
          duration: 3000,
          fill: 'forwards',
        }
      );
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div id='blob' ref={blobRef}></div>
      <div id='blob-blur'></div>
    </>
  );
};

export default CursorBlob;
