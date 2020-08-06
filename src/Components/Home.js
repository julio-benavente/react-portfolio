import React, { Component } from 'react'
import './Home.scss'
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


export class Home extends Component {
    
    state = {
        displayEmail : false,
    }

    handleEmail = () => {
        console.log(this.state.displayEmail)
        this.setState({displayEmail: !this.state.displayEmail})
    }

    render() {

        return (
            <div key={this.props.key} className ="homeSection" initial={{opacity : 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <AnimatePresence >
                {this.state.displayEmail && 
                    <EmailSection handleEmail={this.handleEmail}/>
                }
                </AnimatePresence>
                <motion.p 
                    variants={variant}
                    initial="init"
                    animate="in"
                    exit="out"
                    className="firstText">
                Send me an email <span className="fas fa-envelope envelope" onClick={this.handleEmail}></span></motion.p>
                
                <motion.p 
                    variants={variant}
                    initial="init"
                    animate="in"
                    exit="out"
                    className="cellphone">
                (+51) 934 - 898 - 005</motion.p>
                
                <motion.p 
                    variants={variant}
                    initial="init"
                    animate="in"
                    exit="out"
                    className="secondText">
                Here my Resume <span className="fas fa-plus plus" ></span></motion.p>
            </div>
        )
    }
}

export default Home
