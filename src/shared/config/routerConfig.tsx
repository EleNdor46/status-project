import { ProfilePage } from "pages/ProfilePage/ui/ProfilePage";
import { MainPage } from "../../pages/MainPage/ui/MainPage";
export enum AppRoutes {
    MAIN = "main",
    PROFILE = "profile",
}
export const RoutePath = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PROFILE]: "/profile",
};

export const RouteConfig = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
};
