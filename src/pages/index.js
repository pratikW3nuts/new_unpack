import Head from "next/head";
import Banner from "@/components/Banner";
import Aboutus from "@/components/Aboutus";
import Service from "@/components/service";
import Numberspeak from "@/components/Numberspeak";
import Whyus from "@/components/Whyus";
import Testimonial from "@/components/Testimonial";
import Shipworldwide from "@/components/Shipworldwide";
import Ournews from "@/components/Ournews";
import Bookingform from "@/components/Bookingform";
export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Banner />
      <Aboutus />
      <Service />
      <Numberspeak />
      <Whyus />
      <Testimonial />
      <Shipworldwide />
      <Ournews />
      <Bookingform />
    </>
  );
}
