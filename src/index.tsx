import { render } from "react-dom";
import "./app/style/index.scss";
import { App } from "app/ui/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StoreProvider } from "app/provider/storeProvider/ui/StoreProvider";

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,

    document.getElementById("root")
);
