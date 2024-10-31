import { HealthPage } from "pages/HealthPage/ui/HealthPage";
import { IntellectPage } from "pages/IntellectPage/ui/IntellectPage";
import { ProfilePage } from "pages/ProfilePage/ui/ProfilePage";
import { TargetPage } from "pages/TargetPage/ui/TargetPage";
export enum AppRoutes {
    TARGET = "target",
    HEALTH = "health",
    INTELLECT = "intellect",
    PROFILE = "profile",
}
export const RoutePath = {
    [AppRoutes.TARGET]: "/target",
    [AppRoutes.HEALTH]: "/health",
    [AppRoutes.INTELLECT]: "/intellect",
    [AppRoutes.PROFILE]: "/profile",
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
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
};
