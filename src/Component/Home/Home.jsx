import "../../css/style.css";
import React, { useEffect, useState } from "react";
import Preloader from "../../Pages/Preloader";
import Nav from "../../Pages/Nav";
import Intro from "../../Pages/Intro";
import Footer from "../../Pages/Footer";
import { motion } from "framer-motion";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay, replace this with your actual data loading logic
    const fakeDataLoading = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust the time as needed
    };

    fakeDataLoading();
  }, []);

  return (
    <Preloader>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="container">
            <Nav />
            
            <Intro />
          </div>
          <Footer />
        </div>
      </motion.div>
    </Preloader>
  );
}

export default Home;
