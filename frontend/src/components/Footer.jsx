import logo from "../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


function Footer() {
    return (
        <div className="border-b border-gray-600 pb-4  w-full max-w-screen-xl my-20 flex flex-col gap-24 text-2xl">
            <motion.div
                initial={{ y: 500 }}
                animate={{ y: 0 }}
                transition={
                    {
                        duration: 5,
                        delay: 5
                    }
                }


                className="flex flex-col gap-20 justify-between md:flex-row">
                <figure className="self-center">
                    <img src={logo} alt="logo" className="w-[150px] mix-blend-screen" />
                </figure>

                <ul className="flex gap-14 self-center">
                    <li>
                        <a href="tel:0450609562"><i className="fa-solid fa-phone"></i></a>
                    </li>
                    <li>
                        <a href="mailto:baralutsav89@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </li>

                </ul>
                <div className="flex items-center gap-10 self-center">
                    <a href="https://www.linkedin.com/in/utsav-baral/">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/utsavcoder77">
                        <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008693744003">
                        <FaFacebook />
                    </a>
                    <a href="https://x.com/Baral_U47">
                        <FaTwitter />
                    </a>

                </div>
            </motion.div>
        </div>

    )
}

export default Footer;