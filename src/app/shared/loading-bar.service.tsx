import { useState } from "react";
import { loadingBarStatusVar } from "../../apollo-client/variables";

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Start the loading bar indicator
 */
function beginBar() {
  const i = randomInteger(20, 30);
  loadingBarStatusVar(i);
}

/**
 * Continue the loading bar indicator until it reaches 90%
 */
function continueBar() {
  const i = randomInteger(2, 10);
  loadingBarStatusVar(loadingBarStatusVar() + i);
}

/**
 * Set the loading bar indicator to zero
 */
function resetBar() {
  loadingBarStatusVar(0);
}

/**
 * Stop the loading bar indicator
 */
function endBar() {
  loadingBarStatusVar(100);
}

/**
 * Loading Bar Hook
 * @example
 * const [startLoading, stopLoading, resetBar] = useLoadingBar();
 * useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
    return () => {
      resetBar();
    };
  }, [loading]);
 */
export default function useLoadingBar(): [
  typeof startLoading,
  typeof stopLoading
] {
  const [loader, setLoader] = useState<ReturnType<typeof setInterval>>();

  function startLoading() {
    function load() {
      if (!loadingBarStatusVar()) beginBar();
      setLoader(
        setInterval(() => {
          if (loadingBarStatusVar() + 10 <= 90) {
            continueBar();
          }
        }, 700)
      );
    }
    load();
    // setTimeFn(setTimeout(load, 100));
  }

  function stopLoading() {
    if (typeof loader !== "undefined") clearInterval(loader);
    // if (typeof timeFn !== "undefined") clearTimeout(timeFn);
    if (loadingBarStatusVar()) endBar();
  }

  return [startLoading, stopLoading];
}
