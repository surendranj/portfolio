import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavProvider } from "../src/components/Nav/NavContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NavProvider>
            <Component {...pageProps} />
        </NavProvider>
    );
}

export default MyApp;
