import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollCard = ({ children }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [0.88, 1, 1.02, 1, 0.88]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0.4, 1, 1, 1, 0.4]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [30, 0, -30]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
                y,
            }}
            className="w-full max-w-full"
        >
            {children}
        </motion.div>
    );
};

export default ScrollCard;