import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [position, setPosition] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });
    return window.removeEventListener("scroll", () => {
      setPosition(window.scrollY);
    });
  }, [position]);

  return position;
}
