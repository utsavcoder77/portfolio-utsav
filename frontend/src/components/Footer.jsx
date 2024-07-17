import logo from "../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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

    )
}

export default Footer