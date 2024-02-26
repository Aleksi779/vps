import styles from "./styles.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5.64]);

  const pictures = [
    {
      scale: scale4,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.wrapper}>
                <p>zoom</p>
                <p>effect</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
