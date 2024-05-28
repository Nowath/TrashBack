import React, { useState, useEffect } from "react";
import Logo from "../../assets/Trash_Back.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import morse from "morse";
import { supabase } from "../../createClient.js";

function Main() {
    const [phone, setPhone] = useState("");
    const [point, setPoint] = useState(0);
    const [error, setError] = useState("Please enter your number.");

    async function handleSubmit() {
        if (phone == "") {
            setError("Please enter your number.");
        } else if (phone.length >= 10) {
            try {
                setError("");
                let phoneMorseCode = morse.encode(phone);
                const { data, error } = await supabase
                    .from("database")
                    .select("point")
                    .eq("phone", phoneMorseCode);
                setPoint(data[0].point);
            } catch (error) {
                setError("Not have this account");
                setPoint(0);
            }
        } else {
            setError("Phone number must be at least 10 digits.");
        }
    }

    return (
        <div className="lg:hidden sm:flex flex-col justify-center items-center relative z-20">
            <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                }}
                className="logo flex justify-center items-center"
            >
                <img className=" w-60" src={Logo} alt="" />
            </motion.div>
            <div className="flex flex-col gap-4 items-center">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                    className="text-2xl text-[#5e8d42]"
                >
                    Phone Number
                </motion.h1>
                <motion.input
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    type="number"
                    className=" w-72 p-2 rounded-xl focus:outline-[#99BC85]"
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    autoFocus
                />
                <p className="text-red-600">{error}</p>
            </div>
            <footer className="flex flex-col justify-cetner items-center gap-16 mt-14">
                <button
                    onClick={handleSubmit}
                    className="text-white w-60 p-2 rounded-xl h-10 bg-[#99BC85]"
                >
                    Submit
                </button>
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-xl">Your point is:</h1>
                    <p className=" text-4xl">{point}</p>
                </div>
            </footer>
        </div>
    );
}

export default Main;
