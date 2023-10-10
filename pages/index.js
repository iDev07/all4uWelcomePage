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
import "swiper/css";
import "swiper/css/navigation";
import { ProductCategory } from "../components/categoryProducts/productCategory";
export default function Home() {
  return (
    <>
      <Head>
        <title>Turbo Market</title>
        <meta
          name="description"
          content="Wholesale and retail trading platform for searching, purchasing and delivering goods and products throughout the CIS countries - Uzbekistan, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Georgia, Armenia, Azerbaijan"
        />
        <link rel="icon" href="miniT.png" />
        <meta name="author" content="World Miral" />
      </Head>
      <MobileHeader />
      <Header />
      <HomeMain />

      <ProductCategory
        category_id={786}
        category_name={"Матрасы"}
        limit={20}
        lang_id={"ru"}
      />

      <ProductCategory
        category_id={794}
        category_name={"Женская одежда"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={782}
        category_name={"Инструменты"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={775}
        category_name={"Товары из Турции"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={712}
        category_name={"Товары из Китая"}
        limit={20}
        lang_id={"ru"}
      />

      <ProductCategory
        category_id={696}
        category_name={"Мужская парфюмерия"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={693}
        category_name={"Подарки"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={692}
        category_name={"Женская косметика"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={688}
        category_name={"Автомобили, транспорт и комплектующие"}
        limit={20}
        lang_id={"ru"}
      />
      <ProductCategory
        category_id={687}
        category_name={"Дом, офис и строительство"}
        limit={20}
        lang_id={"ru"}
      />

      {/* <SmallServices /> */}
      {/* <Orders /> */}
      {/* <Wholesale /> */}
      <Retail />
      <Advanteges />
      <Join />
      <Services />
      <News />

      {/* <MobileFooter /> */}
    </>
  );
}
