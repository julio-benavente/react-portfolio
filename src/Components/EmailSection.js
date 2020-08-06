import React from 'react'
import {motion} from 'framer-motion';
import './EmailSection.scss'


const variant = {
    init : {x:'100%'},
    in : {x:0,
        transition : {
            delay : 0.300,
            type : 'tween'
        }
    },
    out : {x:'100%',
        transition : {
            delay : 0.300,
            type : 'tween'
        }
    },
}

export const EmailSection = ({handleEmail}) => {
    return (
        <motion.div
            className="sendEmailSection"
            variants={variant}
            initial="init"
            animate="in"
            exit="out"
        >
                
            <form action="">
                <div className="formTitle">
                    <h2>Send me an email</h2>
                    <span className="fas fa-times close" onClick={handleEmail}></span>
                </div>
                <input type="text"name="name" placeholder="Enter your name"/>
                <input type="text"name="subject" placeholder="Enter the email subject"/>
                <input type="text"name="email" placeholder="Enter your email"/>
                <textarea placeholder="Your message" name="message" id="" cols="30" rows="10"></textarea>
                <button>SEND IT!</button>
            </form>
        </motion.div>
    )
}
export default EmailSection
