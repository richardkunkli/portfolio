import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-[#0e0e0e] text-neutral-300 w-full ${inter.className}`}>
      <section className="grid place-content-center h-[100vh] snap-center p-10">
        <div className="flex items-center">
          <Image
            src={"/circle.svg"}
            width={400}
            height={400}
            className="blur-lg relative z-0"
            alt="circle"
          />
          <div className="flex flex-col -ml-40 gap-4 z-10 font-light">
            <p className="text-3xl text-neutral-500">Hi, my name is</p>
            <h1 className="text-8xl">
              <span className="font-bold">Richard</span> Kunkli
            </h1>
            <p className="text-2xl text-neutral-500">
              UX/UX Designer & Front-End Developer{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="h-[100vh] snap-center p-10">
        <h1 className="text-3xl text-neutral-400 mb-3">projekt name</h1>
        <h2 className="text-lg text-neutral-500 max-w-prose">
          description of this project
        </h2>
      </section>
    </main>
  );
}
