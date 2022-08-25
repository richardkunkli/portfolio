import React from "react";
import { Divider } from "./divider";

interface SectionProps {
  title: JSX.Element;
  heading: string;
  description: string;
  data: { valueName: string; value: JSX.Element }[];
}

const Section = (props: SectionProps) => {
  return (
    <>
      <section className="flex flex-col gap-4">
        {props.title}
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="font-normal text-lg leading-snug max-w-prose">
            {props.heading}
          </h3>
          <p className="text-neutral-400 tracking-tight leading-snug max-w-prose md:max-w-3xl md:tracking-normal">
            {props.description}
          </p>
        </div>
        <Divider width={40} py="10px" />
        <div className="mx-auto flex flex-col gap-2 w-full">
          {props.data.map((item) => {
            return (
              <div className="flex flex-row justify-between items-center">
                <p className="text-neutral-400">{item.valueName}</p>
                {item.value}
              </div>
            );
          })}
        </div>
      </section>
      <Divider py="20px" />
    </>
  );
};

export default Section;
