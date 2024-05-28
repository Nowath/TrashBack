import React, { useEffect } from "react";
import logo from "../assets/Trash_Back.svg";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="">
            <motion.div
                className="logo flex justify-center"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                }}
            >
                <img className="w-3/4" src={logo} alt="" />
            </motion.div>
        </div>
    );
}

export default Home;
