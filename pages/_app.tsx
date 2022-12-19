import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import SSRPlayer from "../components/shared/Player/SSRPlayer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
        <SSRPlayer
          imageUrl="https://pbs.twimg.com/media/A-lU5FnCcAA1Edi.jpg"
          audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
          waveStyles={{
            cursorWidth: 1,
            progressColor: "#ee3ec9",
            responsive: true,
            waveColor: "#121640",
            cursorColor: "transparent",
            barWidth: 0,
          }}
          containerStyles={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "#000",
          }}
          zoom={0}
        />
      </Provider>
    </SessionProvider>
  );
}
