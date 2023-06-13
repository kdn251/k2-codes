import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const OnlyFansPage: NextPage = () => {
  const PageLoadCount = () => {
    const count = api.count.incrementCount.useMutation();
    console.log('count: ' + count);
    const { data } = api.count.getCount.useQuery();
    if (!data) {
      return <div className="text-center">Loading...</div>
    }
    return <h1 className="text-3xl text-center pb-2">{data?.count}</h1>
  }
  // let newCount = data?.count + 1;
  // const { mutate } = api.count.incrementCount.useMutation({
  //   onSuccess: () => {
  //     console.log('yay');
  //   },
  //   onError: (e) => {
  //     console.log('oof');
  //   },
  // });
  // mutate({ newCount: initialCount + 1});

  return (
    <>
      <Head>
        <title>lul</title>
      </Head>
      <main>
        <PageLoadCount />
        <p className="text-center">People have searched for Kevin's OnlyFan's page 🥵</p>
      </main>
    </>
  );
};

export default OnlyFansPage;