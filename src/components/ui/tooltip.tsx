import React from 'react';

export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Tooltip: React.FC<any> = ({ children }) => {
  return <div>{children}</div>;
};

export const TooltipTrigger: React.FC<any> = ({ children }) => {
  return <div>{children}</div>;
};

export const TooltipContent: React.FC<any> = ({ children }) => {
  return <div>{children}</div>;
};
