import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function AboutPage() {
  // pass

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h2>About</h2>
        <h3>About</h3>
        <h4>About</h4>
        <p>
          I am an Economics graduate that has an interest in both finance and
          computer science. I work as a European Portfolio trader at Morgan
          Stanley in Canary Wharf and read like my life depends on it.
        </p>
        <h3>Areas</h3>
        <ul>
          <li>Student</li>
          <li>Trader</li>
          <li>Programmer</li>
        </ul>
        <h3>Contact</h3>
        <p>
          Get in touch with me if you want to talk about anything you've found
          on my website, or if you think you have found something I might find
          interesting
        </p>
        <ul>
          <li>Email: barnabynapier@gmail.com</li>
          <li>Github: BarnabyN</li>
        </ul>
      </div>
    </div>
  );
}
