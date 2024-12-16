import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Outlet, Link } from "react-router-dom";

const queryClient = new QueryClient();
function AdminLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export default AdminLayout;