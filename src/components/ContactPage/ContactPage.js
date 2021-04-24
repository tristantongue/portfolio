import React, {useState, useRef, useEffect} from 'react';
import './ContactPage.css';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';

function ContactPage(props) {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [message, setMessage] = useState('');
    let contactchunk = useRef(null)

    useEffect(() => {
        gsap.fromTo(contactchunk,
            {
                opacity: 0,
                x: '-150%',
            }, {
                opacity: 1,
                x: '0%',
                duration: 1,
                delay: .5,
                scrollTrigger: {
                trigger : contactchunk,
                start: "top 75%",
                end: "middle 75%",
                scrub: 1,
            }
            })
    }, [])

    function onNameChange(ev) {
        let value = ev.target.value;
        setUsername(value);
      }

    function onEmailChange(ev) {
        let value = ev.target.value;
        setUseremail(value);
      }

    function onMessageChange(ev) {
        let value = ev.target.value;
        setMessage(value);
      }

    function sendEmail(e) {
        if (!useremail.includes('@'))
            {
            e.preventDefault();
            }
        else {
            e.preventDefault();
            emailjs.sendForm(props.serviceid, props.templateid, e.target, props.userid)
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
            setUsername('');
            setUseremail('');
            setMessage('');
        }
      }

    return (
        <div id="contactContainer">
            <div ref={el => {contactchunk=el}} className="contactHeader">
                <h2>CONTACT</h2>
                <form id="contactForm" onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="NAME"
                        value={username}
                        onChange={onNameChange}>
                    </input>
                    <input 
                    type="text" 
                    name="user_email" 
                    placeholder="EMAIL"
                    value={useremail}
                    onChange={onEmailChange}></input>
                    <textarea 
                    name="message" 
                    placeholder="MESSAGE"
                    value={message}
                    onChange={onMessageChange}/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default ContactPage