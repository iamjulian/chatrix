import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatrix</title>
        <meta
          name="description"
          content="Chatrix : made for one to one chats"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
    </div>
  );
}
