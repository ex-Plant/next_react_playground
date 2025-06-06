"use client";

import React, { useEffect, useState } from "react";

function Component(props) {
  // **Abort controller**
  //   -If you want to abort fetch for some reason

  function useFetchData(url) {
    const [data, setData] = useState(null);
    const [controller, setController] = useState<AbortController | null>(null);

    const refetch = () => {
      // Abort previous fetch if it exists
      if (controller) controller.abort();

      const newController = new AbortController();
      setController(newController);

      fetch(url, { signal: newController.signal })
        .then((res) => res.json())
        .then(setData)
        .catch((err) => {
          if (err.name !== "AbortError") throw err;
        });
    };

    useEffect(() => {
      refetch();
      // Cleanup on unmount
      return () => {
        if (controller) controller.abort();
      };
      // eslint-disable-next-line
    }, [url]);

    return { data, refetch };
  }

  // how to clear multiple events before
  useEffect(() => {
    function handleScroll() {
      console.log(`scroll...`);
    }

    function handleClick() {
      console.log("click...");
    }

    function dragstart() {
      console.log("dragstart...");
    }

    window.addEventListener(`scroll`, () => handleScroll());
    document.addEventListener(`click`, () => handleClick());
    document.addEventListener(`dragstart`, () => dragstart());

    // cleanup
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
      document.removeEventListener(`click`, handleClick);
      document.removeEventListener(`dragstart`, dragstart);
    };
  }, []);

  // with abort controller
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    function handleScroll() {
      console.log(`scroll...`);
    }

    function handleClick() {
      console.log("click...");
    }

    function dragstart() {
      console.log("dragstart...");
    }

    document.addEventListener(`scroll`, () => handleScroll, {
      signal,
    });
    document.addEventListener(`click`, () => handleClick, {
      signal,
    });
    document.addEventListener(`dragstart`, () => dragstart, {
      signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return <>AbortController</>;
}

export default Component;
