import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-[#0e0e0e] text-neutral-300 w-full ${inter.className}`}>
      <Head>
        <meta name="theme-color" content="#0e0e0e" />
      </Head>
      <section className="grid place-content-center h-[104vh] md:h-[100vh] box-border snap-center p-10">
        <div className="flex items-center relative md:static w-full">
          <Image
            src={"/circle.svg"}
            width={400}
            height={400}
            className="blur-lg relative z-0"
            alt="circle"
          />
          <div className="flex flex-col w-full text-center md:text-left absolute md:static top-1/2 left-1/2 md:translate-x-0 md:translate-y-0 -translate-x-1/2 -translate-y-1/2 md:-ml-40 gap-0 md:gap-3 z-10 font-light pb-5 md:pb-0">
            <p className="text-lg md:text-3xl text-neutral-500">
              Hi, my name is
            </p>
            <h1 className="text-3xl md:text-8xl">
              <span className="font-bold">Richard</span> Kunkli
            </h1>
            <p className="text-[11px] font-medium md:text-2xl text-neutral-500">
              UX/UX Designer & Front-End Developer{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="h-[100vh] snap-center p-5 md:p-10">
        <h1 className="text-2xl md:text-3xl font-medium text-neutral-400 mb-1 md:mb-3">
          project name
        </h1>
        <h2 className="text-base md:text-lg text-neutral-500 max-w-prose">
          description of this project
        </h2>
      </section>
    </main>
  );
}
