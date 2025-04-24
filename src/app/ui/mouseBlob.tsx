'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import './blobBackground.css';

export default function MouseBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseBlob = blobRef.current;
    if (!mouseBlob) return;

    let curX = 0, curY = 0;
    let mouseX = 0, mouseY = 0;

    const lag = () => {
      curX += (mouseX - curX) / 20;
      curY += (mouseY - curY) / 20;
      mouseBlob.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(lag);
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    lag();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (<div className="mouseBlob" ref={blobRef}></div>);
}
