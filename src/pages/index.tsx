import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>K2</title>
      </Head>
      <main>
        <h1 className="text-4xl text-center pb-2">about kevin</h1>
        <p className="text-center">
          kevin is a ~<b>content creator</b>~ and a software engineer at <a className="underline" href="https://bing.com/" target="_blank"><span className="G">G</span><span className="o-red">o</span><span className="o-yellow">o</span><span className="G">g</span><span className="G">l</span><span className="e-red">e</span></a> in <a className="underline" href="https://www.google.com/search?sxsrf=APwXEdeQziHmog78GP0NYuLNLY_zfBXmTw:1686628808081&q=dumpster+fire&tbm=isch&sa=X&ved=2ahUKEwiIx-T3rb__AhWYFlkFHYXIDM4Q0pQJegQICxAB&biw=1728&bih=920&dpr=2" target="_blank">nyc</a>. as a human, kevin has many links like...  </p>
        <ul className="text-center list-disc">
          <li className="underline"><a href="https://youtube.com/@kevinnaughtonjr" target="_blank">YouTube 🎥</a></li>
          <li className="underline"><a href="https://twitter.com/kevinnaughtonjr" target="_blank">Twitter 🐦</a></li>
          <li className="underline"><a href="https://www.instagram.com/kevinnaughtonjr/" target="_blank">Instagram 📸</a></li>
          <li className="underline"><a href="https://www.linkedin.com/in/kevindnaughtonjr/" target="_blank">LinkedIn 👔</a></li>
          <li className="underline"><Link href="/onlyfans">OnlyFans 🤫</Link></li>
        </ul>

        <h1 className="text-2xl text-center pb-2 pt-4">biggest life achievements</h1>
        <ul className="text-center">
          <li>- creating this website</li>
          <li>- getting you to click on this website</li>
        </ul>
      </main>
    </>
  );
};

export default Home;
