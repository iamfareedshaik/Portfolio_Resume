import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RootLayout, RootErrorElement } from "./pages/_layout";
import PortfolioWrap from "./pages";
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorElement />,
    children: [
      {
        index: true,
        element: (
          <PortfolioWrap>
            <Home />
          </PortfolioWrap>
        ),
      },
      {
        path: "/ProfessionalExperience",
        lazy: async () => {
          const { default: ProfessionalExp } = await import(
            "./pages/home/ProfessionalExp/ProfessionalExp"
          );
          return {
            Component: () => (
              <PortfolioWrap>
                <ProfessionalExp />
              </PortfolioWrap>
            ),
          };
        },
      },
      {
        path: "/achievments",
        lazy: async () => {
          const { default: Achievement } = await import(
            "./pages/home/Achievments/Achievement"
          );
          return {
            Component: () => (
              <PortfolioWrap>
                <Achievement />
              </PortfolioWrap>
            ),
          };
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
