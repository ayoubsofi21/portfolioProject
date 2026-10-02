import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Custom cursor: a small dot + a trailing ring, desktop only.
// Disabled entirely on touch devices so mobile stays fully usable.
function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 300, damping: 30, mass: 0.5 });

  const enabledRef = useRef(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldEnable = isFinePointer && !prefersReducedMotion;

    setEnabled(shouldEnable);
    enabledRef.current = shouldEnable;

    if (!shouldEnable) return;

    document.documentElement.classList.add("has-custom-cursor");

    const handleMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleOver = (e) => {
      const interactive = e.target.closest(
        "a, button, [data-cursor-hover], input, textarea"
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent/60 pointer-events-none z-[998] transition-[width,height] duration-200 ease-out"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 52 : 32,
          height: isHovering ? 52 : 32,
        }}
      />
    </>
  );
}

export default CustomCursor;
