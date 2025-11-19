import React, { createContext } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const SomeOtherDummyCtx = createContext({
  value: "dummy value",
});

async function SomeOtherDummyCtxProvider(props) {
  return (
    <SomeOtherDummyCtxProvider value={{ value: "value" }}>
      <>SomeOtherDummyCtxProvider</>
    </SomeOtherDummyCtxProvider>
  );
}
