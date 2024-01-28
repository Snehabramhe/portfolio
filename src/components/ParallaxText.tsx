// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, liveTickerData } from "../assets/lib/data";

interface ParallaxProps {
  children: unknown;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true);
      } else {
        setIsMobileMenuActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className=" overflow-hidden whitespace-nowrap flex flex-nowrap m-0">
      <motion.div
        className="font-semibold text-9xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {isMobileMenuActive ? (
          <>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
          </>
        ) : (
          <>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function LiveTicker() {
  return (
    <>
      <div className="bg-[--lightblue] h-[4.8vh] -rotate-3 flex justify-center items-center scale-110 relative z-[1] w-full min-[1921px]:h-[3.3vh]">
        <ParallaxText baseVelocity={-2}>
          <Link
            to={sideBarLeftSocials[1].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-[--orange]">&lt;</span>
            {liveTickerData.content}
            <span className="text-[--orange]">/&gt;</span>
          </Link>
        </ParallaxText>
      </div>
    </>
  );
}