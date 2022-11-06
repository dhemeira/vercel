import Head from 'next/head';
import Link from 'next/link';

const Tools = () => {
  return (
    <>
      <Head>
        <title>Dhemeira | Tools</title>
        <meta name="description" content="Self-created web tools" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Tools</h1>
        <div className="flex flex-col">
          <Link href="/todo" className="btn btn-primary">
            Todo
          </Link>
        </div>
      </div>
    </>
  );
};

export default Tools;
