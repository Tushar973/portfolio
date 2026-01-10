// src/components/ui-components.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";

// --- Badge Component ---
export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900/50 px-2 py-1 text-xs font-medium text-neutral-300 ring-1 ring-inset ring-neutral-700/20 ${className}`}
    >
      {children}
    </span>
  );
}

// --- Card Component ---
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-neutral-800 bg-neutral-950/50 p-6 ${className}`}>
      {children}
    </div>
  );
}

// --- Section Animation Wrapper ---
export function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}