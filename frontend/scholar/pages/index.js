import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scholar | Home</title>
        <meta
          name="description"
          content="Scholar!! Get your scholarship now.."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/colleges">
        <h2>Colleges</h2>
      </Link>
      <Link href="/courses">
        <h2>Courses</h2>
      </Link>
    </>
  );
}
