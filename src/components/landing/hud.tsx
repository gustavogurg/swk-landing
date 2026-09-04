"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils/helpers/cn";

export type StatusTone = "ok" | "warn" | "alert";

const toneClass: Record<StatusTone, string> = {
  ok: "lk-status-dot--ok",
  warn: "lk-status-dot--warn",
  alert: "lk-status-dot--alert",
};

export function Caption({
  tone,
  children,
  className,
}: {
  tone?: StatusTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("lk-caption", className)}>
      {tone ? (
        <span className={cn("lk-status-dot", toneClass[tone])} aria-hidden />
      ) : null}
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
