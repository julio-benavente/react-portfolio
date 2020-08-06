import React, { Component } from 'react'
import './Contact.scss';
import {AnimatePresence} from 'framer-motion';
import EmailSection from './EmailSection';
import {motion} from 'framer-motion';

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

const contactItemEntries = [
    {
        characteristic : "Email",
        value : "julio.benavente.02@gmail.com",
    },
    {
        characteristic : "Github",
        value : "https://github.com/",
    },
    {
        characteristic : "Linked",
        value : "https://www.linkedin.com/feed/",
    },
    {
        characteristic : "Whatsapp",
        value : "(+51) 934 - 898 - 005",
    },
]

const ContactItem = ({characteristic, value}) => {
    return (
        <li className="contactItem">
            <div className="itemWraper">
                <h3 className="characteristic">{characteristic}</h3>
                <p className="value">{value}</p>
                <span className="fas fa-copy copy"></span>
            </div>
        </li>

    )
}




export class Contact extends Component {

    state = {
        displayEmail : false,
    }

    handleEmail =() => {
        console.log(this.state.displayEmail)
        this.setState({displayEmail: !this.state.displayEmail})
    }

    render() {
        return (
            <div className="contactSection" exit={{opacity:0}}>

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
                    className="contactInformation">
                    <h1 className="contactTitle">Contact Me</h1>
                    <ul className="contactList">
                        {contactItemEntries.map(({characteristic, value }, key)=> {
                            return <ContactItem key={key} characteristic={characteristic} value={value}/>
                        })}
                    </ul>
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

export default Contact
