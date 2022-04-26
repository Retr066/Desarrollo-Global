import { useCallback, useEffect, useRef } from "react";

export const useAnimationFrame = (enabled, callback) => {
  const requestRef = useRef(null);
  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [enabled, animate]);
};
