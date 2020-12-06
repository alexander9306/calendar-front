import { useEffect, useState } from "react";

interface Dimensions {
  width: number;
  height: number;
}
/**
 * Retunrs current screen dimensions.
 * @example
 * const { height, width } = useWindowDimensions();
 */

export default function useWindowDimensions(): Dimensions {
  const getWindowDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
