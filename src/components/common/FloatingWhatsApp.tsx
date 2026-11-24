'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Move } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';

export default function FloatingWhatsApp() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });
  const hasMovedRef = useRef(false);

  // Set initial position based on window width
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultY = window.innerHeight - 100;
      const defaultX = window.innerWidth - 180;
      setPosition({ x: Math.max(16, defaultX), y: Math.max(80, defaultY) });
    }
  }, []);

  useEffect(() => {
    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;
      if (e.buttons === 0) {
        isDraggingRef.current = false;
        return;
      }

      const deltaX = e.clientX - dragStartRef.current.startX;
      const deltaY = e.clientY - dragStartRef.current.startY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasMovedRef.current = true;
      }

      if (hasMovedRef.current) {
        const newX = Math.min(Math.max(12, dragStartRef.current.initialX + deltaX), window.innerWidth - 170);
        const newY = Math.min(Math.max(70, dragStartRef.current.initialY + deltaY), window.innerHeight - 70);
        setPosition({ x: newX, y: newY });
      }
    };

    const handleGlobalPointerUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('pointermove', handleGlobalPointerMove);
    window.addEventListener('pointerup', handleGlobalPointerUp);
    window.addEventListener('pointercancel', handleGlobalPointerUp);

    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      window.removeEventListener('pointercancel', handleGlobalPointerUp);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position?.x ?? 0,
      initialY: position?.y ?? 0,
    };
  };

  const handleButtonClick = () => {
    if (!hasMovedRef.current) {
      if (typeof window !== 'undefined') {
        window.open(generateWhatsAppLink(), '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <>
      {position && (
        <div
          onPointerDown={handlePointerDown}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 45,
            touchAction: 'none',
          }}
          className="hidden sm:flex items-center cursor-grab active:cursor-grabbing select-none"
        >
          <button
            type="button"
            onClick={handleButtonClick}
            className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-3 rounded-full shadow-premium hover:shadow-2xl active:scale-95 border-2 border-white backdrop-blur-md"
            aria-label="Chat on WhatsApp with Shri Sanwariya AC"
          >
            {/* <span className="text-white/60 group-hover:text-white transition-colors">
              <Move className="w-3.5 h-3.5" />
            </span> */}
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span className="text-xs font-bold tracking-wide">
              WhatsApp Us
            </span>
          </button>
        </div>
      )}
    </>
  );
}
