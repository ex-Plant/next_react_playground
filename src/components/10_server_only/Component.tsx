"use client";
import { doSomethingOnTheServer } from "@/lib/server_utils/serverUtils";

const ServerOnly = () => {
  // this will throw an error
  await doSomethingOnTheServer();
  return <>ServerOnly</>;
};

export default ServerOnly;
