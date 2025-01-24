import { type NextPage } from "next";
import Head from "next/head";
import React from "react";
import { api } from "~/utils/api";
import Link from "next/link";

const Home: NextPage = () => {
  const mutation = api.count.incrementCount.useMutation();
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
          <li className="underline"><a href="https://thesweekly.com" target="_blank">newsletter 🗞️</a></li>
          <li className="underline"><a href="https://www.instagram.com/kevinnaughtonjr/" target="_blank">instagram 📸</a></li>
          <li className="underline"><a href="https://youtube.com/@kevinnaughtonjr" target="_blank">youtube 🎥</a></li>
          <li className="underline"><a href="https://www.linkedin.com/in/kevindnaughtonjr/" target="_blank">linkedin 🤮</a></li>
          <li className="underline"><a href="https://www.passionfroot.me/kevin-naughton-jr" target="_blank">collab 🤝</a></li>
          <li className="underline"><a href="https://amzn.to/3Oakt3i" target="_blank">my stuff 🎒</a></li>
          <li className="underline"><a href="https://thedailybyte.dev/?ref=kevin" target="_blank">the daily byte 💻</a></li>
          <li className="underline">
            <Link href="/onlyfans"
              onClick={(event) => {
                event.preventDefault()
                // mutation.mutate();
                window.location.href = "https://k2.codes/onlyfans";
              }}
            >onlyfans 🤫</Link>
          </li>
        </ul>

        <h1 className="text-2xl text-center pb-2 pt-4">biggest life achievements 🏆</h1>
        <ul className="text-center">
          <li>- creating this website</li>
          <li>- getting you to click on this website</li>
        </ul>
      </main>
    </>
  );
};

export default Home;
