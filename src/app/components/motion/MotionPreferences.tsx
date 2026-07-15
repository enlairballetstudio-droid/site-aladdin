'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionPreferencesProps {
  readonly children: ReactNode;
}

export default function MotionPreferences({ children }: MotionPreferencesProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
