import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function AboutPage() {
  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h2>About Me</h2>
        <span>
          I studied Economics at Bath Uni and am now working as a portfolio
          trader at Morgan Stanley. Beyond that, I try to read into a broad
          range of topics which I'll bore you with below.
        </span>
        <h2>Areas of Interest</h2>

        <h4>Economics & Finance</h4>
        <span>
          In Finance my interests lie in factor investing and algorithmic
          trading. In Economics my interests tend to lie on either end of the
          theoretical/practical spectrum, not in the middle. Specifically, I am
          interested in Game Theory and Behavioural Economics. Game theory is
          another lens through which I look at the topic of decision making. Put
          the study of optimal strategy conditional on the situation (game) and
          opposition (players). It can get rather mathematical very quickly but
          at its core game theory simply tries to answer the question "What is
          the best decision to make?". Behavioral economics on the other hand is
          all about how people make decisions in reality, and why they are
          different from what a theoretically rational person would do.
        </span>

        <h4>Computer Science</h4>
        <span>
          By computer science I mean the more traditional avenues of the subject
          such as programming, object orientation and algorithms. A resource
          that I've enjoyed using is the website teachyourselfcs.com. It covers
          all the foundational aspects of computer science and has been put
          together by reputable professors.
        </span>
        <h4>Philosophy</h4>
        <span>
          Most of philosophy I am not that interested in and have not read
          about. However, I have enjoyed reading books by or about the
          traditional Stoic philosophers, such as Marcus Aurelius, Seneca and
          Epictetus. Not only do I admire their methodical approach to a good
          life, but I think they were onto something and so try to take a Stoic
          approach to my own life.
        </span>
        <h4>Psychology</h4>
        <span>
          FThe areas of psychology that interest me the most are twofold:
          Firstly, behavioural biases and their impact on decision making.
          Anything on fs.blog is great for this. Secondly, I am fascinated by
          how our actions and habits have an effect on our minds, for example
          resilience being something that can be trained by enduring hardship.
        </span>

        <h4>Chess</h4>
        <span>
          Chess is a game of strategy. It is inherently deterministic given the
          logical limitations of each piece. That being said, human beings don't
          have mental computing power to make the game boring, which makes chess
          a great game to play either for fun, or to improve your ability to
          think and plan ahead. If you've never played much, I'd encourage you
          to try it. I like to use lichess.org.
        </span>

        <h4>Poker</h4>
        <span>
          Poker is a game of decision making under uncertainty in which you can
          acquire additional information from your opponents if you are
          observant enough. Besides being great fun, I've found it really useful
          in training yourself to think in terms of processes instead of
          outcomes, and judging your performance based on the quality of your
          decisions and not of their results.
        </span>

        <h2>Projects</h2>
        <span>
          Since starting work my little projects have taken a backseat, but I'll
          put them here anyway so it appears that I'm continuing to work on
          them.
        </span>
        <h4>Lectio</h4>
        <span>
          This is a website I am working on with a friend of mine (check out{" "}
          <a className="link" target="_blank" href="https://neilhacker.blog/">
            his blog
          </a>
          ). The goal is to make a <b>good</b> online reading tracker and review
          tool. Sites like goodreads are ancient in their architecture and must
          be improved upon. That's the goal here.
        </span>
        <h4>Nanovert</h4>
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
          on social media. I'm not involved anymore, but built the first
          iteration of the application that registered users with companies.
        </span>
        <h4>This website</h4>
        <span>
          My main pet project at the moment is this website. Adding to it and
          improving it is something I like to do in the time I have after work.
        </span>
        {/* <h2>Contact</h2>
        <span>
          Get in touch with me if you want to talk about anything you've found
          on my website, or if you think you have found something I might find
          interesting. The easiest way to get in touch is probably via email
          (barnabynapier@gmail.com)
        </span> */}
      </div>
    </div>
  );
}
