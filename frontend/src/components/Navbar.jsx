import logo from "../assets/images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Navbar() {

    return (

        <nav className='mb-20 w-full flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className="w-32 mix-blend-screen" src={logo} alt="logo" />
            </div>
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

        </nav>
    )
}

export default Navbar;
