import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-auto">
      <Head>
        <title>Insta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />
      <Header />
      <Feed />
    </div>
  );
}
