import { isRouteErrorResponse, Outlet, useRouteError } from "react-router-dom";
import { AuthLayout } from "../layout/auth";

export const RootLayout: React.FC = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export const RootErrorElement: React.FC = () => {
  const err = useRouteError();
  return (
    <AuthLayout>
      <div>
        {isRouteErrorResponse(err) ? <h1>Error</h1> : <h1>Something Went</h1>}
      </div>
    </AuthLayout>
  );
};
