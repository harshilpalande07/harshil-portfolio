import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";

import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="h-full"
          initial={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.97,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      {/* Analytics */}
      <Analytics />
    </Layout>
  );
}

export default MyApp;