import React from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const List = ({ children, className = "" }: ListProps) => {
  return (
    <div className={`bg-white p-4 rounded-xl shadow-lg ${className}`}>
      {children}
    </div>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem = ({ children, className = "" }: ListItemProps) => {
  return (
    <div className={`border-b last:border-0 py-4 ${className}`}>{children}</div>
  );
};
