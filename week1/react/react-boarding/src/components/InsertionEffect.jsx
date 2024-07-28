import { useLayoutEffect, useRef } from 'react';

export const InsertionEffect = ()=> {
  const divRef = useRef();

  useLayoutEffect(() => {
    // This runs after the DOM updates but before the browser paints
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  return (
    <div ref={divRef} style={{ overflow: 'auto', maxHeight: '100px' }}>
      {Array.from({ length: 100 }).map((_, i) => (
        <p key={i}>Item {i + 1}</p>
      ))}
    </div>
  );
}
