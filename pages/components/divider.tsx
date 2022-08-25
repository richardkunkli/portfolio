import React from "react";

type DividerProps = {
  width?: Number;
  py?: String;
};

export const Divider = ({ width, py }: DividerProps) => (
  <div
    className="w-full h-0.5 flex justify-center"
    style={{ padding: `${py} 0` }}
  >
    <div
      className="h-[1px] bg-neutral-700"
      style={{ width: `${width ? width : 100}%` }}
    />
  </div>
);
