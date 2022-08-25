import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Section from "./components/section";
import { Divider } from "./components/divider";
import Logo from "../public/logoMedium.svg";
import { ExportCircle, Copyright, Sms } from "iconsax-react";
import sectionData from "./data";

const Home: NextPage = () => {
  return (
    <div className="w-full md:max-w-3xl px-4 md:mt-20 animate-reveal">
      <Head>
        <title>Richard Kunkli</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>

      <header className="w-full flex flex-col gap-2 md:bg-neutral-900 md:px-10 pb-4">
        <div className="flex flex-row justify-between items-start">
          <div className="h-12 w-12 relative mt-4 mb-2 md:mt-10">
            <Image alt="Logo" src={Logo} layout="fill" objectFit="contain" />
          </div>
          <div className={`h-14 w-20 md:h-20 ${styles.dotGrid}`}></div>
        </div>
        <div className="w-full sticky top-0 bg-black pb-2 mt-0 md:mt-5 md:bg-transparent md:relative">
          <h1 className="text-3xl font-medium overflow-hidden">
            Richard <span className="font-light">Kunkli</span>
          </h1>
        </div>
      </header>
      <main className="flex flex-col gap-2 md:bg-neutral-900 md:px-10">
        <p className="text-lg max-w-prose tracking-tight">
          <span className="inline-block origin-[70%_70%] animate-wave">👋</span>{" "}
          Hello, I'm Richard,{" "}
          <span className="font-semibold">Front-End Developer</span> and{" "}
          <span className="font-semibold">UI/UX Designer</span>{" "}
          <span className="whitespace-nowrap">from Hungary.</span>
        </p>
        <p className="text-lg font-light max-w-prose">
          At this time, I'm a <span className="font-semibold">freelancer</span>,
          with the experience of commercial projects.
        </p>
        <Divider py="20px" />
        <h2 className="text-xl font-medium tracking-tight md:tracking-normal">
          <span className="mr-1">👇</span>Dive into the showcase of my works
        </h2>
        <Divider py="20px" />
        {sectionData.map((data) => {
          return <Section {...data} />;
        })}
      </main>
      <footer className="text-neutral-600 mt-6 pb-4 text-center">
        <p className="flex flex-row items-center justify-center">
          <span className="inline-flex items-center gap-1 pr-3 font-light">
            <Copyright variant="Broken" className="w-4 h-4" />
            2022
          </span>
          <strong className="pr-1">Richard</strong>Kunkli
        </p>
        <p className="text-sm">made with react + nextjs</p>
      </footer>
    </div>
  );
};

export default Home;
