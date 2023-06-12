import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>K2</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center pb-2">About Kevin</h1>
        <p className="text-center">Kevin is a ~content creator~ and a Software Engineer at <a className="underline" href="https://bing.com/" target="_blank">Google</a> working in New York City. As a human, Kevin has many links including...</p>
        <ul className="text-center list-disc">
          <li className="underline"><a href="https://youtube.com/@kevinnaughtonjr" target="_blank">YouTube 🎥</a></li>
          <li className="underline"><a href="https://twitter.com/kevinnaughtonjr" target="_blank">Twitter 🐦</a></li>
          <li className="underline"><a href="https://www.instagram.com/kevinnaughtonjr/" target="_blank">Instagram 📸</a></li>
          <li className="underline"><a href="https://www.linkedin.com/in/kevindnaughtonjr/" target="_blank">LinkedIn 👔</a></li>
          <Link href="/onlyfans"><li className="underline">OnlyFans 🤫</li></Link>
        </ul>
      </main>
    </>
  );
};

export default Home;
