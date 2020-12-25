import type { AppProps } from "next/app";

import "../styles/globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
