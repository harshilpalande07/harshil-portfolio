import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import Footer from "../components/Footer";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen`}
    >
      {/* metadata */}
      <Head>
        <title>Harshil Palande | Portfolio</title>

        <meta
          name="description"
          content="Harshil Palande is a passionate AI Developer and modern Web Developer focused on creating intelligent systems, cybersecurity solutions, and futuristic digital experiences through innovation and technology."
        />

        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, AI, cybersecurity, portfolio, framer-motion, futuristic-ui"
        />

        <meta name="author" content="Harshil Palande" />

        {/* browser tab color */}
        <meta name="theme-color" content="#00e5ff" />

        {/* favicon */}
        <link rel="icon" type="image/png" href="/harshu.png" />

        {/* apple devices */}
        <link rel="apple-touch-icon" href="/harshu.png" />
      </Head>

      {/* top image */}
      <TopLeftImg />

      {/* navigation */}
      <Nav />

      {/* header */}
      <Header />

      {/* main content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default Layout;