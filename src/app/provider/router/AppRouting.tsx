import { Routes, Route } from "react-router-dom";
import { Suspense, memo } from "react";
import { RouteConfig } from "shared/config/routerConfig";
interface RoutingProps {
    className?: string;
}

export const AppRouting = memo(({ className }: RoutingProps) => {
    return (
        <Routes>
            {Object.values(RouteConfig).map((route) => (
                <Route
                    path={route.path}
                    element={route.element}
                    key={route.path}
                />
            ))}
        </Routes>
    );
});
