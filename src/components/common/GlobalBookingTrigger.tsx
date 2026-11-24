'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Zap, Move } from 'lucide-react';
import BookingWizardModal from '@/components/common/BookingWizardModal';

export default function GlobalBookingTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });
  const hasMovedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const defaultY = window.innerHeight - 100;
      const defaultX = 24;
      setPosition({ x: defaultX, y: Math.max(80, defaultY) });
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
        const newX = Math.min(Math.max(12, dragStartRef.current.initialX + deltaX), window.innerWidth - 220);
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
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {/* Floating Draggable 1-Min Booking Pill */}
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
          className="hidden md:flex items-center cursor-grab active:cursor-grabbing select-none"
        >
          <button
            type="button"
            onClick={handleButtonClick}
            className="group flex items-center gap-2.5 bg-navy-950/95 hover:bg-navy-900 text-white pl-3 pr-4 py-2.5 rounded-full shadow-2xl border border-electric-500/40 backdrop-blur-md active:scale-95"
          >
            {/* <span className="text-white/40 group-hover:text-white/80 transition-colors">
              <Move className="w-3 h-3" />
            </span> */}
            <div className="w-6 h-6 rounded-full bg-electric-500 text-white flex items-center justify-center shadow-glow-electric">
              <Zap className="w-3.5 h-3.5 fill-white" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-black uppercase tracking-wider block text-white leading-tight">
                1-Min Instant Booking
              </span>
              <span className="text-[9px] text-electric-300 font-bold block">
                Doorstep Service in Indore
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Actual Wizard Modal */}
      <BookingWizardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
