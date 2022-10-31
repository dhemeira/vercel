import Head from 'next/head';

const Fallback = () => (
  <>
    <Head>
      <title>Dhemeira | Offline</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="description" content="Offline page" />
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </>
);

export default Fallback;
