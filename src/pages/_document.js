import Document, { Html, Head, Main, NextScript } from 'next/document';

const imagePath = process.env.NODE_ENV !== 'development' ? '/wedding' : '';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link
            rel="icon"
            href={ `${ imagePath  }/favicon.png` }
          />
          <link
            rel="preload"
            href="https://denredsky.github.io/wedding/couple.webp"
            as="image"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&family=Amatic+SC:wght@700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Свадьба Ирины и Дениса, событие пройдет 27 мая 2021 года в бутик-отеле Сенешаль"
          />
          <meta
            property="og:title"
            content="Свадьба Дениса и Ирины"
          />
          <meta
            property="og:description"
            content="Свадьба Ирины и Дениса, событие пройдет 27 мая 2021 года в бутик-отеле Сенешаль"
          />
          <meta
            property="og:image"
            content="https://denredsky.github.io/wedding/couple.jpg"
          />
          <meta
            property="og:locale"
            content="ru_RU"
          />
          <meta
            property="og:type"
            content="website"
          />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
