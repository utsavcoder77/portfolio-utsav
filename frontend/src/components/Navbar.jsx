import logo from "../assets/images/transparent_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 h-40">
      <motion.div
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className="flex flex-shrink-0 items-center"
      >
        <img
          className="max-h-40 md:max-w-64 mix-blend-screen "
          src={logo}
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
        }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a href="https://www.linkedin.com/in/utsav-baral/" target="blank">
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
      </motion.div>
    </nav>
  );
}

export default Navbar;
