"use client"
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-pink-50/50 to-transparent pointer-events-none">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50/5 to-transparent opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-pink-50/5 to-transparent opacity-20 pointer-events-none" />
        </div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
