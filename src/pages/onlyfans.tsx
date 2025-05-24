import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const OnlyFansPage: NextPage = () => {
  const PageLoadCount = () => {
    const { data } = api.count.getCount.useQuery();
    if (!data) {
      return <div className="text-center">Loading...</div>
    }
    return <h1 className="text-3xl text-center pb-2">{data?.count}</h1>
  }

  return (
    <>
      <Head>
        <title>lul</title>
      </Head>
      <main>
        <PageLoadCount />
        <p className="text-center">people have searched for kevin&apos;s OnlyFans page 🥵</p>
      </main>
    </>
  );
};

export default OnlyFansPage;
