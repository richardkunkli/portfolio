import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/EmmaUSA.module.css";
import { Airplane } from "iconsax-react";

const EmmaUSA: NextPage = () => {
  const [showDetail, setShowDetail] = React.useState(false);
  return (
    <div className="bg-white w-[100vw] min-h-[100vh] flex justify-center text-black">
      <Head>
        <title>Emma Vrancsik's Journey</title>
        <meta
          name="description"
          content="An exchange student's journey in the USA."
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="w-full md:max-w-3xl px-4 py-6">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold">Emma Vrancsik</h1>
          <h3 className="text-neutral-600">
            Exchange student timeline journey
          </h3>
        </header>
        <ol className="relative border-l border-gray-200 ml-5">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 p-1 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <Airplane
                variant="Bold"
                color="currentColor"
                className="text-blue-500"
              />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
              Flight to the USA
              <span className="bg-blue-100 text-blue-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                Upcoming
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              11:20 — August 26th, 2022
            </time>
            <p
              onClick={() => setShowDetail(!showDetail)}
              className="mb-4 text-base font-normal text-gray-500"
            >
              Amsterdam ⇢ Seattle →{" "}
              <span className="font-medium">Washington State</span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default EmmaUSA;
