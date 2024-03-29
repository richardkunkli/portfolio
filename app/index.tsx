"use client";

import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import styles from "../styles/Home.module.css";
import Section from "../components/section";
import Divider from "../components/divider";
import { ExportCircle, Copyright, Sms } from "iconsax-react";
import sectionData from "../data/data";
// import logo from "../public/logoMedium.svg";

const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full md:max-w-3xl px-4 md:mt-20 animate-reveal grid place-content-center mx-auto">
      <Head>
        <title>Richard Kunkli</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>

      <header className="w-full flex flex-col gap-2 md:bg-neutral-900 md:px-10 pb-4">
        <div className="flex flex-row justify-between items-start">
          <div className="h-12 w-12 relative mt-4 mb-2 md:mt-10">
            <Image alt="Logo" src="/LogoMedium.svg" height={48} width={48} />
          </div>
          <div
            className={`h-14 w-[72px] md:w-20 md:h-20 mr-2 md:mr-0 ${styles.dotGrid}`}></div>
        </div>
        <div className="w-full sticky top-0 bg-black pb-2 mt-0 md:mt-5 md:bg-transparent md:relative">
          <h1 className="text-3xl font-medium overflow-hidden">
            Richard <span className="font-light">Kunkli</span>
          </h1>
        </div>
      </header>
      <main className="flex flex-col gap-2 md:bg-neutral-900 md:px-10">
        <p className="text-lg max-w-prose tracking-tight">
          <span className="inline-block origin-[70%_70%] animate-wave mr-1">
            👋
          </span>{" "}
          Hello, I&apos;m Richard,{" "}
          <span className="font-semibold">Front-End Developer</span> and{" "}
          <span className="font-semibold">UI/UX Designer</span>{" "}
          <span className="whitespace-nowrap">from Hungary.</span>
        </p>
        <p className="text-lg font-light max-w-prose">
          At this time, I&apos;m a{" "}
          <span className="font-semibold">freelancer</span>, with the experience
          of commercial projects.
        </p>
        <Divider py="20px" />
        <h2 className="text-xl font-medium tracking-tight md:tracking-normal">
          <span className="mr-1 md:mr-2">👇</span>Dive into the showcase of my
          works
        </h2>
        <Divider py="20px" />
        {sectionData.map((data) => {
          return <Section {...data} key={data.description} />;
        })}
      </main>
      <footer className="text-neutral-600 mt-6 pb-4 text-center">
        <p className="flex flex-row items-center justify-center">
          <span className="inline-flex items-center gap-1 pr-3 font-light">
            <Copyright variant="Outline" className="w-4 h-4" />
            {new Date().getFullYear()}
          </span>
          <strong className="pr-1">Richard</strong>Kunkli
        </p>
        <p className="text-sm">made with react + nextjs</p>
      </footer>
    </div>
  );
};

export default Home;
