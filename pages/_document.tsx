import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document<{}> {
  render() {
    return (
      <Html>
        <Head />
        <body className="font-display dark:bg-dark bg-gray-50 text-gray-700 transition-colors dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
