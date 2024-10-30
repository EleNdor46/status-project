import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage/ui/ProfilePage";
import { Routes, Route } from "react-router-dom";
import cls from "./Routing.module.scss";
import { Suspense, memo } from "react";
import { RouteConfig } from "shared/config/routerConfig";
interface RoutingProps {
    className?: string;
}

export const AppRouting = memo(({ className }: RoutingProps) => {
    return (
        <Routes>
            {Object.values(RouteConfig).map((route) => (
                <Route path={route.path} element={route.element} />
            ))}
        </Routes>
    );
});
