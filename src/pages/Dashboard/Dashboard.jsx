import React from 'react';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function DashboardPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DashboardPage;
