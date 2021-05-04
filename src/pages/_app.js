import 'src/styles/global.sass';

export default function App({ Component, pageProps }) {
  return <Component { ...pageProps } />;
}
