import React, { Component } from "react";
import "./About.scss";
import { motion, AnimatePresence } from "framer-motion";
import EmailSection from "./EmailSection";

const variant = {
  init: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
  out: {
    opacity: 0,
    transition: {
      delay: 0.4,
    },
  },
};

export class About extends Component {
  state = {
    displayEmail: false,
  };

  handleEmail = () => {
    console.log(this.state.displayEmail);
    this.setState({ displayEmail: !this.state.displayEmail });
  };

  render() {
    return (
      <div className="aboutSection">
        <AnimatePresence>
          {this.state.displayEmail && (
            <EmailSection handleEmail={this.handleEmail} />
          )}
        </AnimatePresence>

        <motion.div
          variants={variant}
          initial="init"
          animate="in"
          exit="out"
          className="aboutInformation"
        >
          <h1 className="nameTitle">Julio C. Benavente</h1>
          <div className="aboutMe">
            <p>
              My name is Julio and I'm a front-end web developer. I'm a
              committed person with my job, especially when I have to face a
              challenge, this is because I consider challenges as a source of
              professional and personal development. I consider myself a
              'forever student'.
            </p>
            <p>
              Naturally, I have a positive and collaborative attitude. I like to
              make friends and show them they can trust and count on me. If you
              have a project you need help with, for sure I would like to
              collaborate with you and your team.
            </p>
          </div>
          <h3 className="skillTitle">Skills</h3>
          <ul className="skillList">
            <li className="skillItem">HTML</li>
            <li className="skillItem">CSS</li>
            <li className="skillItem">JAVASCRIPT</li>
            <li className="skillItem">REACT JS</li>
            <li className="skillItem">GIT</li>
            <li className="skillItem">SASS</li>
          </ul>

          <h3 className="skillTitle">Other Skills (Data analysis)</h3>
          <ul className="skillList">
            <li className="skillItem">Python</li>
            <li className="skillItem">Excel</li>
          </ul>
        </motion.div>
        <motion.div
          variants={variant}
          initial="init"
          animate="in"
          exit="out"
          className="sideBar"
        >
          <span
            className="fas fa-envelope envelope"
            onClick={this.handleEmail}
          ></span>
          <p className="cellphone">(+51) 934 - 898 - 005</p>
          <span className="fas fa-plus plus"></span>
        </motion.div>
      </div>
    );
  }
}

export default About;
