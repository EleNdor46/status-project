import { render } from "react-dom";
import "./app/style/index.scss";
import { App } from "app/ui/App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "app/provider/storeProvider/ui/StoreProvider";
import ThemeProvider from "app/provider/themeProvider/ui/ThemeProvider";

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,

    document.getElementById("root")
);
