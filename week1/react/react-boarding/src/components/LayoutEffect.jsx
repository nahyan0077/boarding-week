import { useLayoutEffect, useRef } from 'react';

export const LayoutEffect = () => {
  const divRef = useRef();

  useLayoutEffect(() => {
    // This runs after the DOM updates but before the browser paints
    const { width, height } = divRef.current.getBoundingClientRect();
    console.log('Width:', width, 'Height:', height);
  });

  return (
    <div ref={divRef}>
      This is a div.
    </div>
  );
}
