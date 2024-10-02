import Link from "next/link";
import React from "react";
// import Header from "./components/header";
import Image from "next/image";

import Footer from "./components/footer";

export default function Home() {
   return (

    <header className="header">
    <nav> 
      <a href=""><img src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" alt="" className="logo"/></a>
      <div className="nav-link">
        <ul><li><Link href="/">HOME</Link></li>
        <li><Link href="/">ABOUT</Link></li>
          <li><Link href="/">PROTOFILO</Link></li>
           <a className="bton" href="/">CONTACT ME</a>
        </ul>
        </div>
    </nav>
    <div className="text-box">
      <h1>HELLO EVERYONE </h1>
        
         <p>Hello! My name is Sidra Talib, and I am an undergraduate Software <br />
          Engineer. I am passionate about building web applications and have<br />
          experience working with technologies like HTML, CSS, Java, and<br />
          TypeScript. My journey in software development has helped<br /> me sharpen
          my problem-solving skills and has driven my love for<br /> creating
          efficient and user-friendly solutions. I am excited to<br /> continue
          learning and growing in this field as I work towards<br /> becoming a
          full-stack </p>
      <a href=""><img src="http://pluspng.com/img-png/hijab-png-beautiful-hijab-girl-240.png"
         alt="" className="imagee"/></a>
      <a className="btn" href="/">VISIT</a>
    </div>

    <Footer />
 
  </header>
   )
  }