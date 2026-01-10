"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/* -------------------------------------------------
   Utility: className merger
-------------------------------------------------- */
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

/* -------------------------------------------------
   Badge Component
-------------------------------------------------- */
export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300",
        className
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------
   Card Component
-------------------------------------------------- */
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-800 bg-neutral-900/50 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------
   FadeIn Animation Wrapper
-------------------------------------------------- */
export function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
