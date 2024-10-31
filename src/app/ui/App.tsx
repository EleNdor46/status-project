import { memo } from "react";
import { AppRouting } from "app/provider/router/AppRouting";
import { Navbar } from "shared/ui/Navbar/Navbar";
interface AppProps {
    className?: string;
}

export const App = memo(({ className }: AppProps) => {
    return (
        <div className={"app"}>
            <Navbar />
            <AppRouting />
            
        </div>
    );
});
