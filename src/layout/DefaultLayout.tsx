import React, { useState, ReactNode } from 'react';


const DefaultLayout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 flex h-screen flex-row   dark:text-bodydark">
     {children}
    </div>
  );
};

export default DefaultLayout;
