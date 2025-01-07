import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={"https://www.youtube.com"} target="blank">
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"https://github.com/adeelmaheen"} target="blank">
          <BsGithub className="text-2xl hover:text-gray-500 duration-200 cursor-pointer" />
        </Link>
        <Link href={"https://www.youtube.com"} target="blank">
          <BsFacebook className="text-2xl hover:text-blue-300 duration-200 cursor-pointer" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/maheen-arif-a929412b6/"}
          target="blank"
        >
          <BsLinkedin className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        © All rights reserved&nbsp;&apos;Bloggers&apos;
      </p>
    </Container>
  );
};

export default Footer;
