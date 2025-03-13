"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0.9, opacity: 0, y: 50 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.9, opacity: 0, y: -50 },
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 20,
      mass: 0.8
    },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

interface AnimatedListProps {
  children: React.ReactNode[];
  className?: string;
  delay?: number;
  infinite?: boolean;
  maxItems?: number;
}

export const AnimatedList: React.FC<AnimatedListProps> = ({ 
  children, 
  className, 
  delay = 1000,
  infinite = true,
  maxItems = 5
}) => {
  const [index, setIndex] = useState(0);
  const childrenArray = useMemo(() => children, [children]);
  const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (childrenArray.length === 0) return;

    // Initial item
    if (visibleItems.length === 0 && childrenArray.length > 0) {
      setVisibleItems([childrenArray[0]]);
      setIndex(1);
    }

    // Set up interval for adding new items
    const interval = setInterval(() => {
      if (!infinite && index >= childrenArray.length) {
        clearInterval(interval);
        return;
      }

      const nextIndex = index % childrenArray.length;
      const nextItem = childrenArray[nextIndex];

      setVisibleItems(prev => {
        // Keep only the last maxItems
        const newItems = [...prev, nextItem];
        if (newItems.length > maxItems) {
          return newItems.slice(newItems.length - maxItems);
        }
        return newItems;
      });

      setIndex(prev => prev + 1);
    }, delay);

    return () => clearInterval(interval);
  }, [childrenArray, index, delay, infinite, maxItems, visibleItems.length]);

  return (
    <div className={className}>
      <AnimatePresence mode="popLayout">
        {visibleItems.map((item, idx) => (
          <AnimatedListItem key={`${idx}-${index}`}>
            {item}
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}; 