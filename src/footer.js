import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiTistory } from "react-icons/si";

function Footer() {
  return (
    <div id="footer">
      <p>ⓒ 2023 SONSEHEE All Rights Reserved</p>
      <div className="links">
        <a
          href="https://github.com/qwas1121"
          target="_balnk"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://sehee21.tistory.com/"
          target="_balnk"
          rel="noopener noreferrer"
        >
          <SiTistory />
        </a>
        <a
          href="https://www.instagram.com/hand3_hee/"
          target="_balnk"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
}

export default Footer;
