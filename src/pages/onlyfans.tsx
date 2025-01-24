import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { useEffect } from "react";

const OnlyFansPage: NextPage = () => {
  const incrementedCount = api.count.incrementCount.useMutation();

  useEffect(() => {
    incrementedCount.mutate(); 
  }, [incrementedCount]);

  const { data } = api.count.getCount.useQuery();
  if (!data) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>lul</title>
      </Head>
      <main>
        <h1 className="text-3xl text-center pb-2">{data?.count}</h1>
        <p className="text-center">
          people have searched for kevin&apos;s OnlyFans page 🥵
        </p>
      </main>
    </>
  );
};

export default OnlyFansPage;
