import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function AboutPage() {
  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h2>About Me</h2>
        <span>
          Pleased to meet you, I'm Barney. I studied Economics at Bath Uni and
          am now working as a trader in the European Portfolio Trading team at
          Morgan Stanley. Beyond that, I tend to read into a broad range of
          topics that you can find below.
        </span>
        <h3>Areas of Interest</h3>
        <h4>Economics</h4>
        <span>
          Despite having done a degree in the subject, I am still interested in
          certain areas of Economics. My interests tend to lie on the
          theoretical side (in my opinion there isn't much to the practical
          side). Specifically, I am interested in Game Theory and Behavioural
          Economics.
        </span>
        <h4>Finance</h4>
        <span>Factor investing and algorithmic trading</span>
        <h4>Computer Science</h4>
        <span>Logic, combinatorics, algorithms and complexity</span>
        <h4>Philosophy</h4>
        <span>
          Stoicism and Buddhism (which began as a philosophy, not a religion).
        </span>
        <h4>Psychology</h4>
        <span>
          For most of my adult years I have struggled with pretty nasty anxiety.
          It just feels like I can't switch my brain off from always thinking
          "what if". It sucks, but thats life. As a biproduct of my interest in
          my own mental health I have become very interested in the psychology
          of stress, performance and happiness. More specifically, I am
          interested in the scientific research behind mental practises that
          have physical impacts on an individual (Think: meditation, yoga, self
          talk, resilience, motivation, discipline).
        </span>

        <h2>Projects</h2>
        <span>
          I've been working on a few projects recently (mainly related to
          programming). They're summarised below for those who are interested.
        </span>
        <h3>Lectio</h3>
        <span>
          This is a website I am working on with a friend of mine (check out{" "}
          <a className="link" target="_blank" href="https://neilhacker.blog/">
            his blog
          </a>
          ). The goal is to make a <b>good</b> online reading tracker and review
          tool. Sites like goodreads are ancient in their architecture and must
          be improved upon. That's the goal here.
        </span>
        <h3>Nanovert</h3>
        <span>
          Myself and some friends created a company called{" "}
          <a
            href="https://nano-vert.co.uk/promotions"
            target="_blank"
            className="link"
          >
            nanovert
          </a>
          , it is a company that allows 'nano-influencers' to get discount on
          things they buy by putting up a story or picture of what they bought
          on social media.
        </span>
        <h3>This website</h3>
        <span>
          Youre currently enjoying (or suffering) the fruits of my labour on my
          pet project that is this website
        </span>
        <h2>Contact</h2>
        <span>
          Get in touch with me if you want to talk about anything you've found
          on my website, or if you think you have found something I might find
          interesting. The easiest way to get in touch is probably via email
          (barnabynapier@gmail.com)
        </span>
      </div>
    </div>
  );
}
