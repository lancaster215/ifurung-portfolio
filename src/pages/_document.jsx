import { Html, Head, Main, NextScript } from "next/document";
import _var from '../styles/colors';

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth', }}>
      <Head />
      <body style={{ backgroundColor: _var['--common-dark-background'] }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
