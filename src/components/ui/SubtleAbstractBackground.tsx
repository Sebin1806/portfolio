import React from 'react';

export const SubtleAbstractBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Clean, shape-free static ambient background without circles, pluses, diamonds, or animations */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-[140px]" />
    </div>
  );
};
