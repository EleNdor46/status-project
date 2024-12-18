import { AuthoriztionPage } from "pages/AuthoriztionPage";
import { HealthPage } from "pages/HealthPage/ui/HealthPage";
import { IntellectPage } from "pages/IntellectPage/ui/IntellectPage";
import { NotFoundPage } from "pages/NotFoundPage/undex";
import { ProfilePage } from "pages/ProfilePage/ui/ProfilePage";
import { TargetPage } from "pages/TargetPage/ui/TargetPage";
export enum AppRoutes {
    TARGET = "target",
    HEALTH = "health",
    INTELLECT = "intellect",
    PROFILE = "profile",
    AUTHORIZATION = "authorization",
    //
    NOT_FOUND = "not_found",
}
export const RoutePath = {
    [AppRoutes.TARGET]: "/target",
    [AppRoutes.HEALTH]: "/health",
    [AppRoutes.INTELLECT]: "/intellect",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.AUTHORIZATION]: "/authorization",
    //
    [AppRoutes.NOT_FOUND]: "/not_found",
};

export const RouteConfig = {
    [AppRoutes.TARGET]: {
        path: RoutePath.target,
        element: <TargetPage />,
    },
    [AppRoutes.HEALTH]: {
        path: RoutePath.health,
        element: <HealthPage />,
    },
    [AppRoutes.INTELLECT]: {
        path: RoutePath.intellect,
        element: <IntellectPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}/:id`,
        element: <ProfilePage />,
    },
    //
    [AppRoutes.AUTHORIZATION]: {
        path: `${RoutePath.authorization}`,
        element: <AuthoriztionPage />,
    },
    //
    [AppRoutes.NOT_FOUND]: {
        path: `*`,
        element: <NotFoundPage />,
    },
};
