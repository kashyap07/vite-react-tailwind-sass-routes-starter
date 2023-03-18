import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "./index.scss";

function New() {
  return (
    <main
      className={clsx(
        "flex min-h-screen w-full flex-col",
        "place-items-center items-center justify-center" // centered
        // "absolute top-52 items-center" // height from top
      )}
    >
      <h1 className="text-3xl">Vite kitchen sink starter</h1>
      <h2 className="text-xl">
        Vite + React + TS + Tailwind + Sass + Prettier + Generouted
      </h2>
    </main>
  );
}

export default New;
