import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito_Sans } from "@next/font/google";

const nunito = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={nunito.className}>
            <Component {...pageProps} />
        </main>
    );
}
