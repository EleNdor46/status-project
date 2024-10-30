import { memo } from "react";
import { MainPage } from "pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "pages/ProfilePage/ui/ProfilePage";
import { HealthPage } from "pages/HealthPage/ui/HealthPage";
import { AppRouting } from "app/provider/router/AppRouting";
import { Navbar } from "shared/ui/Navbar/Navbar";
interface AppProps {
    className?: string;
}

export const App = memo(({ className }: AppProps) => {
    return (
        <div className={"app"}>
            <Navbar/>
            <AppRouting />
        </div>
    );
});
