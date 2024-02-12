import "@/styles/globals.css";
import "@/styles/fonts.css";
import Header from "@/components/layout/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
