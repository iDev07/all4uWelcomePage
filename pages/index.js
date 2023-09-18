import Head from "next/head";
import Advanteges from "../components/Advanteges";
import Footer from "../components/Footer";
import Header from "../components/layouts/Header";
import HomeMain from "../components/HomeMain";
import Join from "../components/Join";
import MobileFooter from "../components/MobileFooter";
import { MobileHeader } from "../components/MobileHeader";
import News from "../components/News";
import Orders from "../components/Orders";
import Retail from "../components/Retail";
import Services from "../components/Services";
import SmallServices from "../components/SmallServices";
import Wholesale from "../components/Wholesale";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALL4U - marketplace</title>
      </Head>
      <MobileHeader />
      <Header />
      <HomeMain />
      <SmallServices />
      <Orders />
      <Wholesale />
      <Retail />
      <Advanteges />
      <Join />
      <Services />
      <News />

      {/* <MobileFooter /> */}
    </>
  );
}
