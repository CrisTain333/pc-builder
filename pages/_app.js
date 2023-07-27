import "@/styles/globals.css";
import("preline");
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    // <Provider store={store}>
    getLayout(<Component {...pageProps} />)
  );
  //
}
