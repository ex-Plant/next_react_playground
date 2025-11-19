"use client";

import { useEffect, useState } from "react";

export const CommonReactMistakes = () => {
  const [weirdCount, setWeirdCount] = useState(0);
  const [weirdCount2, setWeirdCount2] = useState(0);
  const [weirdCount3, setWeirdCount3] = useState(0);
  const [weirdCount4, setWeirdCount4] = useState(0);
  // const [weirdCount, setWeirdCount] = useState(0);

  //1 Not working at all - it rund only once
  useEffect(() => {
    setInterval(() => {
      setWeirdCount(weirdCount + 1);
    }, 1000);
  }, []);

  // this is broken you update the state and than it is called again cause this state is in the
  // dep array
  useEffect(() => {
    setInterval(() => {
      setWeirdCount2(weirdCount2 + 1);
    }, 1000);
  }, [weirdCount2]);

  // works but not ideal - we do the cleanup to avoid updating the state many times
  useEffect(() => {
    const interval = setInterval(() => {
      setWeirdCount3(weirdCount3 + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [weirdCount3]);

  // correct way
  useEffect(() => {
    setInterval(() => {
      setWeirdCount4((curr) => curr + 1);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        not updating: {weirdCount}
        weird updated: {weirdCount2}
        fixed with cleanup: {weirdCount3}
        fixed with updated foo: {weirdCount4}
      </div>
    </>
  );
};
