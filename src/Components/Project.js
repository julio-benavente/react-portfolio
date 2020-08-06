import React, { Component } from 'react';
import './Project.scss';
import {motion, AnimatePresence} from 'framer-motion';
import EmailSection from './EmailSection';

const variant = {
    init : {opacity : 0},
    in : {opacity : 1,
        transition : {
        delay : 0.400,
        }
    },
    out : {opacity : 0,
        transition : {
        delay : 0.400,
        }
    }
}


export class Project extends Component {

    state = {
        displayEmail : false,
    }

    handleEmail =() => {
        console.log(this.state.displayEmail)
        this.setState({displayEmail: !this.state.displayEmail})
    }

    render() {

        return (
            <div className="projectSection" exit={{opacity: 0}}>

            <AnimatePresence >
            {this.state.displayEmail && 
                <EmailSection handleEmail={this.handleEmail}/>
            }
            </AnimatePresence>
                <motion.div 
                    variants={variant}
                    initial="init"
                    animate="in"
                    exit="out"
                    className="projectInformation">
                    <h1 className = "projectTitle">Projects</h1>

                    <div className="projectEx">
                        <div className="projectExWraper">
                            <h3 className="projectName">Project Title</h3>
                            <p className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate quia laudantium dolore aperiam consequatur.</p>
                            <a className="github" href="#"><span className="fab fa-github"></span></a>
                            <a className="globe" href="#"><span className="fas fa-globe"></span></a>
                        </div>
                    </div>
                    <div className="projectEx">
                        <div className="projectExWraper">
                            <h3 className="projectName">Project Title</h3>
                            <p className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate quia laudantium dolore aperiam consequatur.</p>
                            <a className="github" target="_blank" href="#"><span className="fab fa-github"></span></a>
                            <a className="globe" target="_blank" href="#"><span className="fas fa-globe"></span></a>
                        </div>
                    </div>
                    <div className="projectEx">
                        <div className="projectExWraper">
                            <h3 className="projectName">Project Title</h3>
                            <p className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate quia laudantium dolore aperiam consequatur.</p>
                            <a className="github" href="#"><span className="fab fa-github"></span></a>
                            <a className="globe" href="#"><span className="fas fa-globe"></span></a>
                        </div>
                    </div>
                    <div className="projectEx">
                        <div className="projectExWraper">
                            <h3 className="projectName">Project Title</h3>
                            <p className="projectDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate quia laudantium dolore aperiam consequatur.</p>
                            <a className="github" href="#"><span className="fab fa-github"></span></a>
                            <a className="globe" href="#"><span className="fas fa-globe"></span></a>
                        </div>
                    </div>

                </motion.div>

                <motion.div 
                    variants={variant}
                    initial="init"
                    animate="in"
                    exit="out"
                    className="sideBar">
                    <span className="fas fa-envelope envelope" onClick={this.handleEmail}></span>
                    <p className="cellphone">(+51) 934 - 898 - 005</p>
                    <span className="fas fa-plus plus"></span>
                </motion.div>

            </div>
        )
    }
}

export default Project
