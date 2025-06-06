"use client";
export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <button onClick={() => alert("I am a client")}>{children}</button>;
};
