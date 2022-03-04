import React from "react";

export const DesktopOnly: React.FC<{
  className?: string;
}> = ({ className, children }) => {
  return <span className={className + " desktopOnly"}>{children}</span>;
};
