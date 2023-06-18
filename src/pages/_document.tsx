import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div
          style={{
            maxWidth: '1100px',
            width: '100%',
            margin: '0 auto',
            padding: '0 1rem',
          }}
        >
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
